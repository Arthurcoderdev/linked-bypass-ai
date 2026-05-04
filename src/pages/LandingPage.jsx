import { useState, useEffect } from 'react';
import botHero from '../assets/hero-bot.png';

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 22, seconds: 15 });
  const checkoutUrl = "https://pay.cakto.com.br/3fas74x_870881";

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

  return (
    <div className="landing-page" style={{fontFamily: "'Inter', sans-serif", background: '#050505', color: '#fff'}}>
      
      {/* Banner Urgência Minimalista */}
      <div style={{background: '#111', borderBottom: '1px solid #333', color: '#888', textAlign: 'center', padding: '10px', fontSize: '0.85rem', letterSpacing: '1px'}}>
        VAGAS LIMITADAS PARA ACESSO VITALÍCIO — ENCERRA EM <span style={{color: '#fff', fontWeight: 'bold'}}>{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</span>
      </div>

      {/* Hero Minimalista */}
      <section style={{minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 5%', position: 'relative', overflow: 'hidden'}}>
        
        {/* Glow de fundo sutil */}
        <div style={{position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,102,255,0.15) 0%, rgba(0,0,0,0) 70%)', zIndex: 0}}></div>

        <div style={{position: 'relative', zIndex: 1, maxWidth: '900px'}}>
          <div style={{display: 'inline-block', padding: '6px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', marginBottom: '2rem', fontSize: '0.85rem', color: '#aaa', letterSpacing: '2px'}}>
            A INTELIGÊNCIA ARTIFICIAL DOS RECRUTADORES
          </div>
          
          <h1 className="animate-slide-in" style={{fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: '900', lineHeight: '1.1', letterSpacing: '-2px', marginBottom: '1.5rem'}}>
            Hackeie o <span style={{color: '#00f2ff'}}>algoritmo.</span><br/>Consiga a vaga.
          </h1>
          
          <p className="animate-slide-in" style={{fontSize: '1.2rem', color: '#888', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: '1.6'}}>
            Uma ferramenta focada em engenharia reversa. Nós descobrimos o que os robôs do LinkedIn buscam e injetamos no seu currículo.
          </p>

          <a href={checkoutUrl} className="buy-button animate-slide-in">
            LIBERAR MEU ACESSO AGORA
          </a>
          
          <p style={{marginTop: '1.5rem', fontSize: '0.85rem', color: '#555'}}>
            Pagamento único de R$ 47. Acesso vitalício.
          </p>
        </div>
      </section>

      {/* Social Proof Minimalista */}
      <section style={{padding: '5rem 5%', background: '#0a0a0a'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
          {[
            { text: "Mudei 3 palavras-chave que a IA sugeriu e meu perfil saltou 40 posições nas buscas dos recrutadores em 2 dias.", author: "Thiago M.", role: "Engenheiro de Software" },
            { text: "Paguei 47 reais e no mês seguinte estava assinando um contrato recebendo 5x mais. O ROI é absurdo.", author: "Mariana C.", role: "Product Manager" },
            { text: "Eu achava que meu currículo era bom. A IA apontou 7 erros fatais de leitura de ATS. Corrigi e fui chamado.", author: "Lucas S.", role: "Dev Front-end" }
          ].map((dep, i) => (
            <div key={i} className="minimal-card" style={{padding: '3rem 2rem', textAlign: 'left'}}>
              <div style={{color: '#00f2ff', fontSize: '2rem', marginBottom: '1rem'}}>”</div>
              <p style={{color: '#ccc', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem'}}>{dep.text}</p>
              <div style={{borderTop: '1px solid #222', paddingTop: '1rem'}}>
                <strong style={{color: '#fff', display: 'block'}}>{dep.author}</strong>
                <span style={{color: '#666', fontSize: '0.85rem'}}>{dep.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Oferta Direta Minimalista */}
      <section style={{padding: '8rem 5%', textAlign: 'center'}}>
        <div className="minimal-card" style={{maxWidth: '600px', margin: '0 auto', padding: '4rem 2rem'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-1px'}}>Acesso Vitalício</h2>
          <p style={{color: '#888', marginBottom: '3rem'}}>Sem assinaturas complexas. Tudo que você precisa para ser notado pelos algoritmos hoje.</p>
          
          <div style={{marginBottom: '3rem'}}>
            <span style={{textDecoration: 'line-through', color: '#555', fontSize: '1.2rem', marginRight: '1rem'}}>R$ 197</span>
            <span style={{fontSize: '4rem', fontWeight: '900', color: '#fff', letterSpacing: '-2px'}}>R$ 47</span>
          </div>

          <div style={{textAlign: 'left', maxWidth: '300px', margin: '0 auto 3rem'}}>
            <p style={{color: '#ccc', marginBottom: '0.8rem'}}>✓ Análises Ilimitadas via IA</p>
            <p style={{color: '#ccc', marginBottom: '0.8rem'}}>✓ Sugestões de Keywords</p>
            <p style={{color: '#ccc', marginBottom: '0.8rem'}}>✓ Identificação de Erros ATS</p>
            <p style={{color: '#ccc'}}>✓ Atualizações Inclusas</p>
          </div>

          <a href={checkoutUrl} className="buy-button" style={{width: '100%', padding: '1.5rem'}}>
            COMPRAR AGORA POR R$ 47
          </a>
          <p style={{marginTop: '1.5rem', fontSize: '0.8rem', color: '#555'}}>
            Garantia incondicional de 7 dias. Pagamento via Cakto.
          </p>
        </div>
      </section>

      <footer style={{padding: '3rem 5%', textAlign: 'center', color: '#444', fontSize: '0.85rem'}}>
        <p>Linked Bypass AI © 2026</p>
      </footer>
    </div>
  );
}
