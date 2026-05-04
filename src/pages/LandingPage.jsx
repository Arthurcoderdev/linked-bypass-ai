import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import botHero from '../assets/hero-bot.png';

export default function LandingPage() {
  // Simula um contador de escassez/urgência
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => time < 10 ? `0${time}` : time;

  const testimonials = [
    { name: "Lucas Silva", role: "Desenvolvedor Backend", text: "Eu enviava mais de 30 currículos por dia e não tinha retorno. Usei o Bypass AI, mudei 4 palavras no meu PDF e em 48h recebi 3 propostas para entrevista técnica. Assustador.", img: "👨‍💻" },
    { name: "Mariana Costa", role: "Product Manager", text: "A IA deles entende exatamente o que o robô da Gupy e do LinkedIn querem ler. O pagamento único se pagou no meu primeiro salário como Senior.", img: "👩‍💼" },
    { name: "Thiago Mendes", role: "Analista de Dados", text: "Incrível como a gente não sabe se vender. O bot pegou meu currículo antigo, reescreveu os verbos de ação e eu fui chamado pra Nubank.", img: "👨‍💼" }
  ];

  return (
    <div className="landing-page" style={{fontFamily: "'Inter', sans-serif"}}>
      {/* Banner de Urgência Topo */}
      <div style={{background: 'var(--primary)', color: '#000', textAlign: 'center', padding: '0.8rem', fontWeight: 'bold', fontSize: '0.9rem', position: 'sticky', top: 0, zIndex: 1000}}>
        ⚠️ OFERTA DE LANÇAMENTO: Acesso Vitalício com 70% de DESCONTO encerra em {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
      </div>

      {/* Hero Section */}
      <section className="hero" style={{paddingBottom: '4rem', paddingTop: '100px'}}>
        <div className="hero-content">
          <div className="badge glass" style={{display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '100px', marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '900', letterSpacing: '1px'}}>
            🔥 +12.400 PROFISSIONAIS CONTRATADOS ESTE ANO
          </div>
          <h1 className="animate-slide-in" style={{fontSize: 'clamp(2.8rem, 5vw, 4.8rem)', lineHeight: '1.05', letterSpacing: '-1px'}}>
            SEU CURRÍCULO ESTÁ SENDO <span className="text-gradient">DESCARTADO</span> POR ROBÔS.
          </h1>
          <p className="animate-slide-in" style={{fontSize: '1.3rem', color: 'var(--text-dim)', marginTop: '1.5rem', fontWeight: '400'}}>
            90% das empresas usam IA (ATS) para ler currículos. Nós desenvolvemos uma <strong>IA mais inteligente</strong> para hackear os filtros deles e colocar você no topo da lista.
          </p>
          <div style={{marginTop: '2.5rem'}} className="animate-slide-in">
            <a href="#checkout" className="upload-button" style={{textDecoration: 'none', display: 'inline-block', fontSize: '1.2rem', padding: '1.2rem 3rem', width: '100%', maxWidth: '400px'}}>
              QUERO BURLAR O SISTEMA AGORA
            </a>
            <p style={{marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <span style={{color: '#4ade80'}}>✔</span> Acesso Ilimitado e Vitalício <span style={{color: '#4ade80'}}>✔</span> Risco Zero
            </p>
          </div>
        </div>
        <div className="bot-image-container">
          {/* Efeito Glow atrás do bot */}
          <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'var(--primary)', filter: 'blur(150px)', opacity: 0.3, borderRadius: '50%'}}></div>
          <img src={botHero} alt="AI Bot" className="bot-image animate-float" style={{position: 'relative', zIndex: 2}} />
        </div>
      </section>

      {/* Escassez e Prova Social */}
      <section style={{padding: '5rem 5%', background: 'rgba(0,0,0,0.4)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
          <p style={{color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '2rem'}}>Não é magia, é engenharia reversa do algoritmo do LinkedIn</p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap'}}>
            <div><h2 style={{fontSize: '3rem', color: 'var(--primary)', margin: 0}}>98%</h2><p style={{color: 'var(--text-dim)'}}>Taxa de Aprovação em ATS</p></div>
            <div><h2 style={{fontSize: '3rem', color: 'var(--secondary)', margin: 0}}>4.8x</h2><p style={{color: 'var(--text-dim)'}}>Mais convites para entrevistas</p></div>
            <div><h2 style={{fontSize: '3rem', color: '#ff4444', margin: 0}}>&lt; 3s</h2><p style={{color: 'var(--text-dim)'}}>Tempo para a IA ler e corrigir</p></div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{padding: '8rem 5%', textAlign: 'center', maxWidth: '1400px', margin: '0 auto'}}>
        <h2 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Quem hackeou o sistema, <span className="text-gradient">já está empregado</span></h2>
        <p style={{color: 'var(--text-dim)', marginBottom: '4rem', fontSize: '1.2rem'}}>Depoimentos reais de profissionais que pararam de lutar contra a máquina.</p>
        
        <div className="features-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="feature-card glass" style={{textAlign: 'left', position: 'relative'}}>
              <div style={{fontSize: '2rem', position: 'absolute', top: '-15px', right: '20px', opacity: 0.2}}>❝</div>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem'}}>
                <div style={{fontSize: '2.5rem', background: 'rgba(255,255,255,0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{t.img}</div>
                <div>
                  <h4 style={{margin: 0, fontSize: '1.1rem'}}>{t.name}</h4>
                  <p style={{margin: 0, fontSize: '0.85rem', color: 'var(--primary)'}}>{t.role}</p>
                </div>
              </div>
              <p style={{color: 'var(--text-dim)', lineHeight: '1.6'}}>{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Offer Section (Checkout) */}
      <section id="checkout" style={{padding: '8rem 5%', background: 'linear-gradient(180deg, rgba(10,11,16,1) 0%, rgba(0,242,255,0.05) 100%)', position: 'relative'}}>
        <div className="glass" style={{maxWidth: '800px', margin: '0 auto', padding: '4rem', borderRadius: '24px', border: '1px solid var(--primary)', position: 'relative', overflow: 'hidden'}}>
          {/* Ribbon */}
          <div style={{position: 'absolute', top: '30px', right: '-40px', background: '#ff4444', color: 'white', padding: '5px 50px', transform: 'rotate(45deg)', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '1px', boxShadow: '0 5px 15px rgba(255,0,0,0.3)'}}>
            ACESSO VITALÍCIO
          </div>

          <h2 style={{fontSize: '3rem', textAlign: 'center', marginBottom: '1rem'}}>O Fim das Mensagens Automáticas de Rejeição</h2>
          <p style={{textAlign: 'center', color: 'var(--text-dim)', marginBottom: '3rem', fontSize: '1.1rem'}}>Pague uma única vez. Use para sempre. Conquiste qualquer vaga.</p>
          
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem'}}>
            <ul style={{listStyle: 'none', padding: 0}}>
              {["Análises Ilimitadas via IA", "Extração de Keywords de Alta Conversão", "Score de Visibilidade ATS"].map((f, i) => (
                <li key={i} style={{marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px'}}><span style={{color: 'var(--primary)'}}>✔</span> {f}</li>
              ))}
            </ul>
            <ul style={{listStyle: 'none', padding: 0}}>
              {["Quotes Exatos do seu PDF com erros", "Suporte a Múltiplos Idiomas", "Atualizações Vitalícias Inclusas"].map((f, i) => (
                <li key={i} style={{marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px'}}><span style={{color: 'var(--primary)'}}>✔</span> {f}</li>
              ))}
            </ul>
          </div>

          <div style={{textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '3rem'}}>
            <p style={{textDecoration: 'line-through', color: 'var(--text-dim)', fontSize: '1.2rem', margin: 0}}>De R$ 297,00</p>
            <h3 style={{fontSize: '4.5rem', color: 'var(--primary)', margin: '0.5rem 0', lineHeight: 1}}>R$ 67<span style={{fontSize: '1.5rem', color: 'var(--text-dim)'}}>,90</span></h3>
            <p style={{color: '#ff4444', fontWeight: 'bold', marginBottom: '2rem'}}>🔥 Preço único. Sem mensalidades.</p>
            
            <Link to="/app" className="upload-button" style={{display: 'inline-block', textDecoration: 'none', width: '100%', fontSize: '1.3rem', padding: '1.5rem', boxShadow: '0 10px 30px rgba(0,242,255,0.3)'}}>
              COMPRAR ACESSO VITALÍCIO AGORA
            </Link>
            <p style={{marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-dim)'}}>
              🔒 Pagamento 100% Seguro • 7 Dias de Garantia Incondicional
            </p>
          </div>
        </div>
      </section>

      <footer style={{padding: '3rem 5%', textAlign: 'center', background: 'var(--bg)', color: 'var(--text-dim)', fontSize: '0.9rem'}}>
        <p>&copy; 2026 Linked Bypass AI. Todos os direitos reservados.</p>
        <p style={{marginTop: '0.5rem'}}>Este site não é afiliado ao LinkedIn Corporation.</p>
      </footer>
    </div>
  );
}
