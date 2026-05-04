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
    <div className="landing-page" style={{fontFamily: "'Inter', sans-serif", background: '#050505', color: '#fff'}}>
      
      {/* Banner Urgência */}
      <div style={{background: '#111', borderBottom: '1px solid #333', color: '#888', textAlign: 'center', padding: '10px', fontSize: '0.85rem', letterSpacing: '1px'}}>
        VAGAS LIMITADAS PARA ACESSO VITALÍCIO — ENCERRA EM <span style={{color: '#fff', fontWeight: 'bold'}}>{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</span>
      </div>

      {/* Hero Minimalista */}
      <section style={{minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '100px 5% 50px', position: 'relative', overflow: 'hidden'}}>
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
        </div>
      </section>

      {/* A Dor do Mercado Dev */}
      <section style={{padding: '6rem 5%', background: '#0a0a0a'}}>
        <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '900', color: '#fff', marginBottom: '1.5rem', letterSpacing: '-1px'}}>4 anos de faculdade.<br/>Dezenas de projetos.<br/><span style={{color: '#ff4444'}}>Rejeitado em 1 segundo.</span></h2>
          <p style={{color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem'}}>
            A maior frustração do desenvolvedor hoje é passar anos estudando, dominar as tecnologias, aplicar para uma vaga de estágio ou júnior e receber um <strong>"Infelizmente, decidimos seguir com outros candidatos"</strong> automático, no mesmo dia.
          </p>
          <p style={{color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8'}}>
            A verdade que ninguém te conta na faculdade? <strong>Nenhum ser humano leu seu currículo.</strong> Foi um robô de recrutamento (ATS) da Gupy ou da Kenoby que escaneou seu PDF, não achou as "palavras-chave invisíveis" que ele foi programado para buscar, e te jogou na lixeira automaticamente.
          </p>
        </div>
      </section>

      {/* Apresentação do Produto */}
      <section style={{padding: '6rem 5%'}}>
        <div style={{maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center'}}>
          <div>
            <h2 style={{fontSize: '2.5rem', fontWeight: '900', marginBottom: '1.5rem', letterSpacing: '-1px'}}>O que é o <span style={{color: '#00f2ff'}}>Linked Bypass AI</span>?</h2>
            <p style={{color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
              É uma Inteligência Artificial treinada com os mesmos algoritmos usados por recrutadores das Big Techs. Ela lê o seu currículo exatamente como o robô deles faria.
            </p>
            <p style={{color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8'}}>
              Em vez de você tentar adivinhar o que está errado, nós te dizemos <strong>exatamente qual frase mudar</strong> e <strong>quais palavras adicionar</strong> para que o algoritmo do LinkedIn passe a recomendar o seu perfil.
            </p>
          </div>
          <div className="minimal-card" style={{padding: '3rem', textAlign: 'center'}}>
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>👁️‍🗨️</div>
            <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Engenharia Reversa</h3>
            <p style={{color: '#888'}}>Nós simulamos o filtro deles. Se o seu currículo passar pela nossa IA, ele passa na entrevista deles.</p>
          </div>
        </div>
      </section>

      {/* Vantagem x Desvantagem */}
      <section style={{padding: '6rem 5%', background: '#0a0a0a'}}>
        <div style={{maxWidth: '1000px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '900', textAlign: 'center', marginBottom: '4rem', letterSpacing: '-1px'}}>A Diferença Injusta</h2>
          
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
            <div className="minimal-card" style={{padding: '3rem', borderTop: '4px solid #ff4444'}}>
              <h3 style={{color: '#ff4444', marginBottom: '2rem', fontSize: '1.5rem'}}>O Jeito Antigo (Sem IA)</h3>
              <ul style={{listStyle: 'none', padding: 0, color: '#888'}}>
                <li style={{marginBottom: '1.5rem'}}>❌ Enviar 50 currículos e não ter resposta.</li>
                <li style={{marginBottom: '1.5rem'}}>❌ Usar verbos fracos que o robô ignora.</li>
                <li style={{marginBottom: '1.5rem'}}>❌ Formatação bonita, mas invisível para os filtros ATS.</li>
                <li>❌ Perder vagas para candidatos com menos experiência técnica.</li>
              </ul>
            </div>
            
            <div className="minimal-card" style={{padding: '3rem', borderTop: '4px solid #00f2ff', background: 'rgba(0, 242, 255, 0.03)'}}>
              <h3 style={{color: '#00f2ff', marginBottom: '2rem', fontSize: '1.5rem'}}>Com Linked Bypass AI</h3>
              <ul style={{listStyle: 'none', padding: 0, color: '#ccc'}}>
                <li style={{marginBottom: '1.5rem'}}>✅ Aplicar para 5 vagas e fazer 3 entrevistas.</li>
                <li style={{marginBottom: '1.5rem'}}>✅ Injetar as "Keywords Ocultas" de alta conversão.</li>
                <li style={{marginBottom: '1.5rem'}}>✅ Currículo estruturado para agradar a IA da empresa.</li>
                <li>✅ Ser encontrado passivamente por recrutadores no LinkedIn.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Minimalista */}
      <section style={{padding: '6rem 5%'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '900', textAlign: 'center', marginBottom: '4rem', letterSpacing: '-1px'}}>Resultados Reais</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
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
        </div>
      </section>

      {/* Oferta Direta Minimalista */}
      <section style={{padding: '6rem 5%', textAlign: 'center', background: '#0a0a0a'}}>
        <div className="minimal-card" style={{maxWidth: '600px', margin: '0 auto', padding: '4rem 2rem', position: 'relative', overflow: 'hidden'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-1px'}}>O Fim das Rejeições Automáticas</h2>
          <p style={{color: '#888', marginBottom: '3rem'}}>Pague uma única vez. Use para sempre. Conquiste qualquer vaga.</p>
          
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

          <a href={checkoutUrl} className="buy-button" style={{width: '100%', padding: '1.5rem', fontSize: '1.2rem'}}>
            COMPRAR AGORA POR R$ 47
          </a>
          <p style={{marginTop: '1.5rem', fontSize: '0.8rem', color: '#555'}}>
            Garantia incondicional de 7 dias. Pagamento via Cakto.
          </p>
        </div>
      </section>

      <footer style={{padding: '3rem 5%', textAlign: 'center', color: '#444', fontSize: '0.85rem', borderTop: '1px solid #111'}}>
        <p>Linked Bypass AI © 2026. Todos os direitos reservados.</p>
        <p style={{marginTop: '0.5rem'}}>A estratégia invisível dos desenvolvedores contratados.</p>
      </footer>
    </div>
  );
}
