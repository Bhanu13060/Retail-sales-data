import React, { useEffect } from 'react';

const OmniSharedSpaces = () => {
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
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 w-full bg-surface dark:bg-background">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-primary text-3xl">hub</span>
<h1 className="font-display-lg text-headline-lg font-bold text-primary dark:text-primary-fixed">Omni</h1>
</div>
<div className="flex items-center gap-md">
<button className="material-symbols-outlined p-sm rounded-full hover:bg-surface-container-low transition-colors active:scale-95 text-on-surface-variant">search</button>
<div className="hidden md:flex items-center gap-lg">
<nav className="flex gap-md font-label-md text-label-md text-on-surface-variant">
<a className="hover:text-primary transition-colors" href="#">Files</a>
<a className="text-primary font-bold" href="#">Spaces</a>
<a className="hover:text-primary transition-colors" href="#">Shared</a>
</nav>
<div className="w-10 h-10 rounded-full border-2 border-primary-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A professional studio headshot of a person with a friendly expression, soft lighting, minimalist background. The style is clean and tech-focused with high clarity and a palette of soft blues and whites." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMgK3DcffzpGgKrOkqnfxOLXHVn_39FjmxxWtQOqfMxbb8Ckm_vk2vwgp25ZSBLT2z5gK2XJNWSzzjoUIYvpQHIdcpBS9wHxxG1wp3HQllFdOrNwoOxsEH8dUyeJfzhCY3ZSISZnK1BACfB4Nys1ixkCoXSuy3L26o7QjM2R6AIK-_aIcmH2DfUsA1JAN-5jfDPHvF3V9q8BNQplzJ2ufZ2Tkwi6xN1h1phmMV0Olj-QqijNiiw7mbMw" />
</div>
</div>
</div>
</header>
<main className="pt-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
{/*  Header Section  */}
<section className="mb-xl">
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-xs text-on-surface">Shared Spaces</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Collaborate in real-time with your team and family.</p>
</section>
{/*  Bento Grid of Spaces  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
{/*  Project Alpha Card  */}
<div className="glass-card rounded-xl p-md flex flex-col gap-md hover:shadow-md transition-all group cursor-pointer border-outline-variant" >
<div className="relative w-full aspect-video rounded-lg overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A sophisticated abstract digital visualization of data streams and geometric structures representing an advanced engineering project. The palette features electric purple, deep indigo, and cyan highlights in a clean, modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnBQkdam21KJ6iTmk26_MCorrPOLMOHYGqKMT7It64bPlqDecgIjvvvl8xEfZU_58Kf_PjtihZ0HM1MBjAKgeo74PRGBLpLsQMRGUKci2OhcHpNtw2HNZuy6HUC4pmwCI998LDtCv8IsrRvoAq4qO6wIhaHNqEzO2XaQWijl7_pFjERCM7UX9dQUBvliSZ8sbqqW2mIRVbYy7X647BU_GKz7AwThyBzekpgZPGQ0qDwN3Mw-zahny2AA" />
<div className="absolute top-sm right-sm bg-primary/90 text-on-primary text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider">Active</div>
</div>
<div className="flex flex-col gap-xs">
<div className="flex justify-between items-center">
<h3 className="font-headline-md text-headline-md text-on-surface">Project Alpha</h3>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-surface overflow-hidden bg-secondary-container">
<img className="w-full h-full object-cover" data-alt="Close-up avatar of a person with dark hair, studio lighting, professional portrait photography style with clean background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqV8R1XwBs-fkDaIXvGjtMM67W0BqkwFPD9pBiwavwCNpXPwHaWMLWsN5RuiwOJTg0GZvoSOAdvRfn4OMxY4s818Vc19sfJhbbcXt3NGY6DZEpzIVnaLbqUjKAgn_ibbJpHAGojzV-oPAfxPtT8ClbzVyxPsifUTkphzRyLdiJY42JyUYDqyWp9As4fkRfdfIx6e1mwXsGd_ahar_AGkUfCom0RXeDev9yukw_2G_oxKVQ1Nx2cE4w2Q" />
</div>
<div className="w-6 h-6 rounded-full border-2 border-surface overflow-hidden bg-primary-container">
<img className="w-full h-full object-cover" data-alt="Portrait of a young creative professional with glasses, bright and airy lighting, minimalist modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1fwS3HXupfGH9hEPj1xZEoT2h7N0pw2kjjzVSIx5fIi3pgblPIbysBq9zvhOVl7D2zzGd2iD1_CcEGpIUlDYts9CbGXpa9CgpatnHv5VYZbLQPdM2KxevJf3XjoUCyejMEF22o3mHdHWg6467b3TjwZ6xFGWm7Hdbo8Rg4PbrBiqejEGQXE1aXymgT-WtHL7LrMU1iswwsuEszMnAvAyvjaT7cH03y-RmaAWuoHspw2O1fUYPgI1fAg" />
</div>
<div className="w-6 h-6 rounded-full border-2 border-surface bg-surface-container-high flex items-center justify-center text-[10px] font-bold text-primary">+12</div>
</div>
</div>
<div className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm">schedule</span>
<span className="">Updated 5m ago by Sarah</span>
</div>
</div>
</div>
{/*  Family Photos Card  */}
<div className="glass-card rounded-xl p-md flex flex-col gap-md hover:shadow-md transition-all group cursor-pointer border-outline-variant" >
<div className="relative w-full aspect-video rounded-lg overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A warm, candid photo of a family laughing together in a sun-drenched outdoor park setting. The lighting is golden and soft, creating an inviting and nostalgic mood. High-quality lifestyle photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAdAqV06D6g_Z6lzlwM9lmZJFI5b_Xk8GKtRN3l6hStNbY-MFILm4r-rxOGtCJv3aX4Ctmyj1lqnNK_9-x6Y_hz6MlBBLEHjOC0yjXBZv72CQOBvBv1lMCaSf31nPT9Zh0mxzRicQWFYsL2ZCnCuVFwj0VxYGMUoSMsSnFuRMBHM4jhd8-ir_VcvtyBVavmFvhpSOeOa2u-qUVPFq533kEJS520eiwtUaaqvNRlyKN2buG3bLQoZQycw" />
</div>
<div className="flex flex-col gap-xs">
<div className="flex justify-between items-center">
<h3 className="font-headline-md text-headline-md text-on-surface">Family Photos</h3>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-surface bg-tertiary text-on-tertiary flex items-center justify-center text-[10px] font-bold">FP</div>
<div className="w-6 h-6 rounded-full border-2 border-surface bg-secondary text-on-secondary flex items-center justify-center text-[10px] font-bold">AM</div>
</div>
</div>
<div className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm">sync</span>
<span className="">42 new photos added today</span>
</div>
</div>
</div>
{/*  Design Inspo Card  */}
<div className="glass-card rounded-xl p-md flex flex-col gap-md hover:shadow-md transition-all group cursor-pointer border-outline-variant" >
<div className="relative w-full aspect-video rounded-lg overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A curated collection of minimalist interior design elements, featuring sleek furniture, neutral tones, and natural textures. The composition is clean and balanced with soft natural light coming from a large window. Aesthetic is high-end and modern." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKlDlKr0dhB_G_21TCx9J5HDlxh6N7mBZ7xAjvXlCrelAC2TuACEWvS-zQwI0cbJLzo2oPxmvgoDWe3ib5nyI2fytR6CoJXfPhImqogV-grUFjt9Vgaz0b_Liz7BQ_5V8nQd1BogY9X6WrMRvzzFkoFgooSxvjD3Tzc0H6Go3DYqSmuy2vWZ0V-icvA91kvxSUfZi_sO5OQD-1-yY-itZyoa6GIEdveFeGOAd5JyA6UXuy63Tw7OJzNw" />
</div>
<div className="flex flex-col gap-xs">
<div className="flex justify-between items-center">
<h3 className="font-headline-md text-headline-md text-on-surface">Design Inspo</h3>
<div className="flex items-center gap-xs text-primary font-bold font-label-sm">
<span className="material-symbols-outlined text-sm">group</span>
<span className="">24 Members</span>
</div>
</div>
<div className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm">comment</span>
<span className="">8 new comments on "Summer Palette"</span>
</div>
</div>
</div>
{/*  Marketing Assets  */}
<div className="glass-card rounded-xl p-md flex flex-col gap-md hover:shadow-md transition-all group cursor-pointer border-outline-variant">
<div className="relative w-full aspect-video rounded-lg overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A vibrant collage of digital marketing graphics, including colorful social media templates, sleek brand logos, and dynamic typography. The style is bold and tech-forward with high saturation and crisp lines." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXpFHGvjDFw88KF301H_En2weGiGVQ3P9rzWZNekpRyqowgb_NaYZiW8guTmFeiVtyDKTMjhPzhJ7-ZJNOYnz9xBtYb5KFl1UIUmvvCV0LP0tGaKn4a0BAHB-pWl3OTueRHDPXYBtm5pM33aA30TgTguz-9YLKQzFMUOYgibPeY10JzPEeOfyD9MN5PNwzxWl7Z9oHSoakgqrGv9STc4Y1_gKNEaxTyAcd2tMFuxFMBnikH47LzdjWsA" />
</div>
<div className="flex flex-col gap-xs">
<div className="flex justify-between items-center">
<h3 className="font-headline-md text-headline-md text-on-surface">Marketing Assets</h3>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-surface overflow-hidden bg-primary">
<img className="w-full h-full object-cover" data-alt="Close up portrait of a graphic designer working, soft studio lighting, modern minimalist office environment background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzaeevnBz_2S4Jp2JzpAkQxttx3NNkmeW2PLXYfW50GdpjBzc0kOFLzmWFw2xC71DlYDWrUYpMW1w9Nvk_IKflJN_QDs7VdHTZO48VrLbOp0XqmEjj-76qu3onayBG9rQRbdPc1X867U_4zS79Xahk1f7EM3XoMzMcN2NeqDCigz1Bg5LFrMF9kH8-x9QzDxjyHe0sdFv3twJ6UlWD5tqvEyDnW38aTHb2uio99FJzwjwcDVkZaYGjTg" />
</div>
<div className="w-6 h-6 rounded-full border-2 border-surface bg-surface-container-high flex items-center justify-center text-[10px] font-bold text-primary">+5</div>
</div>
</div>
<div className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm">file_upload</span>
<span className="">Logo_v2.svg uploaded by Kevin</span>
</div>
</div>
</div>
{/*  Quick Link / Empty State Interaction  */}
<div className="border-2 border-dashed border-outline-variant rounded-xl p-md flex flex-col items-center justify-center text-center gap-sm min-h-[200px] hover:border-primary hover:bg-surface-container transition-all cursor-pointer group">
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl">add_box</span>
</div>
<div>
<h4 className="font-label-md text-on-surface">New Space</h4>
<p className="font-body-sm text-on-surface-variant">Start a new collaboration</p>
</div>
</div>
</div>
</main>
<nav className="flex gap-md font-label-md text-label-md text-on-surface-variant">
<a className="hover:text-primary transition-colors" href="#">Files</a>
<a className="text-primary font-bold" href="#">Spaces</a>
<a className="hover:text-primary transition-colors" href="#">Shared</a>
</nav>
    </div>
  );
};

export default OmniSharedSpaces;
