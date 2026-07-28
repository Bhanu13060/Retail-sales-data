import React, { useEffect } from 'react';

const OmniKidsChat = () => {
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
      <header className="fixed top-0 w-full z-50 bg-surface-container/80 backdrop-blur-xl dark:bg-surface-container-low/80 border-b border-white/10 shadow-2xl shadow-black/50 flex items-center justify-between px-margin-mobile w-full h-16">
<div className="flex items-center gap-3 active:scale-95 transition-transform duration-300 ease-out cursor-pointer">
<div className="w-10 h-10 rounded-full border-2 border-primary-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A cheerful 3D avatar of a young child with bright eyes and a big smile, wearing a colorful space helmet. The background is a soft cosmic purple and blue gradient with twinkling stars, maintaining a hyper-modern and friendly kids' aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0objbiYsH4Oyf3XEiYq1n1Yv6tycC15zGK_G9MHKu15NVF1vcPWVGREZHvce9drtOX5P6y2UK_LfRwlZzjXpDZJ2b41CSeNLHe4MOCBix1Yj1uXBQKeF_pv6sSTKKa36UVwzs7ETuLE4lsIFwWi-2D2tq7AYf-sYb-ZVoA7xlvfZigquLRU-RFHWlS8YytjMKGvxN-ux1B_g7sTrWMX9AmoJMEevzyiglpFuShLcwBiNpfuOT5sMmKA"/>
</div>
<span className="font-display-lg text-primary dark:text-primary-fixed-dim tracking-tighter text-[24px]">Omni - Kids Chat</span>
</div>
<button className="material-symbols-outlined text-on-surface-variant dark:text-outline hover:bg-white/5 transition-colors duration-300 p-2 rounded-full active:scale-95">
            settings
        </button>
</header>
<main className="flex-1 mt-16 pb-24 overflow-y-auto">

<div className="px-margin-mobile py-stack-gap-lg flex flex-col gap-6 max-w-container-max-width mx-auto">
{/*  Active Friends Row  */}
<section className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
{/*  User Profile / Kids Mode  */}
<div className="flex flex-col items-center gap-2 flex-shrink-0 kids-bounce">
<div className="relative w-20 h-20 rounded-full border-4 border-tertiary p-1 shadow-lg">
<img className="w-full h-full rounded-full object-cover" data-alt="A vibrant 3D stylized character for a child's profile, wearing headphones with cat ears. The character has a playful expression and the style is reminiscent of high-end toy photography with soft lighting and saturated colors like cyan and magenta." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOmgZPlcDrv71dOC4fI4_hg2_q21wqHtQnZCXGZzy4bV51nDL2t7yoznaimYVYVZroujBeWZyTVOIAGQU6u6anELFpBa5LtpZDFp3kGzh3-3bTy7TGdFsHvAMCGM1hz156NG4SWxMIT2OmkcG9_fuI6n-aZ5z3MLA7gxN71UDeHYA5F2ksimc_1LiduH__ZQnHRHf7Qm40O94sXFacJEyQ0i5X5imCKqTUmunPwCcr2ZBYdzgIr5I4wg"/>
<div className="absolute -bottom-1 -right-1 bg-surface-container-highest rounded-full p-1 text-xl">🚀</div>
</div>
<span className="font-label-md text-on-surface text-center">Me</span>
</div>
{/*  Friend 1  */}
<div className="flex flex-col items-center gap-2 flex-shrink-0 kids-bounce">
<div className="relative w-20 h-20 rounded-full border-4 border-primary-container p-1 shadow-lg">
<img className="w-full h-full rounded-full object-cover" data-alt="A cute 3D monster character with large friendly eyes and soft blue fur, looking happy. The lighting is warm and cinematic, highlighting the fuzzy texture of the character against a dark indigo background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc7TlbRgRnSdiD9yPnjL9tpgryqmZsUj0CsfLHp2F96CYk5PPjwa4Hp3pUW7Ya_sAEspBJ8lhfFQzYbZpIKmDkn8u8PKRbtBGxtDKdG3xcfixH063GJG9IjUj7ZrcwJ6eowOuUPocLCnrjMbKdOgcofUjFESHq_1sbl9ijyAFj2OkwdBuwPR55kprTBMC5j2Kai9gske78xmiorGW4cW1Dsoy8_-Xoy9jtmE6JcAIkBEgylR8xPvRARw"/>
<div className="absolute -bottom-1 -right-1 bg-surface-container-highest rounded-full p-1 text-xl">😊</div>
</div>
<span className="font-label-md text-on-surface text-center">Leo</span>
</div>
{/*  Friend 2  */}
<div className="flex flex-col items-center gap-2 flex-shrink-0 kids-bounce">
<div className="relative w-20 h-20 rounded-full border-4 border-secondary p-1 shadow-lg">
<img className="w-full h-full rounded-full object-cover" data-alt="A playful 3D girl character with pigtails and star-shaped glasses, laughing. She is set against a vibrant yellow and orange sunset-style background with soft-focus bokeh effects." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHazwftt49-FIURWUmjeatMIbhW54rR7J256FldgI1l5PDQa_NJqjcKayyEYqnGnK7iKDo-tJ-JrRBVSZYbL59oS5kopqqhIrdpaOCZ41sf4U_004bJ308AzmiWFYy9Ho-bfY41_2h-1DBCpT0DADiT3Wc_g3IFGEe0nXyBcuxdxSUDMBJbXnPI-MR8m0gPlAD2TdPONKPcxU3shLr9m8uZFLrGxmJzYFYDoOTmC1ONLuAz36K31ThNA"/>
<div className="absolute -bottom-1 -right-1 bg-surface-container-highest rounded-full p-1 text-xl">⭐</div>
</div>
<span className="font-label-md text-on-surface text-center">Mia</span>
</div>
{/*  Friend 3  */}
<div className="flex flex-col items-center gap-2 flex-shrink-0 kids-bounce">
<div className="relative w-20 h-20 rounded-full border-4 border-tertiary p-1 shadow-lg">
<img className="w-full h-full rounded-full object-cover" data-alt="A stylized 3D robot toy character with bright green glowing eyes and a sleek silver body. The robot is giving a peace sign, and the overall scene is clean, colorful, and high-tech but kid-friendly." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqT4x-FzxC-WOJLv07Thm8M_L5wnvE-CMlKTpfrLkNdyDcXc6ePnrVNVCzfQMZqNHJuTXIAoXNMBB7Ci_sqSswRecT80kzAIVD5SGcupNJZ1vHSagdmEIIdu0icP4J09v2WTOIeTND-cBTMBbVx4fySKJUG6vLvp123dkef3omenMTWj0uvbewVVJ9JUFFhKmI3ABic4RW_s8F2G4PX61vADlxnnmHik8FExCmxklRzlkwnUyH_bwrEw"/>
<div className="absolute -bottom-1 -right-1 bg-surface-container-highest rounded-full p-1 text-xl">🤖</div>
</div>
<span className="font-label-md text-on-surface text-center">Robo</span>
</div>
</section>
{/*  Chat List (Bento-ish Layout)  */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-4">
{/*  Chat Item 1  */}
<div className="glass-card p-6 rounded-[32px] flex items-center justify-between kids-bounce cursor-pointer stagger-in" style={{ animationDelay: '0.1s' }}>
<div className="flex items-center gap-5">
<div className="w-20 h-20 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden border-4 border-white/10">
<img className="w-full h-full object-cover" data-alt="A friendly 3D lion character with a bright orange mane and a kind smile. The character is designed for a children's application with soft edges and vibrant colors. Studio lighting effect." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7-XJrzbDC8NHfIhB8PHhNAIWD_AMvvHHUwm_ENeY3NKGmSYe-KKqDNOhiF5C7Ga-O9upIuP36WI9jKUE5uqPoDyad9zNaNmS5N3NALgeFiYfFUivQgItnMrP4R0p0tdVOIXj1pXarMMm3h48SVTjhioWNgn_3nlYctqZmwMpkIbYMzj7LezGd9Y7qILN1RvfXzAL3EmtS6Vod4brqNxdSiUbVLkLxdsF3VfUym9wMwvlMv7QwfjkGdQ"/>
</div>
<div>
<h3 className="font-title-md text-on-surface mb-1">Leo the Lion</h3>
<div className="flex items-center gap-2 bg-primary-container/20 px-3 py-1.5 rounded-full w-fit">
<span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>mic</span>
<span className="font-label-md text-primary">Voice Note</span>
</div>
</div>
</div>
<div className="text-tertiary material-symbols-outlined text-4xl">chevron_right</div>
</div>
{/*  Chat Item 2  */}
<div className="glass-card p-6 rounded-[32px] flex items-center justify-between kids-bounce cursor-pointer stagger-in" style={{ animationDelay: '0.2s' }}>
<div className="flex items-center gap-5">
<div className="w-20 h-20 rounded-full bg-tertiary-container flex items-center justify-center overflow-hidden border-4 border-white/10">
<img className="w-full h-full object-cover" data-alt="A 3D animated panda character eating a bamboo shoot, with big expressive eyes and a soft black and white texture. High-quality render for a premium kids' app." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCInThY1OzaYP2YxPWi5-Bkn9oly8wdf4JovyMHMsAByLHe0IOZEh2JCoWFR3Lh6dUYVMeszQQNn5_8M7iHFUDS5AUGy5JWFhYxOH0Gec8uCLcsr73RITVLJm0KTWU5G-GIqXsNbAnCQrDfrXWm5jrjXiwaiCpcN0z-AsYKvLcimVlq8pp41gtw1E-_w-MF560EqhFFW7sbKapKcJpbOzHPm_PbX5WxBTZwnzhz0U5dcvQG_ERGp6Y7KA"/>
</div>
<div>
<h3 className="font-title-md text-on-surface mb-1">Panda Bear</h3>
<div className="flex items-center gap-2 bg-secondary-container/20 px-3 py-1.5 rounded-full w-fit">
<span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>image</span>
<span className="font-label-md text-secondary">Photo</span>
</div>
</div>
</div>
<div className="text-tertiary material-symbols-outlined text-4xl">chevron_right</div>
</div>
{/*  Chat Item 3  */}
<div className="glass-card p-6 rounded-[32px] flex items-center justify-between kids-bounce cursor-pointer stagger-in" style={{ animationDelay: '0.3s' }}>
<div className="flex items-center gap-5">
<div className="w-20 h-20 rounded-full bg-primary-container flex items-center justify-center overflow-hidden border-4 border-white/10">
<img className="w-full h-full object-cover" data-alt="A 3D rendering of a colorful paper plane character with a face, flying through a cartoonish sky with fluffy white clouds. The style is bright, saturated, and whimsical." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV9kFLKdoogPvcsEMnYufgu5Wp0yMsyoQBsxRYNjjJFrNipb-IhXBievOmxMZuTB9f_eEiOslZCyBvzKegCF_FndfB5W1Ynsk4yZS_DOfFRT3nEgsZkioe0dR9i2_IrMVF90NYHzs14DmirDQrqymHEIu2BqlF6WW-4ZPThJ0Hh1XPA6C1Wv7cx36H1NZW7jJfzA-GzfGTK8pYCP05O6T1E5TvFuYLBWZo1m6yqefkx4AdeY1KNEIbeg"/>
</div>
<div>
<h3 className="font-title-md text-on-surface mb-1">Mia's Art</h3>
<div className="flex items-center gap-2 bg-tertiary-container/20 px-3 py-1.5 rounded-full w-fit">
<span className="material-symbols-outlined text-tertiary text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>draw</span>
<span className="font-label-md text-tertiary">Drawing</span>
</div>
</div>
</div>
<div className="text-tertiary material-symbols-outlined text-4xl">chevron_right</div>
</div>
{/*  New Group / Space Card  */}
<div className="bg-primary-container p-6 rounded-[32px] flex flex-col items-center justify-center gap-4 kids-bounce cursor-pointer shadow-xl shadow-primary-container/30 stagger-in" style={{ animationDelay: '0.4s' }}>
<div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-5xl text-white">group_add</span>
</div>
<span className="font-title-md text-on-primary">Make a New Group!</span>
</div>
</section>
{/*  Bottom Floating Action Section  */}
<section className="flex flex-wrap gap-4 mt-8">
<button className="flex-1 bg-secondary-container hover:bg-secondary-container/90 text-on-secondary-container rounded-[24px] py-6 px-8 flex items-center justify-center gap-4 kids-bounce shadow-2xl transition-all duration-300">
<span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>send</span>
<span className="font-headline-lg-mobile text-[24px]">Quick Send</span>
</button>
<button className="bg-tertiary-container hover:bg-tertiary-container/90 text-on-tertiary-container rounded-[24px] p-6 kids-bounce shadow-2xl transition-all duration-300">
<span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>videocam</span>
</button>
</section>
</div>
</main>
<nav className="fixed bottom-0 w-full rounded-t-xl z-50 bg-surface-container-lowest/70 backdrop-blur-2xl border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.4)] flex justify-around items-center px-2 py-3 pb-safe">
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-all duration-300 cursor-pointer kids-bounce">
<span className="material-symbols-outlined text-2xl" data-icon="dynamic_feed">dynamic_feed</span>
<span className="font-label-md text-label-md">Feed</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-all duration-300 cursor-pointer kids-bounce">
<span className="material-symbols-outlined text-2xl" data-icon="group_work">group_work</span>
<span className="font-label-md text-label-md">Spaces</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-all duration-300 cursor-pointer kids-bounce">
<span className="material-symbols-outlined text-2xl" data-icon="add_circle">add_circle</span>
<span className="font-label-md text-label-md">Share</span>
</div>
{/*  Active Tab: Chat  */}
<div className="flex flex-col items-center justify-center bg-primary-container/30 text-primary dark:text-primary-fixed-dim rounded-xl px-3 py-1 shadow-[0_0_15px_rgba(128,131,255,0.2)] cursor-pointer">
<span className="material-symbols-outlined text-2xl" data-icon="forum" style={{ fontVariationSettings: '"FILL" 1' }}>forum</span>
<span className="font-label-md text-label-md">Chat</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-all duration-300 cursor-pointer kids-bounce">
<span className="material-symbols-outlined text-2xl" data-icon="group">group</span>
<span className="font-label-md text-label-md">Social</span>
</div>
</nav>
    </div>
  );
};

export default OmniKidsChat;
