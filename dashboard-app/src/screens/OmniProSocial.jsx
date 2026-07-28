import React, { useEffect } from 'react';

const OmniProSocial = () => {
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
      <header className="fixed top-0 w-full z-50 bg-surface-container/80 backdrop-blur-xl dark:bg-surface-container-low/80 border-b border-white/10 shadow-2xl shadow-black/50 flex items-center justify-between px-margin-mobile md:px-margin-desktop w-full h-16">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-primary-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A clean, professional headshot of a software engineer in their 30s, looking directly at the camera with a friendly expression. The lighting is crisp and modern, featuring cool blue and soft white tones. The background is a slightly blurred high-tech workspace with subtle purple ambient lighting, aligning with a premium Omni Pro aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzHoP-jcKA4Te5_s9H7vqUGXqnUYA9vqr2pHVTj5R0vy9pvYGd11cMRuDu98x86-s_FrzPzu01-yVgH3WTmzvuG0NRKJjj5WdTcLAGbZE8pXH4tU19QUIXf_QAFHaSb-pGRJXLMRo3aRAMvZZAzDznBoafpXwX0x0qta4l9EVfyMEXpSvTzgr0j1yxZTTbea11rig6NmVqawSnK9CTzxlKaJ5wmPAYwz4yuAOXK7RCevmXmQ0BAk7Ubg"/>
</div>
<span className="font-display-lg text-primary dark:text-primary-fixed-dim tracking-tighter text-[24px] md:text-[32px]">Omni - Pro Social</span>
</div>
<button className="material-symbols-outlined text-primary p-2 hover:bg-white/5 transition-colors duration-300 rounded-full active:scale-95 transition-transform duration-300 ease-out" data-icon="settings">settings</button>
</header>
<main className="pt-24 pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
{/*  Search & Add Friends Section (Simplified for Pro Utility)  */}
<section className="mb-stack-gap-lg">
<div className="glass-panel rounded-xl p-6 pro-shadow">
<h2 className="font-title-md text-title-md text-primary mb-4">Add Friends</h2>
<div className="flex flex-col md:flex-row gap-4">
<div className="flex-1 relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
<input className="w-full pl-12 pr-4 py-4 bg-surface-container-highest border border-outline-variant rounded-lg text-body-lg focus:ring-2 focus:ring-primary-container focus:outline-none transition-all" placeholder="Search by name or OmniID..." type="text"/>
</div>
<button className="bg-primary-container text-on-primary-container font-label-md text-label-md px-8 py-4 rounded-lg flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all">
<span className="material-symbols-outlined" data-icon="person_add">person_add</span>
                        INVITE USER
                    </button>
</div>
<div className="mt-4 flex items-center justify-between p-4 bg-surface-container-low rounded-lg border border-dashed border-outline-variant">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary" data-icon="link">link</span>
<span className="text-body-md font-medium text-on-surface-variant">omni.pro/invite/user-x8291</span>
</div>
<button className="text-primary font-label-md hover:underline active:scale-95">Copy Link</button>
</div>
</div>
</section>
{/*  Friends List (High Legibility Bento-style layout)  */}
<section>
<div className="flex items-center justify-between mb-6">
<h2 className="font-title-md text-title-md text-on-surface">Connections (24)</h2>
<div className="flex gap-2">
<button className="p-2 rounded-lg bg-surface-container-highest text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="sort">sort</span>
</button>
<button className="p-2 rounded-lg bg-surface-container-highest text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 gap-4">
{/*  Friend Row 1  */}
<div className="glass-panel p-5 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-surface-container-highest/50 transition-all pro-shadow border-l-4 border-l-primary">
<div className="flex items-center gap-5 w-full md:w-auto">
<div className="relative">
<div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-container">
<img className="w-full h-full object-cover" data-alt="A professional portrait of a senior creative director with stylish glasses and silver hair. The background is a clean, minimalist design studio with soft focus. The aesthetic is sophisticated and high-contrast, featuring deep greys and vibrant cyan accents, perfectly fitting the Omni Pro interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd54ma1qc7tzNhQuzbD7uHoCk59UmuZaq2FYXdDbipQ_kqPV_lqmtfYx5BpgWFRJp5iah9SY7bDeGfUYxeNB6ZYyiKmDlr6fDWv4QGHKlJK8rmn5LZYfSOM7r39wF1226a14p8ZTHD0buw3l1drHAMDVKW485mehTBPq4zv-Ba1m8VxsyzYH6vXe6cq0Te2qYjS-nU_nGKndHGl3LcKwRTAwnasiPRTa10uaqm-Dr7Xn54VrxIddpuaQ"/>
</div>
<div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-surface-container rounded-full"></div>
</div>
<div>
<h3 className="font-title-md text-body-lg font-bold text-on-surface">Alexander Vance</h3>
<p className="text-on-surface-variant font-body-md">Senior Architect • Online</p>
</div>
</div>
<div className="flex flex-wrap gap-3 w-full md:w-auto">
<button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-surface-container-highest text-primary border border-primary/20 rounded-lg font-label-md hover:bg-primary/10 transition-all active:scale-95">
<span className="material-symbols-outlined" data-icon="chat">chat</span>
                            MESSAGE
                        </button>
<button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-secondary-container text-on-secondary-container rounded-lg font-label-md hover:brightness-110 transition-all active:scale-95">
<span className="material-symbols-outlined" data-icon="folder_shared">folder_shared</span>
                            VIEW SHARED CONTENT
                        </button>
</div>
</div>
{/*  Friend Row 2  */}
<div className="glass-panel p-5 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-surface-container-highest/50 transition-all pro-shadow">
<div className="flex items-center gap-5 w-full md:w-auto">
<div className="relative">
<div className="w-16 h-16 rounded-full overflow-hidden border-2 border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A portrait of a young female data scientist with a confident smile. She is wearing a dark navy blazer, and the lighting is a dramatic split-lighting style with magenta and deep blue highlights. The background features abstract data visualizations in low-opacity, maintaining the Omni Pro visual language." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7YmQaloi1mA-RVlhbgflqgB-UEWRQ_3qj0lxNFXs7AkpWbFceZvdN8GKgqO6M9IjN1zr0v-aNc1hcUNV9_xkVldHsbnjRsI_NkzIV6lFm-YqtEU5pN195aYNgWuyTyILONzvt6rX_lkB5GFNxhgv_R6JC0AVFHdzXNkiSazBKggYA9Z6dmlPk_GfC4fVSrDFi9aU8GRYL5NJJ-mgiSSSeoQWVN18qhcqRYBqp-M7yiAEoOobyvwTQ8A"/>
</div>
<div className="absolute bottom-0 right-0 w-4 h-4 bg-outline border-2 border-surface-container rounded-full"></div>
</div>
<div>
<h3 className="font-title-md text-body-lg font-bold text-on-surface">Elena Rodriguez</h3>
<p className="text-on-surface-variant font-body-md">Data Scientist • Away (2h)</p>
</div>
</div>
<div className="flex flex-wrap gap-3 w-full md:w-auto">
<button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-surface-container-highest text-primary border border-primary/20 rounded-lg font-label-md hover:bg-primary/10 transition-all active:scale-95">
<span className="material-symbols-outlined" data-icon="chat">chat</span>
                            MESSAGE
                        </button>
<button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-secondary-container text-on-secondary-container rounded-lg font-label-md hover:brightness-110 transition-all active:scale-95">
<span className="material-symbols-outlined" data-icon="folder_shared">folder_shared</span>
                            VIEW SHARED CONTENT
                        </button>
</div>
</div>
{/*  Friend Row 3  */}
<div className="glass-panel p-5 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-surface-container-highest/50 transition-all pro-shadow">
<div className="flex items-center gap-5 w-full md:w-auto">
<div className="relative">
<div className="w-16 h-16 rounded-full overflow-hidden border-2 border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A portrait of a male product designer in a bright, airy loft studio. He has a beard and is wearing a simple black t-shirt. The overall tone is high-legibility and clean, with soft natural light coming from a large window. The color palette is neutral with subtle warm undertones, consistent with the professional Omni Pro aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXG-hAOeL-bCA33jb6e7mBGJfRLzlyQkY4O5ndH699DHsBQQVMSO2Sjv8voxBl-waaE6UnoeJPcc-kGX5-D-nkRnxXVoxN5w-JPEQzmSoNQk9_Fe4MzB6wI5i_480_aYVVLLqnbxubIU6G7Mk2tKqTEqwqHRPRarXkTGIke61I1YOgsL9sC5iipBDj9nyebeiqh5WOYrMXPmvuVhtDaWRYG5HjEidLm9X9FnVD62phSeO15I41LAuEng"/>
</div>
</div>
<div>
<h3 className="font-title-md text-body-lg font-bold text-on-surface">Marcus Thorne</h3>
<p className="text-on-surface-variant font-body-md">Lead Designer • Offline</p>
</div>
</div>
<div className="flex flex-wrap gap-3 w-full md:w-auto">
<button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-surface-container-highest text-primary border border-primary/20 rounded-lg font-label-md hover:bg-primary/10 transition-all active:scale-95">
<span className="material-symbols-outlined" data-icon="chat">chat</span>
                            MESSAGE
                        </button>
<button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-secondary-container text-on-secondary-container rounded-lg font-label-md hover:brightness-110 transition-all active:scale-95">
<span className="material-symbols-outlined" data-icon="folder_shared">folder_shared</span>
                            VIEW SHARED CONTENT
                        </button>
</div>
</div>
</div>
</section>
{/*  Activity Summary (Pro Metric)  */}
<section className="mt-stack-gap-lg grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="glass-panel p-6 rounded-xl text-center">
<p className="text-on-surface-variant font-label-md mb-2">NETWORK REACH</p>
<div className="text-display-lg text-primary text-[32px] md:text-[40px] font-bold">1,240</div>
<p className="text-caption text-tertiary mt-2">+12% this month</p>
</div>
<div className="glass-panel p-6 rounded-xl text-center">
<p className="text-on-surface-variant font-label-md mb-2">SHARED ASSETS</p>
<div className="text-display-lg text-secondary text-[32px] md:text-[40px] font-bold">842 GB</div>
<p className="text-caption text-secondary-fixed mt-2">124 active mirrors</p>
</div>
<div className="glass-panel p-6 rounded-xl text-center">
<p className="text-on-surface-variant font-label-md mb-2">COLLABORATIONS</p>
<div className="text-display-lg text-tertiary text-[32px] md:text-[40px] font-bold">14</div>
<p className="text-caption text-tertiary-fixed mt-2">3 pending approval</p>
</div>
</section>
</main>
<nav className="fixed bottom-0 w-full rounded-t-xl z-50 bg-surface-container-lowest/70 backdrop-blur-2xl dark:bg-surface-container-lowest/70 border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.4)] flex justify-around items-center w-full px-2 py-3 pb-safe">
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant hover:text-primary transition-all duration-300" href="#">
<span className="material-symbols-outlined" data-icon="dynamic_feed">dynamic_feed</span>
<span className="font-label-md text-label-md">Feed</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant hover:text-primary transition-all duration-300" href="#">
<span className="material-symbols-outlined" data-icon="group_work">group_work</span>
<span className="font-label-md text-label-md">Spaces</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant hover:text-primary transition-all duration-300" href="#">
<span className="material-symbols-outlined text-[32px] text-primary-container" data-icon="add_circle">add_circle</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant hover:text-primary transition-all duration-300" href="#">
<span className="material-symbols-outlined" data-icon="forum">forum</span>
<span className="font-label-md text-label-md">Chat</span>
</a>
<a className="flex flex-col items-center justify-center bg-primary-container/30 text-primary dark:text-primary-fixed-dim rounded-xl px-3 py-1 shadow-[0_0_15px_rgba(128,131,255,0.2)]" href="#">
<span className="material-symbols-outlined" data-icon="group" style={{ fontVariationSettings: '"FILL" 1' }}>group</span>
<span className="font-label-md text-label-md">Social</span>
</a>
</nav>
    </div>
  );
};

export default OmniProSocial;
