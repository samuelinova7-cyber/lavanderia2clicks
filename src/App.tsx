/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header, Hero, About, Differentials, Comfort, Sustainability, Benefits, HowItWorks } from './components/Sections1';
import { Pricing, Tips, InstagramSection, FAQ, Units, Testimonials, Sneakers, Footer, FloatingWhatsApp } from './components/Sections2';

export default function App() {
  return (
    <div className="font-sans text-slate-900 antialiased overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Differentials />
      <Comfort />
      <Sustainability />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <Tips />
      <InstagramSection />
      <FAQ />
      <Units />
      <Testimonials />
      <Sneakers />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
