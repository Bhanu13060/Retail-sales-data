import React, { useEffect } from 'react';

const OmniKidsChatThread = () => {
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
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-2xl shadow-primary/10 border-b border-white/10 px-gutter h-24 flex justify-between items-center">
<div className="flex items-center gap-4">
<button className="bg-secondary-container text-on-secondary-container w-16 h-16 rounded-xl flex items-center justify-center shadow-lg active:scale-95 transition-transform">
<span className="material-symbols-outlined text-4xl" data-icon="home">home</span>
</button>
<div className="flex flex-col">
<span className="font-headline-lg-mobile text-headline-lg-mobile tracking-tighter text-primary">Omni Kids</span>
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-tertiary rounded-full animate-pulse"></div>
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Active</span>
</div>
</div>
</div>
<div className="flex items-center gap-4 bg-surface-variant/50 p-2 rounded-full border border-white/5">
<div className="text-right pr-2 hidden sm:block">
<p className="font-title-md text-title-md text-primary">Leo the Lion</p>
<p className="font-caption text-caption text-on-surface-variant">Your Best Bud</p>
</div>
<div className="w-16 h-16 rounded-full border-4 border-primary overflow-hidden shadow-lg">
<img className="w-full h-full object-cover" data-alt="A friendly, oversized 3D animated lion character with a big soft mane and kind eyes, wearing a techy purple scarf. The background is a soft-focus playroom with warm yellow and electric indigo lighting. The lion's expression is joyful and welcoming, perfect for a high-quality kids' application interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNBg2UVJDt-jS6v8KMkIaBp8j0MF9tCxPWWeRK3UN2xzPXyDiLfw_iro04zXkXkqzacCFrw4Auf4ANkNBJnDIJKfC2MJl_ut97_-1XbG_U0GFtOia6xWvYrsCU2wjeyxtmC1smoX0Q0QRexD1Nny--7wlQxxQrxhIIQgmkOBx3Mnjy1Na2757nOsp8WEeK-k-kjskqhzeY6tO0Y1y8kixSpVTEFnaLYJ9td8uGYVwaaNXUdJIVhRTjAg"/>
</div>
</div>
</header>
<main className="flex-1 overflow-y-auto px-4 pt-32 pb-60 space-y-8 scroll-smooth" id="chat-thread">
{/*  System Message  */}
<div className="flex justify-center">
<span className="bg-surface-container-high/50 text-on-surface-variant font-label-md text-label-md px-6 py-2 rounded-full backdrop-blur-md">TODAY</span>
</div>
{/*  Leo Message (Incoming)  */}
<div className="flex items-end gap-3 max-w-[85%] bounce-in">
<div className="w-12 h-12 rounded-full border-2 border-primary overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Close up avatar of a cute 3D lion character, bright saturated colors, playful aesthetic, high fidelity digital art style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRlWsStcUFoLkNOmZ3Y_nO5x2_52Ev0ifik66QaaKBgjHGI7ucTRDrLfWa5cBNn2tyy6JAR2ft7ZU3umLVQFTXiZSWr_LgVIBVJ0NIU_K88X1ADzxWyE2M_4-YRpkv3oNFSa0B-_eT2qLG7U-InPgeMiQK5dcdIa4v65SjyRmC_Q9WtXtH1hN69ESu2TXkVp8QUlcgUczHSZhA59oCg0ZYTj3Av1tNUbA5A9xtVJnxafGA4kvJS-NFXw"/>
</div>
<div className="bg-primary-container text-on-primary-container p-6 rounded-tr-xl rounded-tl-xl rounded-br-xl shadow-xl relative">
<p className="font-title-md text-title-md">Roar! Hi there! Want to see my new drawing?</p>
<div className="absolute -left-2 bottom-2 w-4 h-4 bg-primary-container transform rotate-45"></div>
</div>
</div>
{/*  User Message (Outgoing)  */}
<div className="flex items-end justify-end gap-3 max-w-[85%] ml-auto bounce-in">
<div className="bg-secondary-container text-on-secondary-container p-6 rounded-tr-xl rounded-tl-xl rounded-bl-xl shadow-xl relative">
<p className="font-title-md text-title-md">Yes please, Leo! Show me!</p>
<div className="absolute -right-2 bottom-2 w-4 h-4 bg-secondary-container transform rotate-45"></div>
</div>
<div className="w-12 h-12 rounded-full bg-tertiary border-2 border-white/20 flex items-center justify-center text-on-tertiary-container shadow-lg">
<span className="material-symbols-outlined text-3xl" data-icon="face">face</span>
</div>
</div>
{/*  Leo Typing Indicator  */}
<div className="flex items-center gap-4 bg-surface-container-lowest/40 w-fit px-6 py-4 rounded-full border border-white/5 backdrop-blur-md">
<div className="flex gap-1">
<div className="w-3 h-3 bg-primary rounded-full typing-dot" style={{ animationDelay: '0s' }}></div>
<div className="w-3 h-3 bg-primary rounded-full typing-dot" style={{ animationDelay: '0.2s' }}></div>
<div className="w-3 h-3 bg-primary rounded-full typing-dot" style={{ animationDelay: '0.4s' }}></div>
</div>
<span className="font-title-md text-title-md text-on-surface-variant">Leo is drawing...</span>
</div>
</main>

    </div>
  );
};

export default OmniKidsChatThread;
