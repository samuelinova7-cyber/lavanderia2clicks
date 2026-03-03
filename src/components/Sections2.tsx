import { MapPin, Clock, Shield, Car, Wind, DollarSign, Wifi, ThermometerSnowflake, Baby, Speaker, CheckCircle2, ChevronDown, Star, Instagram, Phone, ShoppingBasket, X, ChevronRight, Zap, Maximize2, Sparkles, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const Pricing = () => {
  return (
    <section id="preços" className="py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            NOSSOS <span className="text-blue-600">CICLOS</span>
          </h2>
          <p className="text-slate-600 text-lg">Escolha a capacidade ideal para sua necessidade. Sabão e amaciante inclusos.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Um Cesto */}
          <div className="flex-1 bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-black text-slate-900 mb-2">Um Cesto</h3>
            <p className="text-slate-500 text-sm mb-8">Ideal para roupas do dia a dia, roupas leves e toalhas.</p>
            
            <div className="space-y-4 mb-8">
              <div className="bg-[#f8fafc] rounded-2xl p-4 flex justify-between items-center border border-slate-100">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">LAVAR (~35 MIN)</div>
                  <div className="text-2xl font-black text-slate-900">R$ 16,00</div>
                </div>
                <ShoppingBasket className="text-blue-600" size={24} />
              </div>
              
              <div className="bg-[#f8fafc] rounded-2xl p-4 flex justify-between items-center border border-slate-100">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">SECAR (~45 MIN)</div>
                  <div className="text-2xl font-black text-slate-900">R$ 16,00</div>
                </div>
                <ShoppingBasket className="text-blue-600" size={24} />
              </div>
            </div>
            
            <a href="#unidades" className="block w-full text-center bg-[#1d4ed8] hover:bg-blue-700 text-white py-4 rounded-full font-bold transition-colors">
              Quero lavar agora <ChevronRight size={20} className="inline-block ml-1 -mt-1" />
            </a>
          </div>

          {/* Dois Cestos */}
          <div className="flex-1 bg-white rounded-[2.5rem] p-8 md:p-10 shadow-md border-2 border-blue-600 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-black px-6 py-2 rounded-full uppercase tracking-wider">
              MAIS POTENTE
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2 mt-2">Dois Cestos</h3>
            <p className="text-slate-500 text-sm mb-8">Capacidade industrial para edredons King e grandes volumes.</p>
            
            <div className="space-y-4 mb-8">
              <div className="bg-[#f8fafc] rounded-2xl p-4 flex justify-between items-center border border-slate-100">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">LAVAR (~35 MIN)</div>
                  <div className="text-2xl font-black text-slate-900">R$ 34,00</div>
                </div>
                <ShoppingBasket className="text-blue-600" size={24} />
              </div>
              
              <div className="bg-[#f8fafc] rounded-2xl p-4 flex justify-between items-center border border-slate-100">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">SECAR (~45 MIN)</div>
                  <div className="text-2xl font-black text-slate-900">R$ 34,00</div>
                </div>
                <ShoppingBasket className="text-blue-600" size={24} />
              </div>
            </div>
            
            <a href="#unidades" className="block w-full text-center bg-[#1d4ed8] hover:bg-blue-700 text-white py-4 rounded-full font-bold transition-colors">
              Quero lavar agora <ChevronRight size={20} className="inline-block ml-1 -mt-1" />
            </a>
          </div>
        </div>

        {/* Regras de Uso */}
        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
          <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Shield className="text-blue-600" size={24} /> Regras de Uso e Segurança
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <CheckCircle2 className="text-[#00a859] flex-shrink-0 mt-0.5" size={18} />
                Respeite a capacidade indicada em cada máquina.
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <CheckCircle2 className="text-[#00a859] flex-shrink-0 mt-0.5" size={18} />
                Meça as peças sempre soltas, sem compactar no cesto e ultrapassar a borda.
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <CheckCircle2 className="text-[#00a859] flex-shrink-0 mt-0.5" size={18} />
                Respeite a ordem de chegada.
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <X className="text-red-500 flex-shrink-0 mt-0.5" size={18} />
                Proibido lavar ou secar tapetes, travesseiro, panos de chão, sapatos, roupas com graxa, areia ou excesso de pelos.
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <X className="text-red-500 flex-shrink-0 mt-0.5" size={18} />
                Proibido adicionar produtos em pó em nossos equipamentos.
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <X className="text-red-500 flex-shrink-0 mt-0.5" size={18} />
                Não adicione roupas sem centrifugar em nossas secadoras.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Tips = () => {
  const tips = [
    { num: '1', title: 'Separe por Cores e Tamanhos', desc: 'Lave roupas brancas separadas das coloridas e separe peças grandes de pequenas para uma lavagem uniforme.' },
    { num: '2', title: 'Verifique Bolsos', desc: 'Retire moedas, chaves ou papéis que possam danificar as máquinas.' },
    { num: '3', title: 'Feche Zíperes', desc: 'Zíperes abertos podem enroscar e rasgar outras peças delicadas.' },
    { num: '4', title: 'Não Sobrecarregue', desc: 'Respeite o limite do cesto para que a água e o sabão circulem bem. Assim, você garante melhores resultados na lavagem e secagem.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            DICAS DE <span className="text-blue-600">LAVAGEM</span>
          </h2>
          <p className="text-slate-600 text-lg">Siga nossas recomendações para um resultado impecável.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, idx) => (
            <div key={idx} className="bg-[#f8fafc] p-8 rounded-[2rem] border border-slate-100 hover:shadow-md transition-shadow flex flex-col items-start">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center mb-6">
                {tip.num}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">{tip.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InstagramSection = () => {
  const images = [
    "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-02-26%20130849.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvQ2FwdHVyYSBkZSB0ZWxhIDIwMjYtMDItMjYgMTMwODQ5LnBuZyIsImlhdCI6MTc3MjEyMjIzMiwiZXhwIjoxODAzNjU4MjMyfQ.sSuKlVlyJ9f7ObNCArUM-NkboA_8T-lJUjj8BF0usws",
    "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-02-26%20130825.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvQ2FwdHVyYSBkZSB0ZWxhIDIwMjYtMDItMjYgMTMwODI1LnBuZyIsImlhdCI6MTc3MjEyMjI1MywiZXhwIjoxODAzNjU4MjUzfQ.5eVMoRiks7naQYL7R0EaaYWYUFO8Fc8Mi_vGTyLcYWE",
    "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-02-26%20130757.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvQ2FwdHVyYSBkZSB0ZWxhIDIwMjYtMDItMjYgMTMwNzU3LnBuZyIsImlhdCI6MTc3MjEyMjI2OSwiZXhwIjoxODAzNjU4MjY5fQ.gfNpOGdUYOaTLSh3DzVdFegjCpvAQtTMEi5kmTk25UM",
    "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-02-26%20130739.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvQ2FwdHVyYSBkZSB0ZWxhIDIwMjYtMDItMjYgMTMwNzM5LnBuZyIsImlhdCI6MTc3MjEyMjI4MiwiZXhwIjoxODAzNjU4MjgyfQ.xnL8v61CD87PEDJv7T1futQY9FYgjszjzpzdAxOn8ZI",
    "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-02-26%20130717.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvQ2FwdHVyYSBkZSB0ZWxhIDIwMjYtMDItMjYgMTMwNzE3LnBuZyIsImlhdCI6MTc3MjEyMjMxOSwiZXhwIjoxODAzNjU4MzE5fQ.A2lRm5V6JbHy4lNn2ChN-dnKVyPbPGAoIGrbZU6WO0o",
    "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-02-26%20130648.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvQ2FwdHVyYSBkZSB0ZWxhIDIwMjYtMDItMjYgMTMwNjQ4LnBuZyIsImlhdCI6MTc3MjEyMjMzMiwiZXhwIjoxODAzNjU4MzMyfQ.1OmScxyz2MntpCuK9W3lWy2Fn3Jmk78n5qmZWXJwFvk",
    "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-02-26%20130621.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvQ2FwdHVyYSBkZSB0ZWxhIDIwMjYtMDItMjYgMTMwNjIxLnBuZyIsImlhdCI6MTc3MjEyMjM1OSwiZXhwIjoxODAzNjU4MzU5fQ.8y_68dyKVNRLIQzn3vQu0588Z8xp9wr93QXfz83KHOA"
  ];

  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-12">
        <a href="https://www.instagram.com/2clicks_lavanderia?igsh=cWJnMGo3c3N2eHcx" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 mb-6 hover:scale-110 transition-transform">
          <Instagram size={32} className="text-white" />
        </a>
        <h2 className="text-3xl md:text-4xl font-black mb-4">
          <a href="https://www.instagram.com/2clicks_lavanderia?igsh=cWJnMGo3c3N2eHcx" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
            Siga a @2clickslavanderia
          </a>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">Acompanhe nossas dicas, promoções exclusivas e o dia a dia das nossas unidades no Instagram.</p>
      </div>
      
      {/* Infinite Carousel */}
      <div className="relative w-full flex overflow-x-hidden">
        <div className="animate-marquee flex whitespace-nowrap gap-4 py-4">
          {images.map((img, i) => (
            <a key={i} href="https://www.instagram.com/2clicks_lavanderia?igsh=cWJnMGo3c3N2eHcx" target="_blank" rel="noreferrer" className="flex-shrink-0 hover:opacity-80 transition-opacity">
              <img 
                src={img} 
                alt={`Instagram Post ${i + 1}`} 
                className="w-64 h-64 object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </a>
          ))}
        </div>
        <div className="animate-marquee flex whitespace-nowrap gap-4 py-4 absolute top-0 left-full">
          {images.map((img, i) => (
            <a key={`dup-${i}`} href="https://www.instagram.com/2clicks_lavanderia?igsh=cWJnMGo3c3N2eHcx" target="_blank" rel="noreferrer" className="flex-shrink-0 hover:opacity-80 transition-opacity">
              <img 
                src={img} 
                alt={`Instagram Post ${i + 1}`} 
                className="w-64 h-64 object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: 'Como funciona o sistema da 2 Clicks?', a: 'É muito simples: você chega, coloca suas roupas no cesto medidor, realiza o pagamento no totem (Cartão ou Pix) e seleciona a máquina correspondente. O sabão e amaciante são liberados automaticamente.' },
    { q: 'Preciso levar meus próprios produtos?', a: 'Não! Nossas máquinas já são equipadas com dosagem automática de sabão e amaciante profissionais de alta qualidade, garantindo a melhor limpeza e perfume para suas roupas.' },
    { q: 'Quanto tempo leva para lavar e secar?', a: 'Nossos ciclos são otimizados para sua praticidade. Em aproximadamente uma hora, você já pode ter suas roupas prontas para uso.' },
    { q: 'Posso lavar edredons de casal ou king?', a: 'Sim! Nossas máquinas de \'Dois Cestos\' possuem capacidade industrial, sendo perfeitas para edredons, cobertores pesados e grandes volumes de roupa.' },
    { q: 'Quais as formas de pagamento aceitas?', a: 'Aceitamos cartões de débito, crédito e Pix. Tudo é feito de forma rápida e segura diretamente no nosso totem de autoatendimento.' },
    { q: 'A lavanderia realmente funciona 24 horas?', a: 'Sim! Estamos abertos todos os dias da semana, incluindo domingos e feriados, 24 horas por dia, para que você lave suas roupas no horário que for melhor para você.' },
    { q: 'O que é a esterilização UV?', a: 'É uma tecnologia de ponta que utiliza luz ultravioleta para eliminar 99.9% de ácaros, fungos e bactérias das suas roupas durante o processo, garantindo máxima higiene.' },
    { q: 'Como funciona o sistema de cashback?', a: 'É nosso programa de fidelidade: ao acumular R$ 16,00 de crédito para utilizar em uma lavagem extra de um cesto.' },
    { q: 'Posso utilizar apenas o ciclo de secagem?', a: 'Com certeza! Você pode trazer suas roupas já lavadas de casa e utilizar apenas nossas secadoras profissionais para deixá-las macias e prontas para guardar.' },
    { q: 'Qual o limite de roupas por máquina?', a: 'Para garantir a qualidade da lavagem, você deve respeitar a marca de limite indicada no cesto medidor. Não aperte as roupas; elas devem ficar soltas para que a água e os produtos circulem.' },
    { q: 'A mesma máquina lava e seca?', a: 'Não. As máquinas de baixo são lavadoras e as de cima são secadoras. Após a lavagem, é necessário transferir as peças para a secadora para finalizar o processo.' },
    { q: 'Fica alguém na loja para ajudar?', a: 'Não temos atendimento presencial fixo na unidade. Porém, oferecemos atendimento humanizado através do interfone de fácil acesso na loja e também plantão via WhatsApp, para auxiliar você sempre que precisar.' },
    { q: 'Posso deixar minhas roupas para vocês lavarem?', a: 'Sim, é possível. Mediante contato prévio e pagamento de taxa extra de serviço cobrado por cesto, podemos realizar o processo para você com prazo de entrega em até 24h.' },
    { q: 'Vocês fazem delivery?', a: 'Não realizamos delivery próprio. Mas você pode utilizar o aplicativo de entregas da sua preferência para enviar e receber suas roupas. Recebemos e despachamos para você conforme combinado.' },
    { q: 'Precisa agendar horário?', a: 'Não. O sistema é totalmente self-service, basta chegar e usar.' },
    { q: 'Quanto tempo demora?', a: 'Em aproximadamente uma hora entre lavagem e secagem. Nossos ciclos são ultra rápidos e eficientes.' },
    { q: 'Tem estacionamento?', a: 'Sim! Oferecemos estacionamento exclusivo para nossos clientes em nossas unidades.' },
    { q: 'Posso usar apenas para secar?', a: 'Pode trazer somente para secar, sim! Porém, recomendamos que as peças sejam centrifugadas duas vezes quando lavadas em máquinas domésticas, para garantir melhor desempenho na secagem. Utilize o cesto auxiliar de roupas limpas como referência para medir a capacidade ideal da secadora. É fundamental que as roupas estejam bem centrifugadas e dentro da capacidade indicada, para que o ciclo de 45 minutos seja suficiente para uma secagem eficiente.' },
    { q: 'A máquina já finalizou, mas ainda tem roupas dentro. Posso retirar para usar?', a: 'Sim. Conforme nossas condições de uso, se o ciclo já foi finalizado e o responsável pelas roupas não estiver presente, você pode retirar as peças para utilizar a máquina. Pedimos apenas que utilize os cestos auxiliares de roupas limpas para acomodá-las e deixe-as organizadas embaixo da mesa de apoio. Assim mantemos o fluxo da lavanderia funcionando e garantimos respeito entre todos os clientes.' },
    { q: 'Posso sair enquanto a máquina funciona?', a: 'Sim, porém recomendamos que você acompanhe o tempo da sua lavagem ou secagem e esteja presente ao término do ciclo. Como a lavanderia é self-service e funciona com fluxo contínuo, caso o ciclo já tenha finalizado e o responsável não esteja no local, as roupas poderão ser retiradas pelo próximo cliente, utilizando os cestos auxiliares para roupas limpas e acomodadas de forma organizada. Essa medida garante respeito, agilidade e o bom funcionamento da unidade para todos.' },
    { q: 'Quantas peças cabem em um cesto?', a: 'A capacidade pode variar de acordo com o tamanho e o tipo das peças. Considerando roupas de uso pessoal do dia a dia (camisetas, calças, bermudas, roupas íntimas, toalhas leves), um cesto comporta em média entre 20 e 25 peças. Para garantir melhor desempenho na lavagem e secagem, recomendamos não ultrapassar o limite do cesto utilizando corretamente sem forçar a capacidade.' },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-slate-600">Tire suas dúvidas antes de nos visitar.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <button 
                className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-slate-900 focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                {faq.q}
                <ChevronDown className={`transition-transform ${openIdx === idx ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-5 text-slate-600 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Units = () => {
  const units = [
    {
      name: 'Unidade Alto do Ipiranga',
      address: 'Av. Japão – Mogi das Cruzes',
      desc: 'Estrutura moderna com estacionamento exclusivo, ambiente 100% monitorado e espaço confortável para toda a família. Tecnologia profissional e atendimento dedicado para uma experiência 2 Clicks completa.',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.883738561128!2d-46.2081541!3d-23.5366835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMyJzEyLjEiUyA0NsKwMTInMjkuNCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr',
    },
    {
      name: 'Unidade Mogi Moderno',
      address: 'Rua Dr. Deodato Wertheimer – Mogi das Cruzes',
      desc: 'Ambiente prático e funcional no coração do bairro, com máquinas profissionais, fluxo otimizado e atendimento ágil. Ideal para quem busca eficiência e praticidade sem abrir mão da qualidade 2 Clicks.',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.883738561128!2d-46.2081541!3d-23.5366835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMyJzEyLjEiUyA0NsKwMTInMjkuNCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr',
    }
  ];

  return (
    <section id="unidades" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            NOSSAS <span className="text-blue-600">UNIDADES</span>
          </h2>
          <p className="text-slate-600 text-lg">Encontre a 2 Clicks mais próxima de você em Mogi das Cruzes.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {units.map((unit, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-blue-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{unit.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{unit.address}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{unit.desc}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#" className="flex-1 text-center bg-slate-100 hover:bg-slate-200 text-slate-900 py-3.5 rounded-xl font-bold transition-colors">
                    Como Chegar
                  </a>
                  <a href="https://wa.me/message/4LRPJ3HSDEXXB1" target="_blank" rel="noreferrer" className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold transition-colors">
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
              
              <div className="h-64 w-full bg-slate-200 rounded-[2rem] overflow-hidden relative shadow-sm border border-slate-100">
                <iframe 
                  src={unit.mapUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  title={`Mapa da unidade ${unit.name}`}
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: 'Bruno Ferreira', text: '24 horas de verdade! Já precisei lavar roupa de madrugada e foi super tranquilo.', rating: 5 },
    { name: 'Patrícia Lima', text: 'As instruções são bem claras, fácil de usar mesmo para quem nunca foi.', rating: 5 },
    { name: 'Thiago Rocha', text: 'Lugar moderno e tecnológico. Recomendo a todos na região.', rating: 5 },
    { name: 'Fernanda Dias', text: 'Ganhei minha lavagem de aniversário! Atendimento nota 10.', rating: 5 },
    { name: 'Ricardo Santos', text: 'Melhor lavanderia de Mogi! Máquinas super rápidas e roupas saem cheirosas.', rating: 5 },
    { name: 'Ana Paula Silva', text: 'Praticidade total. O sistema de cashback realmente funciona e ajuda muito.', rating: 5 },
    { name: 'Marcos Oliveira', text: 'Ambiente limpo e seguro. Lavo meus edredons aqui e ficam perfeitos.', rating: 5 },
    { name: 'Juliana Costa', text: 'O cesto é gigante mesmo! Consigo lavar a roupa da semana em um ciclo só.', rating: 5 },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">
              PROVA <span className="text-blue-600">SOCIAL</span>
            </h2>
            <p className="text-slate-600 text-lg">
              A 2 Clicks é reconhecida pelos clientes pela praticidade, limpeza do ambiente e qualidade das máquinas. Temos mais de 650 avaliações no Google, deixe a sua também!
            </p>
          </div>
          <a href="https://g.page/r/CcStKfECPpBMEBM" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-blue-600/20 whitespace-nowrap">
            Avaliar no Google
            <div className="flex text-white">
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
            </div>
          </a>
        </div>
      </div>

      <div className="relative w-full flex overflow-x-hidden pb-8">
        <div className="animate-marquee flex whitespace-nowrap gap-6 py-4 px-3">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-[320px] flex-shrink-0 whitespace-normal flex flex-col h-full">
              <div className="flex text-yellow-400 mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <div className="text-blue-100 mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.41 14.425C16.635 13.787 16.75 13.112 16.75 12.4V3H24V12.4C24 14.612 23.475 16.637 22.425 18.475C21.375 20.312 19.95 21.75 18.15 22.8L14.017 21ZM3.017 21L5.41 14.425C5.635 13.787 5.75 13.112 5.75 12.4V3H13V12.4C13 14.612 12.475 16.637 11.425 18.475C10.375 20.312 8.95 21.75 7.15 22.8L3.017 21Z" />
                </svg>
              </div>
              <p className="text-slate-600 italic mb-8 leading-relaxed flex-grow">"{review.text}"</p>
              <div className="border-t border-slate-100 pt-4 mt-auto">
                <div className="font-bold text-slate-900">{review.name}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">CLIENTE VERIFICADO</div>
              </div>
            </div>
          ))}
        </div>
        <div className="animate-marquee flex whitespace-nowrap gap-6 py-4 px-3 absolute top-0 left-full">
          {reviews.map((review, idx) => (
            <div key={`dup-${idx}`} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-[320px] flex-shrink-0 whitespace-normal flex flex-col h-full">
              <div className="flex text-yellow-400 mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <div className="text-blue-100 mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.41 14.425C16.635 13.787 16.75 13.112 16.75 12.4V3H24V12.4C24 14.612 23.475 16.637 22.425 18.475C21.375 20.312 19.95 21.75 18.15 22.8L14.017 21ZM3.017 21L5.41 14.425C5.635 13.787 5.75 13.112 5.75 12.4V3H13V12.4C13 14.612 12.475 16.637 11.425 18.475C10.375 20.312 8.95 21.75 7.15 22.8L3.017 21Z" />
                </svg>
              </div>
              <p className="text-slate-600 italic mb-8 leading-relaxed flex-grow">"{review.text}"</p>
              <div className="border-t border-slate-100 pt-4 mt-auto">
                <div className="font-bold text-slate-900">{review.name}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">CLIENTE VERIFICADO</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Sneakers = () => {
  const features = [
    { icon: <Shield size={20} />, title: 'Processo Controlado', desc: 'Higienização que respeita materiais delicados como couro e camurça.' },
    { icon: <Zap size={20} />, title: 'Esterilização UV', desc: 'Elimina 99,9% de fungos e bactérias, acabando com odores.' },
    { icon: <Maximize2 size={20} />, title: 'Preservação', desc: 'Foco em preservar a estrutura e prolongar a vida útil.' },
    { icon: <Shield size={20} />, title: 'Sistema Lockers', desc: 'Praticidade total com nossos armários dentro da lavanderia.' },
  ];

  return (
    <section id="sneakers" className="py-24 bg-blue-600 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-blue-500/30 border border-blue-400/30 text-white font-bold px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-6">
              <Sparkles size={14} /> CUIDADO ESPECIALIZADO EM CALÇADOS
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
              2 CLICKS<br/>SNEAKERS
            </h2>
            <p className="text-lg text-blue-100 mb-10 leading-relaxed">
              Não é apenas uma lavagem, é um protocolo técnico de restauração. Unimos tecnologia industrial com finalização manual detalhada para preservar a vida útil do seu par.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((feat, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">{feat.title}</h4>
                    <p className="text-blue-200 text-xs leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/message/4LRPJ3HSDEXXB1" target="_blank" rel="noreferrer" className="text-center bg-white text-blue-600 px-8 py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-lg">
                Falar com Especialista <ChevronRight size={18} />
              </a>
              <a href="#" className="text-center bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                Visitar Site Sneakers <ChevronRight size={18} />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 w-full relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square bg-slate-900 border-4 border-slate-900">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/grok%20video%202%20click%20snakers.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvZ3JvayB2aWRlbyAyIGNsaWNrIHNuYWtlcnMubXA0IiwiaWF0IjoxNzcyNTY1OTU5LCJleHAiOjIwNTYzODk5NTl9.jJgAw-iL1L54BAna9eweDfCbDxJ_OCRBcn8Hpo7bOAM" type="video/mp4" />
              </video>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 right-10 bg-white text-blue-600 font-bold italic px-8 py-4 rounded-2xl shadow-xl transform rotate-[-2deg]">
              Seu tênis limpo como novo!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white text-slate-500 py-8 border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img 
            src="https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-03-01%20130109.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvQ2FwdHVyYSBkZSB0ZWxhIDIwMjYtMDMtMDEgMTMwMTA5LnBuZyIsImlhdCI6MTc3MjU2MTQwNSwiZXhwIjoyMDI0ODQ5NDA1fQ.CHHWkWip7l1slwMR5zS64N72p0XANC992y0chTojIzU" 
            alt="2 Clicks Lavanderia Logo" 
            className="h-8 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <span className="font-black text-lg text-slate-900 tracking-tight">2 CLICKS LAVANDERIA</span>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/2clicks_lavanderia?igsh=cWJnMGo3c3N2eHcx" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
            <Instagram size={20} />
          </a>
          <a href="https://wa.me/message/4LRPJ3HSDEXXB1" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-green-500 transition-colors">
            <MessageCircle size={20} />
          </a>
        </div>

        <div className="text-xs text-slate-400">
          &copy; 2026 2 Clicks Lavanderia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/message/4LRPJ3HSDEXXB1" 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all z-50"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export { Pricing, Tips, InstagramSection, FAQ, Units, Testimonials, Sneakers, Footer, FloatingWhatsApp };
