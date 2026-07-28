import React, { useEffect } from 'react';

const OmniKidsEdition = () => {
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
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-primary/10 h-20 flex justify-between items-center px-gutter">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center kids-bounce cursor-pointer shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-on-primary text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>face</span>
</div>
<h1 className="font-display-lg text-display-lg tracking-tighter text-primary">Omni</h1>
</div>
<div className="flex items-center gap-4">
<button className="w-12 h-12 flex items-center justify-center text-primary bg-primary/10 rounded-2xl hover:bg-primary/20 transition-all kids-bounce">
<span className="material-symbols-outlined text-3xl">search</span>
</button>
<div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-primary kids-bounce cursor-pointer">
<img className="w-full h-full object-cover" data-alt="A cheerful 3D cartoon avatar of a young child with bright eyes and a big smile, wearing colorful space-themed headphones. The style is highly polished and vibrant, matching a modern kid-friendly UI with soft studio lighting and playful primary colors." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC2yz1IOo9TwMjmvWJh5DbgqaS_zi2VthrcFWziHc4T7YXPetZgPtwPU5MfLoalTE34m8tmXc6WPu_TQw6p0lz-S-7QXXHY572h6_iwcoEse1VTadz3YLiGmGTZNKNAMs13xPzNXVHNFhWYbDjBZmuYf5CdRac5frkH_xKc5LZ5Hw-T7bjPujcIVLNurs3BQ_w9s9eNC-EuZb3LYwf5yXxtWWyn3buo1-PEv92AZrMqHvaMAnCTpe6Ug"/>
</div>
</div>
</header>
<main className="pt-24 pb-32 max-w-[600px] mx-auto px-4 space-y-stack-gap-lg">
{/*  Creator Section  */}
<section className="glass-card rounded-2xl p-6 space-y-6">
<h2 className="font-title-md text-title-md text-primary text-center">Hey! What's new?</h2>
<div className="grid grid-cols-3 gap-4">
<button className="flex flex-col items-center justify-center gap-3 p-4 bg-tertiary/20 rounded-2xl border-2 border-tertiary/30 kids-bounce vibrant-glow-blue transition-all group">
<div className="w-16 h-16 bg-tertiary text-on-tertiary flex items-center justify-center rounded-full shadow-inner">
<span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>photo_camera</span>
</div>
<span className="font-label-md text-label-md text-tertiary">Photo</span>
</button>
<button className="flex flex-col items-center justify-center gap-3 p-4 bg-secondary/20 rounded-2xl border-2 border-secondary/30 kids-bounce vibrant-glow-pink transition-all group">
<div className="w-16 h-16 bg-secondary text-on-secondary flex items-center justify-center rounded-full shadow-inner">
<span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>draw</span>
</div>
<span className="font-label-md text-label-md text-secondary">Drawing</span>
</button>
<button className="flex flex-col items-center justify-center gap-3 p-4 bg-primary/20 rounded-2xl border-2 border-primary/30 kids-bounce vibrant-glow-yellow transition-all group">
<div className="w-16 h-16 bg-primary text-on-primary flex items-center justify-center rounded-full shadow-inner">
<span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>mic</span>
</div>
<span className="font-label-md text-label-md text-primary">Voice</span>
</button>
</div>
</section>
{/*  Feed Section  */}
<div className="space-y-stack-gap-lg">
{/*  Feed Card 1  */}
<article className="glass-card rounded-2xl overflow-hidden shadow-2xl">
<div className="p-4 flex items-center gap-4">
<div className="w-16 h-16 rounded-full border-4 border-tertiary overflow-hidden shadow-lg">
<img className="w-full h-full object-cover" data-alt="A friendly cartoon profile picture of a young girl with pigtails and a bright yellow shirt, smiling joyfully. The background is a soft blue with floating white clouds. The style is 3D render with high-fidelity textures and playful lighting, consistent with a premium kids' app aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrxbqZsKnG5xOB-8Ts5m6xRuOh1GV8jhgBH_4yDKdUMy5-Vl_z5wSVp4RWz6u7ghquDe2cFXWHAr8djw9rsKs02Kkpvz57I64H7cXg3ZjMXvxGemUifwTfhNASn5q8fIeg4LJa1hLYXAJls2LszdEt2ffLlCWGaJPn-OlPcCyVIcYK8NL5D8uPsi_KFXGS_5IHfhzOqTtaOfgoFjoYST1g2X2k5ZB3p7BAcWsRI5QXnxF2Fq5p5LVsKQ"/>
</div>
<div>
<h3 className="font-title-md text-title-md text-on-surface">Maya Sparkles</h3>
<p className="font-caption text-caption text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-sm">schedule</span> 2 mins ago
                        </p>
</div>
</div>
<div className="px-4 pb-4">
<div className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer border-2 border-white/5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A vibrant and colorful digital drawing of a friendly fire-breathing dragon eating a giant cupcake. The colors are bright oranges, purples, and greens. The art style is bold and expressive, with thick lines and sparkling details, perfectly suited for a children's social media feed." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjrf42XimZ2Xw-twJok8veN__SajFZXs-RET8ElAZmCOkYwDk-SmlRJ5QFKmPCnWBYGp_FPgmsJGgh18zaNuw-7Rs5OOm-vad7w8eo4sk6Vw746AWn9IsFlajGyBTTO2_xeLgjPJDnURbX_tZJ4WXTDVm8bG8AogOZHc3WRf5vCF5kidzlv8ILCGvt0vqIZ7OoA0LwuQ2inq7R8XguWnNcZ8nUJMzmB0e08wnNDMAdloCBh_DHw3gkbg"/>
<div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-white font-label-md flex items-center gap-1">
<span className="material-symbols-outlined text-yellow-400" style={{ fontVariationSettings: '"FILL" 1' }}>star</span> Amazing!
                        </div>
</div>
</div>
<div className="px-6 pb-6 space-y-4">
<p className="font-body-lg text-body-lg text-on-surface leading-tight">Look at my dragon! He loves sugar! 🐉🧁✨</p>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 px-6 py-3 bg-secondary/10 hover:bg-secondary/20 border-2 border-secondary/30 rounded-full text-secondary kids-bounce transition-all vibrant-glow-pink">
<span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>favorite</span>
<span className="font-label-md">12</span>
</button>
<button className="flex items-center gap-2 px-6 py-3 bg-tertiary/10 hover:bg-tertiary/20 border-2 border-tertiary/30 rounded-full text-tertiary kids-bounce transition-all vibrant-glow-blue">
<span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="font-label-md">5</span>
</button>
<button className="ml-auto w-12 h-12 flex items-center justify-center text-on-surface-variant bg-surface-container-high rounded-full kids-bounce">
<span className="material-symbols-outlined">more_horiz</span>
</button>
</div>
</div>
</article>
{/*  Feed Card 2  */}
<article className="glass-card rounded-2xl overflow-hidden shadow-2xl">
<div className="p-4 flex items-center gap-4">
<div className="w-16 h-16 rounded-full border-4 border-primary overflow-hidden shadow-lg">
<img className="w-full h-full object-cover" data-alt="A cool cartoon profile of a young boy with spiky blue hair and oversized orange glasses. He is grinning and giving a thumbs up. The background is a soft purple with subtle geometric patterns. The style is hyper-modern 3D animation, bright, friendly, and clean." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBABhxYuH-FYEw5ai9v0aDeA_AAWeFHhy_WrhD_n4LhJt5qI5fDej6z30mT5GaEAqQGwY7Pfk6T890FQlDNePJZGVpPUQngm34ZvQWee4dnyDmuDZRtvYU5L5am4RiUYtEWiOnE-SAQ7eEqEFr-sPUT4wJ64x3NZYJYNBQnoCD5Gl7JKQyKv9R1jbddyhuKywD7mcqCaJ0GkWmB7gXSTIeF1wRX52mx7Jw6hYm5K3CN3NVM3gE6B_YP9g"/>
</div>
<div>
<h3 className="font-title-md text-title-md text-on-surface">Leo Rocket</h3>
<p className="font-caption text-caption text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-sm">schedule</span> 15 mins ago
                        </p>
</div>
</div>
<div className="px-6 pb-6 space-y-4">
<div className="p-6 bg-primary/20 border-2 border-dashed border-primary/40 rounded-2xl flex items-center gap-6">
<div className="w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center kids-bounce cursor-pointer shadow-lg">
<span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>play_arrow</span>
</div>
<div className="flex-1 space-y-2">
<div className="h-2 w-full bg-primary/20 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-primary rounded-full"></div>
</div>
<p className="font-label-md text-primary">Voice Note: Funny Robot Song!</p>
</div>
</div>
<p className="font-body-lg text-body-lg text-on-surface leading-tight">Listen to my robot voice! Beep boop beep! 🤖🎵</p>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 px-6 py-3 bg-secondary/10 hover:bg-secondary/20 border-2 border-secondary/30 rounded-full text-secondary kids-bounce transition-all">
<span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>favorite</span>
<span className="font-label-md">24</span>
</button>
<button className="flex items-center gap-2 px-6 py-3 bg-tertiary/10 hover:bg-tertiary/20 border-2 border-tertiary/30 rounded-full text-tertiary kids-bounce transition-all">
<span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="font-label-md">18</span>
</button>
</div>
</div>
</article>
{/*  Feed Card 3 (Video/Large Image)  */}
<article className="glass-card rounded-2xl overflow-hidden shadow-2xl">
<div className="p-4 flex items-center gap-4">
<div className="w-16 h-16 rounded-full border-4 border-secondary overflow-hidden shadow-lg">
<img className="w-full h-full object-cover" data-alt="A cute cartoon avatar of a child with space buns and a pink hoodie, looking energetic and happy. The lighting is soft and warm, with a dreamy purple-pink background. High-quality 3D render, expressive and cheerful." src="https://lh3.googleusercontent.com/aida-public/AB6AXuANY6TbMxBb7T9SAlf68s3MdqTXL9TF-h_JK8dcs14GxlbBWaPQQDDiINvCpuTjG77Vtxl4x3uzKN6aIxXa9nTO1LO-pLgsbXKwqfP6P1Z2jUWfDK8XMgVxKn-f5l-nrP4JnK4kfz-rZYvabg6LD8XqBvl2VMAyMMDQ-xDp3qiyvAj186dNoygjEzBNUFjGyloqPfFc5vY0X5Vcw-I7pIlE16BaMZzyRpUDnZqqsqnY9vcsCTo2slMkmg"/>
</div>
<div>
<h3 className="font-title-md text-title-md text-on-surface">Zoe Zoom</h3>
<p className="font-caption text-caption text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-sm">schedule</span> 1 hour ago
                        </p>
</div>
</div>
<div className="px-4 pb-4">
<div className="aspect-video rounded-xl overflow-hidden relative group cursor-pointer border-2 border-white/5">
<img className="w-full h-full object-cover" data-alt="A photo of a colorful backyard fort built with large cardboard boxes, decorated with glowing LED fairy lights and hand-painted stars. The scene is magical and creative, shot during twilight with a soft blue sky. The lighting is cozy and inviting, perfect for a kids' social platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvJ0KxUnC6yntpbffmX8X335JsJaRvxtlmxNWne7Lw4ejyYcsOMmQq077Q5pEnyB1jmIL_dZsjitAYiUf0-MvgTWXeJ6esBYnpjw_JHFM3g0ydYXoH_rqqvbUPzShJRblkAGtZw1QzBRj2v98OW8rTZQ2Cl8kKV6iV_aReibE3EAaOV0oTHVe_8m76Uj8rBPKqHyX_ME_znTGzrk20o4yelSSkLajdQhTrDSLR-od7aedfLrhpsveN4w"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border-2 border-white/40 kids-bounce">
<span className="material-symbols-outlined text-5xl text-white">play_arrow</span>
</div>
</div>
</div>
</div>
<div className="px-6 pb-6 space-y-4">
<p className="font-body-lg text-body-lg text-on-surface leading-tight">My base is almost ready! 🚀🏠</p>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 px-6 py-3 bg-secondary/10 hover:bg-secondary/20 border-2 border-secondary/30 rounded-full text-secondary kids-bounce transition-all">
<span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>favorite</span>
<span className="font-label-md">89</span>
</button>
<button className="flex items-center gap-2 px-6 py-3 bg-tertiary/10 hover:bg-tertiary/20 border-2 border-tertiary/30 rounded-full text-tertiary kids-bounce transition-all">
<span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="font-label-md">45</span>
</button>
</div>
</div>
</article>
</div>
</main>
<nav className="fixed bottom-0 left-0 w-full z-50 bg-surface-container/90 backdrop-blur-2xl border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] flex justify-around items-center px-4 py-3 pb-8 rounded-t-[32px]">
<a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full w-14 h-14 shadow-[0_0_20px_rgba(192,193,255,0.5)] kids-bounce" href="#">
<span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>dynamic_feed</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant w-14 h-14 hover:bg-white/5 rounded-full transition-all kids-bounce" href="#">
<span className="material-symbols-outlined text-3xl">add_circle</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant w-14 h-14 hover:bg-white/5 rounded-full transition-all kids-bounce" href="#">
<span className="material-symbols-outlined text-3xl">layers</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant w-14 h-14 hover:bg-white/5 rounded-full transition-all kids-bounce" href="#">
<span className="material-symbols-outlined text-3xl">notifications</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant w-14 h-14 hover:bg-white/5 rounded-full transition-all kids-bounce" href="#">
<span className="material-symbols-outlined text-3xl">person</span>
</a>
</nav>
    </div>
  );
};

export default OmniKidsEdition;
