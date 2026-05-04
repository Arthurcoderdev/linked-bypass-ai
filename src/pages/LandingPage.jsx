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
        VAGAS LIMITADAS — ENCERRA EM <span style={{color: '#fff', fontWeight: 'bold'}}>{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</span>
      </div>

      {/* Hero Dinâmico */}
      <section className="hero" style={{position: 'relative', overflow: 'hidden'}}>
        <div className="cyber-grid"></div>
        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(0,242,255,0.05) 0%, rgba(0,0,0,0) 60%)', zIndex: 1, pointerEvents: 'none'}}></div>

        <div style={{position: 'relative', zIndex: 2, maxWidth: '900px'}}>
          <div style={{display: 'inline-block', padding: '6px 16px', background: 'rgba(0, 242, 255, 0.05)', border: '1px solid rgba(0, 242, 255, 0.2)', borderRadius: '100px', marginBottom: '2rem', fontSize: '0.75rem', color: '#00f2ff', letterSpacing: '2px', boxShadow: '0 0 15px rgba(0, 242, 255, 0.1)'}}>
            A INTELIGÊNCIA ARTIFICIAL DOS RECRUTADORES
          </div>
          
          <h1 className="animate-slide-in" style={{fontWeight: '900', lineHeight: '1.1', letterSpacing: '-2px', marginBottom: '1.5rem'}}>
            Hackeie o algoritmo.<br/>
            <span style={{color: '#00f2ff'}}>Consiga a vaga.</span>
          </h1>
          
          <div className="terminal-box animate-slide-in" style={{maxWidth: '450px', margin: '0 auto 3rem'}}>
            <div className="typewriter" style={{fontSize: '0.9rem'}}>
              &gt; Executando engenharia reversa ATS...
            </div>
          </div>

          <a href={checkoutUrl} className="buy-button animate-slide-in">
            INICIAR BYPASS AGORA
          </a>
        </div>
      </section>

      {/* A Dor do Mercado Dev */}
      <section style={{padding: '6rem 5%', background: 'linear-gradient(180deg, #050505 0%, #0a0a0a 100%)', position: 'relative', zIndex: 2}}>
        <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: '#fff', marginBottom: '1.5rem', letterSpacing: '-1px'}}>4 anos de faculdade.<br/>Dezenas de projetos.<br/><span style={{color: '#ff4444'}}>Rejeitado em 1 segundo.</span></h2>
          <p style={{color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem'}}>
            A maior frustração do desenvolvedor hoje é passar anos estudando, dominar as tecnologias, aplicar para uma vaga e receber um <strong>"Infelizmente, decidimos seguir com outros candidatos"</strong> automático.
          </p>
          <div className="glow-card" style={{padding: '2rem', background: 'rgba(255, 68, 68, 0.05)', border: '1px solid rgba(255, 68, 68, 0.2)', borderRadius: '16px'}}>
            <p style={{color: '#ff8888', fontSize: '1.1rem', lineHeight: '1.8', margin: 0}}>
              A verdade? <strong>Nenhum ser humano leu seu currículo.</strong> Foi um robô que não achou as "palavras-chave invisíveis" e te descartou.
            </p>
          </div>
        </div>
      </section>

      {/* Apresentação do Produto */}
      <section style={{padding: '6rem 5%', position: 'relative', zIndex: 2}}>
        <div className="responsive-grid" style={{maxWidth: '1000px', margin: '0 auto'}}>
          <div style={{textAlign: 'left'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: '900', marginBottom: '1.5rem', letterSpacing: '-1px'}}>O que é o <span style={{color: '#00f2ff'}}>Linked Bypass AI</span>?</h2>
            <p style={{color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
              É uma Inteligência Artificial treinada com os mesmos algoritmos usados por recrutadores das Big Techs.
            </p>
            <p style={{color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8'}}>
              Em vez de você tentar adivinhar o que está errado, nós te dizemos <strong>exatamente qual frase mudar</strong> para que o algoritmo do LinkedIn passe a recomendar o seu perfil.
            </p>
          </div>
          <div className="glow-card minimal-card" style={{padding: '3rem', textAlign: 'center'}}>
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>👁️‍🗨️</div>
            <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Engenharia Reversa</h3>
            <p style={{color: '#888'}}>Nós simulamos o filtro deles. Se o seu currículo passar pela nossa IA, ele passa na entrevista deles.</p>
          </div>
        </div>
      </section>

      {/* Vantagem x Desvantagem */}
      <section style={{padding: '6rem 5%', background: '#0a0a0a', position: 'relative', zIndex: 2}}>
        <div style={{maxWidth: '1000px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '900', textAlign: 'center', marginBottom: '4rem', letterSpacing: '-1px'}}>A Diferença Injusta</h2>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
            <div className="minimal-card" style={{padding: '2.5rem', borderTop: '4px solid #ff4444'}}>
              <h3 style={{color: '#ff4444', marginBottom: '2rem', fontSize: '1.3rem'}}>O Jeito Antigo</h3>
              <ul style={{listStyle: 'none', padding: 0, color: '#888', fontSize: '0.95rem'}}>
                <li style={{marginBottom: '1.2rem'}}>❌ Enviar 50 currículos e não ter resposta.</li>
                <li style={{marginBottom: '1.2rem'}}>❌ Formatação invisível para robôs.</li>
                <li>❌ Perder vagas para pessoas com menos código que você.</li>
              </ul>
            </div>
            
            <div className="glow-card minimal-card" style={{padding: '2.5rem', borderTop: '4px solid #00f2ff', background: 'rgba(0, 242, 255, 0.02)'}}>
              <h3 style={{color: '#00f2ff', marginBottom: '2rem', fontSize: '1.3rem'}}>Com Linked Bypass</h3>
              <ul style={{listStyle: 'none', padding: 0, color: '#ccc', fontSize: '0.95rem'}}>
                <li style={{marginBottom: '1.2rem'}}>✅ Aplicar para 5 vagas e fazer 3 entrevistas.</li>
                <li style={{marginBottom: '1.2rem'}}>✅ Injetar as "Keywords Ocultas" de alta conversão.</li>
                <li>✅ Hackear o filtro ATS e ir direto para o RH.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section style={{padding: '6rem 5%', position: 'relative', zIndex: 2}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '900', textAlign: 'center', marginBottom: '4rem', letterSpacing: '-1px'}}>Logs de Sucesso</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
            {[
              { text: "Mudei 3 palavras-chave que a IA sugeriu e meu perfil saltou 40 posições nas buscas.", author: "Thiago M.", role: "Engenheiro de Software" },
              { text: "Paguei 47 reais e no mês seguinte assinei contrato ganhando 5x mais. O ROI é absurdo.", author: "Mariana C.", role: "Product Manager" },
              { text: "A IA apontou 7 erros fatais de leitura de ATS. Corrigi e fui chamado pra entrevista.", author: "Lucas S.", role: "Dev Front-end" }
            ].map((dep, i) => (
              <div key={i} className="glow-card minimal-card" style={{padding: '2.5rem 1.5rem', textAlign: 'left'}}>
                <div style={{color: '#00f2ff', fontSize: '2rem', marginBottom: '1rem'}}>”</div>
                <p style={{color: '#ccc', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem'}}>{dep.text}</p>
                <div style={{borderTop: '1px solid #222', paddingTop: '1rem'}}>
                  <strong style={{color: '#fff', display: 'block'}}>{dep.author}</strong>
                  <span style={{color: '#666', fontSize: '0.8rem'}}>{dep.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta Direta */}
      <section style={{padding: '6rem 5%', textAlign: 'center', background: '#0a0a0a', position: 'relative', zIndex: 2}}>
        <div className="glow-card minimal-card" style={{maxWidth: '600px', margin: '0 auto', padding: '3rem 1.5rem', position: 'relative', overflow: 'hidden', border: '1px solid rgba(0,242,255,0.3)'}}>
          <h2 style={{fontSize: '2.2rem', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-1px'}}>Acesso Vitalício</h2>
          <p style={{color: '#888', marginBottom: '3rem'}}>Liberte seu currículo do cemitério dos algoritmos hoje.</p>
          
          <div style={{marginBottom: '2rem'}}>
            <span style={{textDecoration: 'line-through', color: '#555', fontSize: '1.1rem', marginRight: '1rem'}}>R$ 197</span>
            <span style={{fontSize: '4rem', fontWeight: '900', color: '#fff', letterSpacing: '-2px', textShadow: '0 0 30px rgba(0,242,255,0.4)'}}>R$ 47</span>
          </div>

          <div style={{textAlign: 'left', maxWidth: '300px', margin: '0 auto 3rem', fontSize: '0.9rem'}}>
            <p style={{color: '#ccc', marginBottom: '0.8rem'}}>✓ Análises Ilimitadas via IA</p>
            <p style={{color: '#ccc', marginBottom: '0.8rem'}}>✓ Injeção de Keywords ATS</p>
            <p style={{color: '#ccc', marginBottom: '0.8rem'}}>✓ Detecção de Falhas de Leitura</p>
            <p style={{color: '#ccc'}}>✓ Atualizações Vitalícias</p>
          </div>

          <a href={checkoutUrl} className="buy-button" style={{width: '100%', padding: '1.2rem', fontSize: '1.1rem'}}>
            LIBERAR MEU ACESSO
          </a>
          <p style={{marginTop: '1.5rem', fontSize: '0.75rem', color: '#555'}}>
            Garantia de 7 dias. Pagamento via Cakto.
          </p>
        </div>
      </section>

      <footer style={{padding: '3rem 5%', textAlign: 'center', color: '#444', fontSize: '0.8rem', borderTop: '1px solid #111', position: 'relative', zIndex: 2}}>
        <p>Linked Bypass AI © 2026. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
