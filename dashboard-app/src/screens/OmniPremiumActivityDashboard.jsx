import React, { useEffect } from 'react';

const OmniPremiumActivityDashboard = () => {
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
      <header className="fixed top-0 w-full z-50 bg-surface dark:bg-background flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 w-full">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary dark:text-primary-fixed text-3xl">hub</span>
<h1 className="font-display-lg text-title-md font-bold text-primary dark:text-primary-fixed">Omni</h1>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-surface-container-low transition-colors active:scale-95">
<span className="material-symbols-outlined text-on-surface-variant">search</span>
</button>
<div className="w-10 h-10 rounded-full border-2 border-primary-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A high-fashion portrait of a young visionary creative with short neon-dyed hair, wearing futuristic metallic eyewear. The lighting is dramatic and cinematic, with deep electric purple and indigo rim lighting against a pitch-black background. The aesthetic is clean, sharp, and intensely modern, reflecting a premium digital identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBSX-7eCNUDznf6qQXCe2gtb-CIsGjO3UvPSOF487hI1kLLgqI6Z-UAmjUNDsdY5BRAl5VS_8YRsr57wx54c0BN9LvZz7tLiiVbVdscBZxClqzSXU4KVnR9julnTXjBpE-KHfTtnUO3JZF-dioRGNCs_EfbjZGnGJ79QJbboxN3S5B4K3l_0RwwfZNzTwx3b45yaVRXeSBcEjzmlhzCMie7auhGdDG3kfqb8PSUqp3vJL61XS0vkaG8g"/>
</div>
</div>
</header>
<main className="pt-24 px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
{/*  Daily Highlights Section  */}
<section className="mb-stack-gap-lg">
<div className="flex justify-between items-end mb-6">
<div>
<span className="font-label-md text-primary tracking-widest uppercase opacity-80">Insight</span>
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg">Daily Highlights</h2>
</div>
<button className="text-primary font-label-md hover:underline flex items-center gap-1">
                    View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/*  Highlight 1  */}
<div className="glass-layer rounded-3xl p-6 electric-glow stagger-in" style={{ animationDelay: '0.1s' }}>
<div className="flex justify-between items-start mb-8">
<div className="p-3 bg-primary-container rounded-2xl">
<span className="material-symbols-outlined text-on-primary-container">trending_up</span>
</div>
<span className="text-tertiary font-label-md text-xs bg-tertiary-container/20 px-2 py-1 rounded-full">+12%</span>
</div>
<div className="mb-4">
<p className="font-label-md text-on-surface-variant opacity-70">Engagement Velocity</p>
<h3 className="font-headline-lg text-headline-lg-mobile">2.4k</h3>
</div>
<div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full primary-gradient w-[75%] rounded-full"></div>
</div>
</div>
{/*  Highlight 2 (Media Focus)  */}
<div className="glass-layer rounded-3xl p-6 electric-glow stagger-in flex flex-col justify-between min-h-[220px]" style={{ animationDelay: '0.2s' }}>
<div>
<p className="font-label-md text-on-surface-variant opacity-70 mb-4">Most Shared Post</p>
<div className="flex gap-3 items-center">
<div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="A mesmerizing close-up of iridescent liquid metal ripples reflecting a vibrant spectrum of electric purple and cyan light. The composition is abstract and fluid, symbolizing high-speed digital connectivity and fluid motion. The mood is sophisticated, tech-oriented, and visually arresting, perfectly suited for a premium social media highlight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAULRAcqOD23tboO8qCi9UnU8E3tqLghZsrmzkHAg97lImc5gIpeIv1JHtCMNhn_VJsNEC6-rTC0lFrad_EfiHJp0TdDEMxkGxMmeVcgHhjVYHN9yZZxfe9ZGwPtXkCJoRd_9D4P4RnarZcxSTwI0MN55DBOQ8Pegpjr9xSyl7ey4hUwmh9weYxiHUHghAQuNEP5tkemHKSOYdCE0QPT8bW1ro_gSopVcUeKhMK6JNbGizVWxUWXnV_vQ"/>
</div>
<div>
<h4 className="font-title-md text-body-md leading-tight">Metamorphic Shift #04</h4>
<p className="text-caption text-outline-variant">Shared 842 times</p>
</div>
</div>
</div>
<button className="w-full py-3 rounded-xl border border-primary/30 text-primary font-label-md hover:bg-primary/10 transition-colors">
                        Promote Post
                    </button>
</div>
{/*  Highlight 3  */}
<div className="glass-layer rounded-3xl p-6 electric-glow stagger-in" style={{ animationDelay: '0.3s' }}>
<div className="flex justify-between items-start mb-8">
<div className="p-3 bg-secondary-container rounded-2xl">
<span className="material-symbols-outlined text-on-secondary-container">group_add</span>
</div>
<span className="text-secondary font-label-md text-xs bg-secondary-container/20 px-2 py-1 rounded-full">New</span>
</div>
<div>
<p className="font-label-md text-on-surface-variant opacity-70">Network Expansion</p>
<h3 className="font-headline-lg text-headline-lg-mobile">+48</h3>
<div className="flex -space-x-3 mt-4">
<div className="w-8 h-8 rounded-full border-2 border-surface overflow-hidden"><img className="w-full h-full object-cover" data-alt="Minimalist avatar of a person in high-tech urban gear." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTRtvxhKentrHwjeNVp0WNhHgBKC9Qu0u41GD0rX8bqWt2mPbcLXYJFbicZqeJeubav7Eepi1wHWxO73S_xpdre9srs_MqEXanDfz_c_1iC8sPotLBPFy-ebuzAlEMPceiOI181cNMq6i0j-bjbCkSIszpXBLarmSXoSUIcWF2qdVhwidHI_awYSqsgxRKO0GAp3OYtwAna1rA3fXQMWJujEaINY0KT8VIr4G_YBNtDfYkh8ypvlzrCw"/></div>
<div className="w-8 h-8 rounded-full border-2 border-surface overflow-hidden"><img className="w-full h-full object-cover" data-alt="Close up portrait of a digital artist with colorful studio lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOam5qg8N0iKrqSyagNyK8jSBhIvgZjsAglsbcW-47cHS9QsCvQ2CRiKtd2UPXqZi3sksblKlxYXmTYnpihgrJhGMd-2X9u4bwaavWzSlKE2_AYGDmh0dFcjQJrxXs68RKK3Zpizc8i9Ap51Ut29ROT85LRg3BoOzTsFRvJmzgHh5Ylxiyd-nwUPltIf-1ne9MH4Aat79LRybvwzwPs1gnF7KhmqlJT_HwRVTxYummKC4W2-JDh3layw"/></div>
<div className="w-8 h-8 rounded-full border-2 border-surface overflow-hidden"><img className="w-full h-full object-cover" data-alt="A modern tech professional looking at a virtual screen." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVJM_FfMSrPP2okfBT9HlfSVPidc6xOA6GuN9mQzpERpYcGWCdGzch63EAcRgZ1KV4VXHeDoAXGgvfFJO527fBqAm6DgouK2efRqzVsjiF4F4ZIQyrzDj4WVtCk16laozSAaIFFGYdkv6pUfPjVPbGnYw_410zpHULD5CrjWPZ_rR805irTZuP1oSvcYh8cl04scrTsCGCxuFMq8GCAvkm5-39cNvLhXrtTF2XhwwswzyqRNq4Grjp2w"/></div>
<div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">+45</div>
</div>
</div>
</div>
</div>
</section>
{/*  Social Reach & Storage Bento Grid  */}
<section className="mb-stack-gap-lg grid grid-cols-1 lg:grid-cols-3 gap-gutter">
{/*  Social Reach (Radar/Map)  */}
<div className="lg:col-span-2 glass-layer rounded-3xl p-8 electric-glow stagger-in overflow-hidden relative" style={{ animationDelay: '0.4s' }}>
<div className="relative z-10">
<h3 className="font-title-md text-title-md mb-2">Social Reach</h3>
<p className="text-on-surface-variant text-body-md opacity-70 mb-8">Your influence is expanding across Tokyo and London.</p>
<div className="aspect-video w-full relative">
<div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
{/*  Simulated Map/Radar Visual  */}
<div className="w-full h-full rounded-2xl overflow-hidden border border-outline/20">
<img className="w-full h-full object-cover filter saturate-[0.2] brightness-[0.6]" data-alt="A stylized, dark-mode satellite map of a metropolitan city at night. Glowing lines of data and connection points are overlaid in vibrant neon purple and electric blue. The map shows clusters of activity and flowing data arteries, emphasizing a sense of global connectivity and social reach. The lighting is moody with deep blacks and bright luminescent accents." data-location="Tokyo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm3QseHvtKLdLd1RUngUiV1cytkxe6BDwgDVQD4wxhd8j7iO4OkMpSBtzL6XNcvThwBKmeX4KTJ71_wW56vn7AhrleU0QKfpMvu-JM7_WZVtDt_dpdAkq3i0WuTntixC22114XCkFLPAII7mHJP01AqMv5B42qMzhRBAuDg1M9qEr8mFjlNamyogy33ZjR9RacMVmqm51ydU0WFA8P04gnZ5otVa9SnFoh1b9NdVrV0fXs059QqQ8Trw"/>
</div>
</div>
{/*  Radar Animation Component  */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="w-32 h-32 rounded-full border border-primary/40 animate-ping absolute"></div>
<div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-md border border-primary flex items-center justify-center">
<span className="material-symbols-outlined text-primary animate-pulse">radar</span>
</div>
</div>
</div>
</div>
</div>
{/*  Storage Summary  */}
<div className="glass-layer rounded-3xl p-8 electric-glow stagger-in flex flex-col" style={{ animationDelay: '0.5s' }}>
<h3 className="font-title-md text-title-md mb-6">Omni Cloud</h3>
<div className="flex-grow flex flex-col justify-center">
<div className="relative w-48 h-48 mx-auto mb-8">
<svg className="w-full h-full" viewbox="0 0 100 100">
<circle className="text-surface-container-highest" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" stroke-width="8"></circle>
<circle className="text-primary transition-all duration-1000" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" stroke-dasharray="251.2" stroke-dashoffset="60" stroke-linecap="round" stroke-width="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="font-headline-lg text-title-md">76%</span>
<span className="text-caption text-outline-variant">Used</span>
</div>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-primary"></div>
<span className="text-body-md">Media Assets</span>
</div>
<span className="text-body-md font-bold">382 GB</span>
</li>
<li className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-tertiary"></div>
<span className="text-body-md">Project Files</span>
</div>
<span className="text-body-md font-bold">120 GB</span>
</li>
</ul>
</div>
<button className="mt-8 primary-gradient text-on-primary-container font-label-md py-4 rounded-2xl active:scale-95 transition-transform">
                    Upgrade Storage
                </button>
</div>
</section>
{/*  Recent Interactions Feed  */}
<section className="mb-stack-gap-lg">
<h3 className="font-title-md text-title-md mb-6">Recent Interactions</h3>
<div className="space-y-gutter">
{/*  Interaction Item 1  */}
<div className="glass-layer rounded-2xl p-4 md:p-6 stagger-in flex flex-col md:flex-row gap-6 hover:bg-surface-container-high transition-colors group" style={{ animationDelay: '0.6s' }}>
<div className="w-full md:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A wide-angle cinematic shot of a sleek, minimalist workspace at dusk. A glowing laptop screen shows complex code and design files. Large floor-to-ceiling windows reveal a blurred cityscape with twinkling lights. The interior is bathed in a soft purple atmospheric glow from an unseen ambient light source. Professional, tranquil, and high-end." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAivbgPs9uyVz88MDhhLSHiQ8scaWlsyIkUgZgKJ-JK-Rl1sfsM6Pv8TnkyE59rN_MYM6K5uzRyKDfXP83nVQvgEEzivfDCdHiRxP4AqxPzP8G41RLQPCG2rTJ-ft0LGTtlRHIR8XU4dZEuD90r7O5dVx9-6oJZisxOJvQ8ODulLE4LxrdswBiCsgyb5vK0mebLl0nXz08rsQiN_lTgMjMkUp2GtzTOkw2Y15M35kxkbO8QO3FUiENmeQ"/>
</div>
<div className="flex-grow flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h4 className="font-label-md text-primary">Collaborative Project Update</h4>
<span className="text-caption text-outline-variant">2h ago</span>
</div>
<p className="text-body-md text-on-surface mb-4">Aria Chen commented on your last workspace layout: "The color theory here is exceptional. Let's integrate this into the final build."</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-surface-container-highest rounded-lg text-label-md hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined text-sm">reply</span> Reply
                            </button>
<button className="flex items-center gap-2 px-4 py-2 bg-surface-container-highest rounded-lg text-label-md hover:bg-secondary/20 transition-colors">
<span className="material-symbols-outlined text-sm">favorite</span> Like
                            </button>
</div>
</div>
</div>
{/*  Interaction Item 2  */}
<div className="glass-layer rounded-2xl p-4 md:p-6 stagger-in flex flex-col md:flex-row gap-6 hover:bg-surface-container-high transition-colors group" style={{ animationDelay: '0.7s' }}>
<div className="w-full md:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="An artistic overhead view of a premium digital camera and various optical lenses arranged on a dark, textured slate surface. Reflections of neon signage are visible in the glass of the lenses, introducing streaks of electric purple and lime green. The mood is sharp, technical, and artistic, emphasizing creative precision and modern equipment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcT7nyswRYuOOpH4_K6w4pkLhvCl02MqNhAjoTVUKhAVnFX311IT0-4cXA9ryl_boS7rj-NUN-vL_eXGAfYyAubD41A1xnfglzgrl5E2nuQwZt_P45EN79MZ5sFec3qluyWzrzBrBM9-bzTnjy1hkvRfizEHCBIqdMmZ0y4V1sGgRITEEyp0M6yweXmhlUQXgyGXeBLXsijOMm3crWrTIwGroQbpMolREGckoTTl4uYxL9MJDbFvc5_w"/>
</div>
<div className="flex-grow flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h4 className="font-label-md text-primary">New Collection Shared</h4>
<span className="text-caption text-outline-variant">5h ago</span>
</div>
<p className="text-body-md text-on-surface mb-4">Your collection 'Optical Shadows' was curated into the Global Trends feed. Total of 1.2k views in 3 hours.</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-surface-container-highest rounded-lg text-label-md hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined text-sm">analytics</span> Insights
                            </button>
<button className="flex items-center gap-2 px-4 py-2 bg-surface-container-highest rounded-lg text-label-md hover:bg-tertiary/20 transition-colors">
<span className="material-symbols-outlined text-sm">share</span> Share
                            </button>
</div>
</div>
</div>
</div>
</section>
</main>
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-sm py-xs pb-safe bg-surface-container dark:bg-surface-container-high shadow-md rounded-t-xl">
{/*  Feed  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-3 py-1 hover:bg-surface-variant dark:hover:bg-inverse-surface transition-colors active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">dynamic_feed</span>
<span className="font-label-sm text-label-sm">Feed</span>
</a>
{/*  Share  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-3 py-1 hover:bg-surface-variant dark:hover:bg-inverse-surface transition-colors active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">add_circle</span>
<span className="font-label-sm text-label-sm">Share</span>
</a>
{/*  Spaces  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-3 py-1 hover:bg-surface-variant dark:hover:bg-inverse-surface transition-colors active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">group_work</span>
<span className="font-label-sm text-label-sm">Spaces</span>
</a>
{/*  Activity (ACTIVE)  */}
<a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container dark:bg-primary dark:text-on-primary rounded-xl px-3 py-1 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>notifications</span>
<span className="font-label-sm text-label-sm">Activity</span>
</a>
{/*  Profile  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-3 py-1 hover:bg-surface-variant dark:hover:bg-inverse-surface transition-colors active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-label-sm text-label-sm">Profile</span>
</a>
</nav>
    </div>
  );
};

export default OmniPremiumActivityDashboard;
