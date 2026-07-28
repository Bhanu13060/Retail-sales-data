import React, { useEffect } from 'react';

const OmniShareHub = () => {
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
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 w-full bg-surface">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-primary" style={{ fontSize: '32px' }}>hub</span>
<span className="font-display-lg text-display-lg font-bold text-primary">Omni</span>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors active:scale-95">
<span className="material-symbols-outlined text-on-surface-variant">search</span>
</button>
</header>
<main className="pt-24 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
{/*  Hero Section  */}
<section className="mb-xl">
<h1 className="font-headline-lg text-headline-lg mb-sm text-on-surface">Share Hub</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Connect, collaborate, and distribute content seamlessly across the Omni ecosystem.</p>
</section>
{/*  Quick Actions Grid  */}
<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-md mb-xl">
{/*  Action Button: Upload File  */}
<button className="group relative flex flex-col items-center justify-center aspect-square rounded-xl bg-primary-container text-on-primary-container p-md shadow-sm hover:shadow-md transition-all active:scale-95 overflow-hidden">
<div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="material-symbols-outlined mb-sm" style={{ fontSize: '48px' }}>upload_file</span>
<span className="font-label-md text-label-md text-center">Upload File</span>
</button>
{/*  Action Button: Post Thought  */}
<button className="group relative flex flex-col items-center justify-center aspect-square rounded-xl bg-secondary-container text-on-secondary-container p-md shadow-sm hover:shadow-md transition-all active:scale-95 overflow-hidden">
<div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="material-symbols-outlined mb-sm" style={{ fontSize: '48px' }}>psychology</span>
<span className="font-label-md text-label-md text-center">Post Thought</span>
</button>
{/*  Action Button: Share Link  */}
<button className="group relative flex flex-col items-center justify-center aspect-square rounded-xl bg-tertiary-container text-on-tertiary-container p-md shadow-sm hover:shadow-md transition-all active:scale-95 overflow-hidden">
<div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="material-symbols-outlined mb-sm" style={{ fontSize: '48px' }}>link</span>
<span className="font-label-md text-label-md text-center">Share Link</span>
</button>
{/*  Action Button: Record Voice  */}
<button className="group relative flex flex-col items-center justify-center aspect-square rounded-xl bg-surface-container-highest text-primary p-md shadow-sm hover:shadow-md transition-all active:scale-95 overflow-hidden">
<div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="material-symbols-outlined mb-sm" style={{ fontSize: '48px' }}>mic</span>
<span className="font-label-md text-label-md text-center">Record Voice</span>
</button>
{/*  Action Button: List Item  */}
<button className="group relative flex flex-col items-center justify-center aspect-square rounded-xl bg-surface-variant text-on-surface-variant p-md shadow-sm hover:shadow-md transition-all active:scale-95 overflow-hidden">
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="material-symbols-outlined mb-sm" style={{ fontSize: '48px' }}>list_alt</span>
<span className="font-label-md text-label-md text-center">List Item</span>
</button>
</section>
{/*  Recent Shares Section  */}
<section>
<div className="flex justify-between items-center mb-md">
<h2 className="font-headline-md text-headline-md text-on-surface">Recent Shares</h2>
<button className="text-primary font-label-md text-label-md hover:underline transition-all" >View All</button>
</div>
{/*  Bento-style Grid for Recent Shares  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-md">
{/*  Large Featured Share  */}
<div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant p-lg hover:shadow-lg transition-all">
<div className="flex flex-col md:flex-row gap-lg items-start">
<div className="w-full md:w-1/2 aspect-video rounded-lg overflow-hidden bg-surface-container-high relative">
<img className="w-full h-full object-cover" data-alt="A sophisticated high-tech abstract visualization of a digital architectural blueprint. The style is minimalist with thin electric purple lines on a pristine light grey background. Soft ambient lighting creates a futuristic, airy mood, perfectly reflecting the Omni brand's clean, modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKmz9kCl9NCQdnxB1B6d10gOBQFWsk6bi1sZyMxqR3Cjsw_ShjC1beMyCw3QnnRG5ypL3hYfTdsHc8-Vk8EDa7dYSuOVcx8gLH24lFSe4aELlD-BLDWZbkatyhtpRoO1z4q0nC7An6C6ZmeaHiMQzSr_DbR0HKUOxHF0bUKPrlfF37IM0sAzIvD1SZNnlLf8rnOaENA8BkHgbrVo3Ec1JIgGztOV5HBY1imyFADXwbkhJfPeILGsUrJA" />
<div className="absolute top-sm right-sm px-sm py-xs bg-primary text-on-primary text-[10px] rounded-full font-bold uppercase tracking-widest">Featured</div>
</div>
<div className="flex-1">
<div className="flex items-center gap-xs text-primary mb-xs">
<span className="material-symbols-outlined" style={{ fontSize: '18px' }}>article</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Project Proposal</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Q4 Expansion Strategy.pdf</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-md">Detailed roadmap for the global service expansion starting December 2023. Includes budget allocations and talent acquisition plans.</p>
<div className="flex items-center gap-sm">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-surface bg-secondary-fixed flex items-center justify-center text-[10px] font-bold">JD</div>
<div className="w-8 h-8 rounded-full border-2 border-surface bg-tertiary-fixed flex items-center justify-center text-[10px] font-bold">AS</div>
</div>
<span className="text-label-sm text-outline font-label-sm">+12 Shared with</span>
</div>
</div>
</div>
</div>
{/*  Small Grid Items  */}
<div className="md:col-span-4 flex flex-col gap-md">
{/*  Share Item: Voice Note  */}
<div className="p-md rounded-xl bg-surface-container border border-outline-variant hover:border-primary transition-all cursor-pointer">
<div className="flex items-center gap-md">
<div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined">mic</span>
</div>
<div className="flex-1 min-w-0">
<h4 className="font-label-md text-label-md text-on-surface truncate">Client Feedback Session</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">2 mins ago • 4.2 MB</p>
</div>
</div>
</div>
{/*  Share Item: Link  */}
<div className="p-md rounded-xl bg-surface-container border border-outline-variant hover:border-primary transition-all cursor-pointer">
<div className="flex items-center gap-md">
<div className="w-12 h-12 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined">link</span>
</div>
<div className="flex-1 min-w-0">
<h4 className="font-label-md text-label-md text-on-surface truncate">Omni Design System Docs</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">1 hour ago • External</p>
</div>
</div>
</div>
{/*  Share Item: Image  */}
<div className="p-md rounded-xl bg-surface-container border border-outline-variant hover:border-primary transition-all cursor-pointer">
<div className="flex items-center gap-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="A minimalist photograph of a modern tech workspace with a single sleek laptop, a small green plant, and a cup of coffee on a light wood desk. The lighting is bright and natural, coming from a nearby window, casting soft shadows. The overall palette is neutral with soft warm tones, evoking a sense of calm and productivity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8YJzli6gxDQMDFDq1YXvTfrzAqAmgjUQ84NQm-CZCudu5PoAKkdUvvcH3UUUp6IP5tP5i1yhEBWUIedWOeKSLe319zeclPJCLDDd_8ebKq7_QTVKb7_rNKDwwxOpSqJ5fqVZqXHA4fwHZJfNSiYzN94WkU7Iw-JQF_Twof0EO21FnzOfsOUXQreWJ6aCq5mlgprsWeDz6c5IZajHMW4hz4IXjxhPE6jlGCbdyeEeqOPp6EVyqwoyyYw" />
</div>
<div className="flex-1 min-w-0">
<h4 className="font-label-md text-label-md text-on-surface truncate">Workspace_Snapshot.jpg</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">3 hours ago • 1.1 MB</p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-sm py-xs pb-safe bg-surface-container shadow-md rounded-t-xl">
<a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:bg-surface-variant transition-colors active:scale-90" href="{{DATA:SCREEN:SCREEN_13}}">
<span className="material-symbols-outlined">dynamic_feed</span>
<span className="font-label-sm text-label-sm">Feed</span>
</a>
{/*  ACTIVE TAB: Share  */}
<a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-3 py-1 active:scale-90 transition-transform" href="{{DATA:SCREEN:SCREEN_12}}">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>add_circle</span>
<span className="font-label-sm text-label-sm">Share</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:bg-surface-variant transition-colors active:scale-90" href="{{DATA:SCREEN:SCREEN_10}}">
<span className="material-symbols-outlined">group_work</span>
<span className="font-label-sm text-label-sm">Spaces</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:bg-surface-variant transition-colors active:scale-90" href="{{DATA:SCREEN:SCREEN_11}}">
<span className="material-symbols-outlined">notifications</span>
<span className="font-label-sm text-label-sm">Activity</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:bg-surface-variant transition-colors active:scale-90" href="{{DATA:SCREEN:SCREEN_8}}">
<span className="material-symbols-outlined">person</span>
<span className="font-label-sm text-label-sm">Profile</span>
</a>
</nav>
    </div>
  );
};

export default OmniShareHub;
