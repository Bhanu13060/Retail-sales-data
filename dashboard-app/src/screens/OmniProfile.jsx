import React, { useEffect } from 'react';

const OmniProfile = () => {
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
<span className="material-symbols-outlined text-primary text-2xl">hub</span>
<h1 className="font-display-lg text-display-lg font-bold text-primary">Omni</h1>
</div>
<div className="flex items-center gap-md">
<button className="hover:bg-surface-container-low transition-colors p-2 rounded-full active:scale-95 transition-transform">
<span className="material-symbols-outlined text-on-surface-variant">search</span>
</button>
<button className="md:hidden">
<span className="material-symbols-outlined text-on-surface-variant">menu</span>
</button>
</div>
</header>
<main className="pt-24 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
{/*  User Profile Hero  */}
<section className="relative mb-xl">
<div className="glass-card rounded-xl p-lg flex flex-col md:flex-row gap-lg items-center md:items-end">
{/*  Avatar with Progress Border  */}
<div className="relative group">
<div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary-container p-1 bg-surface-container">
<div className="w-full h-full rounded-full overflow-hidden bg-cover bg-center" data-alt="A professional and sleek studio portrait of a tech entrepreneur with a warm smile. The lighting is soft and cinematic with a clean, high-key white background that matches a minimalist tech-forward brand. The individual is wearing a charcoal-colored designer knit sweater, and the overall composition is tight and modern with an air of creative leadership." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbxJTS2cT8HViOmBHCLbY0FhurzOwQwfOP1cN6Mt1WpLTSO6rmip7zdSyPBtpBWTYSngk2uS6Ncf8ZYLWl-rbfXaZUNS6wWlXM7ufgtDc0M6CuZh0MEmW7500nnm_iBoCovy34sGXRY6njPin6nQDLzwD-_hMDrn4xAogM3X5JztLKGPd2-IkK5x7FK6ZtDyNP8DWicHFBMwWMae7--HSS3Tu_dJKAsKUYEpFa2T_bFhSECHj8SD9ttQ")' }}>
</div>
</div>
<div className="absolute -bottom-2 -right-2 bg-primary text-on-primary rounded-full px-3 py-1 font-label-md text-label-md shadow-md">
                        Level 42
                    </div>
</div>
<div className="flex-1 text-center md:text-left space-y-sm">
<div className="flex flex-col md:flex-row md:items-center gap-sm">
<h2 className="font-headline-lg text-headline-lg text-on-surface">Alex Rivera</h2>
<span className="flex items-center gap-1 text-primary font-label-md text-label-md bg-primary-container/10 px-3 py-1 rounded-full w-fit mx-auto md:mx-0">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
                            Pro Member
                        </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                        Architecting digital workflows and sharing high-performance data clusters. Curator of minimalist assets and secure node-based infrastructures.
                    </p>
<div className="flex flex-wrap justify-center md:justify-start gap-md pt-sm">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Reputation</span>
<span className="font-headline-md text-headline-md text-primary">2,840</span>
</div>
<div className="w-px h-10 bg-outline-variant hidden md:block"></div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Total Shares</span>
<span className="font-headline-md text-headline-md text-on-surface">148</span>
</div>
<div className="w-px h-10 bg-outline-variant hidden md:block"></div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Uptime</span>
<span className="font-headline-md text-headline-md text-on-surface">99.9%</span>
</div>
</div>
</div>
<div className="flex flex-row md:flex-col gap-sm w-full md:w-auto">
<button className="flex-1 md:flex-none bg-primary text-on-primary px-lg py-sm rounded-xl font-label-md text-label-md hover:bg-opacity-90 transition-all active:scale-95 flex items-center justify-center gap-2" >
<span className="material-symbols-outlined text-sm">edit</span>
                        Edit Profile
                    </button>
<button className="flex-1 md:flex-none bg-surface-container-high text-on-surface px-lg py-sm rounded-xl font-label-md text-label-md hover:bg-surface-variant transition-all active:scale-95 flex items-center justify-center gap-2" >
<span className="material-symbols-outlined text-sm">settings</span>
                        Settings
                    </button>
</div>
</div>
</section>
{/*  Inventory Section  */}
<section className="space-y-lg" x-data="{ activeTab: 'shares' }">
<div className="flex items-center gap-lg border-b border-outline-variant/30">
<button className="tab-btn pb-sm font-label-md text-label-md transition-all relative text-primary border-b-2 border-primary" id="tab-shares" >
                    My Shares
                </button>
<button className="tab-btn pb-sm font-label-md text-label-md transition-all relative text-on-surface-variant hover:text-on-surface" id="tab-saved" >
                    Saved Items
                </button>
<div className="ml-auto flex items-center gap-sm pb-sm">
<span className="material-symbols-outlined text-on-surface-variant text-md cursor-pointer hover:text-primary">filter_list</span>
<span className="material-symbols-outlined text-on-surface-variant text-md cursor-pointer hover:text-primary">grid_view</span>
</div>
</div>
{/*  Bento Grid of Items  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg" id="content-shares">
{/*  Share Item 1: High Density  */}
<div className="group glass-card rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
<div className="h-40 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="A macro shot of a sleek, high-end server rack with glowing purple neon LED accents. The environment is dark and futuristic, with blurred data center equipment in the background. The aesthetic is clean, industrial, and high-tech, focusing on the quality and power of digital storage infrastructure." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuANgxFWC6rH8vSUQlw_PeC0MISSUhe6f2bBP6xRw3EkBRQsu-HCXpUt86hXCh8dI8rpVmIjRJTd7ciuwHKU3yoiEwdpVDBYTK9OwpdbLa7P73OXWcdsFuQg0NYRtHHRkErqscTZ_DFnAsrHdEd0NeD2JieI_0T4Rdhv6sSQkGLI0iAVNKd7NBKs8hZnLNiktwNRxBVPveYKj_hePLW4B-VEjZk5lERGXsxEndcfsjlp9QH8zE6QxL60tA")' }}></div>
<div className="p-md space-y-sm">
<div className="flex justify-between items-start">
<div className="bg-primary/10 text-primary p-2 rounded-lg">
<span className="material-symbols-outlined">folder_zip</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">12.4 GB</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-1">Production Assets v2</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Full 4K rendering package for the Q3 campaign rollout.</p>
</div>
<div className="flex items-center justify-between pt-sm">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-surface bg-slate-200"></div>
<div className="w-6 h-6 rounded-full border-2 border-surface bg-slate-300"></div>
<div className="w-6 h-6 rounded-full border-2 border-surface bg-primary text-[8px] flex items-center justify-center text-white">+5</div>
</div>
<button className="text-primary hover:bg-primary-container/10 p-2 rounded-lg transition-colors">
<span className="material-symbols-outlined">share</span>
</button>
</div>
</div>
</div>
{/*  Share Item 2: Mid Content  */}
<div className="group glass-card rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
<div className="h-40 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="An abstract digital visualization of node networks connecting in three-dimensional space. The lines are thin and glowing in a soft electric purple, while the background is a clean, slightly textured off-white. The lighting is diffused and bright, creating a sophisticated and intellectual feel related to data architecture." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUJfgdx_cqDVKWZpXqzvoEJSm-lGMOADZ5wSw1T0lAmaCGbmG30C1Ko1ZYeYhB70H15oiLizXPSciuoYGsbouIvPjMMIqyt31qJvwkR2Aay0sc5TFLoC-BYDCj0gut34cY9kO8jtqs5yO-1mNlg6oC1YFlemsmlbRCfFIZFXjm_HZto0yt06DDT5I29W_SuIF30YHFMqnpWTB3yhivTrznC6l7PBCP78hqy23r3SrEMxS7nmRq2gIpMA")' }}></div>
<div className="p-md space-y-sm">
<div className="flex justify-between items-start">
<div className="bg-secondary/10 text-secondary p-2 rounded-lg">
<span className="material-symbols-outlined">database</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">450 MB</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-1">Node Configurations</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">YAML templates for the distributed edge network cluster.</p>
</div>
<div className="flex items-center justify-between pt-sm">
<div className="flex items-center gap-2 text-outline font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm">schedule</span>
                                Exp: 24h
                            </div>
<button className="text-primary hover:bg-primary-container/10 p-2 rounded-lg transition-colors">
<span className="material-symbols-outlined">more_horiz</span>
</button>
</div>
</div>
</div>
{/*  Share Item 3: Tall Vertical (Asymmetric pattern)  */}
<div className="group glass-card rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 md:row-span-2">
<div className="h-full min-h-[320px] relative flex flex-col">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="A serene architectural interior of a modern museum with high ceilings and vast glass windows. The sunlight streams in, casting long shadows across the polished white concrete floor. Minimalist art pieces are barely visible in the periphery. The palette is dominated by neutral whites, greys, and subtle warm wood tones, evoking a sense of space and timeless quality." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFrN2BX6yNd5-IjjMhmyOqXdxSCOQ9GfyTMsKQovEJyo74dZ64BYspGOXObJnAcwTueK6yBMvsv0J8Q9Yr2vvDjSxo3UVGrushcZZ1m7hOYsohm894v-1XseYZut8MRzNcHd9iuta2AMtbhP6Y_KIoxhrAo8xtzReSnHynHSRqOTAV4xqdDJYN_t7I2KE76VX0k-Ja7gpmt2buHgutSU8oFWoOpyQPGzj4MYQX-FAUPkbovbG9TJzV7Q")' }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="relative mt-auto p-lg text-white space-y-md">
<div className="bg-white/20 backdrop-blur-md w-fit p-3 rounded-xl border border-white/30">
<span className="material-symbols-outlined">image</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-white">Curated Collection</h3>
<p className="text-white/80 font-body-sm text-body-sm">A private gallery of ultra-high-resolution architectural photography and blueprints.</p>
</div>
<div className="flex items-center gap-md">
<button className="bg-white text-on-background px-md py-sm rounded-lg font-label-md text-label-md flex items-center gap-2">
<span className="material-symbols-outlined text-sm">visibility</span>
                                    Browse
                                </button>
<span className="text-white/60 font-label-sm text-label-sm">1.2 GB</span>
</div>
</div>
</div>
</div>
{/*  More items for filling grid  */}
<div className="group glass-card rounded-xl p-md flex items-center gap-md hover:shadow-md transition-all">
<div className="bg-tertiary/10 text-tertiary p-4 rounded-xl">
<span className="material-symbols-outlined text-2xl">description</span>
</div>
<div className="flex-1">
<h4 className="font-label-md text-label-md text-on-surface">Legal Framework.pdf</h4>
<p className="font-label-sm text-label-sm text-outline">Shared 2 days ago</p>
</div>
<span className="material-symbols-outlined text-outline-variant cursor-pointer">download</span>
</div>
<div className="group glass-card rounded-xl p-md flex items-center gap-md hover:shadow-md transition-all">
<div className="bg-secondary/10 text-secondary p-4 rounded-xl">
<span className="material-symbols-outlined text-2xl">movie</span>
</div>
<div className="flex-1">
<h4 className="font-label-md text-label-md text-on-surface">Presentation_Final.mp4</h4>
<p className="font-label-sm text-label-sm text-outline">Shared 5 hours ago</p>
</div>
<span className="material-symbols-outlined text-outline-variant cursor-pointer">download</span>
</div>
</div>
{/*  Content for Saved (Hidden by default)  */}
<div className="hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg" id="content-saved">
<div className="glass-card rounded-xl p-xl flex flex-col items-center justify-center text-center space-y-md col-span-full py-24">
<div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center">
<span className="material-symbols-outlined text-outline text-4xl">bookmark_border</span>
</div>
<div className="space-y-sm">
<h3 className="font-headline-md text-headline-md text-on-surface">No saved items yet</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-sm mx-auto">Items you bookmark from the feed or shared by others will appear here for quick access.</p>
</div>
<button className="bg-primary text-on-primary px-lg py-sm rounded-xl font-label-md text-label-md">Explore Spaces</button>
</div>
</div>
</section>
</main>
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-sm py-xs pb-safe bg-surface-container shadow-md rounded-t-xl md:hidden">
<a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform" href="{{DATA:SCREEN:SCREEN_13}}">
<span className="material-symbols-outlined">dynamic_feed</span>
<span className="font-label-sm text-label-sm">Feed</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform" href="{{DATA:SCREEN:SCREEN_12}}">
<span className="material-symbols-outlined">add_circle</span>
<span className="font-label-sm text-label-sm">Share</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform" href="{{DATA:SCREEN:SCREEN_10}}">
<span className="material-symbols-outlined">group_work</span>
<span className="font-label-sm text-label-sm">Spaces</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform" href="{{DATA:SCREEN:SCREEN_11}}">
<span className="material-symbols-outlined">notifications</span>
<span className="font-label-sm text-label-sm">Activity</span>
</a>
<a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-3 py-1 active:scale-90 transition-transform" href="{{DATA:SCREEN:SCREEN_8}}">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>person</span>
<span className="font-label-sm text-label-sm">Profile</span>
</a>
</nav>
    </div>
  );
};

export default OmniProfile;
