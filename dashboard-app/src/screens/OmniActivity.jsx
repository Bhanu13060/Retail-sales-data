import React, { useEffect } from 'react';

const OmniActivity = () => {
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
      <header className="mb-lg">
<h1 className="font-headline-lg text-headline-lg md:text-headline-lg text-on-surface mb-xs">Activity</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Stay updated with your connections and shared spaces.</p>
</header>
<main className="pt-24 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
{/*  Header Section  */}
<header className="mb-lg">
<h1 className="font-headline-lg text-headline-lg md:text-headline-lg text-on-surface mb-xs">Activity</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Stay updated with your connections and shared spaces.</p>
</header>
{/*  Filters (Glassmorphism Chips)  */}
<div className="flex gap-sm mb-lg overflow-x-auto pb-sm">
<button className="px-md py-sm bg-primary text-on-primary rounded-full font-label-md text-label-md whitespace-nowrap shadow-sm" >All</button>
<button className="px-md py-sm bg-surface-container-high text-on-surface-variant rounded-full font-label-md text-label-md whitespace-nowrap hover:bg-surface-variant transition-colors" >Interactions</button>
<button className="px-md py-sm bg-surface-container-high text-on-surface-variant rounded-full font-label-md text-label-md whitespace-nowrap hover:bg-surface-variant transition-colors" >Shared Content</button>
<button className="px-md py-sm bg-surface-container-high text-on-surface-variant rounded-full font-label-md text-label-md whitespace-nowrap hover:bg-surface-variant transition-colors" >Projects</button>
</div>
{/*  Activity Feed (Bento-style List)  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/*  Timeline Column  */}
<div className="md:col-span-8 flex flex-col gap-md">
{/*  Date Header  */}
<div className="flex items-center gap-sm mt-md first:mt-0">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Today</span>
<div className="h-[1px] flex-grow bg-outline-variant"></div>
</div>
{/*  Activity Item: Sarah Liked  */}
<div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant flex items-start gap-md activity-card-hover transition-all cursor-pointer">
<div className="relative">
<img className="w-12 h-12 rounded-full object-cover border-2 border-surface-container" data-alt="A professional close-up portrait of a smiling woman with warm lighting and a soft-focus office background, consistent with a clean, high-end modern tech aesthetic. Her expression is friendly and engaging, lit by natural daylight. The image has a vibrant but natural color palette with crisp details." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrYPI3LB-NmlcdWwKkR3EXFuZfNgqSE9dVy0bQsskGsZxn0bg0Xe6r30Dhh7OhrMNWRgGdxAmrTa7gUoK6pc5YdOaYFFyia0zGD0-eeMVEtfiL5Nz0YtiexkR0bVnDdKpGX8jnGOPpy9iD4VxCj9a62BMfAJzdzP6w6uwA_JfAmBO5VMb4bGn0U5DiqmjW-S4BgIhY3FUD9Cwpumlv8XPHVbLD6HChxwrAGsYuWDdMkBCgsPV3dicJRA" />
<div className="absolute -bottom-1 -right-1 bg-primary text-on-primary rounded-full p-[2px] flex items-center justify-center">
<span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>favorite</span>
</div>
</div>
<div className="flex-grow">
<p className="font-body-md text-body-md text-on-surface leading-tight">
<span className="font-bold">Sarah</span> liked your photo 
                            <span className="text-on-surface-variant">"Sunset over the Valley"</span>
</p>
<span className="font-label-sm text-label-sm text-outline">2 minutes ago</span>
</div>
<div className="hidden sm:block">
<div className="w-16 h-16 rounded-lg overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A breathtaking cinematic landscape photograph of a sunset over a lush green valley, with purple and orange hues in the sky. The lighting is dramatic and warm, reflecting a serene and professional photography style. The colors are deeply saturated but clean, fitting the modern tech-forward visual language." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuPcBy8IIrE04pSeXrbfuVMhl2tgGI436JnilobA6Wf7qi_BgtHb9xD46S_ZtQdf6ypgn6repcbyKdKVn1xDOMsyKkcVJh9EI4Q2bseoOEMUPEHN3zmAoYSuXr3rpYYcSJOqRC57D1h33g4O33XDbU91Gz7jejMaGxWVFT9LXmse7zOqgV638t4Mzs-yW_PCjvbGWlxk4eIxggY8p3TZ_FTsKezM1yobXcqZa2j0Mg_CNmgbjdwdNa1g" />
</div>
</div>
</div>
{/*  Activity Item: Mark Joined Project  */}
<div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant flex items-start gap-md activity-card-hover transition-all cursor-pointer">
<div className="relative">
<img className="w-12 h-12 rounded-full object-cover border-2 border-surface-container" data-alt="A modern professional headshot of a man with a tech-savvy appearance, wearing a simple neutral shirt. The lighting is soft studio lighting with subtle cool shadows, matching the minimalist tech-forward design system. The background is a clean, solid light-blue surface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb5RQ9t9Kg7xcRA0LQWHbOVGcvqBssGu3vJWyeLHFK2eGAXSS8zn_4p5f2pl39eoHZ-7lMwDQ-arzQ5wxSGsNeFc1ldbSV_nMkgfXRw9S1Eq_CJWUXDZs0o7JBPXzfnOgJaUViyhkZlvwqQ83j7rTBZahIQtpiCaWtui_AkOu4ddl13Sv0mu2c2lKoxM_NXOvnLPL3JpsCrC672naomR4pu25O2aI4iSZAL2zugVOgbktBtxE-IrSASQ" />
<div className="absolute -bottom-1 -right-1 bg-secondary-container text-on-secondary-container rounded-full p-[2px] flex items-center justify-center">
<span className="material-symbols-outlined text-[14px]">group_add</span>
</div>
</div>
<div className="flex-grow">
<p className="font-body-md text-body-md text-on-surface leading-tight">
<span className="font-bold">Mark</span> joined 
                            <span className="text-primary font-semibold">Project Alpha</span>
</p>
<span className="font-label-sm text-label-sm text-outline">15 minutes ago</span>
<div className="mt-sm flex gap-xs">
<span className="px-sm py-[2px] bg-secondary-fixed text-on-secondary-fixed rounded-full text-label-sm font-label-sm">Developer</span>
<span className="px-sm py-[2px] bg-secondary-fixed text-on-secondary-fixed rounded-full text-label-sm font-label-sm">Tech-Lead</span>
</div>
</div>
<button className="px-md py-sm border border-outline-variant rounded-xl font-label-md text-label-md hover:bg-surface-container transition-colors" >View Project</button>
</div>
{/*  Date Header  */}
<div className="flex items-center gap-sm mt-md">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Yesterday</span>
<div className="h-[1px] flex-grow bg-outline-variant"></div>
</div>
{/*  Activity Item: Family Photos  */}
<div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant flex items-start gap-md activity-card-hover transition-all cursor-pointer">
<div className="w-12 h-12 bg-tertiary-fixed rounded-full flex items-center justify-center text-on-tertiary-fixed">
<span className="material-symbols-outlined">folder_shared</span>
</div>
<div className="flex-grow">
<p className="font-body-md text-body-md text-on-surface leading-tight">
                            New item shared in 
                            <span className="font-bold text-tertiary">Family Photos</span>
</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-xs italic">"Added the memories from last summer!"</p>
<span className="font-label-sm text-label-sm text-outline">Yesterday, 4:20 PM</span>
{/*  Grid Preview for Shared Photos  */}
<div className="mt-md grid grid-cols-4 gap-xs h-16">
<div className="rounded-lg overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="Minimalist family portrait at a bright sunny park, soft lens flare, high-key lighting, modern and clean lifestyle photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXTmvOr-qGxHkIqwqToGJAadxr-4W1oOymH54SFoxuFaw-wwcKMTheMwgs6-mkMOaco0oiSbtEoa7qGZPQLungMHqR7nKXCUbrd8UqeFypuyZWm79pJlFpxc3Mddl0Vtv--k5QJLTX8tFLRwD55i426lkFApa4T4RhIKo3cxFD2dI0b4R6wdlfbYatWt0d_0SUma2L3G4t3-Ooh2AmeUMokDB1czc_OS4oGeDdWhkDdvZiPJ4pJCJFlA" />
</div>
<div className="rounded-lg overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="Candid shot of people laughing at an outdoor dinner table, warm golden hour lighting, cinematic film look." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpjTbHbqMs5QvBlmtV068dX350wbnW5ysh3JAWNe_Oo3R0BIToldp2xh_W_BKFVX0p6U5VKRQ_xdNNVAD9eXhivDFnvvheiOZ-BBcJiKiIwGm0pO8ymBKUwtaHMFcN5CjEMot4pV5avfXh7N3sGg5wUU6GOiNXq_QNIWjVNvWOXEa1FXPp7ZiZWlf21BuHJBaBOVBR5qzn1CntHLadXl-zveyaBiL3TCcRJRxwRsveMIcAejkAXpCksA" />
</div>
<div className="rounded-lg overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="Close up of hands holding an old physical photograph in a modern setting, blurred background, nostalgic mood." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_MdPhO020Bgx04I8tjyhB4RTPSfeIC6YVvMz1NW4JD5rzKF4ZX1-ftnywGdOOotul5ISSbzL6H_W-bHt9kvDK-06qjTGFNcx_xF7YtUn4ylYQEKnmufZXvCUuXNNt3XmTZuWyViUS80_3gcGjmgAX0A5Pzgr71ntfXARG4VfomutVPSOJdnQqjn392BDH3rhhn7QwNcD-G9DollrMueXz0bzJTDVk5sMnQwN44M398DGvQJVDXLDqPw" />
</div>
<div className="rounded-lg overflow-hidden border border-outline-variant bg-surface-container-high flex items-center justify-center text-label-sm font-label-sm text-on-surface-variant">
                                +12
                            </div>
</div>
</div>
</div>
{/*  Activity Item: Storage Alert  */}
<div className="bg-error-container/10 p-md rounded-xl border border-error/20 flex items-start gap-md activity-card-hover transition-all">
<div className="w-12 h-12 bg-error-container rounded-full flex items-center justify-center text-on-error-container">
<span className="material-symbols-outlined">warning</span>
</div>
<div className="flex-grow">
<p className="font-body-md text-body-md text-on-surface leading-tight">
                            Storage capacity at <span className="font-bold">90%</span>
</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">You might want to upgrade your plan soon to avoid interruption.</p>
{/*  Progress Bar  */}
<div className="mt-sm w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-error h-full rounded-full" style={{ width: '90%' }}></div>
</div>
<div className="mt-md flex gap-sm">
<button className="px-md py-sm bg-error text-on-error rounded-xl font-label-md text-label-md active:scale-95 transition-transform shadow-sm" >Upgrade Plan</button>
<button className="px-md py-sm text-on-surface-variant font-label-md text-label-md hover:bg-surface-container transition-colors rounded-xl">Dismiss</button>
</div>
</div>
</div>
</div>
{/*  Sidebar / Stats Column (Desktop)  */}
<aside className="hidden md:block md:col-span-4">
<div className="sticky top-24 flex flex-col gap-lg">
{/*  Suggestions Card  */}
<div className="bg-surface-container-low border border-outline-variant p-lg rounded-xl">
<h3 className="font-headline-md text-headline-md text-on-surface mb-md">Quick Summary</h3>
<div className="flex flex-col gap-md">
<div className="flex justify-between items-center">
<span className="text-on-surface-variant font-body-sm text-body-sm">New Likes</span>
<span className="bg-primary-container text-on-primary-container px-sm py-[2px] rounded-full text-label-sm font-bold">12</span>
</div>
<div className="flex justify-between items-center">
<span className="text-on-surface-variant font-body-sm text-body-sm">New Comments</span>
<span className="bg-secondary-container text-on-secondary-container px-sm py-[2px] rounded-full text-label-sm font-bold">4</span>
</div>
<div className="flex justify-between items-center">
<span className="text-on-surface-variant font-body-sm text-body-sm">Project Invites</span>
<span className="bg-tertiary-container text-on-tertiary-container px-sm py-[2px] rounded-full text-label-sm font-bold">2</span>
</div>
</div>
<div className="mt-lg pt-md border-t border-outline-variant">
<button className="w-full py-sm bg-primary text-on-primary rounded-xl font-label-md text-label-md shadow-md active:scale-95 transition-all">Clear All Notifications</button>
</div>
</div>
{/*  Atmospheric Feature  */}
<div className="relative overflow-hidden h-40 rounded-xl bg-primary-container p-lg flex flex-col justify-end">
{/*  Simulated animated component placeholder  */}
<div className="absolute inset-0 opacity-20 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-tr from-primary via-transparent to-primary-container"></div>
</div>
<h4 className="relative z-10 font-bold text-on-primary-container text-headline-md font-headline-md">Omni Plus</h4>
<p className="relative z-10 text-on-primary-container/80 text-body-sm font-body-sm mb-sm">Unlimited sharing, priority support.</p>
<button className="relative z-10 self-start px-md py-xs bg-white text-primary rounded-full font-label-sm text-label-sm">Learn More</button>
</div>
</div>
</aside>
</div>
</main>
<nav className="fixed top-0 w-full z-50 bg-surface flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 w-full">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-primary font-display-lg text-display-lg" style={{ fontSize: '32px' }}>hub</span>
<span className="font-display-lg text-display-lg font-bold text-primary">Omni</span>
</div>
<div className="flex items-center gap-md">
<button className="material-symbols-outlined p-sm rounded-full text-on-surface-variant hover:bg-surface-container-low transition-colors active:scale-95 transition-transform">search</button>
<div className="hidden md:flex gap-md">
<span className="font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low transition-colors px-3 py-1 rounded-full cursor-pointer">Feed</span>
<span className="font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low transition-colors px-3 py-1 rounded-full cursor-pointer">Spaces</span>
<span className="font-label-md text-label-md text-primary font-bold px-3 py-1 rounded-full cursor-pointer">Activity</span>
</div>
</div>
</nav>
    </div>
  );
};

export default OmniActivity;
