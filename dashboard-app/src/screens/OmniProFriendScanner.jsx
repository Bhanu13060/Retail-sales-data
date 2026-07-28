import React, { useEffect } from 'react';

const OmniProFriendScanner = () => {
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
      <header className="w-full top-0 sticky z-[60] bg-surface dark:bg-surface shadow-sm">
<div className="flex justify-between items-center px-4 md:px-[48px] w-full max-w-[1280px] mx-auto py-3">
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-surface-bright transition-colors duration-200 active:scale-95 rounded-full">
<span className="material-symbols-outlined text-primary" data-icon="grid_view">grid_view</span>
</button>
<h1 className="font-title-md text-title-md font-bold text-primary">Omni Pro</h1>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container active:scale-95 duration-150 cursor-pointer">
<img className="w-full h-full object-cover" data-alt="A high-fidelity portrait of a professional tech executive in a dark, moody office. The lighting is low-key with blue and purple highlights reflecting off glass surfaces, creating a cinematic, futuristic atmosphere. The subject has a confident expression, wearing a minimalist black turtleneck." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSDur9CU_OEHVXbd8OKmRTSeLNgTDB8hGkncqEB_AHDRA2nHKpFNdBAR2CJJqziCRQoFnmdGC7ChxXEgwQww0vFiVPFO_c3N0NDnT_2QbHQ2i4uwLzuJs9oh4Q_PNqVaJMmz4LqZDujCa92UvDAyUxB0PWwjGMjDn2UTJX3mN2YsbREoGaXDfoiFmQTJ12wEcWxf00o3BGNtQzfMlv0IP7W7ox8iARlcLgrB68_pxPjrhya7DXG0Lrww"/>
</div>
</div>
</div>
</header>
<main className="relative flex flex-col items-center justify-center min-h-[calc(100vh-140px)] px-margin-mobile md:px-margin-desktop py-stack-gap-lg pb-32">
{/*  Camera Background Simulation  */}
<div className="absolute inset-0 z-0 overflow-hidden">
<div className="w-full h-full scale-105 filter blur-md opacity-40 brightness-50" data-alt="A professional high-tech warehouse or server room interior, with deep blue and indigo neon lighting casting long shadows. Reams of optical fiber and glowing hardware racks create a complex, industrial background pattern. The depth of field is shallow, focusing on the foreground textures." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBy-amFHo9HAWzKetvKEl7mcNk97ZyWFlnMGwIixw1Pzts581IcPOJRbYhVQiCutowpPHf1uBLvyvigtqXM10io81ML63lo9BAjylqb9Kh8PluZrfax5v8U9CmdWjrLth9PBz5sAvjJSpJ6u6Kv8Am7sLoQf1J26F4S3gs9NyOi5ZafmX78kxCOwvnuAAWxymUYHjT40qgZjs1lxmO7yU8toWp-PvdVINtb56MvWijbOQ6Q8ZY7OJ8bjA")' }}></div>
{/*  Shader Overlay for Atmospheric Effect  */}

</div>
{/*  Scanner UI Container  */}
<div className="relative z-10 w-full max-w-lg flex flex-col items-center gap-stack-gap-lg">
{/*  Status Badge  */}
<div className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full backdrop-blur-md animate-pulse">
<div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#c0c1ff]"></div>
<span className="font-label-md text-label-md text-primary tracking-widest uppercase">Ready to Scan</span>
</div>
{/*  Viewfinder Area  */}
<div className="scanner-framer w-full aspect-square md:w-[400px] md:h-[400px] rounded-3xl overflow-hidden glass-panel flex items-center justify-center">
<div className="scanner-framer-inner absolute inset-0"></div>
{/*  Scanning Overlay  */}
<div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
<div className="scan-animation"></div>
</div>
{/*  Minimalist Target Reticle  */}
<div className="relative flex flex-col items-center justify-center">
<div className="w-64 h-64 border border-dashed border-primary/40 rounded-2xl flex items-center justify-center">
<span className="material-symbols-outlined text-primary/20 text-[120px]" data-icon="qr_code_scanner">qr_code_scanner</span>
</div>
<p className="mt-8 font-label-md text-label-md text-on-surface-variant text-center px-8">
                        Align asset tag or friend ID within the frame to automatically detect
                    </p>
</div>
</div>
{/*  Precision Controls  */}
<div className="grid grid-cols-2 gap-stack-gap-md w-full">
{/*  Share ID Button  */}
<button className="glass-panel flex flex-col items-center justify-center p-6 rounded-2xl group hover:bg-surface-bright active:scale-95 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined text-primary" data-icon="share">share</span>
</div>
<span className="font-label-md text-label-md text-on-surface">Share My ID</span>
</button>
{/*  Toggle Flash Button  */}
<button className="glass-panel flex flex-col items-center justify-center p-6 rounded-2xl group hover:bg-surface-bright active:scale-95 transition-all duration-300" id="flashToggle">
<div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="flashlight_off" id="flashIcon">flashlight_off</span>
</div>
<span className="font-label-md text-label-md text-on-surface">Toggle Flash</span>
</button>
</div>
{/*  Secondary Actions  */}
<div className="w-full flex justify-between items-center px-4">
<button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="photo_library">photo_library</span>
<span className="font-label-md text-label-md">Open Gallery</span>
</button>
<button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="history">history</span>
<span className="font-label-md text-label-md">Recent Scans</span>
</button>
</div>
</div>
</main>
<nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 bg-surface-container-high/80 dark:bg-surface-container-high/80 backdrop-blur-xl z-50 rounded-t-xl shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
<div className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary cursor-pointer transition-all">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
<span className="font-label-md text-label-md">Assets</span>
</div>
{/*  ACTIVE TAB: Collaborate (Logic: Scanning friends fits Collaborate intent)  */}
<div className="flex flex-col items-center justify-center text-primary font-bold scale-110 duration-300 cursor-pointer">
<span className="material-symbols-outlined" data-icon="hub" style={{ fontVariationSettings: '"FILL" 1' }}>hub</span>
<span className="font-label-md text-label-md">Collaborate</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary cursor-pointer transition-all">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="font-label-md text-label-md">Activity</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary cursor-pointer transition-all">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</div>
</nav>
    </div>
  );
};

export default OmniProFriendScanner;
