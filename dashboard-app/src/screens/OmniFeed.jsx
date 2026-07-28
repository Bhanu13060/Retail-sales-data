import React, { useEffect } from 'react';

const OmniFeed = () => {
  useEffect(() => {
    if (!document.getElementById('tailwind-cdn')) {
      const script = document.createElement('script');
      script.id = 'tailwind-cdn';
      script.src = 'https://cdn.tailwindcss.com?plugins=forms,container-queries';
      document.head.appendChild(script);
      
      const config = document.createElement('script');
      config.innerHTML = `
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                "surface-container-high": "#dce9ff",
                "on-secondary": "#ffffff",
                "tertiary": "#904900",
                "outline": "#767586",
                "surface-container": "#e5eeff",
                "primary-container": "#6063ee",
                "surface-tint": "#494bd6",
                "surface": "#f8f9ff",
                "background": "#f8f9ff",
                "secondary-fixed": "#c9e6ff",
                "tertiary-fixed": "#ffdcc5",
                "on-tertiary-fixed-variant": "#703700",
                "surface-container-lowest": "#ffffff",
                "on-secondary-fixed": "#001e2f",
                "surface-bright": "#f8f9ff",
                "on-primary-fixed-variant": "#2f2ebe",
                "error": "#ba1a1a",
                "secondary-fixed-dim": "#89ceff",
                "surface-dim": "#cbdbf5",
                "on-tertiary-fixed": "#301400",
                "on-error-container": "#93000a",
                "surface-variant": "#d3e4fe",
                "error-container": "#ffdad6",
                "outline-variant": "#c7c4d7",
                "primary-fixed": "#e1e0ff",
                "surface-container-highest": "#d3e4fe",
                "inverse-on-surface": "#eaf1ff",
                "inverse-surface": "#213145",
                "on-background": "#0b1c30",
                "on-tertiary": "#ffffff",
                "on-secondary-container": "#004666",
                "secondary-container": "#39b8fd",
                "on-primary-fixed": "#07006c",
                "on-tertiary-container": "#fffbff",
                "on-surface": "#0b1c30",
                "on-error": "#ffffff",
                "tertiary-fixed-dim": "#ffb783",
                "secondary": "#006591",
                "on-primary": "#ffffff",
                "on-primary-container": "#fffbff",
                "tertiary-container": "#b55d00",
                "on-secondary-fixed-variant": "#004c6e",
                "on-surface-variant": "#464554",
                "inverse-primary": "#c0c1ff",
                "primary-fixed-dim": "#c0c1ff",
                "primary": "#4648d4",
                "surface-container-low": "#eff4ff"
              },
              "fontFamily": {
                "display-lg": ["Geist"],
                "body-lg": ["Inter"],
                "body-sm": ["Inter"],
                "body-md": ["Inter"],
                "headline-md": ["Geist"],
                "label-md": ["Geist"],
                "label-sm": ["Geist"],
                "headline-lg-mobile": ["Geist"],
                "headline-lg": ["Geist"]
              }
            }
          }
        }
      `;
      document.head.appendChild(config);

      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Geist:wght@400;500;600;700;800&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen pb-32">
      <header className="fixed top-0 w-full z-50 bg-surface flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 w-full">
<div className="flex items-center gap-sm">
<div className="flex items-center justify-center p-2 rounded-xl bg-primary-container text-on-primary-container transition-transform active:scale-95">
<span className="material-symbols-outlined">hub</span>
</div>
<h1 className="font-display-lg text-display-lg font-bold text-primary">Omni</h1>
</div>
<div className="flex items-center gap-sm">
<button className="p-2 rounded-full hover:bg-surface-container-low transition-colors active:scale-95">
<span className="material-symbols-outlined text-primary">search</span>
</button>
</div>
</header>
<main className="pt-20 pb-24 max-w-2xl mx-auto px-margin-mobile">
{/*  Quick Share Bar  */}
<section className="mb-lg">
<div className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant shadow-sm flex items-center gap-md">
<div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="A clean, minimalist portrait of a modern professional with a warm smile, set against a soft blurred studio background with Electric Purple lighting accents. The lighting is high-key and professional, following a tech-forward and minimal aesthetic that feels approachable and innovative. The image quality is crisp with a shallow depth of field, emphasizing high utility and clarity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7CztXMTx8-Lm-El310AyD04zfWDMuccGmRbhtGFmCw9oV0Sr1V96967Q4bS61nn7Mn7OjuhhEJlT65Ln90C7iV6nl4xsyy20dvlTDDTQAQDBh1xunm4gmuOJN_StBTV5CFg_VPExLY8Jh4jYzKItxEBu8EyJNBnG0CqbNfGyUgv4uVRwzG70nZWLuHY3ZdHjdijCmU_e3y89zKFgpKGn2ripsICewBkqMHlN9rgWzlTAFr5q9L82_8Q" />
</div>
<div className="flex-grow">
<a href="{{DATA:SCREEN:SCREEN_12}}" className="w-full text-left px-md py-sm bg-surface-container-low rounded-full text-on-surface-variant font-label-md hover:bg-surface-container-high transition-colors block">What are you sharing today?</a>
</div>
<div className="flex gap-sm">
<button className="p-2 text-primary hover:bg-primary-container/10 rounded-full transition-colors active:scale-90">
<span className="material-symbols-outlined">image</span>
</button>
<button className="p-2 text-primary hover:bg-primary-container/10 rounded-full transition-colors active:scale-90">
<span className="material-symbols-outlined">attach_file</span>
</button>
</div>
</div>
</section>
{/*  Feed List  */}
<div className="space-y-lg">
{/*  Card 1: Image Shared  */}
<article className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant shadow-sm transition-all hover:shadow-md">
<div className="p-md flex items-center justify-between">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="A close-up headshot of a creative designer with glasses, looking thoughtfully at a screen off-camera. The lighting is atmospheric, using soft lavender and electric purple tones reflected from a nearby display. The aesthetic is modern and sleek, fitting a tech-focused UI environment with generous whitespace and a sense of sophisticated reliability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOSjByr5BasMa1g90IAyBlnTbRpkK1iSTODLXzodlb88nYGQTwN2WbDEJbnNmrBgJmE12ZMdodgcTpQwWts1EF5Z3JhzTlAk-Zc5uvb_qdyxnB2M1_6_MYkkjvAqZJQ-PRLNAPUGZybfpmEXjxsX5dtIcaMfLDDK1nkfn9mMf2wkOmVaLcr450A59qSF4Qwm2t5sZ6zx1t_Py1Adat0AL3iXDmvPXcug4ItJZ1ddBsHL1se6u0uNHNcA" />
</div>
<div>
<p className="font-label-md text-on-surface">Alex Chen</p>
<p className="font-label-sm text-on-surface-variant">2h ago • Shared to Design Team</p>
</div>
</div>
<button className="p-2 text-outline hover:bg-surface-container rounded-full transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
<div className="px-md pb-sm">
<p className="text-body-md text-on-surface leading-relaxed">
                        Just finished the initial wireframes for the new project. Loving how the Electric Purple palette is coming together!
                    </p>
</div>
<div className="aspect-video w-full bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="A professional 3D render of a minimalist workspace featuring a sleek laptop, a tablet showing a colorful UI design, and a modern desk lamp. The lighting is crisp and soft, with Electric Purple neon accents illuminating the clean, white desk surface. The composition is airy and modern, conveying a sense of organized creativity and high-end technological innovation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ2O4zy1X7gzt5882-RCXK8qtP1RksRmFunPB8WEddJLqwJgx1585rgxuMSne2DPFzEBJmzgupn97OPd3j5aYtvS8FganXWF_n0Z2bZAwuebI-iU_LTDRpHTOjT_mbGXinH-XLufIhZM0eQoMRLsoetsBaxmU6w4ZskRQSGWTcvrcYUbOjU-afs-IG1Pj4I8FmP1VE6h2GB8TudWLbRH7cDY_zdXFsSPsSr7wMVHeVK7rQo73uF-Z92A" />
</div>
<div className="p-sm flex items-center justify-between border-t border-outline-variant/50">
<div className="flex gap-sm">
<button className="flex items-center gap-xs px-md py-sm rounded-full hover:bg-surface-container transition-colors active:scale-95 text-on-surface-variant">
<span className="material-symbols-outlined">favorite</span>
<span className="font-label-sm">24</span>
</button>
<button className="flex items-center gap-xs px-md py-sm rounded-full hover:bg-surface-container transition-colors active:scale-95 text-on-surface-variant">
<span className="material-symbols-outlined">chat_bubble</span>
<span className="font-label-sm">8</span>
</button>
</div>
<button className="flex items-center gap-xs px-md py-sm rounded-full hover:bg-surface-container transition-colors active:scale-95 text-on-surface-variant">
<span className="material-symbols-outlined">bookmark</span>
</button>
</div>
</article>
{/*  Card 2: File Preview Shared  */}
<article className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant shadow-sm transition-all hover:shadow-md">
<div className="flex items-center justify-between mb-md">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="A portrait of an engineer in a minimalist office setting. They are wearing a simple black t-shirt and have a friendly, focused expression. The room is bright with large windows, and a hint of a green plant is visible. The aesthetic is clean and high-utility, with a color palette of soft grays and bright whites, fitting the Omni brand's minimal tech-forward identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuChaGvkZoYtJqpzYG9JSg13eaIzL-7wXkgZaPMD6tDbigJbnCgSldgt6_zrAfsQOWnOmwVXVcDzOb7c_6U0p-DbDLQ0vQGbX1JRj0PaspU1OhhZjB-bgjvHXEjGYFy1_jCiCrJ3v5nH2XO-T7nf8sTDrUg8FpgkNWl8oeuGm4Yhzz4pnqFgFKco2Wg-JrSPfjeesTCm_ul9wii3tuhcn4sdwjkc4tqDuVhDXkcEl5v_up81sDxGnerQdA" />
</div>
<div>
<p className="font-label-md text-on-surface">Jordan Smith</p>
<p className="font-label-sm text-on-surface-variant">5h ago • Shared a PDF</p>
</div>
</div>
<button className="p-2 text-outline hover:bg-surface-container rounded-full transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
<div className="mb-md">
<p className="text-body-md text-on-surface mb-md">Revised Project Roadmap.pdf</p>
<div className="flex items-center gap-md p-md bg-surface-container-low rounded-xl border border-outline-variant/30 group cursor-pointer hover:border-primary/50 transition-colors">
<div className="w-12 h-12 flex items-center justify-center bg-error-container text-error rounded-xl">
<span className="material-symbols-outlined" style={{ fontSize: '32px' }}>picture_as_pdf</span>
</div>
<div className="flex-grow">
<p className="font-label-md text-on-surface">Q3_Strategic_Goals.pdf</p>
<p className="font-label-sm text-on-surface-variant">2.4 MB • 12 Pages</p>
</div>
<button className="p-2 text-primary hover:bg-primary-container/10 rounded-full">
<span className="material-symbols-outlined">download</span>
</button>
</div>
</div>
<div className="flex items-center justify-between pt-sm border-t border-outline-variant/50">
<div className="flex gap-sm">
<button className="flex items-center gap-xs px-md py-sm rounded-full hover:bg-surface-container transition-colors active:scale-95 text-on-surface-variant">
<span className="material-symbols-outlined">favorite</span>
<span className="font-label-sm">12</span>
</button>
<button className="flex items-center gap-xs px-md py-sm rounded-full hover:bg-surface-container transition-colors active:scale-95 text-on-surface-variant">
<span className="material-symbols-outlined">chat_bubble</span>
<span className="font-label-sm">2</span>
</button>
</div>
<button className="flex items-center gap-xs px-md py-sm rounded-full hover:bg-surface-container transition-colors active:scale-95 text-on-surface-variant">
<span className="material-symbols-outlined">bookmark</span>
</button>
</div>
</article>
{/*  Card 3: Text Snippet / Space Update  */}
<article className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant shadow-sm border-l-4 border-l-primary transition-all hover:shadow-md">
<div className="flex items-center gap-sm mb-md">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
<span className="material-symbols-outlined" style={{ fontSize: '18px' }}>group_work</span>
</div>
<p className="font-label-sm text-on-surface-variant uppercase tracking-wider">New Update in 'Spaces'</p>
</div>
<div className="flex items-center gap-sm mb-md">
<div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="A portrait of a smiling woman with curly hair, wearing a white blazer, in a bright contemporary gallery space. The environment is filled with natural light and soft shadows. The overall mood is professional, sophisticated, and light-filled, consistent with the minimal aesthetic and high-clarity goals of the Omni application's design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnHTVQKSKoHxJzkVR8Pz-cDRx6HV9fRpjKK1FmmmzjlqP3yjEodhhuwixzRJG6A6raYJxzhjaRNdzXQjOonstn4jDwvNk3MvUcE8iDzqNHeeUFDFsvX_cpKqDRCaQISc_cPRb2kndx7ENSLLLiOlZ8cJr6SWHuUSAWbjhJGUwsSU_0bvbCZGuE6NDs9zCRlFrRVHluJTqm9_E6hUL3Ej9jtWiV0DJ6LUWceq1_Bx_1x6BLK0qXii7nNQ" />
</div>
<div>
<p className="font-label-md text-on-surface">Sarah Connor</p>
<p className="font-label-sm text-on-surface-variant">Yesterday</p>
</div>
</div>
<div className="mb-md">
<h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Frontend Architecture Sync</h3>
<p className="text-body-md text-on-surface-variant line-clamp-3">
                        Great meeting today everyone. We've decided to move forward with the fluid grid model and 8px spatial rhythm across all new sections. This will significantly improve our responsiveness on mobile viewports while maintaining the tech-forward edge we're aiming for.
                    </p>
<button className="text-primary font-label-md mt-sm hover:underline">Read full update</button>
</div>
<div className="flex items-center justify-between pt-sm border-t border-outline-variant/50">
<div className="flex gap-sm">
<button className="flex items-center gap-xs px-md py-sm rounded-full hover:bg-surface-container transition-colors active:scale-95 text-on-surface-variant">
<span className="material-symbols-outlined">favorite</span>
<span className="font-label-sm">45</span>
</button>
<button className="flex items-center gap-xs px-md py-sm rounded-full hover:bg-surface-container transition-colors active:scale-95 text-on-surface-variant">
<span className="material-symbols-outlined">chat_bubble</span>
<span className="font-label-sm">12</span>
</button>
</div>
<button className="flex items-center gap-xs px-md py-sm rounded-full hover:bg-surface-container transition-colors active:scale-95 text-on-surface-variant">
<span className="material-symbols-outlined">bookmark</span>
</button>
</div>
</article>
</div>
</main>
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-sm py-xs pb-safe bg-surface-container shadow-md rounded-t-xl">
{/*  Feed (Active)  */}
<a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-3 py-1 active:scale-90 transition-transform" href="{{DATA:SCREEN:SCREEN_13}}">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>dynamic_feed</span>
<span className="font-label-sm text-label-sm">Feed</span>
</a>
{/*  Share  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform" href="{{DATA:SCREEN:SCREEN_12}}">
<span className="material-symbols-outlined">add_circle</span>
<span className="font-label-sm text-label-sm">Share</span>
</a>
{/*  Spaces  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform" href="{{DATA:SCREEN:SCREEN_10}}">
<span className="material-symbols-outlined">group_work</span>
<span className="font-label-sm text-label-sm">Spaces</span>
</a>
{/*  Activity  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform" href="{{DATA:SCREEN:SCREEN_11}}">
<span className="material-symbols-outlined">notifications</span>
<span className="font-label-sm text-label-sm">Activity</span>
</a>
{/*  Profile  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform" href="{{DATA:SCREEN:SCREEN_8}}">
<span className="material-symbols-outlined">person</span>
<span className="font-label-sm text-label-sm">Profile</span>
</a>
</nav>
    </div>
  );
};

export default OmniFeed;
