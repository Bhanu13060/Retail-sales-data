import React, { useEffect } from 'react';

const OmniChatThread = () => {
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
      <header className="fixed top-0 w-full z-50 bg-surface-container-low/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50">
<div className="flex items-center justify-between px-margin-mobile md:px-margin-desktop w-full h-16 max-w-container-max-width mx-auto">
<div className="flex items-center gap-3">
<button className="material-symbols-outlined text-primary active:scale-95 transition-transform" data-icon="arrow_back">arrow_back</button>
<div className="relative">
<img className="w-10 h-10 rounded-full border-2 border-primary-container object-cover" data-alt="A portrait of a young man named Alex Rivera with short dark hair and a friendly expression. He is wearing a professional grey sweater against a soft-focus studio background. The lighting is crisp and modern, reflecting a tech-savvy and professional personality in line with the Omni app's high-fidelity aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWmmlvBiZHnEc9c4aXik6Kv8rqmgbyXgAWNAG7c7ffpAH04sHCCjpjoxF9knxQ-gSXsNMhP5wBq0Y_fvVFhyvzqoVNXLQAFwC45ySIokUISOynmziOFTig9CUvS_H1m_VRrFrucweLMVq44ZD1ExFQIIaiScvANv_lq9bBw1-oiyg7JhsiaCYVWNZpYiLq7w1zeSk7d6hPBgmfmM0KkP4dD8qgRVBuce2OISoN_jlt7I1nDtlku-WuUQ"/>
<span className="absolute bottom-0 right-0 w-3 h-3 bg-tertiary rounded-full border-2 border-surface-container shadow-glow-tertiary"></span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-body-md text-on-surface leading-tight">Alex Rivera</span>
<span className="font-caption text-caption text-tertiary">online</span>
</div>
</div>
<div className="flex items-center gap-stack-gap-md">
<button className="p-2 rounded-full hover:bg-white/5 active:scale-90 transition-all text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="call">call</span>
</button>
<button className="p-2 rounded-full hover:bg-white/5 active:scale-90 transition-all text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="videocam">videocam</span>
</button>
<button className="p-2 rounded-full hover:bg-white/5 active:scale-90 transition-all text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
</div>
</header>
<main className="flex-1 overflow-y-auto px-margin-mobile md:px-margin-desktop pt-24 pb-32 z-10 relative flex flex-col gap-stack-gap-lg max-w-3xl mx-auto w-full">
{/*  Day Divider  */}
<div className="flex justify-center my-4">
<span className="px-4 py-1 rounded-full bg-surface-container-highest/50 backdrop-blur-md text-caption font-label-md text-outline uppercase tracking-widest">Today</span>
</div>
{/*  Receiver Message: Text  */}
<div className="flex flex-col items-start gap-1 max-w-[85%] animate-fade-in-up">
<div className="receiver-glass px-4 py-3 rounded-2xl rounded-tl-none">
<p className="text-on-surface font-body-md">Hey! Did you see the new renders for the Lumina project? The glassmorphism effects are looking incredible.</p>
</div>
<span className="text-[10px] text-outline ml-2 font-label-md">10:42 AM</span>
</div>
{/*  Sender Message: Text  */}
<div className="flex flex-col items-end gap-1 max-w-[85%] self-end animate-fade-in-up">
<div className="sender-gradient px-4 py-3 rounded-2xl rounded-tr-none text-white">
<p className="font-body-md">Just checked them out. The multi-layered translucency is exactly what we needed. Here's a quick screen of the dark mode layout.</p>
</div>
<div className="flex items-center gap-1 mr-2">
<span className="text-[10px] text-outline font-label-md">10:43 AM</span>
<span className="material-symbols-outlined text-[14px] text-primary" data-icon="done_all" style={{ fontVariationSettings: '"FILL" 1' }}>done_all</span>
</div>
</div>
{/*  Sender Message: Image  */}
<div className="flex flex-col items-end gap-1 max-w-[85%] self-end animate-fade-in-up">
<div className="glass-panel p-2 rounded-2xl rounded-tr-none border-primary-container/20 overflow-hidden shadow-lg">
<img className="w-full max-w-xs h-48 object-cover rounded-xl border border-white/5" data-alt="A high-fidelity mobile UI design layout showcasing a sleek dark mode dashboard. The interface features vibrant electric purple accents, glassmorphic card elements with deep background blurs, and neon-lit data visualizations. The overall style is futuristic and professional, capturing a high-tech developer aesthetic with high contrast and premium finishes." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkaQlloP2RRc-Xdn9MtNM4_BKXvHHU8ADaiFPRHRvqKvQNEd0mkT6z-N2jxSR6qm9rAqVuYT1KzJ3HaOOzHdlz8j8Rn0-is0QBsuS-FG2WWbDHGd8veEuqHWsh3aqMOHmZ017La_zWPmojelhUU4ENCecaJ26LB1M_gy3FR9C0CHY9Kl8-9F6G_bfhgBvT-1WRp-OAEZ1qAnHC7l_vX8LPDIJPFsge5hqRsXiui5gUaIW3L3x21aVdyw"/>
</div>
<div className="flex items-center gap-1 mr-2">
<span className="text-[10px] text-outline font-label-md">10:43 AM</span>
<span className="material-symbols-outlined text-[14px] text-primary" data-icon="done_all" style={{ fontVariationSettings: '"FILL" 1' }}>done_all</span>
</div>
</div>
{/*  Receiver Message: Voice Note  */}
<div className="flex flex-col items-start gap-1 max-w-[85%] animate-fade-in-up">
<div className="receiver-glass px-4 py-4 rounded-2xl rounded-tl-none flex items-center gap-3 w-64">
<button className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary active:scale-90 transition-transform">
<span className="material-symbols-outlined" data-icon="play_arrow" style={{ fontVariationSettings: '"FILL" 1' }}>play_arrow</span>
</button>
<div className="flex items-end h-8 flex-1">
{/*  Fake Waveform  */}
<div className="waveform-bar" style={{ height: '40%' }}></div>
<div className="waveform-bar" style={{ height: '60%' }}></div>
<div className="waveform-bar" style={{ height: '30%' }}></div>
<div className="waveform-bar" style={{ height: '80%' }}></div>
<div className="waveform-bar" style={{ height: '50%' }}></div>
<div className="waveform-bar" style={{ height: '90%' }}></div>
<div className="waveform-bar" style={{ height: '70%' }}></div>
<div className="waveform-bar" style={{ height: '40%' }}></div>
<div className="waveform-bar" style={{ height: '60%' }}></div>
<div className="waveform-bar" style={{ height: '85%' }}></div>
<div className="waveform-bar" style={{ height: '45%' }}></div>
<div className="waveform-bar" style={{ height: '30%' }}></div>
<div className="waveform-bar" style={{ height: '55%' }}></div>
<div className="waveform-bar" style={{ height: '75%' }}></div>
<div className="waveform-bar" style={{ height: '40%' }}></div>
<div className="waveform-bar" style={{ height: '20%' }}></div>
</div>
<span className="text-caption font-label-md text-on-surface-variant">0:14</span>
</div>
<span className="text-[10px] text-outline ml-2 font-label-md">10:45 AM</span>
</div>
{/*  Receiver Message: Typing Indicator  */}
<div className="flex items-center gap-2 max-w-[85%] mt-2 animate-pulse-soft">
<div className="receiver-glass px-4 py-2 rounded-full flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-outline"></div>
<div className="w-1.5 h-1.5 rounded-full bg-outline"></div>
<div className="w-1.5 h-1.5 rounded-full bg-outline"></div>
</div>
</div>
</main>

    </div>
  );
};

export default OmniChatThread;
