import React, { useEffect } from 'react';

const OmniKidsActivityDashboard = () => {
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container/80 backdrop-blur-xl border-b border-white/10 rounded-b-xl px-margin-mobile flex justify-between items-center w-full py-unit shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
<div className="flex items-center gap-2 active:scale-90 transition-all cubic-bezier(0.34,1.56,0.64,1)">
<span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim" data-icon="home">home</span>
</div>
<h1 className="font-display-lg text-title-md text-primary dark:text-primary-fixed-dim uppercase tracking-tighter">Omni Kids</h1>
<div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden hover:scale-110 transition-transform duration-300">
<img className="w-full h-full object-cover" data-alt="A friendly 3D cartoon avatar of a happy child with big eyes and a bright smile, wearing a colorful tech hoodie. The background is a soft blue with floating digital bubbles, styled in a high-fidelity animation aesthetic with vibrant colors and soft lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuALD2RqDQSP6MqUfs2Ror-Im3svsroJtSOMXC-O2sjn8RXjHA6MxVTxQQEz2GIwFG9IZ9BtJsWoS7GHqiYiOcjkg-esO5aWH7CinZ2Lq0Elsajw03Z5BBEOD012ERIC9T5Hp_21OQTmlkkjidKUzZgRORRJIkpnX-g5iSc4-Ar9Sp_OkSGAWcQ_zD46TxYEogfcCUKdnk7EdCIj5ljNjWHTQIC4p1hzAV2s55u8vWxBeVeSJk_b-1aZsw"/>
</div>
</header>
<main className="pt-24 pb-32 px-margin-mobile max-w-container-max-width mx-auto">
{/*  Hero Section: Creative Streaks  */}
<section className="mb-stack-gap-lg">
<h2 className="font-title-md text-title-md text-secondary-fixed mb-stack-gap-md">Super Star Streaks!</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
{/*  Streak Card 1  */}
<div className="glass-card p-6 rounded-xl border-2 border-secondary-container chunky-shadow-pink hover:scale-[1.02] transition-transform duration-300">
<div className="flex justify-between items-start">
<div>
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-md text-label-md mb-2 inline-block">7 DAY STREAK</span>
<h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2">Master Artist</h3>
<p className="font-body-md text-body-md text-on-surface-variant">You've drawn every day this week! Keep it up, champ!</p>
</div>
<div className="text-secondary text-5xl">
<span className="material-symbols-outlined" data-icon="auto_awesome" style={{ fontSize: '48px', fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
</div>
</div>
<div className="mt-6 flex gap-2">
<div className="h-3 flex-1 bg-secondary-container rounded-full overflow-hidden">
<div className="h-full bg-secondary w-full animate-pulse"></div>
</div>
</div>
</div>
{/*  Streak Card 2  */}
<div className="glass-card p-6 rounded-xl border-2 border-tertiary-container chunky-shadow-cyan hover:scale-[1.02] transition-transform duration-300">
<div className="flex justify-between items-start">
<div>
<span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full font-label-md text-label-md mb-2 inline-block">LVL 12</span>
<h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2">Super Talker</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Sharing stories with 5 new friends this morning!</p>
</div>
<div className="text-tertiary text-5xl">
<span className="material-symbols-outlined" data-icon="chat_bubble" style={{ fontSize: '48px', fontVariationSettings: '"FILL" 1' }}>chat_bubble</span>
</div>
</div>
<div className="mt-6 flex gap-2">
<div className="h-3 flex-1 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-tertiary w-3/4"></div>
</div>
</div>
</div>
</div>
</section>
{/*  Achievement Gallery  */}
<section className="mb-stack-gap-lg">
<div className="flex items-center justify-between mb-stack-gap-md">
<h2 className="font-title-md text-title-md text-primary">Badge Gallery</h2>
<button className="text-primary font-label-md text-label-md uppercase tracking-widest">See All</button>
</div>
<div className="flex gap-gutter overflow-x-auto pb-6 snap-x">
{/*  Badge 1  */}
<div className="flex-shrink-0 w-32 flex flex-col items-center gap-3 snap-center group">
<div className="w-24 h-24 rounded-full bg-primary-container flex items-center justify-center border-4 border-primary chunky-shadow-primary group-hover:rotate-12 transition-all duration-300">
<span className="material-symbols-outlined text-on-primary-container text-4xl" data-icon="palette" style={{ fontVariationSettings: '"FILL" 1' }}>palette</span>
</div>
<p className="font-label-md text-label-md text-center text-on-surface">Master Artist</p>
</div>
{/*  Badge 2  */}
<div className="flex-shrink-0 w-32 flex flex-col items-center gap-3 snap-center group">
<div className="w-24 h-24 rounded-full bg-secondary-container flex items-center justify-center border-4 border-secondary chunky-shadow-pink group-hover:-rotate-12 transition-all duration-300">
<span className="material-symbols-outlined text-on-secondary-container text-4xl" data-icon="forum" style={{ fontVariationSettings: '"FILL" 1' }}>forum</span>
</div>
<p className="font-label-md text-label-md text-center text-on-surface">Chat Champion</p>
</div>
{/*  Badge 3  */}
<div className="flex-shrink-0 w-32 flex flex-col items-center gap-3 snap-center group">
<div className="w-24 h-24 rounded-full bg-tertiary-container flex items-center justify-center border-4 border-tertiary chunky-shadow-cyan group-hover:scale-110 transition-all duration-300">
<span className="material-symbols-outlined text-on-tertiary-container text-4xl" data-icon="rocket_launch" style={{ fontVariationSettings: '"FILL" 1' }}>rocket_launch</span>
</div>
<p className="font-label-md text-label-md text-center text-on-surface">Early Bird</p>
</div>
{/*  Badge 4  */}
<div className="flex-shrink-0 w-32 flex flex-col items-center gap-3 snap-center group opacity-50 grayscale hover:grayscale-0 transition-all">
<div className="w-24 h-24 rounded-full bg-surface-container-high flex items-center justify-center border-4 border-outline group-hover:scale-105">
<span className="material-symbols-outlined text-on-surface-variant text-4xl" data-icon="lock">lock</span>
</div>
<p className="font-label-md text-label-md text-center text-on-surface">Deep Thinker</p>
</div>
</div>
</section>
{/*  Friends Activity  */}
<section className="mb-stack-gap-lg">
<h2 className="font-title-md text-title-md text-on-tertiary-fixed mb-stack-gap-md">Friends are Busy!</h2>
<div className="space-y-stack-gap-md">
{/*  Friend 1  */}
<div className="glass-card p-4 rounded-xl flex items-center gap-4 hover:bg-surface-container-high transition-colors">
<div className="relative">
<div className="w-16 h-16 rounded-full border-4 border-secondary overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A profile picture of a young boy with curly hair and glasses, smiling widely. He is in a vibrant digital environment with colorful 3D blocks in the background. The lighting is warm and sunny, part of a cheerful kids' app interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5GieQTKEPqA7D0sdmFBKHyPjzRcXw_fT5BVxIDASkLLLuEKowPL80-X0ljRlkORzeDYyeU1myyxGavw5IgQdtJRKWDCuFG8Ny9hYp_rXC8G9uBxFO8Ocj2QA4IgsBdnisIe57Y42qiK7pLnHxspltq0SADZekh67BIxPelXYLktvY8LazrKD-wJTG3pXRmJRp-bU5bB8q_llu5lSgslbLCccdf0WQ2-pmhGEjxr2k8v6CTKE7nFieMw"/>
</div>
<div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-secondary border-2 border-surface flex items-center justify-center">
<span className="material-symbols-outlined text-[12px] text-on-secondary" data-icon="draw" style={{ fontVariationSettings: '"FILL" 1' }}>draw</span>
</div>
</div>
<div>
<p className="font-title-md text-body-lg text-on-surface"><span className="text-secondary font-bold">Leo</span> is drawing!</p>
<p className="font-body-md text-caption text-on-surface-variant">Just now in 'The Cloud Garden'</p>
</div>
</div>
{/*  Friend 2  */}
<div className="glass-card p-4 rounded-xl flex items-center gap-4 hover:bg-surface-container-high transition-colors">
<div className="relative">
<div className="w-16 h-16 rounded-full border-4 border-tertiary overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A profile picture of a cheerful young girl with braids and a yellow headband. The background is a playful cosmic scene with soft purple and teal gradients. High-quality 3D render style with a soft glow and friendly atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjSeZkpIiYiQmBCrVNME2a0sf3w-6RqMXNTILmadR56ivHOQv7k0RTdjUgHuhvLhbdLo0_LGQQWwsru2XUGgzBahhMFLIocOJjnE70oOWkIEnRC-wyBau_A9IbJTs5E-jLrhlLx6QkyVVZPz9k9s0X6TYo8G8MWfcWECWVarZUffvBjPNFX_WicL2tAKQ6G7HRjk2mEGi9lEU16UaX3bLPxHJs5TXvga5095LxWnHVx7L-iuQCCeypbQ"/>
</div>
<div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-tertiary border-2 border-surface flex items-center justify-center">
<span className="material-symbols-outlined text-[12px] text-on-tertiary" data-icon="photo_library" style={{ fontVariationSettings: '"FILL" 1' }}>photo_library</span>
</div>
</div>
<div>
<p className="font-title-md text-body-lg text-on-surface"><span className="text-tertiary font-bold">Ziggy</span> shared a photo!</p>
<p className="font-body-md text-caption text-on-surface-variant">2 minutes ago from 'The Space Station'</p>
</div>
</div>
{/*  Friend 3  */}
<div className="glass-card p-4 rounded-xl flex items-center gap-4 hover:bg-surface-container-high transition-colors">
<div className="relative">
<div className="w-16 h-16 rounded-full border-4 border-primary overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A cartoon-style profile image of a little boy with a blue cap and a playful expression. The setting is a vibrant jungle background with stylized leaves and flowers. Bright, high-contrast colors with a professional kids' gaming UI aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBqbfrJtFTTWseHgByo7CWPlVuYtmf7-MebSj5DUfTk9GRTfNbTa6GCJvS_0P3VyW6pMrMqqustD6vwbRB5drmkLPIohg7vjT36GLDAT3r4fZC62mPHQWgVH-IflJM929Br-bw0CNbR4-DX_Stm58HozFu6SyNpj122TDBXA4WslOPAT_ZFg6atnR-el51XJsxuyhafu10kAZIiswxysZluQVGbsWIww4K1SS9OFdjG2XtAlHk3wJZsw"/>
</div>
<div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary border-2 border-surface flex items-center justify-center">
<span className="material-symbols-outlined text-[12px] text-on-primary" data-icon="sports_esports" style={{ fontVariationSettings: '"FILL" 1' }}>sports_esports</span>
</div>
</div>
<div>
<p className="font-title-md text-body-lg text-on-surface"><span className="text-primary font-bold">Max</span> is playing!</p>
<p className="font-body-md text-caption text-on-surface-variant">5 minutes ago in 'Dino Dash'</p>
</div>
</div>
</div>
</section>
{/*  Playful Call to Action  */}
<section className="mb-stack-gap-lg">
<div className="bg-primary-container p-8 rounded-3xl text-center chunky-shadow-primary relative overflow-hidden">

<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-primary-container relative z-10">Want to join them?</h2>
<p className="font-body-lg text-on-primary-container/80 mb-6 relative z-10">Choose an activity and start your next streak!</p>
<button className="bg-on-primary-container text-primary-container font-title-md px-10 py-4 rounded-full active:scale-95 transition-transform relative z-10 shadow-xl">
                    LETS PLAY!
                </button>
</div>
</section>
</main>
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-surface-container-low/90 dark:bg-surface-container-lowest/90 backdrop-blur-xl border-t border-white/10 rounded-t-xl shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 active:scale-95 transition-transform duration-300" href="#">
<span className="material-symbols-outlined" data-icon="auto_awesome_motion">auto_awesome_motion</span>
<span className="font-label-md text-label-md mt-1">Feed</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 active:scale-95 transition-transform duration-300" href="#">
<span className="material-symbols-outlined" data-icon="draw">draw</span>
<span className="font-label-md text-label-md mt-1">Draw</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 active:scale-95 transition-transform duration-300" href="#">
<span className="material-symbols-outlined" data-icon="chat_bubble">chat_bubble</span>
<span className="font-label-md text-label-md mt-1">Talk</span>
</a>
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-6 py-3 shadow-[4px_4px_0px_0px_rgba(62,0,34,1)] active:scale-95 transition-transform duration-300" href="#">
<span className="material-symbols-outlined" data-icon="sports_esports" style={{ fontVariationSettings: '"FILL" 1' }}>sports_esports</span>
<span className="font-label-md text-label-md mt-1">Activity</span>
</a>
</nav>
    </div>
  );
};

export default OmniKidsActivityDashboard;
