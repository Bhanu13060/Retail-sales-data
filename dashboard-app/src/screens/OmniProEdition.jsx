import React, { useEffect } from 'react';

const OmniProEdition = () => {
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
      <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-primary/10 flex justify-between items-center px-gutter h-20">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary text-3xl">search</span>
<h1 className="font-display-lg text-display-lg tracking-tighter text-primary bg-clip-text text-4xl md:text-5xl">Omni</h1>
</div>
<div className="flex items-center gap-6">
<nav className="hidden md:flex gap-8">
<a className="font-label-md text-label-md text-primary hover:opacity-80 transition-opacity" href="#">Dashboard</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:opacity-80 transition-opacity" href="#">Archive</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:opacity-80 transition-opacity" href="#">Support</a>
</nav>
<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
<img className="w-full h-full object-cover" data-alt="A professional headshot of a mature woman with a kind expression, softly lit in a modern corporate setting with deep blue and white tones. She wears a crisp white blouse, and the background is a blurred high-end office environment with clean glass surfaces and cool lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2_Hdq_yBJD1_BKEa6GRBvEaVs4iwP7dahYf61u2h0LCMkLfWEzwBKfSBAjzQOs-NbEpp190G4189DbzdvxwNPlD6yAXoz_cXdjxEsqaVOebiIEZhwWS7qmMHfP2nVGtAR1Z1bSg9p46LGpghRHnHsaf5iHq314LUu35pvg1q0bDaFHjoCPmdCCobrgiWCwDzFKAPHG2E1rPx5NENmXI6U_Nl7hFGmYby8Ia09EJ7_PxS2_XfyIfoHAw" />
</div>
</div>
</header>
<main className="pt-32 px-gutter max-w-container-max-width mx-auto">
{/*  Hero Welcome  */}
<section className="mb-stack-gap-lg">
<h2 className="font-headline-lg text-headline-lg mb-2">Share Hub</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Securely manage your professional documents and shared resources with clarity and ease.</p>
</section>
{/*  Quick Actions Bento Grid  */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-stack-gap-md mb-stack-gap-lg">
{/*  Action 1: Upload  */}
<button className="flex items-center p-8 rounded-xl bg-primary-container text-on-primary-container border border-primary/30 group hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-xl text-left" >
<div className="bg-on-primary-container/10 p-4 rounded-full mr-6">
<span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>upload_file</span>
</div>
<div>
<span className="font-title-md text-title-md block">Upload Document</span>
<span className="font-body-md text-body-md opacity-80">PDF, Word, or Image files</span>
</div>
<span className="material-symbols-outlined ml-auto text-3xl opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
</button>
{/*  Action 2: Share  */}
<button className="flex items-center p-8 rounded-xl bg-surface-container-high text-on-surface border border-white/5 group hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-xl text-left" >
<div className="bg-primary/10 p-4 rounded-full mr-6 text-primary">
<span className="material-symbols-outlined text-4xl">link</span>
</div>
<div>
<span className="font-title-md text-title-md block">Share Link</span>
<span className="font-body-md text-body-md text-on-surface-variant">Send a secure access code</span>
</div>
<span className="material-symbols-outlined ml-auto text-3xl opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
</button>
</section>
{/*  Recent Shares List  */}
<section className="mb-stack-gap-lg">
<div className="flex items-center justify-between mb-stack-gap-md">
<h3 className="font-title-md text-title-md">Recent Activity</h3>
<a href="#" className="text-primary font-label-md text-label-md flex items-center gap-2 hover:underline">View Archive <span className="material-symbols-outlined">open_in_new</span></a>
</div>
<div className="space-y-stack-gap-sm">
{/*  Activity Item 1  */}
<div className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl bg-surface-container border border-white/5 hover:border-primary/20 transition-colors">
<div className="flex items-center gap-6 mb-4 md:mb-0">
<div className="bg-surface-container-highest p-3 rounded-lg text-primary">
<span className="material-symbols-outlined text-3xl">description</span>
</div>
<div>
<p className="font-body-lg text-body-lg font-bold">Quarterly_Report_Q3.pdf</p>
<p className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">Shared with: Management Team</p>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-8">
<div className="text-right">
<p className="font-label-md text-label-md text-on-surface">Oct 12, 2023</p>
<p className="font-caption text-caption text-on-surface-variant text-xs">2.4 MB • PDF</p>
</div>
<button className="p-3 hover:bg-white/5 rounded-full text-on-surface-variant active:scale-90 transition-transform">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
{/*  Activity Item 2  */}
<div className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl bg-surface-container border border-white/5 hover:border-primary/20 transition-colors">
<div className="flex items-center gap-6 mb-4 md:mb-0">
<div className="bg-surface-container-highest p-3 rounded-lg text-tertiary">
<span className="material-symbols-outlined text-3xl">photo_library</span>
</div>
<div>
<p className="font-body-lg text-body-lg font-bold">Project_Assets_Final.zip</p>
<p className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">Shared via: Secure Link</p>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-8">
<div className="text-right">
<p className="font-label-md text-label-md text-on-surface">Oct 10, 2023</p>
<p className="font-caption text-caption text-on-surface-variant text-xs">45.8 MB • ZIP</p>
</div>
<button className="p-3 hover:bg-white/5 rounded-full text-on-surface-variant active:scale-90 transition-transform">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
{/*  Activity Item 3  */}
<div className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl bg-surface-container border border-white/5 hover:border-primary/20 transition-colors">
<div className="flex items-center gap-6 mb-4 md:mb-0">
<div className="bg-surface-container-highest p-3 rounded-lg text-secondary">
<span className="material-symbols-outlined text-3xl">contract_edit</span>
</div>
<div>
<p className="font-body-lg text-body-lg font-bold">Insurance_Policy_Renew.docx</p>
<p className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">Shared with: Legal Advisor</p>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-8">
<div className="text-right">
<p className="font-label-md text-label-md text-on-surface">Oct 08, 2023</p>
<p className="font-caption text-caption text-on-surface-variant text-xs">842 KB • DOCX</p>
</div>
<button className="p-3 hover:bg-white/5 rounded-full text-on-surface-variant active:scale-90 transition-transform">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
</div>
</section>
{/*  Informational Card  */}
<section className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-surface-container-low to-background border border-primary/10 flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
<div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
<div className="w-full md:w-1/3 aspect-square rounded-xl overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover" data-alt="A macro photograph of an expensive, polished dark blue fountain pen resting on a crisp white textured paper document. The lighting is soft and directional, highlighting the metallic details of the pen and the subtle grain of the paper, conveying a mood of legal security, trustworthiness, and professional integrity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI_i-GrPVlj38aY0h_9OFo4i3gjsveP2RXeqIGGwq6k32Yq93vzGcBQaRVWKSDKLApvsGbV2A4SXBqTAoelZwVEnwiORJtFVR8EJQFghatQ2kY-BJy4jU5L4nN4wWG_ssERUB30_Ul9BFqxwMJ_Y0m-Bx7ZH9fY5hq_f1mYVSOSjVJGwYrVQqBvxgi608TqmB4iFv1J2pah5QngIQNjSeS7-W-QtivIYcsAFjm7sDBIiivUodd7I5Nuw" />
</div>
<div className="flex-1 space-y-4 relative z-10">
<h4 className="font-headline-lg text-headline-lg text-primary">Enterprise Grade Security</h4>
<p className="font-body-lg text-body-lg text-on-surface">Every document shared through Omni is encrypted with 256-bit AES protection. We prioritize your privacy and ensure that only intended recipients can access your professional data.</p>
<div className="flex gap-4 pt-4">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-primary">verified_user</span>
<span className="font-label-md">End-to-End Encrypted</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-primary">history</span>
<span className="font-label-md">Full Audit Log</span>
</div>
</div>
</div>
</section>
</main>
<nav className="hidden md:flex gap-8">
<a className="font-label-md text-label-md text-primary hover:opacity-80 transition-opacity" href="#">Dashboard</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:opacity-80 transition-opacity" href="#">Archive</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:opacity-80 transition-opacity" href="#">Support</a>
</nav>
    </div>
  );
};

export default OmniProEdition;
