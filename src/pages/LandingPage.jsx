import { useState, useEffect } from 'react';

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
    <div className="landing-page" style={{fontFamily: "'Inter', sans-serif", background: '#050505', color: '#fff', position: 'relative'}}>
      
      {/* Efeito de Scanner na tela toda */}
      <div className="scanline"></div>

      {/* Banner Urgência */}
      <div style={{background: '#111', borderBottom: '1px solid #00f2ff33', color: '#888', textAlign: 'center', padding: '10px', fontSize: '0.85rem', letterSpacing: '1px', position: 'relative', zIndex: 100}}>
        VAGAS LIMITADAS PARA ACESSO VITALÍCIO — ENCERRA EM <span style={{color: '#fff', fontWeight: 'bold'}}>{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</span>
      </div>

      {/* Hero Dinâmico */}
      <section style={{minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '100px 5% 50px', position: 'relative', overflow: 'hidden'}}>
        
        {/* Fundo Cyber Animado */}
        <div className="cyber-grid"></div>
        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(0,242,255,0.05) 0%, rgba(0,0,0,0) 60%)', zIndex: 1, pointerEvents: 'none'}}></div>

        <div style={{position: 'relative', zIndex: 2, maxWidth: '900px'}}>
          <div style={{display: 'inline-block', padding: '6px 16px', background: 'rgba(0, 242, 255, 0.05)', border: '1px solid rgba(0, 242, 255, 0.2)', borderRadius: '100px', marginBottom: '2rem', fontSize: '0.85rem', color: '#00f2ff', letterSpacing: '2px', boxShadow: '0 0 15px rgba(0, 242, 255, 0.1)'}}>
            A INTELIGÊNCIA ARTIFICIAL DOS RECRUTADORES
          </div>
          
          <h1 className="animate-slide-in" style={{fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: '900', lineHeight: '1.1', letterSpacing: '-2px', marginBottom: '1.5rem'}}>
            Hackeie o algoritmo.<br/>
            <span style={{color: '#00f2ff'}}>Consiga a vaga.</span>
          </h1>
          
          <div className="terminal-box animate-slide-in" style={{maxWidth: '500px', margin: '0 auto 3rem'}}>
            <div className="typewriter">
              > Executando engenharia reversa ATS...
            </div>
          </div>

          <a href={checkoutUrl} className="buy-button animate-slide-in">
            INICIAR BYPASS AGORA
          </a>
        </div>
      </section>

      {/* A Dor do Mercado Dev */}
      <section style={{padding: '8rem 5%', background: 'linear-gradient(180deg, #050505 0%, #0a0a0a 100%)', position: 'relative', zIndex: 2}}>
        <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '900', color: '#fff', marginBottom: '1.5rem', letterSpacing: '-1px'}}>4 anos de faculdade.<br/>Dezenas de projetos.<br/><span style={{color: '#ff4444'}}>Rejeitado em 1 segundo.</span></h2>
          <p style={{color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem'}}>
            A maior frustração do desenvolvedor hoje é passar anos estudando, dominar as tecnologias, aplicar para uma vaga e receber um <strong>"Infelizmente, decidimos seguir com outros candidatos"</strong> automático.
          </p>
          <div className="glow-card" style={{padding: '2rem', background: 'rgba(255, 68, 68, 0.05)', border: '1px solid rgba(255, 68, 68, 0.2)', borderRadius: '16px'}}>
            <p style={{color: '#ff8888', fontSize: '1.1rem', lineHeight: '1.8', margin: 0}}>
              A verdade? <strong>Nenhum ser humano leu seu currículo.</strong> Foi um robô de recrutamento (ATS) que escaneou seu PDF, não achou as "palavras-chave invisíveis", e te jogou na lixeira.
            </p>
          </div>
        </div>
      </section>

      {/* Vantagem x Desvantagem */}
      <section style={{padding: '8rem 5%', background: '#0a0a0a', position: 'relative', zIndex: 2}}>
        <div style={{maxWidth: '1000px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '900', textAlign: 'center', marginBottom: '4rem', letterSpacing: '-1px'}}>A Diferença Injusta</h2>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            <div className="minimal-card" style={{padding: '3rem', borderTop: '4px solid #ff4444'}}>
              <h3 style={{color: '#ff4444', marginBottom: '2rem', fontSize: '1.5rem'}}>O Jeito Antigo</h3>
              <ul style={{listStyle: 'none', padding: 0, color: '#888'}}>
                <li style={{marginBottom: '1.5rem'}}>❌ Enviar 50 currículos e não ter resposta.</li>
                <li style={{marginBottom: '1.5rem'}}>❌ Formatação bonita, mas invisível para robôs.</li>
                <li>❌ Perder vagas para pessoas com menos código que você.</li>
              </ul>
            </div>
            
            <div className="glow-card minimal-card" style={{padding: '3rem', borderTop: '4px solid #00f2ff', background: 'rgba(0, 242, 255, 0.02)'}}>
              <h3 style={{color: '#00f2ff', marginBottom: '2rem', fontSize: '1.5rem'}}>Com Linked Bypass</h3>
              <ul style={{listStyle: 'none', padding: 0, color: '#ccc'}}>
                <li style={{marginBottom: '1.5rem'}}>✅ Aplicar para 5 vagas e fazer 3 entrevistas.</li>
                <li style={{marginBottom: '1.5rem'}}>✅ Injetar as "Keywords Ocultas" de alta conversão.</li>
                <li>✅ Hackear o filtro ATS e ir direto para o RH.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section style={{padding: '8rem 5%', position: 'relative', zIndex: 2}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '900', textAlign: 'center', marginBottom: '4rem', letterSpacing: '-1px'}}>Logs de Sucesso</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            {[
              { text: "Mudei 3 palavras-chave que a IA sugeriu e meu perfil saltou 40 posições nas buscas dos recrutadores.", author: "Thiago M.", role: "Engenheiro de Software" },
              { text: "Paguei 47 reais e no mês seguinte assinei contrato ganhando 5x mais. O ROI é absurdo.", author: "Mariana C.", role: "Product Manager" },
              { text: "Eu achava que meu currículo era bom. A IA apontou 7 erros fatais de leitura de ATS. Fui chamado.", author: "Lucas S.", role: "Dev Front-end" }
            ].map((dep, i) => (
              <div key={i} className="glow-card minimal-card" style={{padding: '3rem 2rem', textAlign: 'left'}}>
                <div style={{color: '#00f2ff', fontSize: '2rem', marginBottom: '1rem'}}>”</div>
                <p style={{color: '#ccc', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem'}}>{dep.text}</p>
                <div style={{borderTop: '1px solid #222', paddingTop: '1rem'}}>
                  <strong style={{color: '#fff', display: 'block'}}>{dep.author}</strong>
                  <span style={{color: '#666', fontSize: '0.85rem'}}>{dep.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta Direta Minimalista */}
      <section style={{padding: '8rem 5%', textAlign: 'center', background: '#0a0a0a', position: 'relative', zIndex: 2}}>
        <div className="glow-card minimal-card" style={{maxWidth: '600px', margin: '0 auto', padding: '4rem 2rem', position: 'relative', overflow: 'hidden', border: '1px solid rgba(0,242,255,0.3)'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-1px'}}>Acesso Vitalício</h2>
          <p style={{color: '#888', marginBottom: '3rem'}}>Liberte seu currículo do cemitério dos algoritmos hoje.</p>
          
          <div style={{marginBottom: '3rem'}}>
            <span style={{textDecoration: 'line-through', color: '#555', fontSize: '1.2rem', marginRight: '1rem'}}>R$ 197</span>
            <span style={{fontSize: '4.5rem', fontWeight: '900', color: '#fff', letterSpacing: '-2px', textShadow: '0 0 30px rgba(0,242,255,0.4)'}}>R$ 47</span>
          </div>

          <div style={{textAlign: 'left', maxWidth: '300px', margin: '0 auto 3rem'}}>
            <p style={{color: '#ccc', marginBottom: '0.8rem'}}>✓ Análises Ilimitadas via IA</p>
            <p style={{color: '#ccc', marginBottom: '0.8rem'}}>✓ Injeção de Keywords ATS</p>
            <p style={{color: '#ccc', marginBottom: '0.8rem'}}>✓ Detecção de Falhas de Leitura</p>
            <p style={{color: '#ccc'}}>✓ Atualizações Vitalícias</p>
          </div>

          <a href={checkoutUrl} className="buy-button" style={{width: '100%', padding: '1.5rem', fontSize: '1.2rem'}}>
            LIBERAR MEU ACESSO
          </a>
          <p style={{marginTop: '1.5rem', fontSize: '0.8rem', color: '#555'}}>
            Garantia incondicional de 7 dias. Pagamento via Cakto.
          </p>
        </div>
      </section>

      <footer style={{padding: '3rem 5%', textAlign: 'center', color: '#444', fontSize: '0.85rem', borderTop: '1px solid #111', position: 'relative', zIndex: 2}}>
        <p>Linked Bypass AI © 2026. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
