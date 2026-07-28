import React, { useEffect } from 'react';

const OmniGroupChatrefinedMedia = () => {
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
      <header className="fixed top-0 w-full z-50 bg-surface-container/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 h-16 flex items-center justify-between px-margin-mobile">
<div className="flex items-center gap-3">
<button className="spring-interaction text-on-surface-variant">
<span className="material-symbols-outlined">arrow_back</span>
</button>
<div className="flex flex-col">
<h1 className="font-title-md text-[18px] leading-tight text-primary">Lumina Project Team</h1>
<p className="font-caption text-outline">12 members • 4 online</p>
</div>
</div>
<div className="flex items-center -space-x-3 overflow-hidden">
<img className="w-8 h-8 rounded-full border-2 border-surface-container object-cover" data-alt="A professional headshot of a young female creative director with vibrant purple lighting, soft bokeh background, high-end photography style, matching the Lumina UI theme of deep blues and electric purples." src="https://lh3.googleusercontent.com/aida-public/AB6AXuATOXIrHEx5p7Dq_B_XqpUTkQYX4w08Cvdz_ligx63SErYyqIZ-nb5a8cRRa_g2Avx60jVTwWODWf2W1yHjZERlvwepxXWcu82K7HynAS7iDZqj3EBHfhPn_izulhjyH6nLM7vHc4aMM8ilC3S_fSAbhtEaNQ6OhaNgFmBsDzmn-4yXknGbJDQWZfTZZpe3lNeTzD5cmw0csVMfya1QuVd6kHakhvh5nM6Dje91pJcxZ0LrLGjkayQbiA"/>
<img className="w-8 h-8 rounded-full border-2 border-surface-container object-cover" data-alt="A high-fidelity portrait of a male lead developer in a dark tech-focused environment, illuminated by cool blue neon lights, professional cinematic lighting, sharp focus, fitting the futuristic glassmorphic aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL02fxU3aoLeBh6yR6GZKA5tTUCUwL86RnNEfEjY15F8PtsrsTDzEAkhXUlQdSHhHtNJ8pJFTXVgquiMUv_IlK4DdA7sgxcJMSlS2MZx9os7OyfnrgGT1jI1FZBhx2ckFWkiA8sIIY-3DV5bBQpeH-eZDOighIfpRAGZBwHYQBnnlhZ8ByQQv8bjNiH8nCXUVjTbuTqyVQJktnm16Ifd_nQ3BbJozBvtUTr_j7Dbt0zR5yme1jDixDew"/>
<img className="w-8 h-8 rounded-full border-2 border-surface-container object-cover" data-alt="A close-up portrait of a UI designer with a soft warm glow against a dark minimalist studio background, high-quality digital photography, integrated seamlessly with the premium Omni application style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsCeWhy1ykv-U1lBrutiZKpAqOo-VQVEdSUxdUnGNUj7MKLWZGBxlAlDMMTvVwm7-rgqLZMKg4I8HEx2IWVyO_Ya3wkWokBqK1GJF81VudJG6BWTVSu3ctEtUu3lmA6Y9iBUxiSesNZvgDBRctM5D9aUR51jefLAMeh-xch3kxA7I4swWTuHC_YG1b4RqcrT0gYa6HLbmXAN9W8ypXDwfP_CGDwJPdMqyH8DQ9lzuXGkqSQCJhq2K4zg"/>
<div className="w-8 h-8 rounded-full border-2 border-surface-container bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-on-surface-variant">+9</div>
</div>
<div className="flex items-center gap-2">
<button className="spring-interaction p-2 rounded-full hover:bg-white/5 transition-colors">
<span className="material-symbols-outlined text-on-surface-variant">search</span>
</button>
<button className="spring-interaction p-2 rounded-full hover:bg-white/5 transition-colors">
<span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
</button>
</div>
</header>
<main className="flex-1 flex flex-col pt-16 pb-24 max-w-container-max-width mx-auto w-full px-margin-mobile md:px-margin-desktop">
{/*  Shared Media Gallery Section  */}
<section className="mt-stack-gap-md mb-stack-gap-lg">
<div className="glass-card rounded-xl p-4 overflow-hidden">
<div className="flex items-center justify-between mb-3"><div className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-sm">photo_library</span><div className="flex flex-col"><h2 className="font-label-md text-on-surface uppercase tracking-widest text-[10px]">Shared Media</h2><span className="text-[10px] text-outline-variant">124 Assets</span></div></div><div className="flex items-center gap-3"><button className="spring-interaction text-outline-variant hover:text-primary flex items-center gap-1"><span className="material-symbols-outlined text-sm">filter_list</span><span className="text-[10px] font-label-md uppercase tracking-widest">Filter</span></button><button className="text-primary font-label-md text-xs hover:underline transition-all">View All</button></div></div>
<div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar no-scrollbar px-1"><div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden group cursor-pointer relative border-2 border-tertiary/50 shadow-[0_0_15px_rgba(76,215,246,0.3)]"><img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3an0EkSDeA9dRVuR_muGuVaPSVhqkPIbuYjdGKyRWVisCzd6w2MKaQsc7f4DjmlsEiTiVXAJf46d8ewb_hMtD5nCCO9Sy4qGGu0gkH4vUc711weiO9_0DIjG33NxrVcT9sKbuBsEQaAN6VFEHzP9IIXrtQHFRXdjiYdWs5CFelSlLXu3j5bF34t78D16HgnqTFQ6ybxn6rlaTSoCeNKVPbCid59r10RReLw8f9m9VMxXwHSamF5HJ6A"/><div className="absolute top-2 right-2 bg-tertiary text-on-tertiary rounded-full p-0.5"><span className="material-symbols-outlined text-xs">push_pin</span></div><div className="absolute bottom-0 left-0 right-0 bg-surface-container/80 backdrop-blur-md p-1.5 border-t border-white/10"><p className="text-[8px] text-white truncate font-bold">Dashboard_v2.png</p><p className="text-[8px] text-white/60">3.4 MB</p></div></div><div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden group cursor-pointer relative"><img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo8gBPARx0SXE7Tm8xu8qYs-h_hk9XzYuLDMEXC-2c99QYZ_Kin_mQwgfjZ1ziaD6SGLzIHO3Bh3jQuqc_VnZQfzNpehwpuTNfDZ4msV64x72loZIe4nRlqJjpitJl9V20cbKgk2HnjC_wnqZJ7ksAMHV6NEyG0qeq2aP2C4c4medYOXjRFahFpVCCVncm6oG6S3oAz96oDyqz5XHny4YEmH266TbD9YmHrJEtspdLhJRRP0mTIdn6aQ"/><div className="absolute bottom-0 left-0 right-0 bg-surface-container/80 backdrop-blur-md p-1.5 border-t border-white/10"><p className="text-[8px] text-white truncate font-bold">Night_City.jpg</p><p className="text-[8px] text-white/60">1.2 MB</p></div></div><div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden group cursor-pointer relative"><img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0s6i8n4KLtoHmLuy8K-aO4b5uXeOV72lfeAYq4cfiP7OzyFlHWlMmbBzUOItl0KjyTYSLBIJMCqR_vlCOyrALFxe3y2BwxNi5-75ZtbVh9CjYkEmuXA3TN1XSF3QZyn9UdeEp_a1j_rL884nHywPZJrrN-nYcnhzCL_MizOuoAJbCjA5LzJE1eSjzKrP3Xc2MC30Ae8cbIo2uYoMSljcnEB9TWeCafw2UueV4jcMeI9l3hj65z152NQ"/><div className="absolute bottom-0 left-0 right-0 bg-surface-container/80 backdrop-blur-md p-1.5 border-t border-white/10"><p className="text-[8px] text-white truncate font-bold">Abstract_Refraction.png</p><p className="text-[8px] text-white/60">5.8 MB</p></div></div><div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden group cursor-pointer relative"><img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrd58S7A3TXSivac8jPWL50foOU1GTmes2LP1mV1lfB4R8M9FEkQDpOgOTMdbMVGIytuqpukIwopVWhPbFnCWpIvzYtq5IF1ksMoHxvbSpeRpBD6WSJHKvTpaRnX5EOsUL9L0LflTDmcHrAblJeFr0_gSzHqKVtUO4pIz4vSfwd4MqCQQ6bta8AftEa528W-GqxshgvboB7jeiUaXZzFLb8Js-KQ4VyuZvE_A1oUNEdObh_d_GfHSFZQ"/><div className="absolute bottom-0 left-0 right-0 bg-surface-container/80 backdrop-blur-md p-1.5 border-t border-white/10"><p className="text-[8px] text-white truncate font-bold">Workspace_Setup.jpg</p><p className="text-[8px] text-white/60">2.1 MB</p></div></div></div>
</div>
</section>
{/*  Message Thread  */}
<div className="flex flex-col gap-stack-gap-lg">
{/*  System Timestamp  */}
<div className="flex justify-center">
<span className="bg-surface-container-highest/30 px-3 py-1 rounded-full text-[10px] font-label-md text-outline uppercase tracking-widest">Today</span>
</div>
{/*  Received Message  */}
<div className="flex items-end gap-3 max-w-[85%] animate-in fade-in slide-in-from-bottom-4 duration-500">
<img className="w-8 h-8 rounded-full object-cover mb-1" data-alt="A profile photo of a person with short hair, neutral expression, soft studio lighting, high-end aesthetic, fitting the professional tech-themed dark mode UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXofka1vw4tnGLRjW51RVPjV2cAyJLKu6MI85BqTpjTwLyMAsXKmAa53TsB4595v83-bvOVsPrAx7yU3cSwJo-9s8CcwJYnMz5tDb00J4kfxehkWZh4-jpuVhrIVJ3whI8_RbOAl_J55AU1K82p0lFiYJUkAq8z4e6l21Z9ivYSvqhHZy7mmY8lQwr6clu8Z5YTcB6niOphEjwUn8fCoJuFcwVzmfcKYrmSaK7FraW2Dqmw_y1Q-5dcA"/>
<div className="flex flex-col gap-1">
<span className="font-label-md text-xs text-outline ml-1">Jordan Smith</span>
<div className="glass-card px-4 py-3 rounded-2xl rounded-bl-none">
<p className="text-on-surface leading-relaxed">Hey team, have you seen the latest prototype for the Omni dashboard? The motion curves need a bit of smoothing.</p>
<div className="flex justify-end mt-1">
<span className="text-[10px] text-outline">10:42 AM</span>
</div>
</div>
</div>
</div>
{/*  Sent Message  */}
<div className="flex items-end gap-3 max-w-[85%] self-end flex-row-reverse animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
<div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-[10px] font-bold text-on-primary-container mb-1">ME</div>
<div className="flex flex-col gap-1 items-end">
<span className="font-label-md text-xs text-outline mr-1">You</span>
<div className="message-bubble-primary px-4 py-3 rounded-2xl rounded-br-none">
<p className="text-white leading-relaxed">I'm on it! I'll adjust the cubic-bezier values to be more fluid. Should have an update in 10 mins. 🚀</p>
<div className="flex justify-end mt-1">
<span className="text-[10px] text-white/60">10:45 AM</span>
</div>
</div>
</div>
</div>
{/*  Image Message Received  */}
<div className="flex items-end gap-3 max-w-[85%] animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
<img className="w-8 h-8 rounded-full object-cover mb-1" data-alt="A portrait of a creative professional with glasses, intelligent expression, cinematic lighting with subtle purple highlights, high-quality photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuArwqZ4gVlXraTP50YvQ1YnoSkv0gBwUrmkELdW5wOcTMQMS6M6X-VHgfxO7tUkQGtT6rY3oMpLsvsYwcTrc3RSVlN9yKfMOXqgPHWd1v3Olz8XD3poV010bwK2teHMH9E-bJsgdmMwq-0icvHjm9TlVQY86pZCCjcJY5t13MzvRtPUaqxnDOCd-wC10laJKyemls3qjwRuMl3fMVUgh-ar36HDZCERuGZ0vIfY8mftoOWg1fDfFhurgQ"/>
<div className="flex flex-col gap-1">
<span className="font-label-md text-xs text-outline ml-1">Elena Vance</span>
<div className="glass-card p-1 rounded-2xl rounded-bl-none overflow-hidden">
<div className="rounded-xl overflow-hidden mb-2">
<img className="w-full h-auto object-cover max-h-64" data-alt="A high-fidelity mockup of a mobile chat interface featuring dark mode, glassmorphism elements, and vibrant accent colors, presented on a sleek modern smartphone." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxwteAdf_bVyLteazi1gP-0VaQMIs4eLVXNlTIAyAx2g-xaPMlNdLqc7hJTE8lLFaZXfiyqhiOVg0MFfk3ItjhjUqIF2f440rJ0fmd5c0atjFo_ZBqzHrY21ED5vOwxhr-McaTg7WtkCO5IOHhipOQStk0SuE4saHY8heFZCiYgRKakCRoQBsjKPWWDtn0u9a7x0NKcnxfc0x1Drc3LN9u2sNMEOFNEcmmt9gZiwAaaDvB8TtR2oeG8g"/>
</div>
<div className="px-3 pb-2">
<p className="text-on-surface text-sm">Refined the typography for the chat headers. What do we think about Geist for the primary display?</p>
<div className="flex justify-end mt-1">
<span className="text-[10px] text-outline">10:48 AM</span>
</div>
</div>
</div>
</div>
</div>
{/*  Voice Note Sent  */}
<div className="flex items-end gap-3 max-w-[85%] self-end flex-row-reverse animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
<div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-[10px] font-bold text-on-primary-container mb-1">ME</div>
<div className="flex flex-col gap-1 items-end">
<span className="font-label-md text-xs text-outline mr-1">You</span>
<div className="message-bubble-primary px-4 py-3 rounded-2xl rounded-br-none flex items-center gap-4 min-w-[200px]">
<button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center spring-interaction">
<span className="material-symbols-outlined text-white text-lg">play_arrow</span>
</button>
<div className="flex-1 flex items-center gap-1">
<div className="h-4 w-1 bg-white/40 rounded-full"></div>
<div className="h-6 w-1 bg-white rounded-full"></div>
<div className="h-3 w-1 bg-white/40 rounded-full"></div>
<div className="h-8 w-1 bg-white rounded-full"></div>
<div className="h-5 w-1 bg-white/40 rounded-full"></div>
<div className="h-7 w-1 bg-white rounded-full"></div>
<div className="h-4 w-1 bg-white/40 rounded-full"></div>
</div>
<span className="text-xs text-white/80">0:12</span>
</div>
</div>
</div>
</div>
</main>

    </div>
  );
};

export default OmniGroupChatrefinedMedia;
