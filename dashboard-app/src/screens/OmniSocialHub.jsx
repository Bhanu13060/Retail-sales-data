import React, { useEffect } from 'react';

const OmniSocialHub = () => {
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
      <header className="fixed top-0 w-full z-50 bg-surface-container/80 backdrop-blur-xl dark:bg-surface-container-low/80 border-b border-white/10 shadow-2xl shadow-black/50">
<div className="flex items-center justify-between px-margin-mobile md:px-margin-desktop w-full h-16 max-w-container-max-width mx-auto">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden border border-primary/30">
<img className="w-full h-full object-cover" data-alt="A cinematic, high-definition close-up of a diverse young professional man with a friendly expression. He is positioned in a futuristic workspace with soft blue and purple lighting that reflects the hyper-modern glassmorphic UI aesthetic. The background features blurred digital displays and sleek metallic surfaces, emphasizing a clean and high-tech atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKAHHUMJFZ1jZHx9xUSLS3pDEJqj7U5Gv7w8TwVEcufh5HSN6nGSbqQSLuAEKPxSaCBMOHj4JpxOLi6CGDhnLPndAER6Jo1Pk3wqslihN6EZ_SCMZzlQtZCABOVbaAkolWObqlWVwc7xcQ1VrsRwmqREty1KVReCqVGy3iN-T8CeQYdQ0x7eRi_wvfVAHFykOd1YwbMY5U8uKBc1Sv_Zg2nJzfERC2QUD-5dRDDQDtc3M0sV0xd1c83g"/>
</div>
</div>
<h1 className="font-display-lg text-primary dark:text-primary-fixed-dim tracking-tighter text-2xl md:text-3xl">Omni</h1>
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors duration-300 active:scale-95">
<span className="material-symbols-outlined text-primary">settings</span>
</button>
</div>
</header>
<main className="pt-24 px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-stack-gap-lg gap-4">
<div className="space-y-1">
<h2 className="font-headline-lg-mobile md:font-headline-lg text-on-surface">Social Hub</h2>
<p className="text-on-surface-variant font-body-md">Connect with your community and expand your network.</p>
</div>
{/*  Quick Search Component  */}
<div className="w-full md:w-96 relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full h-12 bg-surface-container-highest/40 border border-white/10 rounded-xl pl-12 pr-4 text-on-surface focus:ring-2 focus:ring-primary-container outline-none backdrop-blur-md transition-all font-body-md" placeholder="Search for friends..." type="text"/>
</div>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/*  Friend Requests Section  */}
<section className="md:col-span-8 space-y-stack-gap-md">
<div className="flex items-center justify-between">
<h3 className="font-title-md text-primary flex items-center gap-2">
<span className="material-symbols-outlined">person_add</span> Friend Requests
                        <span className="bg-primary-container text-on-primary-container px-2 py-0.5 rounded-full text-xs">3</span>
</h3>
</div>
<div className="grid grid-cols-1 gap-4">
{/*  Request Item 1  */}
<div className="glass-card p-4 rounded-xl flex items-center justify-between group stagger-in" style={{ animationDelay: '0.1s' }}>
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
<img className="w-full h-full object-cover" data-alt="A portrait of a creative woman with colorful neon highlights in her hair, looking directly into the camera with a confident smile. The environment is a vibrant social studio filled with soft ambient glows of electric purple and cyan. The lighting is dramatic yet professional, perfectly aligning with a sophisticated glassmorphic social platform theme." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_n6UmTntziB0YO3hWkScH4EGOIhUKrzU1kqTE5bpeOmtG0ZGH79GWSaAAtHXqOjXKMo32nJDwrDskp-vWrUox5H0aMxxNbbIxoKxEKs1Rnx00FQnOA44x2A4TP0vl0l2HUg3fEDrAyEVzv1oIH2BL4uNEI8K5kUi_TCAIwDfhKVqbYiP4FPjunsI7RAsZYhEnOpJrqMEuGCt3C14I08F1i4D4MnO48wh09sC6fChNO7kdrgtYoKG_jg"/>
</div>
<div>
<h4 className="font-label-md text-on-surface">Aria Sterling</h4>
<p className="text-caption text-outline">Met in 'Creative Oasis' space</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="h-10 px-4 rounded-lg bg-surface-container-highest text-on-surface-variant hover:bg-error/20 hover:text-error transition-all active:scale-95 font-label-md">Decline</button>
<button className="h-10 px-4 rounded-lg bg-primary-container text-on-primary-container hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95 font-label-md">Accept</button>
</div>
</div>
{/*  Request Item 2  */}
<div className="glass-card p-4 rounded-xl flex items-center justify-between group stagger-in" style={{ animationDelay: '0.2s' }}>
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
<img className="w-full h-full object-cover" data-alt="A portrait of a young tech enthusiast wearing modern semi-transparent glasses. The lighting is crisp, featuring soft blue rim lights against a dark, textured background. The overall style is futuristic and clean, suitable for a high-end social networking application focused on technology and professional connections." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA164RlkEDx-LioTGYRK1zG8YPn0yvV5_YIpkmryiPd8iW6hA8ctt0rZKBCL016_M8i6aSYc45Azryau3HEHC39GCe0bamaLW7d0D2LCiG5i_QRame9H8AscHvTi7l248BYIB5deScGEVLZoxSB3D8CXlwj1Ne2ZDiBSrLOV-s1vYq5413PgVHD8fGfDfBIHFZ3MuWs2JklTpv88CtqpWrUOQgw9jzAXtINZcwWBdSPmiwEIS3E8dOoPg"/>
</div>
<div>
<h4 className="font-label-md text-on-surface">Leo Chen</h4>
<p className="text-caption text-outline">3 mutual friends</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="h-10 px-4 rounded-lg bg-surface-container-highest text-on-surface-variant hover:bg-error/20 hover:text-error transition-all active:scale-95 font-label-md">Decline</button>
<button className="h-10 px-4 rounded-lg bg-primary-container text-on-primary-container hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95 font-label-md">Accept</button>
</div>
</div>
</div>
{/*  Suggested Friends Section  */}
<div className="pt-stack-gap-lg">
<h3 className="font-title-md text-primary mb-stack-gap-md flex items-center gap-2">
<span className="material-symbols-outlined">explore</span> Suggested for You
                    </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
{/*  Suggestion 1  */}
<div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center stagger-in" style={{ animationDelay: '0.3s' }}>
<div className="w-20 h-20 rounded-full p-1 border-2 border-dashed border-tertiary mb-4">
<img className="w-full h-full object-cover rounded-full" data-alt="A studio portrait of an architect with a refined look, set against a backdrop of deep indigo and soft teal lighting. The aesthetic is sleek, minimalist, and professional, echoing the premium design of a high-tech social interface. Every detail is sharp, with a focused depth of field emphasizing the subject's friendly but professional demeanor." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtIuKi9-u3gSMcYEU0qtyUQJTVhJFDgsBY_GBoscC1DUzRollBhPpI-_6Enk_hZIyUOfQo8jy-HE8Dj9p5hhJ-I8LYiMTAJHb3-Ywb18E4DTAxUW5MXS_sjfHIxmco6eFgeYIizcChAYRfkP6AXmhTZ9s8IiPiC4QOSIOmBtJR-W-UpUQEgm2aiR461loLBCSqRylnkPiyptZtJCOjERsdrIJlTjkyxPBreBVEC3XO5SvwhkQjsrlWrA"/>
</div>
<h4 className="font-label-md text-on-surface">Elena Rossi</h4>
<p className="text-caption text-outline mb-4">Shared Interest: Design Systems</p>
<button className="w-full py-2.5 rounded-xl bg-tertiary/10 border border-tertiary/30 text-tertiary hover:bg-tertiary hover:text-on-tertiary transition-all active:scale-95 font-label-md">Add Friend</button>
</div>
{/*  Suggestion 2  */}
<div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center stagger-in" style={{ animationDelay: '0.4s' }}>
<div className="w-20 h-20 rounded-full p-1 border-2 border-dashed border-secondary mb-4">
<img className="w-full h-full object-cover rounded-full" data-alt="A charismatic individual with a modern aesthetic, featuring cinematic lighting that casts soft shadows. The color palette is composed of deep blues, vibrant pinks, and subtle violet tones, creating a highly polished and futuristic visual. The subject's expression is welcoming, suggesting a friendly connection in a professional social setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA049Vl7qljueL0y0fCc6n9EZfaZhN5vzqAoC3JuXsmZ-gXmMFLvBfBnxHBq4NrxDNkrq1GDz7Js517r5ZA8_LC-L1ws94c6VJ36C5pwYQ8BsqeyUeDz3G7EoUt6lbw5Z4-HDEqRdmRQW2xAzVjbEorBroJGp_YCQtnxIQjONNDMUGt343JFWTEHqND6UWM2WAux1leAOqgFJFWWfC1Ylthj9xiuLEkrDRYLIS6GqRtQcttTYICEIBrUQ"/>
</div>
<h4 className="font-label-md text-on-surface">Marcus Thorne</h4>
<p className="text-caption text-outline mb-4">Common Space: Tech Founders</p>
<button className="w-full py-2.5 rounded-xl bg-secondary/10 border border-secondary/30 text-secondary hover:bg-secondary hover:text-on-secondary transition-all active:scale-95 font-label-md">Add Friend</button>
</div>
{/*  Suggestion 3  */}
<div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center stagger-in" style={{ animationDelay: '0.5s' }}>
<div className="w-20 h-20 rounded-full p-1 border-2 border-dashed border-primary mb-4">
<img className="w-full h-full object-cover rounded-full" data-alt="A portrait of a software engineer in a high-tech environment with glowing monitor light reflecting off their face. The scene is saturated with cool blues and deep purples, reflecting the core visual tokens of an adaptive future design system. The mood is focused and innovative, representing the digital connectivity of the Omni social hub." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzr1AlQle7YkHTcxmL5cidy5MsXmvHsMufJZ-WHvjbeRHhyURlXh-pFB5_dStqplWMbLKbYvmt-e2qmgysfjV_cPXckNLEIYE5C9eqjDOxlo52uKuEkKyHqKJspdnWY3PtZRGUTxWhEC6-lnAf6Njo38vjj5G1xpME16uoAqEed4raeNOgM7YSkpojsmRmSretBJ7B5-BPxFbKyp3BpXx0so8T4hb7SpIZbnrR_bQb7fF7ASV_C5T2Cg"/>
</div>
<h4 className="font-label-md text-on-surface">Sarah J.</h4>
<p className="text-caption text-outline mb-4">Met in: 'AI &amp; Future'</p>
<button className="w-full py-2.5 rounded-xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-on-primary transition-all active:scale-95 font-label-md">Add Friend</button>
</div>
</div>
</div>
</section>
{/*  QR Code & Quick Friending Sidebar  */}
<aside className="md:col-span-4 space-y-gutter">
<div className="glass-card p-8 rounded-3xl text-center flex flex-col items-center stagger-in" style={{ animationDelay: '0.3s' }}>
<h3 className="font-title-md text-on-surface mb-2">My QR Code</h3>
<p className="text-caption text-on-surface-variant mb-8">Let others scan this to add you instantly.</p>
{/*  Stylized QR Component  */}
<div className="relative p-6 bg-white rounded-2xl shadow-2xl shadow-primary-container/20 group">
<div className="w-48 h-48 qr-gradient p-1 rounded-lg">
<div className="w-full h-full bg-white rounded-md flex items-center justify-center relative overflow-hidden">
{/*  Simulated QR Pattern  */}
<div className="grid grid-cols-6 gap-1 w-full h-full p-2 opacity-90">
<div className="bg-surface-container-lowest col-span-2 row-span-2 rounded-sm border-2 border-surface-container"></div>
<div className="bg-surface-container-lowest col-start-5 col-span-2 row-span-2 rounded-sm border-2 border-surface-container"></div>
<div className="bg-surface-container-lowest col-start-1 row-start-5 col-span-2 row-span-2 rounded-sm border-2 border-surface-container"></div>
<div className="bg-primary-container/40 rounded-sm"></div>
<div className="bg-surface-container rounded-sm"></div>
<div className="bg-primary-container rounded-sm"></div>
<div className="bg-surface-container-lowest rounded-sm"></div>
<div className="bg-primary-container rounded-sm"></div>
<div className="bg-surface-container rounded-sm"></div>
<div className="bg-surface-container-lowest rounded-sm"></div>
<div className="bg-primary-container/60 rounded-sm"></div>
<div className="bg-surface-container rounded-sm"></div>
</div>
{/*  Center Logo  */}
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white p-2 rounded-full shadow-lg">
<div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">O</div>
</div>
</div>
</div>
</div>
{/*  Hover Effect Details  */}
<div className="absolute inset-0 bg-primary-container/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
</div>
<div className="mt-8 flex gap-3 w-full">
<button className="flex-1 h-12 rounded-xl bg-surface-container-highest border border-white/5 text-on-surface font-label-md flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
<span className="material-symbols-outlined text-xl">share</span> Share
                        </button>
<button className="flex-1 h-12 rounded-xl bg-surface-container-highest border border-white/5 text-on-surface font-label-md flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
<span className="material-symbols-outlined text-xl">download</span> Save
                        </button>
</div>
</div>
{/*  Stats Card  */}
<div className="glass-card p-6 rounded-3xl stagger-in" style={{ animationDelay: '0.4s' }}>
<h3 className="font-label-md text-on-surface-variant uppercase tracking-widest mb-4">Network Growth</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-on-surface font-body-md">Total Friends</span>
<span className="text-primary font-title-md">1,248</span>
</div>
<div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full w-3/4 rounded-full"></div>
</div>
<p className="text-caption text-outline italic">You're in the top 5% of active connectors this month!</p>
</div>
</div>
</aside>
</div>
</main>
<nav className="md:hidden fixed bottom-0 w-full rounded-t-xl z-50 bg-surface-container-lowest/70 backdrop-blur-2xl dark:bg-surface-container-lowest/70 border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.4)]">
<div className="flex justify-around items-center w-full px-2 py-3 pb-safe">
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant hover:text-primary transition-all duration-300" href="#">
<span className="material-symbols-outlined">dynamic_feed</span>
<span className="font-label-md text-label-md">Feed</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant hover:text-primary transition-all duration-300" href="#">
<span className="material-symbols-outlined">group_work</span>
<span className="font-label-md text-label-md">Spaces</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant hover:text-primary transition-all duration-300" href="#">
<span className="material-symbols-outlined">add_circle</span>
<span className="font-label-md text-label-md">Share</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant hover:text-primary transition-all duration-300" href="#">
<span className="material-symbols-outlined">forum</span>
<span className="font-label-md text-label-md">Chat</span>
</a>
<a className="flex flex-col items-center justify-center bg-primary-container/30 text-primary dark:text-primary-fixed-dim rounded-xl px-3 py-1 shadow-[0_0_15px_rgba(128,131,255,0.2)]" href="#">
<span className="material-symbols-outlined">group</span>
<span className="font-label-md text-label-md">Social</span>
</a>
</div>
</nav>
    </div>
  );
};

export default OmniSocialHub;
