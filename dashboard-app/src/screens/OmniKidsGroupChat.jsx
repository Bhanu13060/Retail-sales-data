import React, { useEffect } from 'react';

const OmniKidsGroupChat = () => {
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
      <header className="fixed top-0 w-full z-50 bg-surface-container/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 h-20 flex items-center justify-between px-margin-mobile md:px-margin-desktop">
<div className="flex items-center gap-4">
<button className="w-12 h-12 flex items-center justify-center bg-surface-container-highest rounded-2xl active:scale-95 transition-transform">
<span className="material-symbols-outlined text-primary">arrow_back</span>
</button>
<div className="flex items-center gap-3">
<div className="w-14 h-14 rounded-2xl border-4 border-primary overflow-hidden shadow-lg shadow-primary/20 animate-float">
<img className="w-full h-full object-cover" data-alt="A vibrant and playful digital illustration of a rocket ship icon with a friendly cartoon face, floating in a colorful cosmic nebula with stars. The art style is bold and chunky with saturated purple, pink, and blue tones, perfectly suited for a high-end kids application. Professional digital painting style with soft gradients." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWoTgIBP2SQ39m5QIWayOdewYCNh445aiKESs7SyZ2rAaZj-PaMe6uu0fON5Bvk9q0Mc9bzEUTqUjkfSb4hTFmXQR9rQAF_extAGLz1-tvy13AybqmVZvP3An5baRcXG1PFs_Km3X20gH3vFlxOlK6OxM8PxGD7nNaZr8n1cf02OmksDF1VT8osOWhN3Hn3L1XYoaaGVYb_fQLQ6jXmc8GugAKZ58P2clYYSMyw9JBo1O8iB3xs_qSNw"/>
</div>
<div>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tight leading-none">The Rocket Club</h1>
<p className="font-label-md text-label-md text-tertiary flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                        4 Friends Online
                    </p>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-2xl flex items-center justify-center bubble-pop shadow-lg shadow-secondary/20">
<span className="material-symbols-outlined fill-icon">video_call</span>
</button>
<button className="w-12 h-12 bg-surface-container-highest text-primary rounded-2xl flex items-center justify-center bubble-pop">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</header>
<main className="h-screen pt-24 pb-32 overflow-y-auto chat-scroll px-margin-mobile md:px-margin-desktop space-y-8 relative">
{/*  Atmospheric Background Shaders  */}

{/*  Time Stamp  */}
<div className="flex justify-center">
<span className="px-4 py-1.5 rounded-full bg-surface-container-highest/50 font-label-md text-label-md text-outline">Today after school</span>
</div>
{/*  Incoming Message 1  */}
<div className="flex items-end gap-4 max-w-lg">
<div className="w-16 h-16 flex-shrink-0 rounded-2xl border-4 border-secondary overflow-hidden shadow-md shadow-secondary/10">
<img className="w-full h-full object-cover" data-alt="Close up avatar of a happy cartoon girl with bright pink hair and large expressive eyes, wearing futuristic goggles. The style is 3D rendered, reminiscent of high-end animation studios, with vibrant lighting and soft textures. The background is a soft yellow glow. Consistent with a playful, modern app design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkHI11PiC6yamCqhz7pVATokuF3RBSWf2U300C0MQZobR9-P8a59jS0DNVH5PGaZUFbwSgVZ7AuHPHsPN5Fx0SDLOEGlDeLhzIJECmD-AFQRAgQYsi7IXqW9fObFl3WUNtKYqulafGO-8H9wImhBq3j47IxJwOpyZK7LgT60c6wvHql8vepmZJ43yGIXhjvdyPXZHDkBebTpR-JbszeHIanyvbnqbEepTzNcPbS4vRDuRlPhzxKu6fug"/>
</div>
<div className="space-y-2">
<span className="font-label-md text-label-md text-secondary ml-2">Luna</span>
<div className="bg-surface-container-high p-5 rounded-t-2xl rounded-br-2xl border border-white/5 shadow-xl relative">
<p className="font-title-md text-title-md text-on-surface">WHO'S READY FOR THE MOON MISSION?? 🚀✨</p>
{/*  Large Emoji Reactions  */}
<div className="absolute -bottom-4 -right-4 flex gap-1">
<button className="w-10 h-10 bg-surface-bright border-2 border-primary rounded-xl flex items-center justify-center text-xl bubble-pop shadow-lg">🔥</button>
<button className="w-10 h-10 bg-surface-bright border-2 border-tertiary rounded-xl flex items-center justify-center text-xl bubble-pop shadow-lg">🤩</button>
</div>
</div>
</div>
</div>
{/*  Outgoing Message  */}
<div className="flex items-end justify-end gap-4 ml-auto max-w-lg">
<div className="space-y-2">
<div className="bg-primary-container text-on-primary-container p-5 rounded-t-2xl rounded-bl-2xl border border-white/10 shadow-2xl shadow-primary/20">
<p className="font-title-md text-title-md">MEEEEE!! I just finished my space helmet! Look! 🎨</p>
</div>
</div>
<div className="w-16 h-16 flex-shrink-0 rounded-2xl border-4 border-primary overflow-hidden shadow-md shadow-primary/10">
<img className="w-full h-full object-cover" data-alt="Avatar of a playful cartoon boy with messy blue hair and a wide grin, wearing a bright orange hoodie. Detailed 3D character design, high-fidelity lighting, studio quality rendering. The expression is enthusiastic and friendly. The background is a deep purple with star sparkles." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnc1TFLtKV6gCi3_0oJOzk9E4voBmN9-UPWQ-LwdC3Hw_ZLHq4i7LhDuR8x4dbe-Z81Z0a_Dxln7BqUezk2WXad72yc6fllchD8A3bvmoBd6LhlDg_Pqh-K4ZfDDJkrqUe8RLKwRHf0sGPFE0waL3MV5BaqbpB_4N8c1QtbyR8DlYVuutXfEBuYc6N5qxSwA8iqcBE4mUFzKxf-yVLqGuOcRZJqxwfRKeCvpfD1xT75z6WdRiJrxwkNA"/>
</div>
</div>
{/*  Visual Content Message (Photo)  */}
<div className="flex items-end justify-end gap-4 ml-auto max-w-md">
<div className="relative group">
<div className="w-full aspect-square rounded-3xl border-8 border-primary-container overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
<img className="w-full h-full object-cover" data-alt="A highly creative and colorful kid's drawing of a space helmet made from cardboard and neon markers, sitting on a messy desk with crayons. The image is styled as a photo taken by a child, featuring warm lighting, bright saturated colors, and a whimsical, playful atmosphere. Professional photography for a high-end app showcase." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTbkxvHGY_xgR2uN6v3VLS7gkUxTyvlK3GAHHG389mgqNQ2ireqKigZYJTmFB0uL1F9pqT6S-oCs3VDkfSmHIFQ-W483h09A_ZPjU4In2UKBFPmAkEeyt5SvSTOdXg7pgIAMYt4YDtZr4B57Pk2MbL2fwPEDLhWw_MQAbh5v8mHaxOerXW22L6UnZ5BpfKdx3mikg4cVq93UHgrmIusQtaLUUUM-6lOVVly6kbCMiMzBh-KNj_hjCUpw"/>
</div>
<div className="absolute -top-4 -left-4 w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-2xl shadow-xl animate-bounce">💎</div>
</div>
</div>
{/*  Incoming Message 2  */}
<div className="flex items-end gap-4 max-w-lg">
<div className="w-16 h-16 flex-shrink-0 rounded-2xl border-4 border-tertiary overflow-hidden shadow-md shadow-tertiary/10">
<img className="w-full h-full object-cover" data-alt="Portrait of a cool cartoon cat wearing neon green headphones and futuristic shades. The character design is bold, graphic, and highly stylized with thick lines and vibrant gradients. Professional character art for a high-energy youth gaming platform. The background is a soft teal glow." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh6wS5zO0s20mRUJ6F989amOlByRYkHbYmTAgFAkST09-ErOM1N4VrzVoYTT5gSxvlfjBVL7YMZyd3vyta-9CHLp8k5wir0BIo2vbdtU2ct_35rj1VgFnmcgyzE0vdrS7EZXWPJbmW4iGl2ScI7OXQdDFP33wpthIx_l6C-k8aBZBk4dTE6hr448s_h8Yuvexy_LGT620GLK6YlYaiIlobhjWD8jl-yOQI_utZcC4cjKLCJfGhuXsxmA"/>
</div>
<div className="space-y-2">
<span className="font-label-md text-label-md text-tertiary ml-2">SpaceCat</span>
<div className="bg-surface-container-high p-5 rounded-t-2xl rounded-br-2xl border border-white/5 shadow-xl">
<p className="font-title-md text-title-md text-on-surface">That's so cool, Leo! I'm drawing the ship now! ✍️</p>
</div>
</div>
</div>
{/*  Typing Indicator  */}
<div className="flex items-center gap-2 ml-20 text-outline">
<div className="flex gap-1">
<span className="w-2 h-2 rounded-full bg-primary animate-bounce"></span>
<span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0.2s]"></span>
<span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0.4s]"></span>
</div>
<span className="font-label-md">Ziggy is drawing...</span>
</div>
</main>
<nav className="fixed bottom-0 w-full h-28 bg-surface-container-lowest/80 backdrop-blur-2xl border-t border-white/10 px-margin-mobile flex items-center justify-between gap-4 z-50">
<div className="flex-1 flex gap-3">
<button className="flex-1 h-16 bg-surface-container-high rounded-2xl flex flex-col items-center justify-center bubble-pop text-primary active:bg-primary active:text-on-primary">
<span className="material-symbols-outlined fill-icon text-3xl">image</span>
<span className="font-label-md">Photos</span>
</button>
<button className="flex-1 h-16 bg-secondary-container text-on-secondary-container rounded-2xl flex flex-col items-center justify-center bubble-pop shadow-lg shadow-secondary/20">
<span className="material-symbols-outlined fill-icon text-3xl">brush</span>
<span className="font-label-md">Draw</span>
</button>
<button className="flex-1 h-16 bg-tertiary-container text-on-tertiary-container rounded-2xl flex flex-col items-center justify-center bubble-pop shadow-lg shadow-tertiary/20">
<span className="material-symbols-outlined fill-icon text-3xl">mic</span>
<span className="font-label-md">Talk</span>
</button>
</div>
<button className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 bubble-pop group">
<span className="material-symbols-outlined text-on-primary text-4xl group-hover:rotate-12 transition-transform">add</span>
</button>
</nav>
    </div>
  );
};

export default OmniKidsGroupChat;
