import React, { useEffect } from 'react';

const OmniKidsFriendScanner = () => {
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
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center w-full px-margin-mobile py-unit bg-surface-container/80 backdrop-blur-xl border-b border-white/10 rounded-b-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
<div className="flex items-center gap-2">
<button className="text-primary hover:scale-110 transition-transform duration-300 active:scale-90">
<span className="material-symbols-outlined text-headline-lg-mobile">home</span>
</button>
<h1 className="font-display-lg text-title-md text-primary uppercase tracking-tighter">Omni Kids</h1>
</div>
<div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden hover:scale-110 transition-transform duration-300 cursor-pointer">
<img className="w-full h-full object-cover" data-alt="A colorful and friendly 3D avatar of a happy child with purple hair and high-tech glasses, set against a vibrant neon cyan background. The character design is playful and expressive, perfectly matching the Omni Kids brand's high-energy aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkr4Z80ig4-FwoIhP8TVP8VmnxxEBGGzxGvvSTc8IleQ9bs6hbi-f0-UMaVxqKZD6k_3O-cO4f7fidoJzOOSCJhGTtmSShosDbkrcqroPk-MLFA-6RZY6YgxdB0sgoa0fgQiNY3zmHJYh0ALCiZlIxl46jUHcWqXFnZFkpe4D2qKHVOV98jceZaZqpmmB5XXmGayDVLFEPAJ2UpGLE8yAyTmGIS1BeKLam9hL4HpmwWAsLH_cevsGsMQ"/>
</div>
</header>
<main className="min-h-screen pt-24 pb-32 px-margin-mobile flex flex-col items-center justify-between">
{/*  Viewfinder Section  */}
<div className="w-full max-w-sm flex flex-col items-center gap-stack-gap-lg">
<div className="relative w-full aspect-square rounded-[3rem] overflow-hidden border-[6px] border-tertiary shadow-[0_0_40px_rgba(76,215,246,0.3)]">
{/*  Mock Camera Feed Background  */}
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover grayscale-[0.2]" data-alt="A blurred perspective view of a vibrant, high-tech children's playroom with neon lighting, futuristic toy consoles, and soft pastel colors. The image serves as a cinematic background for a QR scanner, maintaining a playful and modern atmosphere with purple and cyan light spills." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCttC7_fMuzFsbWjz6W9DnzzoP_4reL_SKlLaN_npdUljxX_A4R0joQtlqEGAnh1h4EpyXuvlP5YBxTX3u4wwatq9cSfS6VrEmPbUp1Stvy9gRgcYmbe1Ov1OOgFOhb9t14fGJkMbih1kDWZS6-1x4_h3ZjhVtx54xC493Zm1xHCpfEwmUSoaC0GohCRCRrrtgPGyQKxMjWMOsxvFL1gum7d5lkQDkw0QB7salx6g1wX6WFcm11rZjREw"/>
</div>
{/*  Viewfinder Guides  */}
<div className="absolute inset-0 z-10 flex items-center justify-center">
<div className="w-64 h-64 border-2 border-white/30 rounded-3xl relative">
{/*  Corner Accents  */}
<div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-secondary rounded-tl-xl"></div>
<div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-secondary rounded-tr-xl"></div>
<div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-secondary rounded-bl-xl"></div>
<div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-secondary rounded-br-xl"></div>
{/*  Scanning Line Animation  */}
<div className="scanning-animation"></div>
</div>
</div>
{/*  Floating Overlay HUD  */}
<div className="absolute top-4 right-4 z-20">
<div className="bg-surface-container-highest/80 px-3 py-1 rounded-full text-caption flex items-center gap-1 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span className="text-on-surface font-label-md">LIVE SCAN</span>
</div>
</div>
</div>
{/*  Controls  */}
<div className="grid grid-cols-2 gap-4 w-full">
<button className="chunky-button flex flex-col items-center justify-center gap-2 py-6 bg-secondary-container text-on-secondary-container rounded-2xl border-2 border-secondary font-label-md">
<span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>qr_code_2</span>
                    MY QR CODE
                </button>
<button className="chunky-button flex flex-col items-center justify-center gap-2 py-6 bg-tertiary-container text-on-tertiary-container rounded-2xl border-2 border-tertiary font-label-md">
<span className="material-symbols-outlined text-4xl">flashlight_on</span>
                    FLASH
                </button>
</div>
</div>
{/*  Prompt Area  */}
<div className="w-full max-w-sm glass-panel p-6 rounded-3xl text-center shadow-2xl">
<p className="font-title-md text-primary mb-2">Ready to Scan!</p>
<p className="font-body-md text-on-surface-variant">Point at a friend's code to add them!</p>
<div className="mt-4 flex justify-center gap-2">
<div className="w-2 h-2 rounded-full bg-tertiary"></div>
<div className="w-2 h-2 rounded-full bg-tertiary/40"></div>
<div className="w-2 h-2 rounded-full bg-tertiary/40"></div>
</div>
</div>
</main>
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-surface-container-low/90 backdrop-blur-xl border-t border-white/10 rounded-t-xl shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
<div className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-bright/20 transition-all active:scale-95 duration-300">
<span className="material-symbols-outlined">auto_awesome_motion</span>
<span className="font-label-md text-label-md mt-1">Feed</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-bright/20 transition-all active:scale-95 duration-300">
<span className="material-symbols-outlined">draw</span>
<span className="font-label-md text-label-md mt-1">Draw</span>
</div>
<div className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-6 py-3 shadow-[4px_4px_0px_0px_rgba(62,0,34,1)] active:scale-95 transition-transform duration-300">
<span className="material-symbols-outlined">chat_bubble</span>
<span className="font-label-md text-label-md">Talk</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-bright/20 transition-all active:scale-95 duration-300">
<span className="material-symbols-outlined">sports_esports</span>
<span className="font-label-md text-label-md mt-1">Activity</span>
</div>
</nav>
    </div>
  );
};

export default OmniKidsFriendScanner;
