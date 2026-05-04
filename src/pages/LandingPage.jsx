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
    <div className="landing-page">
      <div className="scanline"></div>

      <div style={{background: '#111', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#888', textAlign: 'center', padding: '12px', fontSize: '0.85rem', letterSpacing: '2px', position: 'relative', zIndex: 100}}>
        VAGAS LIMITADAS — ENCERRA EM <span style={{color: '#fff', fontWeight: 'bold'}}>{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</span>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="cyber-grid"></div>
        <div className="content-wrap">
          <div className="tech-badge animate-slide-in">
            A IA QUE VENCE A IA DOS RECRUTADORES
          </div>
          
          <h1 className="hero-title animate-slide-in">
            Hackeie o algoritmo.<br/>
            <span className="text-gradient">Consiga a vaga.</span>
          </h1>
          
          <p className="hero-subtitle animate-slide-in">
            Não seja ignorado por um robô. Nós descobrimos o que os filtros de recrutamento buscam e injetamos no seu currículo para garantir sua entrevista.
          </p>
          
          <div className="terminal-box animate-slide-in">
            <div className="typewriter">
              &gt; Executando engenharia reversa no ATS...
            </div>
          </div>

          <div className="animate-slide-in" style={{marginTop: '2rem'}}>
            <a href={checkoutUrl} className="buy-button accent">
              INICIAR BYPASS AGORA
            </a>
            <p style={{marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)'}}>
              PAGAMENTO ÚNICO. ACESSO VITALÍCIO. R$ 47
            </p>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="section-padding bg-surface">
        <div className="content-wrap">
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <h2 className="section-title">4 anos de estudo.<br/>Dezenas de projetos.<br/><span style={{color: 'var(--error)'}}>Rejeitado em 1 segundo.</span></h2>
            <p className="section-desc">
              Sua maior frustração é passar anos dominando tecnologias, enviar o currículo e receber um <strong>"Infelizmente, decidimos seguir com outros candidatos"</strong> na mesma hora.
            </p>
            <div className="glass-card pain-alert">
              <p>
                A verdade? <strong>Nenhum ser humano leu seu currículo.</strong> Foi um robô (ATS) que escaneou seu PDF, não encontrou as "palavras-chave invisíveis" e te descartou.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Info */}
      <section className="section-padding">
        <div className="content-wrap responsive-grid">
          <div>
            <h2 className="section-title">O que é o <span className="text-gradient">Bypass AI</span>?</h2>
            <p className="section-desc">
              É uma Inteligência Artificial treinada com os mesmos algoritmos usados por recrutadores das Big Techs.
            </p>
            <p className="section-desc">
              Em vez de você tentar adivinhar o que está errado, nós te dizemos <strong>exatamente qual frase mudar</strong> para que o algoritmo do LinkedIn e da Gupy passe a recomendar o seu perfil.
            </p>
          </div>
          <div className="glass-card" style={{textAlign: 'center'}}>
            <span className="product-icon">👁️‍🗨️</span>
            <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)'}}>Engenharia Reversa</h3>
            <p style={{color: 'var(--text-secondary)'}}>Nós simulamos o filtro deles. Se o seu currículo passar pela nossa IA, ele passa na entrevista deles.</p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-padding bg-surface">
        <div className="content-wrap">
          <h2 className="section-title" style={{textAlign: 'center'}}>A Diferença Injusta</h2>
          <div className="cards-grid">
            <div className="glass-card" style={{borderTopColor: 'var(--error)'}}>
              <h3 style={{color: 'var(--error)', fontSize: '1.25rem', marginBottom: '1.5rem'}}>O Jeito Antigo</h3>
              <ul className="compare-list">
                <li><span>❌</span> Enviar 50 currículos e não ter resposta.</li>
                <li><span>❌</span> Formatação bonita, mas invisível para os robôs.</li>
                <li><span>❌</span> Perder vagas para pessoas com menos código que você.</li>
              </ul>
            </div>
            <div className="glass-card" style={{borderTopColor: 'var(--accent)', background: 'rgba(0, 242, 255, 0.02)'}}>
              <h3 style={{color: 'var(--accent)', fontSize: '1.25rem', marginBottom: '1.5rem'}}>Com Bypass AI</h3>
              <ul className="compare-list">
                <li><span>✅</span> Aplicar para 5 vagas e fazer 3 entrevistas.</li>
                <li><span>✅</span> Injetar as "Keywords Ocultas" de alta conversão.</li>
                <li><span>✅</span> Hackear o filtro ATS e ir direto para o RH.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding">
        <div className="content-wrap">
          <h2 className="section-title" style={{textAlign: 'center'}}>Logs de Sucesso</h2>
          <div className="cards-grid">
            {[
              { text: "Mudei 3 palavras que a IA sugeriu e meu perfil saltou 40 posições nas buscas.", author: "Thiago M.", role: "Engenheiro de Software" },
              { text: "Paguei 47 reais e assinei contrato ganhando 5x mais. O ROI é absurdo.", author: "Mariana C.", role: "Product Manager" },
              { text: "A IA apontou erros fatais de leitura de ATS no meu PDF. Corrigi e fui chamado.", author: "Lucas S.", role: "Dev Front-end" }
            ].map((dep, i) => (
              <div key={i} className="glass-card">
                <div style={{color: 'var(--accent)', fontSize: '2rem', lineHeight: 1, marginBottom: '1rem'}}>”</div>
                <p className="testimonial-quote">{dep.text}</p>
                <div className="testimonial-author">
                  <strong>{dep.author}</strong>
                  <span>{dep.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-surface">
        <div className="content-wrap">
          <div className="glass-card cta-box">
            <h2 className="section-title" style={{marginBottom: '1rem'}}>Acesso Vitalício</h2>
            <p className="section-desc" style={{marginBottom: '0'}}>Liberte seu currículo do cemitério dos algoritmos hoje.</p>
            
            <div className="price-display">
              <span className="old">R$ 197</span>
              <span className="new">R$ 47</span>
            </div>

            <ul className="benefits">
              <li>Análises Ilimitadas via IA</li>
              <li>Injeção de Keywords ATS</li>
              <li>Detecção de Falhas de Leitura</li>
              <li>Atualizações Inclusas</li>
            </ul>

            <a href={checkoutUrl} className="buy-button accent" style={{width: '100%'}}>
              LIBERAR MEU ACESSO
            </a>
            <p style={{marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)'}}>
              Garantia de 7 dias. Pagamento via Cakto.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        Linked Bypass AI © 2026. Todos os direitos reservados.
      </footer>
    </div>
  );
}
