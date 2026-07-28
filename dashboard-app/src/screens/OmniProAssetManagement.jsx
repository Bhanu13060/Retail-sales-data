import React, { useEffect } from 'react';

const OmniProAssetManagement = () => {
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
      <header className="w-full top-0 sticky z-50 bg-surface shadow-sm transition-colors duration-200">
<div className="flex justify-between items-center px-6 md:px-12 w-full max-w-container-max-width mx-auto py-4">
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-primary hover:bg-surface-bright p-2 rounded-lg transition-colors" data-icon="grid_view">grid_view</button>
<h1 className="font-title-md text-title-md font-bold text-primary">Omni Pro</h1>
</div>
<div className="hidden md:flex flex-1 max-w-xl mx-8">
<div className="relative w-full group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" data-icon="search">search</span>
<input className="w-full bg-surface-container border-none rounded-xl pl-12 pr-4 py-2 text-on-surface focus:ring-2 focus:ring-primary-container transition-all" placeholder="Search assets, projects, or users..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary p-2 transition-colors" data-icon="filter_list">filter_list</button>
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold overflow-hidden border-2 border-primary/20">
<img className="w-full h-full object-cover" data-alt="Close-up professional headshot of a creative director in a high-tech studio environment. Soft cyan and purple accent lighting reflects off a pair of modern glasses. The background is a blurred digital workspace with multiple high-resolution monitors displaying complex data visualizations and UI layouts. High-fidelity glassmorphic aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxXwVPKnc1zPoxB3iLnzjstXO_-I1o6iZalGLONj5KEH-ZPWrbJg8GjXlq7T6sjRaewnFny5fo9re91yWuKlNS8nAjs5sc8pJbwcKalMHpj0xMeQuVskf6YrvnhJvHMXl0uQosc70o6pjqWzzyEXg2TXwpvt4Qk7axuQCFzbNQ2ynTQVBfNpTZLyRrBu7cFCznJMoEY3DtZEzWtQeRZZupCabzgUeeErH365K0yM3O6jndmfjQ2QtuIA"/>
</div>
</div>
</div>
</header>
<main className="max-w-container-max-width mx-auto px-6 md:px-12 mt-8">
{/*  Header Actions  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
<div>
<nav className="flex items-center gap-2 mb-2 text-on-surface-variant font-label-md text-label-md">
<span>Library</span>
<span className="material-symbols-outlined text-[16px]" data-icon="chevron_right">chevron_right</span>
<span className="text-primary">All Assets</span>
</nav>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Digital Assets</h2>
</div>
<div className="flex items-center gap-3">
{/*  View Toggle  */}
<div className="flex p-1 bg-surface-container rounded-xl">
<button className="p-2 rounded-lg transition-all active-view-toggle flex items-center" id="view-grid">
<span className="material-symbols-outlined text-[20px]" data-icon="grid_view">grid_view</span>
</button>
<button className="p-2 rounded-lg transition-all text-on-surface-variant hover:text-primary flex items-center" id="view-list">
<span className="material-symbols-outlined text-[20px]" data-icon="format_list_bulleted">format_list_bulleted</span>
</button>
</div>
<button className="flex items-center gap-2 bg-primary text-on-primary font-bold px-6 py-3 rounded-xl hover:bg-primary-fixed-dim active:scale-95 transition-all shadow-lg shadow-primary/20">
<span className="material-symbols-outlined" data-icon="add" style={{ fontVariationSettings: '"FILL" 1' }}>add</span>
<span>New Asset</span>
</button>
</div>
</div>
{/*  Bento Grid / Asset List  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter" id="asset-container">
{/*  Asset 1: Video  */}
<div className="glass-card rounded-2xl overflow-hidden p-0 flex flex-col group animate-stagger" style={{ animationDelay: '0.1s' }}>
<div className="relative aspect-video w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="A cinematic still of a futuristic city at night, with purple and teal neon lights reflecting off rainy asphalt. High-speed light trails from flying vehicles create dynamic streaks of color. The style is hyper-detailed 3D render with deep depth of field and soft bokeh, perfectly matching the Omni Pro technical aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy-jdWSID-4vUdAYgZ9CcefedbgOroBkZM8GWKy1gBnH2lDFwe2YuLhmwAPvzkTqBBYf9CzzxTgR_EvOBZPYvYjIF96Hybj9wESoYv8YpFo_8Dpp9Q7jkphVDC2WSiNTO-tLybnDhWE6-s0s23ViKziG199Xg2xilHw2iL5fud_qO6nPKi08r96gIr1cQtTurS6OavVKtPKpqmPHdoIdcAikfHb5yPbUC-CI4A-82AM6RZP37oBarhmw"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-3 left-3 px-2 py-1 bg-black/40 backdrop-blur-md rounded text-caption font-label-md text-white border border-white/10">02:45</div>
<button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
</div>
<div className="p-5 flex flex-col gap-3">
<div className="flex justify-between items-start">
<div className="flex flex-col">
<span className="text-on-surface font-label-md text-label-md truncate max-w-[200px]">Project_Final_v2.mp4</span>
<span className="text-on-surface-variant text-caption font-caption">124MB • Video</span>
</div>
<div className="w-8 h-8 rounded-lg bg-surface-variant flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-[18px]" data-icon="movie">movie</span>
</div>
</div>
<div className="flex items-center justify-between mt-2 pt-4 border-t border-white/5">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-tertiary flex items-center justify-center text-[10px] font-bold text-on-tertiary">A</div>
<span className="text-on-surface-variant text-caption">Alex</span>
</div>
<span className="text-on-surface-variant text-caption">2h ago</span>
</div>
</div>
</div>
{/*  Asset 2: Design  */}
<div className="glass-card rounded-2xl overflow-hidden p-0 flex flex-col group animate-stagger" style={{ animationDelay: '0.2s' }}>
<div className="relative aspect-video w-full overflow-hidden bg-surface-container-high flex items-center justify-center">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" data-alt="A sophisticated UI design system layout featuring glassmorphic components, vibrant purple primary buttons, and sleek data visualization charts. The composition is clean and organized, showing an array of interface elements like toggles, sliders, and nested cards. The lighting is soft and studio-quality with a focus on depth and layering." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdgljeAv2190fJZQ6HDZTqw4NaDBBCqtyLj50K8wT2RRaizA5jyqE6ZmBA4YT0QiOc5eNcMV2GhYA1G1BU5I2sTD8VSnsmWj7y7NvI-CFe_wLsJRHaYxZiTkAc3w8KLzvcB_3zf5c7PDBvYoCOrxpaQ9eMlSnR10WKIGqPGwfshLRtTM9GIYL28OC9_k_U9Ti2f-lfjCnjn-jvJ_w0lnEEJjL7dsA1XSMxs5CUu0Hnrju8DGckPdT3dQ"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-3xl bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-[32px]" data-icon="category" style={{ fontVariationSettings: '"FILL" 1' }}>category</span>
</div>
</div>
<button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
</div>
<div className="p-5 flex flex-col gap-3">
<div className="flex justify-between items-start">
<div className="flex flex-col">
<span className="text-on-surface font-label-md text-label-md truncate max-w-[200px]">UI_Kit_Master.fig</span>
<span className="text-on-surface-variant text-caption font-caption">45MB • Design File</span>
</div>
<div className="w-8 h-8 rounded-lg bg-surface-variant flex items-center justify-center">
<span className="material-symbols-outlined text-secondary text-[18px]" data-icon="draw">draw</span>
</div>
</div>
<div className="flex items-center justify-between mt-2 pt-4 border-t border-white/5">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-[10px] font-bold text-on-secondary">S</div>
<span className="text-on-surface-variant text-caption">Sarah</span>
</div>
<span className="text-on-surface-variant text-caption">Yesterday</span>
</div>
</div>
</div>
{/*  Asset 3: Document  */}
<div className="glass-card rounded-2xl overflow-hidden p-0 flex flex-col group animate-stagger" style={{ animationDelay: '0.3s' }}>
<div className="relative aspect-video w-full overflow-hidden bg-surface-container-low flex items-center justify-center">
<div className="w-full h-full absolute inset-0 opacity-10">

</div>
<div className="relative z-10 flex flex-col items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant text-[48px] opacity-40" data-icon="description">description</span>
<span className="text-caption text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded-full">PDF Document</span>
</div>
<button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
</div>
<div className="p-5 flex flex-col gap-3">
<div className="flex justify-between items-start">
<div className="flex flex-col">
<span className="text-on-surface font-label-md text-label-md truncate max-w-[200px]">Architecture_Specs.pdf</span>
<span className="text-on-surface-variant text-caption font-caption">12MB • Document</span>
</div>
<div className="w-8 h-8 rounded-lg bg-surface-variant flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary text-[18px]" data-icon="article">article</span>
</div>
</div>
<div className="flex items-center justify-between mt-2 pt-4 border-t border-white/5">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center text-[10px] font-bold text-on-primary-container">E</div>
<span className="text-on-surface-variant text-caption">Elena</span>
</div>
<span className="text-on-surface-variant text-caption">3d ago</span>
</div>
</div>
</div>
{/*  Empty Slot / Upload  */}
<div className="glass-card rounded-2xl overflow-hidden border-dashed border-2 border-white/10 flex flex-col items-center justify-center p-8 group cursor-pointer hover:border-primary/50 bg-transparent animate-stagger" style={{ animationDelay: '0.4s' }}>
<div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary-container transition-all duration-300 mb-4">
<span className="material-symbols-outlined text-[24px]" data-icon="upload">upload</span>
</div>
<span className="font-label-md text-label-md text-on-surface">Drop files to upload</span>
<span className="text-caption text-on-surface-variant mt-1">or browse files</span>
</div>
</div>
</main>
<nav className="flex items-center gap-2 mb-2 text-on-surface-variant font-label-md text-label-md">
<span>Library</span>
<span className="material-symbols-outlined text-[16px]" data-icon="chevron_right">chevron_right</span>
<span className="text-primary">All Assets</span>
</nav>
    </div>
  );
};

export default OmniProAssetManagement;
