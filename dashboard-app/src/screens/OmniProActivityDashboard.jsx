import React, { useEffect } from 'react';

const OmniProActivityDashboard = () => {
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
      <header className="w-full top-0 sticky z-30 bg-surface dark:bg-surface shadow-sm mb-stack-gap-lg rounded-xl overflow-hidden">
<div className="flex justify-between items-center px-6 py-4 w-full">
<div className="flex items-center gap-4">
<button className="md:hidden p-2 hover:bg-surface-bright transition-colors duration-200 active:scale-95 duration-150">
<span className="material-symbols-outlined text-primary" data-icon="grid_view">grid_view</span>
</button>
<h1 className="font-title-md text-title-md font-bold text-primary dark:text-primary">Activity Insight</h1>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center bg-surface-container h-10 px-4 rounded-full border border-outline-variant">
<span className="material-symbols-outlined text-outline text-sm" data-icon="search">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm text-on-surface placeholder:text-outline-variant" placeholder="Search activity..." type="text"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-primary-container overflow-hidden active:scale-95 duration-150 cursor-pointer">
<img className="w-full h-full object-cover" data-alt="A professional close-up studio portrait of a senior creative technologist with a thoughtful expression, set against a dark moody atmospheric background with subtle purple and blue lighting highlights. High fidelity 8k resolution, cinematic lighting, modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSsNKbV_q58UNrO66NDdkUr8Jjw1tCnwj8cqmU9ODcFcJftXX_k8JjiFSppaE1esmVJ5VtCtRqNwF8vzhF_tnmYOEWgLvDK0a9L-zZXxGEbIvbzuckUHT-PpgBtHsoNcnUnBHqXe8vMJVNSIySmbsrtcMXAkxyCFgSV6IY7hc9ulfBtn36mZmxaooua6hWL9S3mUzIVVORMCvg4Jsvj3MJT0iStYnYuoNeHl_dOYqj24Ky_eXgMAOptg"/>
</div>
</div>
</div>
</header>
<main className="relative z-10 flex-1 md:ml-64 w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-8">
{/*  Top AppBar  */}
<header className="w-full top-0 sticky z-30 bg-surface dark:bg-surface shadow-sm mb-stack-gap-lg rounded-xl overflow-hidden">
<div className="flex justify-between items-center px-6 py-4 w-full">
<div className="flex items-center gap-4">
<button className="md:hidden p-2 hover:bg-surface-bright transition-colors duration-200 active:scale-95 duration-150">
<span className="material-symbols-outlined text-primary" data-icon="grid_view">grid_view</span>
</button>
<h1 className="font-title-md text-title-md font-bold text-primary dark:text-primary">Activity Insight</h1>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center bg-surface-container h-10 px-4 rounded-full border border-outline-variant">
<span className="material-symbols-outlined text-outline text-sm" data-icon="search">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm text-on-surface placeholder:text-outline-variant" placeholder="Search activity..." type="text"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-primary-container overflow-hidden active:scale-95 duration-150 cursor-pointer">
<img className="w-full h-full object-cover" data-alt="A professional close-up studio portrait of a senior creative technologist with a thoughtful expression, set against a dark moody atmospheric background with subtle purple and blue lighting highlights. High fidelity 8k resolution, cinematic lighting, modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSsNKbV_q58UNrO66NDdkUr8Jjw1tCnwj8cqmU9ODcFcJftXX_k8JjiFSppaE1esmVJ5VtCtRqNwF8vzhF_tnmYOEWgLvDK0a9L-zZXxGEbIvbzuckUHT-PpgBtHsoNcnUnBHqXe8vMJVNSIySmbsrtcMXAkxyCFgSV6IY7hc9ulfBtn36mZmxaooua6hWL9S3mUzIVVORMCvg4Jsvj3MJT0iStYnYuoNeHl_dOYqj24Ky_eXgMAOptg"/>
</div>
</div>
</div>
</header>
{/*  Bento Grid Dashboard  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/*  1. Real-time Asset Activity (Line Chart Area)  */}
<section className="md:col-span-8 glass-panel rounded-xl p-6 flex flex-col gap-4">
<div className="flex justify-between items-center">
<div>
<h2 className="font-title-md text-title-md text-on-surface">Asset Traffic</h2>
<p className="font-caption text-caption text-on-surface-variant">Real-time throughput analysis</p>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full font-label-md text-label-md">Live</span>
<select className="bg-surface-container border-none text-xs rounded-lg px-2 py-1 focus:ring-primary">
<option>Last 24h</option>
<option>Last 7d</option>
</select>
</div>
</div>
<div className="h-64 relative mt-4 flex items-end gap-1">
{/*  Faux Line Chart Visual  */}
<div className="absolute inset-0 flex flex-col justify-between py-2 text-[10px] text-outline opacity-50 pointer-events-none">
<div className="border-b border-white/5 w-full">2.5 GB/s</div>
<div className="border-b border-white/5 w-full">1.8 GB/s</div>
<div className="border-b border-white/5 w-full">1.2 GB/s</div>
<div className="border-b border-white/5 w-full">0.6 GB/s</div>
<div>0</div>
</div>
<svg className="w-full h-full z-10" viewbox="0 0 800 200">
<path d="M0,150 Q100,50 200,120 T400,100 T600,160 T800,80" fill="none" stroke="#c0c1ff" stroke-linecap="round" stroke-width="3"></path>
<path d="M0,150 Q100,50 200,120 T400,100 T600,160 T800,80 V200 H0 Z" fill="url(#gradient)" opacity="0.1"></path>
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{ stopColor: '#c0c1ff', stopOpacity: '1' }}></stop>
<stop offset="100%" style={{ stopColor: '#c0c1ff', stopOpacity: '0' }}></stop>
</lineargradient>
</defs>
<circle className="animate-pulse" cx="200" cy="120" fill="#c0c1ff" r="5"></circle>
<circle cx="800" cy="80" fill="#c0c1ff" r="5"></circle>
</svg>
</div>
<div className="grid grid-cols-3 gap-4 pt-4 border-t border-outline-variant">
<div className="text-center">
<p className="font-caption text-caption text-on-surface-variant">Uploads</p>
<p className="font-title-md text-title-md text-primary">1.2 TB</p>
</div>
<div className="text-center">
<p className="font-caption text-caption text-on-surface-variant">Downloads</p>
<p className="font-title-md text-title-md text-secondary">4.8 TB</p>
</div>
<div className="text-center">
<p className="font-caption text-caption text-on-surface-variant">Shared</p>
<p className="font-title-md text-title-md text-tertiary">242</p>
</div>
</div>
</section>
{/*  2. Performance Metrics  */}
<section className="md:col-span-4 flex flex-col gap-gutter">
<div className="glass-panel rounded-xl p-5 flex-1 primary-glow border-primary/20">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary" data-icon="storage">storage</span>
<h3 className="font-label-md text-label-md text-on-surface">Storage Usage</h3>
</div>
<div className="relative pt-1">
<div className="flex mb-2 items-center justify-between">
<div>
<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary/10">
                                    Capacity
                                </span>
</div>
<div className="text-right">
<span className="text-xs font-semibold inline-block text-primary">
                                    82%
                                </span>
</div>
</div>
<div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-surface-container-highest">
<div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary" style={{ width: '82%' }}></div>
</div>
<p className="text-[10px] text-on-surface-variant">16.4 TB of 20 TB used. 3.6 TB remaining.</p>
</div>
</div>
<div className="glass-panel rounded-xl p-5 flex-1">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-tertiary" data-icon="speed">speed</span>
<h3 className="font-label-md text-label-md text-on-surface">Global Sync Speed</h3>
</div>
<div className="flex items-end gap-2">
<span className="font-display-lg text-title-md leading-none text-tertiary">980</span>
<span className="font-label-md text-label-md text-on-surface-variant mb-1">Mbps</span>
</div>
<div className="mt-4 flex gap-1">
<div className="h-8 flex-1 bg-tertiary/20 rounded-sm"></div>
<div className="h-10 flex-1 bg-tertiary/40 rounded-sm"></div>
<div className="h-6 flex-1 bg-tertiary/20 rounded-sm"></div>
<div className="h-12 flex-1 bg-tertiary rounded-sm"></div>
<div className="h-10 flex-1 bg-tertiary/60 rounded-sm"></div>
</div>
</div>
</section>
{/*  3. Detailed Activity Log  */}
<section className="md:col-span-8 glass-panel rounded-xl flex flex-col max-h-[500px]">
<div className="p-6 border-b border-outline-variant flex flex-col sm:flex-row justify-between gap-4">
<h2 className="font-title-md text-title-md text-on-surface">Activity Stream</h2>
<div className="flex bg-surface-container-highest p-1 rounded-lg">
<button className="px-4 py-1 text-xs font-bold bg-primary text-on-primary rounded-md">Me</button>
<button className="px-4 py-1 text-xs text-on-surface-variant hover:text-on-surface transition-colors">Team</button>
<button className="px-4 py-1 text-xs text-on-surface-variant hover:text-on-surface transition-colors">System</button>
</div>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
{/*  Activity Item  */}
<div className="flex gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary-container shrink-0 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined" data-icon="cloud_upload">cloud_upload</span>
</div>
<div className="flex-1 border-b border-outline-variant pb-4">
<div className="flex justify-between items-start">
<h4 className="font-label-md text-label-md text-on-surface">Asset "Project_Nova_v2.zip" uploaded</h4>
<span className="text-[10px] text-on-surface-variant">2 mins ago</span>
</div>
<p className="font-caption text-caption text-on-surface-variant mt-1">Uploaded to <span className="text-primary">Shared Production</span> folder. Total size 1.4GB.</p>
</div>
</div>
{/*  Activity Item  */}
<div className="flex gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary shrink-0 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined" data-icon="share">share</span>
</div>
<div className="flex-1 border-b border-outline-variant pb-4">
<div className="flex justify-between items-start">
<h4 className="font-label-md text-label-md text-on-surface">Shared "Design_System_Tokens"</h4>
<span className="text-[10px] text-on-surface-variant">45 mins ago</span>
</div>
<p className="font-caption text-caption text-on-surface-variant mt-1">Access granted to <span className="text-secondary">3 external collaborators</span>.</p>
</div>
</div>
{/*  Activity Item  */}
<div className="flex gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-tertiary-container/20 flex items-center justify-center text-tertiary shrink-0 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined" data-icon="download">download</span>
</div>
<div className="flex-1 border-b border-outline-variant pb-4">
<div className="flex justify-between items-start">
<h4 className="font-label-md text-label-md text-on-surface">Large Batch Download Started</h4>
<span className="text-[10px] text-on-surface-variant">1h ago</span>
</div>
<p className="font-caption text-caption text-on-surface-variant mt-1">Fetching <span className="text-tertiary">142 assets</span> (8.4GB) from Tokyo Node.</p>
</div>
</div>
{/*  Activity Item  */}
<div className="flex gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-error-container/20 flex items-center justify-center text-error shrink-0 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined" data-icon="warning">warning</span>
</div>
<div className="flex-1 pb-4">
<div className="flex justify-between items-start">
<h4 className="font-label-md text-label-md text-on-surface">Security Alert: Unusual Access</h4>
<span className="text-[10px] text-on-surface-variant">3h ago</span>
</div>
<p className="font-caption text-caption text-on-surface-variant mt-1">Failed login attempt detected from unknown IP in Frankfurt.</p>
</div>
</div>
</div>
</section>
{/*  4. Collaboration Insights  */}
<section className="md:col-span-4 flex flex-col gap-gutter">
<div className="glass-panel rounded-xl p-6">
<h3 className="font-label-md text-label-md text-on-surface mb-6">Active Collaborators</h3>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-10 h-10 rounded-full object-cover" data-alt="Close-up headshot of a young professional woman with short dark hair and modern glasses, bright studio lighting with cyan and magenta rim light, tech-themed bokeh background, sharp focus, 8k resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCM27F73imq3d8kdYcUOnlo3b1dTqRwCM8OSjwBxSm4QeJjNK1tUumaIXS3smFCCFZpBNLwyI1ZkuNpODvqe4A42K_zfw7l7bNYppetvfx16HDfGAinvt51uJ59OZWSK_jeL-aqxOJ6y4Xh-naY9KYrqENziX2vbIGgQZxVJwenFHJN41sgjf2ivBfhcimOyE-ci_ScU-tHZ_TN9mI3azlySexe16NsDtJ8DKnf7lN_9EIT-M2Yx-DOQ"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-surface rounded-full"></div>
</div>
<div className="flex-1">
<p className="text-sm font-semibold">Elena Rossi</p>
<p className="text-[10px] text-on-surface-variant">Editing: Brand_Assets</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-10 h-10 rounded-full object-cover" data-alt="Portrait of a male creative director with a salt-and-pepper beard, wearing a minimal black turtleneck, soft natural lighting against a dark grey textured wall, clean professional aesthetic, high-end photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjw-MaKtJjxkZ4IwMUguSH9U0B-GMOMT71fluTGpNV_Q42XijrGvSB4t2KizV7GynzBeQ2xkvokRoNIhABkGgvLs9_Cf2Zi1th2yPHDVZag4BgzyPJeVUzYO78db3EnZd-eVpMeTXscTaU7P4RSH0SifoA5oxTU9dhkzGhcctVC_edpx6n2TLG2QKC10cCptCF6CcbjyEC0rYFSGOuxosBe-tC9SX3MqsDMUysVe20VdvaGJeWG-uC5w"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-surface rounded-full"></div>
</div>
<div className="flex-1">
<p className="text-sm font-semibold">Marcus Chen</p>
<p className="text-[10px] text-on-surface-variant">Viewing: Q4_Roadmap</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-10 h-10 rounded-full object-cover" data-alt="Macro portrait of a professional UX designer with colorful braided hair and a warm smile, soft neon lighting reflecting in eyes, vibrant cinematic atmosphere, ultra-high definition, artistic style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuABWaHF3XZ7lVS8iiNGUtQZDbfP0cnQLp29SK8ti_FEE3xVzoww3duODDHjnm1GlqRw-xzOy_QC6346J_ETxMbqA8SvNSRW4opYfiAdm8rw16EjDcv982kyzLUBJ7qigS4NsvvlpoHNRDPg18MXnIIJJ3MYx2Dh__oO3-VDTomZohT6_d5IwSlAxQwKIGrJHlShfR57leUR42wFnfZV1sHmu9DyKI3b6AiOBUOm4782ulwcbP5xHz8o5A"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-yellow-500 border-2 border-surface rounded-full"></div>
</div>
<div className="flex-1">
<p className="text-sm font-semibold">Sasha Vane</p>
<p className="text-[10px] text-on-surface-variant">Idle (15m)</p>
</div>
</div>
</div>
<button className="w-full mt-6 py-2 bg-surface-container-highest hover:bg-primary/20 transition-colors rounded-lg text-xs font-bold text-primary">Manage Team</button>
</div>
<div className="glass-panel rounded-xl p-6 bg-secondary-container/5 border-secondary/10">
<h3 className="font-label-md text-label-md text-on-surface mb-4">Pending Approvals</h3>
<div className="flex items-center justify-between mb-4">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-high flex items-center justify-center text-[10px]">ML</div>
<div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-high flex items-center justify-center text-[10px]">JK</div>
</div>
<span className="px-2 py-1 bg-secondary/20 text-secondary text-[10px] font-bold rounded">4 Requests</span>
</div>
<p className="text-xs text-on-surface-variant mb-4">You have access requests for "Confidential_Archive_2024".</p>
<div className="flex gap-2">
<button className="flex-1 py-2 bg-secondary text-on-secondary rounded-lg text-xs font-bold active:scale-95 transition-all">Review All</button>
<button className="px-3 py-2 bg-surface-container-highest rounded-lg active:scale-95 transition-all">
<span className="material-symbols-outlined text-sm" data-icon="close">close</span>
</button>
</div>
</div>
</section>
</div>
</main>
<nav className="flex-1 space-y-2">
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-all rounded-lg font-label-md text-label-md" href="#">
<span className="material-symbols-outlined" data-icon="folder_shared">folder_shared</span>
                All Assets
            </a>
<a className="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container rounded-lg font-bold font-label-md text-label-md" href="#">
<span className="material-symbols-outlined" data-icon="analytics" style={{ fontVariationSettings: '"FILL" 1' }}>analytics</span>
                Activity
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-all rounded-lg font-label-md text-label-md" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
                Shared with me
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-all rounded-lg font-label-md text-label-md" href="#">
<span className="material-symbols-outlined" data-icon="star">star</span>
                Starred
            </a>
<div className="pt-4 mt-4 border-t border-outline-variant">
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-all rounded-lg font-label-md text-label-md" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
                    Settings
                </a>
</div>
</nav>
    </div>
  );
};

export default OmniProActivityDashboard;
