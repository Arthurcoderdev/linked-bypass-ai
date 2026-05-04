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
      
      {/* Efeito de Scanner */}
      <div className="scanline"></div>

      {/* Banner Urgência */}
      <div className="urgency-banner" style={{background: '#111', borderBottom: '1px solid #00f2ff33', color: '#888', textAlign: 'center', padding: '12px', fontSize: '0.85rem', letterSpacing: '2px', position: 'relative', zIndex: 100}}>
        VAGAS LIMITADAS — ENCERRA EM <span style={{color: '#fff', fontWeight: 'bold'}}>{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</span>
      </div>

      {/* Hero Dinâmico */}
      <section className="hero">
        {/* Fundo Cyber Animado */}
        <div className="cyber-grid"></div>
        <div className="hero-glow"></div>

        <div className="hero-container" style={{position: 'relative', zIndex: 2}}>
          <div className="tech-badge animate-slide-in">
            A INTELIGÊNCIA ARTIFICIAL DOS RECRUTADORES
          </div>
          
          <h1 className="hero-title animate-slide-in">
            Hackeie o algoritmo.<br/>
            <span className="text-gradient">Consiga a vaga.</span>
          </h1>
          
          <div className="terminal-box animate-slide-in">
            <div className="typewriter">
              &gt; Executando engenharia reversa ATS...
            </div>
          </div>

          <div style={{marginTop: '4rem'}} className="animate-slide-in">
            <a href={checkoutUrl} className="buy-button">
              INICIAR BYPASS AGORA
            </a>
            <p className="lifetime-text">
              PAGAMENTO ÚNICO. ACESSO VITALÍCIO. R$ 47
            </p>
          </div>
        </div>
      </section>

      {/* A Dor do Mercado Dev */}
      <section className="pain-section">
        <div className="content-wrap">
          <h2 className="section-title">4 anos de faculdade.<br/>Dezenas de projetos.<br/><span className="highlight-red">Rejeitado em 1 segundo.</span></h2>
          <p className="section-desc">
            A maior frustração do desenvolvedor hoje é passar anos estudando, dominar as tecnologias, aplicar para uma vaga e receber um <strong>"Infelizmente, decidimos seguir com outros candidatos"</strong> automático.
          </p>
          <div className="glow-card pain-alert">
            <p>
              A verdade? <strong>Nenhum ser humano leu seu currículo.</strong> Foi um robô que não achou as "palavras-chave invisíveis" e te descartou sem nem olhar seu código.
            </p>
          </div>
        </div>
      </section>

      {/* Apresentação do Produto */}
      <section className="product-info">
        <div className="responsive-grid content-wrap">
          <div className="text-content">
            <h2 className="section-title">O que é o <span className="text-gradient">Linked Bypass AI</span>?</h2>
            <p className="section-desc">
              É uma Inteligência Artificial treinada com os mesmos algoritmos usados por recrutadores das Big Techs.
            </p>
            <p className="section-desc">
              Em vez de você tentar adivinhar o que está errado, nós te dizemos <strong>exatamente qual frase mudar</strong> para que o algoritmo do LinkedIn passe a recomendar o seu perfil.
            </p>
          </div>
          <div className="glow-card product-card">
            <div className="icon">👁️‍🗨️</div>
            <h3 className="card-title">Engenharia Reversa</h3>
            <p className="card-desc">Nós simulamos o filtro deles. Se o seu currículo passar pela nossa IA, ele passa na entrevista deles.</p>
          </div>
        </div>
      </section>

      {/* Vantagem x Desvantagem */}
      <section className="comparison-section">
        <div className="content-wrap">
          <h2 className="section-title centered">A Diferença Injusta</h2>
          
          <div className="comparison-grid">
            <div className="minimal-card old-way">
              <h3 className="card-label red">O Jeito Antigo</h3>
              <ul>
                <li>❌ Enviar 50 currículos e não ter resposta.</li>
                <li>❌ Formatação invisível para robôs.</li>
                <li>❌ Perder vagas para pessoas com menos código.</li>
              </ul>
            </div>
            
            <div className="glow-card minimal-card new-way">
              <h3 className="card-label blue">Com Linked Bypass</h3>
              <ul>
                <li>✅ Aplicar para 5 vagas e fazer 3 entrevistas.</li>
                <li>✅ Injetar as "Keywords Ocultas" de alta conversão.</li>
                <li>✅ Hackear o filtro ATS e ir direto para o RH.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="testimonials-section">
        <div className="content-wrap">
          <h2 className="section-title centered">Logs de Sucesso</h2>
          <div className="features-grid">
            {[
              { text: "Mudei 3 palavras-chave que a IA sugeriu e meu perfil saltou 40 posições nas buscas.", author: "Thiago M.", role: "Engenheiro de Software" },
              { text: "Paguei 47 reais e no mês seguinte assinei contrato ganhando 5x mais. O ROI é absurdo.", author: "Mariana C.", role: "Product Manager" },
              { text: "A IA apontou 7 erros fatais de leitura de ATS. Corrigi e fui chamado pra entrevista.", author: "Lucas S.", role: "Dev Front-end" }
            ].map((dep, i) => (
              <div key={i} className="glow-card minimal-card testimonial">
                <div className="quote">”</div>
                <p className="quote-text">{dep.text}</p>
                <div className="author-info">
                  <strong>{dep.author}</strong>
                  <span>{dep.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta Direta */}
      <section className="cta-section">
        <div className="glow-card final-offer">
          <h2 className="offer-title">O Fim das Rejeições Automáticas</h2>
          <p className="offer-desc">Pague uma única vez. Use para sempre.</p>
          
          <div className="price-tag">
            <span className="old-price">R$ 197</span>
            <span className="new-price">R$ 47</span>
          </div>

          <ul className="benefits-list">
            <li>✓ Análises Ilimitadas via IA</li>
            <li>✓ Injeção de Keywords ATS</li>
            <li>✓ Detecção de Falhas de Leitura</li>
            <li>✓ Atualizações Vitalícias</li>
          </ul>

          <a href={checkoutUrl} className="buy-button full-width">
            LIBERAR MEU ACESSO AGORA
          </a>
          <p className="guarantee-text">
            Garantia de 7 dias. Pagamento via Cakto.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>Linked Bypass AI © 2026. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
