import React, { useEffect } from 'react';

const OmniChat = () => {
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
      <header className="fixed top-0 w-full z-50 bg-surface-container/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50">
<div className="flex items-center justify-between px-margin-mobile md:px-margin-desktop w-full h-16">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-primary-container overflow-hidden active:scale-95 transition-transform duration-300">
<img className="w-full h-full object-cover" data-alt="A portrait of a young tech enthusiast with a friendly smile, styled in a vibrant cinematic neon glow. The background is a blurred architectural glass space with electric purple and deep indigo tones, matching the Lumina Adaptive design aesthetic. Soft focused lighting highlights professional but approachable features." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCjMaAEiDgqrvorxdps8zauGUZarhKgsNTSQGGZZp4tdGvWtiAaffFtF6KMWt4jkynubOzQAae6NpY-p3MMoDgS0T02PUH6R660bAkME1iQDJ5i_ohUoR_3dJxhmgz0ZLDo9lnVLkUSkW_1fWBPanfbKVtXGjIITkzOnuLuZDw2BrImDuxk0-_juTdsKOExxjQBVDcc9DNGoVxXmkdkq6l-Bk9cmCVZ4KHqB7mzCclecEBZt_015Gw_A"/>
</div>
<h1 className="font-display-lg text-[24px] md:text-headline-lg text-primary tracking-tighter">Omni</h1>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-white/5 transition-colors text-on-surface-variant active:scale-95">
<span className="material-symbols-outlined">settings</span>
</button>
</div>
</div>
</header>
<main className="pt-24 pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
{/*  Search Section  */}
<div className="mb-stack-gap-lg">
<div className="relative group">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline">
<span className="material-symbols-outlined">search</span>
</div>
<input className="w-full h-14 pl-12 pr-4 glass-panel rounded-2xl focus:ring-2 focus:ring-primary-container focus:outline-none text-body-md text-on-surface transition-all group-hover:border-primary/30" placeholder="Search conversations..." type="text"/>
</div>
</div>
{/*  Conversations List  */}
<div className="space-y-stack-gap-sm">
{/*  Active Conversation 1  */}
<div className="stagger-item glass-card rounded-2xl p-4 flex items-center gap-4 cursor-pointer" style={{ animationDelay: '0.1s' }}>
<div className="relative flex-shrink-0">
<div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
<img className="w-full h-full object-cover" data-alt="A macro close-up of a digital artist with colorful light reflecting off their sleek spectacles. The environment is a high-tech studio with purple and blue backlighting. High fidelity, 8k resolution, capturing skin texture and expressive emotion in a modern cyber-noir style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwq5DcGle1xCRCl4BOH8N7vmYmDOn91TwiV9cH8x9nMujEKO3WF8TRqEg8sFEWObMwr8cf9aGqJ439EdKYRn1KV8oTBYvinYXtYMeIpoPRBEap8MTuydNmKgaSL7QUgGOxwKP-8na2YoWHbuckaxGcYkS4fGhhN1A3HRCOScqOmoghhq0_ZbOy49g5LpxdB-WAuKx19Az8McYDaSpgqmMXK4s3ZAg0iK4Axu-_XqH0BxhCDXHunYnhrQ"/>
</div>
<div className="status-online"></div>
</div>
<div className="flex-grow min-w-0">
<div className="flex justify-between items-center mb-1">
<h3 className="font-title-md text-body-md font-semibold text-on-surface truncate">Alex Rivera</h3>
<span className="font-label-md text-[12px] text-outline">12:45 PM</span>
</div>
<div className="flex justify-between items-center">
<p className="text-on-surface-variant text-body-md truncate max-w-[80%]">The new design prototypes are ready for review!</p>
<div className="w-5 h-5 bg-primary-container rounded-full flex items-center justify-center">
<span className="text-[10px] font-bold text-on-primary">2</span>
</div>
</div>
</div>
</div>
{/*  Active Conversation 2  */}
<div className="stagger-item glass-card rounded-2xl p-4 flex items-center gap-4 cursor-pointer" style={{ animationDelay: '0.2s' }}>
<div className="relative flex-shrink-0">
<div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
<img className="w-full h-full object-cover" data-alt="Portrait of a professional software architect in a minimalist workspace. The lighting is cold blue and warm magenta, creating a sophisticated glassmorphic aesthetic. The subject has a confident expression, with a soft blur of glowing server racks in the deep background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVFvRsxFD8T3vv6gqB_-5JTxZiOPyfnvz_GXJq34J7jUVRAVVLeUCOpvBeCwgLx7DhAZuHfElRb9yipbH88NSWvS5CnGwhHR_jSbHpcMLeibBnPauIFtE-DyEF6tjUB37hTTpwDZF6E6jaHD2qzOY2YfdG8Tg00G7exD3VXLTRH9X2V7k2fyPZhYXsH0AvD62NWyLPpgvSqCQ9feigf-aaFTM29_v3-AICr2xKb2zIdKnc2dW4vyPm7Q"/>
</div>
<div className="status-online"></div>
</div>
<div className="flex-grow min-w-0">
<div className="flex justify-between items-center mb-1">
<h3 className="font-title-md text-body-md font-semibold text-on-surface truncate">Jordan Chen</h3>
<span className="font-label-md text-[12px] text-outline">10:12 AM</span>
</div>
<p className="text-on-surface-variant text-body-md truncate">Did you see the latest update from the dev team?</p>
</div>
</div>
{/*  Active Conversation 3  */}
<div className="stagger-item glass-card rounded-2xl p-4 flex items-center gap-4 cursor-pointer" style={{ animationDelay: '0.3s' }}>
<div className="relative flex-shrink-0">
<div className="w-14 h-14 rounded-full overflow-hidden border-2 border-transparent bg-surface-container-highest">
<img className="w-full h-full object-cover opacity-60 grayscale" data-alt="A trendy fashion influencer with a creative, artistic look, photographed in a futuristic urban setting. The lighting is cinematic with electric purple and soft orange gradients. The composition is focused on the face, with high-end digital retouching feel and sharp detail." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBru0CjmnaK8uPGf-kvzQCQfsoMB0dI59aYcenvAsHx5wHSCtPLCAZgoaImMPxU85DCgm_rupcOoGZqV37awpdvFRpUcCamfcaJTU1nnskqqUyHWybXjB4jaLdj4psxH9J_eP83rvntPzWf2W6D4y14P54mB5ZwxQqFTKF6UKlrlcjDqh8GGJWm7WAa97u07iyWHXjGEyifi2vGIJn8rhd3WWyyirOLLY-Gu05LdjjrFQGKKxDog6axhA"/>
</div>
</div>
<div className="flex-grow min-w-0">
<div className="flex justify-between items-center mb-1">
<h3 className="font-title-md text-body-md font-semibold text-on-surface truncate">Sarah Miller</h3>
<span className="font-label-md text-[12px] text-outline">Yesterday</span>
</div>
<p className="text-outline text-body-md truncate">Let's grab coffee and talk about the Omni launch.</p>
</div>
</div>
{/*  Active Conversation 4  */}
<div className="stagger-item glass-card rounded-2xl p-4 flex items-center gap-4 cursor-pointer" style={{ animationDelay: '0.4s' }}>
<div className="relative flex-shrink-0">
<div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
<img className="w-full h-full object-cover" data-alt="Close up of a creative director in a dimly lit, high-contrast environment. Bold accent lighting in electric purple defines the silhouette. The style is hyper-modern and clean, with a focus on textures and professional lighting setups typical of premium tech branding." src="https://lh3.googleusercontent.com/aida-public/AB6AXuALSKLrO2WxpRvNHaQP2cec_8N7TJvTjgBNIsViYhgrmMlSJQvTWS6lxfBZyL2uChv8ZN8ennWcZwWp-c6q_PtsIadZAvKyxRDfrb6RaihXj85KDXPEayYnla7og5FZP8wlIgeusFAGl_UgBGX_NLRWPzY2ZDonQVqqsEYGJgYuUpOCgJtkJrOnLyNmIfZ0E37g__ajXhl9VO4vmLZJXbOVYS2wFxvxnXFIAV582mMkk5K7o8FJHLXUTw"/>
</div>
<div className="status-online"></div>
</div>
<div className="flex-grow min-w-0">
<div className="flex justify-between items-center mb-1">
<h3 className="font-title-md text-body-md font-semibold text-on-surface truncate">Product Space</h3>
<span className="font-label-md text-[12px] text-outline">Monday</span>
</div>
<p className="text-on-surface-variant text-body-md truncate font-medium text-primary">Marcus: Sent a file (Architecture_v2.pdf)</p>
</div>
</div>
{/*  Active Conversation 5  */}
<div className="stagger-item glass-card rounded-2xl p-4 flex items-center gap-4 cursor-pointer" style={{ animationDelay: '0.5s' }}>
<div className="relative flex-shrink-0">
<div className="w-14 h-14 rounded-full overflow-hidden border-2 border-transparent bg-surface-container-highest">
<img className="w-full h-full object-cover" data-alt="A focused digital engineer working at night, face illuminated by the soft glow of multiple screens. Deep shadows, electric cyan and purple color palette. The aesthetic is sophisticated and high-tech, evoking a sense of deep focus and innovation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvnbK3TpL_JC6W1E7ce4L3nUaaLk05RPTWtcOev7TWiPJtjAGGHpsHPLqyt8-waWNADc1KXzhDNdjs7g0FW6mf1eWzxGcNXZCxAXxKB7wswfNNyVVM0yHBFLlBG7Vyi8CcL_P5KASv1buSEh-cp_67A_t1mPj4B2sKLdJEmeNSGFjEJX-g5UyJEzwAPpZEgrM6nkGJLyDc8P108-I05egZnn8GnXIO1Zgtx_jm1-bDEByH_6h7F--bug"/>
</div>
</div>
<div className="flex-grow min-w-0">
<div className="flex justify-between items-center mb-1">
<h3 className="font-title-md text-body-md font-semibold text-on-surface truncate">David Vance</h3>
<span className="font-label-md text-[12px] text-outline">Mar 12</span>
</div>
<p className="text-outline text-body-md truncate">Check out the new analytics module when you can.</p>
</div>
</div>
</div>
</main>
<nav className="fixed bottom-0 w-full rounded-t-xl z-50 bg-surface-container-lowest/70 backdrop-blur-2xl border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.4)]">
<div className="flex justify-around items-center w-full px-2 py-3 pb-safe">
{/*  Feed  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all duration-300" href="#">
<span className="material-symbols-outlined">dynamic_feed</span>
<span className="font-label-md text-label-md">Feed</span>
</a>
{/*  Spaces  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all duration-300" href="#">
<span className="material-symbols-outlined">group_work</span>
<span className="font-label-md text-label-md">Spaces</span>
</a>
{/*  Share  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all duration-300" href="#">
<span className="material-symbols-outlined">add_circle</span>
<span className="font-label-md text-label-md">Share</span>
</a>
{/*  Chat (Active)  */}
<a className="flex flex-col items-center justify-center bg-primary-container/30 text-primary rounded-xl px-3 py-1 shadow-[0_0_15px_rgba(128,131,255,0.2)]" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>forum</span>
<span className="font-label-md text-label-md">Chat</span>
</a>
{/*  Social  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all duration-300" href="#">
<span className="material-symbols-outlined">group</span>
<span className="font-label-md text-label-md">Social</span>
</a>
</div>
</nav>
    </div>
  );
};

export default OmniChat;
