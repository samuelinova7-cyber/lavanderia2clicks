import { MapPin, Clock, Shield, Car, Wind, DollarSign, Wifi, ThermometerSnowflake, Baby, Speaker, CheckCircle2, ChevronDown, Star, Instagram, Phone, Droplets, ChevronRight, MessageCircle, VolumeX, Volume2, Zap, MapPin as MapPinIcon, Maximize2, Coins, Gift, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

// --- Components ---

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white shadow-sm">
      {/* Top Banner */}
      <div className="w-full bg-blue-600 text-white text-xs font-bold py-1.5 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          <span className="mx-4">FÁCIL • PRÁTICO • ECONÔMICO • SUSTENTÁVEL</span>
          <span className="mx-4">FÁCIL • PRÁTICO • ECONÔMICO • SUSTENTÁVEL</span>
          <span className="mx-4">FÁCIL • PRÁTICO • ECONÔMICO • SUSTENTÁVEL</span>
          <span className="mx-4">FÁCIL • PRÁTICO • ECONÔMICO • SUSTENTÁVEL</span>
          <span className="mx-4">FÁCIL • PRÁTICO • ECONÔMICO • SUSTENTÁVEL</span>
          <span className="mx-4">FÁCIL • PRÁTICO • ECONÔMICO • SUSTENTÁVEL</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <img 
            src="https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-03-01%20130109.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvQ2FwdHVyYSBkZSB0ZWxhIDIwMjYtMDMtMDEgMTMwMTA5LnBuZyIsImlhdCI6MTc3MjU2MTQwNSwiZXhwIjoyMDI0ODQ5NDA1fQ.CHHWkWip7l1slwMR5zS64N72p0XANC992y0chTojIzU" 
            alt="2 Clicks Lavanderia Logo" 
            className="h-10 md:h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <span className="font-black text-xl text-slate-900 tracking-tight hidden sm:block">2 CLICKS LAVANDERIA</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {['Sobre', 'Como Funciona', 'Benefícios', 'Preços', 'Unidades'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="https://wa.me/message/4LRPJ3HSDEXXB1" 
            target="_blank" 
            rel="noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-colors flex items-center gap-2 shadow-md shadow-blue-600/20"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {['Sobre', 'Como Funciona', 'Benefícios', 'Preços', 'Unidades'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-800 font-bold text-lg py-2 border-b border-slate-50"
                >
                  {item}
                </a>
              ))}
              <a 
                href="https://wa.me/message/4LRPJ3HSDEXXB1" 
                target="_blank" 
                rel="noreferrer"
                className="bg-blue-600 text-white px-6 py-4 rounded-xl font-bold text-center flex justify-center items-center gap-2 mt-4"
              >
                <MessageCircle size={20} />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-[#f8fafc] overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold mb-8 uppercase tracking-wider">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div> 
              Referência em Mogi das Cruzes
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Lavanderia Self-<br/>Service em Mogi das<br/>Cruzes – <span className="text-blue-600">Rápida,<br/>Moderna e com<br/>Benefícios Exclusivos</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              Na 2 Clicks Lavanderia você lava e seca suas roupas em aproximadamente uma hora, com produtos <span className="font-bold text-blue-600">profissionais</span> inclusos, esterilização UV e total autonomia.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a href="#unidades" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
                Ver Unidades <ChevronRight size={20} />
              </a>
              <a href="#como-funciona" className="bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg transition-colors flex items-center justify-center">
                Como Funciona
              </a>
              <div className="w-full sm:w-auto mt-2 sm:mt-0">
                <a href="#preços" className="bg-[#00a859] hover:bg-[#008f4c] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-colors flex items-center justify-center shadow-lg shadow-green-600/20 w-full sm:w-auto">
                  Quero lavar agora
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Media */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[650px] bg-slate-200 border-8 border-white">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20lav%20hero%20video.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgbGF2IGhlcm8gdmlkZW8ubXA0IiwiaWF0IjoxNzcyNTYxMTk4LCJleHAiOjE5NjE3NzcxOTh9.faofwgcoMhJ2ueVRMODgilSM6kMFIMAnuaHIbK8_j68" type="video/mp4" />
              </video>
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 shadow-xl border border-white/50">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Droplets className="text-blue-500" size={24} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-sm md:text-base">2 Clicks Lavanderia</h4>
                  <p className="text-xs md:text-sm text-slate-600 font-medium">Sua roupa pronta em aproximadamente uma hora</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-400/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const About = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-8 uppercase tracking-wider border border-blue-100">
              Sobre a 2 Clicks
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight uppercase">
              Devolvendo <span className="text-blue-600">tempo, economia e praticidade</span> para você
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              A 2 Clicks Lavanderia foi fundada em 2022 com um propósito simples: devolver tempo, economia e praticidade para você.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Somos referência em lavanderia self-service em Mogi das Cruzes, oferecendo uma estrutura moderna, ambiente seguro e equipamentos de alta performance que garantem mais eficiência e cuidado com suas roupas.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Aqui você encontra praticidade, economia, autonomia e tecnologia para resolver tudo em aproximadamente uma hora — sem burocracia e sem esperar dias para retirar suas peças.
            </p>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl w-full max-w-[450px] aspect-[4/5] bg-slate-200">
              <video 
                ref={videoRef}
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20estrutrura%20video.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgZXN0cnV0cnVyYSB2aWRlby5tcDQiLCJpYXQiOjE3NzI1NjI5MTMsImV4cCI6MjA1NjM4NjkxM30.hbKVA41PCFj_OPDMJxvZS2gStIduShMsXVm1hOtiENM" type="video/mp4" />
              </video>
              
              <button 
                onClick={toggleMute}
                className="absolute bottom-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-800 hover:scale-110 transition-transform shadow-xl border border-white/50"
                aria-label={isMuted ? "Ativar som" : "Desativar som"}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Differentials = () => {
  const items = [
    { icon: <Zap size={24} strokeWidth={2} />, title: 'Alta Performance', desc: 'Máquinas industriais de última geração com alta capacidade e produtos profissionais.' },
    { icon: <Shield size={24} strokeWidth={2} />, title: 'Esterilização UV', desc: 'Luz ultravioleta que elimina 99.9% de germes e bactérias.' },
    { icon: <MapPinIcon size={24} strokeWidth={2} />, title: 'Estacionamento', desc: 'Vagas exclusivas na porta para sua total comodidade.' },
    { icon: <Clock size={24} strokeWidth={2} />, title: 'Funcionamento 24h', desc: 'Sempre aberto, sábado, domingo e feriados 24 horas.' },
    { icon: <Maximize2 size={24} strokeWidth={2} />, title: 'Conforto', desc: 'Estrutura organizada e climatizada com Wi-Fi, Alexa e espaço kids.' },
    { icon: <Coins size={24} strokeWidth={2} />, title: 'Cashback', desc: 'Quem escolhe a 2 Clicks regularmente aproveita benefícios especiais de forma automática. Porque fidelidade merece retorno.' },
  ];

  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            NOSSOS <span className="text-blue-600">DIFERENCIAIS</span>
          </h2>
          <p className="text-slate-600 text-lg">Na 2 Clicks você tem eficiência, segurança e comodidade no mesmo lugar.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-start">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Comfort = () => {
  const items = [
    { icon: <Wifi size={32} strokeWidth={2} />, title: 'Wi-Fi Grátis', desc: 'Conecte-se enquanto espera.' },
    { icon: <Maximize2 size={32} strokeWidth={2} className="rotate-45" />, title: 'Ar Condicionado', desc: 'Ambiente sempre climatizado.' },
    { icon: <Star size={32} strokeWidth={2} />, title: 'Espaço Kids', desc: 'Diversão para os pequenos.' },
    { icon: <Speaker size={32} strokeWidth={2} />, title: 'Alexa', desc: 'Peça sua música favorita.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column - Grid */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {items.map((item, idx) => (
                <div key={idx} className="bg-[#f8fafc] p-8 rounded-[2rem] flex flex-col items-center text-center border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="text-blue-600 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-6 uppercase tracking-wider border border-blue-100">
              CONFORTO TOTAL
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight uppercase">
              MAIS QUE UMA<br/>LAVANDERIA, UM<br/><span className="text-blue-600">ESPAÇO PARA VOCÊ</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Projetamos nossas unidades para que sua espera seja produtiva ou relaxante. Enquanto suas roupas são cuidadas pela melhor tecnologia do mercado, você aproveita nossas comodidades.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="text-[#00a859] flex-shrink-0" size={24} />
                Ambiente monitorado 24h por câmeras.
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="text-[#00a859] flex-shrink-0" size={24} />
                Bancada para dobrar roupas com praticidade.
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="text-[#00a859] flex-shrink-0" size={24} />
                Localização privilegiada e segura.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Sustainability = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-[#1d4ed8] rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
            
            {/* Left Column - Text */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold mb-8 uppercase tracking-wider backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                ECONOMIA E SUSTENTABILIDADE
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[1.1] tracking-tight uppercase">
                TECNOLOGIA QUE<br/>ECONOMIZA ÁGUA,<br/>ENERGIA E O SEU<br/>DINHEIRO.
              </h2>
              
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                As máquinas profissionais da 2 Clicks Lavanderia utilizam ciclos otimizados que reduzem o consumo de água e energia quando comparados a lavagens domésticas tradicionais.
              </p>
              
              <p className="text-blue-100 text-sm leading-relaxed mb-12">
                Ao escolher a lavanderia self-service, você contribui para um uso mais inteligente de recursos naturais, além de reduzir o desgaste da sua máquina de casa. Mais eficiência. Menos desperdício. Mais economia para você e para o planeta.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 flex-1 text-center">
                  <div className="text-3xl font-black text-white mb-1">-40%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-blue-200">CONSUMO DE ÁGUA</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 flex-1 text-center">
                  <div className="text-3xl font-black text-white mb-1">-30%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-blue-200">ENERGIA ELÉTRICA</div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:w-1/2 w-full">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square bg-[#0f172a] border-4 border-white/10">
                <img 
                  src="https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20eco.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgZWNvLmpwZWciLCJpYXQiOjE3NzI1NjQwNTEsImV4cCI6MjA1NjM4ODA1MX0.OkEVKf0Bb_fJQD_VkIyDkBzdRyjXhifo5eiUYgLN2A0" 
                  alt="Selo EcoNomia Smart 2 Clicks" 
                  className="w-full h-full object-contain p-8"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const items = [
    { icon: <Coins size={24} strokeWidth={2} />, title: 'Cashback', desc: 'Quem escolhe a 2 Clicks regularmente aproveita benefícios especiais de forma automática. Porque fidelidade merece retorno.' },
    { icon: <Gift size={24} strokeWidth={2} />, title: 'Aniversariantes', desc: 'No mês do seu aniversário, você recebe um benefício exclusivo para comemorar com roupa limpa e renovada.' },
    { icon: <Sparkles size={24} strokeWidth={2} />, title: 'Cupons', desc: 'Clientes cadastrados recebem promoções e condições especiais ao longo do ano via WhatsApp.' },
    { icon: <Star size={24} strokeWidth={2} />, title: 'Promoções', desc: 'Campanhas especiais divulgadas em nossas redes sociais e unidades.' },
  ];

  return (
    <section id="benefícios" className="py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            CLUBE DE <span className="text-blue-600">BENEFÍCIOS</span>
          </h2>
          <p className="text-slate-600 text-lg">Aqui você lava e ainda ganha. Vantagens exclusivas para nossos clientes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-start">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#unidades" className="inline-flex items-center justify-center gap-2 bg-[#00a859] hover:bg-[#008f4c] text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg shadow-green-600/20">
            Ir para as unidades <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { num: '1', title: 'Meça suas peças no cesto medidor', desc: 'Peças soltas, abertas sem compactar para o fundo. Apenas solte as peças até chegar à borda.' },
    { num: '2', title: 'Escolha a máquina', desc: 'Selecione a máquina ideal para o volume de roupas (Um ou Dois Cestos).' },
    { num: '3', title: 'Pague no Totem', desc: 'Realize o pagamento diretamente no painel via Cartão ou Pix.' },
    { num: '4', title: 'Lave e Seque', desc: 'Em aproximadamente 1 hora suas roupas estarão limpas e secas.' },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column - Text */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
              COMO <span className="text-blue-600">FUNCIONA</span>
            </h2>
            <p className="text-slate-600 text-lg mb-12">
              Lavar suas roupas na 2 Clicks é simples, rápido e intuitivo. Você resolve tudo no seu tempo, sem burocracia.
            </p>

            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center shadow-md shadow-blue-600/20 mt-1">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Video */}
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] bg-slate-200 border-8 border-slate-800">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2%20c%20maquina.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMiBjIG1hcXVpbmEubXA0IiwiaWF0IjoxNzcyNTY0NTc5LCJleHAiOjIwNTYzODg1Nzl9.PL4UD-J-trj2rbCGV_wyfCZarzbfPWBNLOdSFZVhpRk" type="video/mp4" />
              </video>
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 text-center shadow-xl border border-white/50">
                <p className="text-sm text-slate-900 font-bold">Passo a passo no Totem</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export { Header, Hero, About, Differentials, Comfort, Sustainability, Benefits, HowItWorks };
