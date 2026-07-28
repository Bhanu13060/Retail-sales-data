import React, { useEffect } from 'react';

const OmniKidsBadgeDetail = () => {
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
<button className="w-12 h-12 flex items-center justify-center bg-surface-container-highest rounded-full text-primary active:scale-90 transition-all">
<span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
</button>
<h1 className="font-display-lg text-title-md text-primary uppercase tracking-tighter">Badge Details</h1>
<div className="w-12 h-12 flex items-center justify-center bg-secondary-container rounded-full border-2 border-secondary text-on-secondary-container">
<span className="material-symbols-outlined fill-icon" data-icon="person">person</span>
</div>
</header>
<main className="pt-24 pb-32 px-margin-mobile max-w-container-max-width mx-auto space-y-stack-gap-lg">
{/*  Hero Section  */}
<section className="relative flex flex-col items-center justify-center py-stack-gap-lg text-center overflow-hidden">
{/*  Background WebGL Shader / Decorative Animation  */}

<div className="relative z-10 w-full flex flex-col items-center">
{/*  3D Pedestal and Badge  */}
<div className="relative mb-stack-gap-md">
{/*  Glow Base  */}
<div className="absolute inset-0 bg-tertiary blur-[100px] opacity-20 animate-pulse"></div>
{/*  The Badge  */}
<div className="relative animate-float">
<div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-[6px] border-tertiary bg-surface-container-highest p-4 glow-effect flex items-center justify-center shadow-[0_0_50px_rgba(76,215,246,0.3)]">
<img className="w-4/5 h-4/5 object-contain" data-alt="A vibrant 3D stylized artist palette badge with multiple dollops of bright neon paint including magenta, cyan, and yellow. The palette is made of smooth, glossy pearlescent material. High-impact lighting highlights the 3D depth and metallic sheen of the badge. The background is a soft, deep navy gradient with floating sparkles and digital confetti. Kid-friendly, playful, and high-fidelity 3D render style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMRaH4A8RvgOddT20grVcOK-ew0T8FbLuNuXXq40FTQV4eU1hwNqEVcJzbRkSeBi1OevrgJX_Wzx3qU_TaAIbjx6uphbIrsPCXSOglCOiBvxXZufK4c1s55sMO-VW0275cKqcZoblEMh7lh_Mm4Mya5Hft2yR0AvbYH21kq3iO2vsml8t70Z7l7vW7x2K5B1e-vg4L5NG5wQcvV0RYq6r449hgO6oohn2A-LE0cj8yvmagyeazIz-MhA"/>
</div>
{/*  Floating Accents  */}
<div className="absolute -top-4 -right-4 bg-secondary text-on-secondary rounded-full p-3 chunky-shadow-pink animate-bounce">
<span className="material-symbols-outlined fill-icon" data-icon="star">star</span>
</div>
</div>
</div>
<h2 className="font-display-lg text-headline-lg-mobile text-secondary mb-2 tracking-tight">You're a Master Artist!</h2>
<p className="font-body-lg text-on-surface-variant max-w-md mx-auto">
                    You earned this by drawing every single day for a whole week! Your gallery is looking amazing.
                </p>
</div>
</section>
{/*  Stats Grid (Bento Style)  */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="glass-panel p-6 rounded-xl flex flex-col items-center border-[3px] border-tertiary/30">
<span className="material-symbols-outlined text-tertiary text-4xl mb-2" data-icon="calendar_today">calendar_today</span>
<span className="font-display-lg text-title-md text-tertiary">7 Days</span>
<span className="font-label-md text-on-surface-variant uppercase">In a row</span>
</div>
<div className="glass-panel p-6 rounded-xl flex flex-col items-center border-[3px] border-secondary/30">
<span className="material-symbols-outlined text-secondary text-4xl mb-2" data-icon="brush">brush</span>
<span className="font-display-lg text-title-md text-secondary">14 Drawings</span>
<span className="font-label-md text-on-surface-variant uppercase">Shared</span>
</div>
<div className="glass-panel p-6 rounded-xl flex flex-col items-center border-[3px] border-primary/30">
<span className="material-symbols-outlined text-primary text-4xl mb-2 fill-icon" data-icon="star">star</span>
<span className="font-display-lg text-title-md text-primary">45 Stars</span>
<span className="font-label-md text-on-surface-variant uppercase">Earned</span>
</div>
</section>
{/*  Next Goal Card  */}
<section className="glass-panel p-8 rounded-xl border-[4px] border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-[120px]" data-icon="trending_up">trending_up</span>
</div>
<div className="relative z-10 space-y-4">
<div className="flex justify-between items-end">
<div>
<h3 className="font-title-md text-on-surface">Next Goal</h3>
<p className="font-body-md text-on-surface-variant">Draw today to start your next streak!</p>
</div>
<span className="font-display-lg text-title-md text-primary">85%</span>
</div>
{/*  Progress Bar  */}
<div className="w-full h-6 bg-surface-container-highest rounded-full p-1 border border-white/10">
<div className="h-full bg-primary rounded-full shadow-[0_0_15px_rgba(128,131,255,0.6)]" style={{ width: '85%' }}></div>
</div>
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-sm" data-icon="info">info</span>
<span className="font-caption">Only 1 more drawing to unlock 'Color King'</span>
</div>
</div>
</section>
{/*  Action Buttons  */}
<section className="flex flex-col md:flex-row gap-gutter pt-stack-gap-md">
<button className="flex-1 py-6 bg-secondary text-on-secondary rounded-xl font-display-lg text-title-md chunky-shadow-pink active:scale-95 transition-all flex items-center justify-center gap-3 border-[4px] border-on-secondary/10">
<span className="material-symbols-outlined" data-icon="share">share</span>
                Share Badge
            </button>
<button className="flex-1 py-6 bg-tertiary text-on-tertiary rounded-xl font-display-lg text-title-md chunky-shadow-cyan active:scale-95 transition-all flex items-center justify-center gap-3 border-[4px] border-on-tertiary/10">
<span className="material-symbols-outlined" data-icon="draw">draw</span>
                Go Draw
            </button>
</section>
</main>
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-surface-container-low/90 backdrop-blur-xl border-t border-white/10 rounded-t-xl shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-bright/20 transition-all rounded-xl" href="#">
<span className="material-symbols-outlined" data-icon="auto_awesome_motion">auto_awesome_motion</span>
<span className="font-label-md text-label-md">Feed</span>
</a>
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-6 py-3 shadow-[4px_4px_0px_0px_rgba(62,0,34,1)] active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined fill-icon" data-icon="draw">draw</span>
<span className="font-label-md text-label-md">Draw</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-bright/20 transition-all rounded-xl" href="#">
<span className="material-symbols-outlined" data-icon="chat_bubble">chat_bubble</span>
<span className="font-label-md text-label-md">Talk</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-bright/20 transition-all rounded-xl" href="#">
<span className="material-symbols-outlined" data-icon="sports_esports">sports_esports</span>
<span className="font-label-md text-label-md">Activity</span>
</a>
</nav>
    </div>
  );
};

export default OmniKidsBadgeDetail;
