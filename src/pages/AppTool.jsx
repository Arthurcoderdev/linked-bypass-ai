import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import botHero from '../assets/hero-bot.png'

export default function AppTool() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [analysisStep, setAnalysisStep] = useState('')
  const [results, setResults] = useState(null)
  const [error, setError] = useState('')
  const [pdfPreviewUrl, setPdfPreviewUrl] = useState(null)

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    setPdfPreviewUrl(URL.createObjectURL(file))
    setIsAnalyzing(true)
    setError('')
    setAnalysisStep('Enviando para análise segura...')

    try {
      const formData = new FormData()
      formData.append('resume', file)

      setAnalysisStep('A IA está processando seu currículo...')
      
      const response = await fetch('https://linked-bypass-ai.onrender.com/analyze', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Falha na comunicação com o servidor.')
      }

      const data = await response.json()
      setResults(data)
      setIsAnalyzing(false)
      setShowResults(true)
    } catch (err) {
      console.error(err)
      setError('Erro na análise: ' + err.message + '. Certifique-se de que o servidor backend está rodando.')
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">
          <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
            <span>&lt;/&gt;</span> LINKED BYPASS AI
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/" style={{color: 'var(--text-dim)', textDecoration: 'none'}}>Sair</Link>
        </div>
      </nav>

      {isAnalyzing && (
        <div className="loading-overlay">
          {pdfPreviewUrl && (
            <div style={{position: 'absolute', left: '2rem', top: '2rem', width: '300px', height: '400px', opacity: 0.5, pointerEvents: 'none', borderRadius: '10px', overflow: 'hidden'}}>
               <iframe src={`${pdfPreviewUrl}#toolbar=0&navpanes=0&scrollbar=0`} width="100%" height="100%" title="PDF Preview" style={{border: 'none'}} />
            </div>
          )}
          <div className="loader"></div>
          <h2 className="animate-slide-in">{analysisStep}</h2>
          <p style={{marginTop: '1rem', color: 'var(--primary)'}}>Hackeando os filtros do LinkedIn...</p>
        </div>
      )}

      {error && (
        <div style={{position: 'fixed', bottom: '2rem', right: '2rem', background: '#ff4444', color: 'white', padding: '1rem 2rem', borderRadius: '10px', zIndex: 1000, boxShadow: '0 5px 20px rgba(0,0,0,0.5)'}}>
          {error}
        </div>
      )}

      {!showResults && !isAnalyzing ? (
        <>
          <section className="hero">
            <div className="hero-content">
              <h1 className="animate-slide-in">
                FERRAMENTA DE <span className="text-gradient">ANÁLISE</span>
              </h1>
              <p className="animate-slide-in">
                Faça o upload do seu currículo e deixe nossa IA 2.5 Flash fazer a mágica.
              </p>
              <div className="upload-card glass animate-slide-in">
                <input 
                  type="file" 
                  id="cv-upload" 
                  hidden 
                  onChange={handleFileUpload}
                  accept=".pdf"
                />
                <label htmlFor="cv-upload" className="upload-button">
                  ANALISAR CURRÍCULO AGORA
                </label>
                <p style={{marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-dim)'}}>
                  Privacidade total. Processamento seguro.
                </p>
              </div>
            </div>
            <div className="bot-image-container">
              <img src={botHero} alt="AI Bot" className="bot-image animate-float" />
            </div>
          </section>
        </>
      ) : showResults ? (
        <section className="results-section animate-slide-in">
          <h1 className="text-gradient" style={{marginBottom: '1rem'}}>Análise de IA Concluída</h1>
          <p style={{marginBottom: '3rem'}}>Identificamos os seguintes pontos para você subir de nível:</p>

          <div className="split-view">
            <div className="pdf-container">
               <h3 style={{marginBottom: '1rem', color: 'var(--text-dim)'}}>Seu Documento</h3>
               <iframe 
                 src={`${pdfPreviewUrl}#toolbar=0`} 
                 className="pdf-preview"
                 title="Seu Currículo"
               />
            </div>

            <div className="analysis-results">
              <h3 style={{marginBottom: '1.5rem', color: 'var(--primary)'}}>Plano de Otimização</h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                {results?.tips.map((tip, i) => (
                  <div key={i} className="tip-card glass">
                    <p style={{fontWeight: '600'}}>{tip.advice}</p>
                    {tip.quote && (
                      <span className="quote-highlight">
                        " {tip.quote} "
                      </span>
                    )}
                  </div>
                ))}
              </div>
              
              <h3 style={{marginBottom: '1.5rem', marginTop: '3rem', color: 'var(--secondary)'}}>Palavras-Chave Faltantes</h3>
              <div className="keywords-container">
                {results?.keywords.map((kw, i) => (
                  <span key={i} className="keyword-tag">{kw}</span>
                ))}
              </div>
              
              <div className="glass" style={{marginTop: '3rem', padding: '1.5rem', borderColor: 'var(--primary)'}}>
                <h4>Visibility Score</h4>
                <div style={{height: '10px', background: 'var(--bg-accent)', borderRadius: '10px', margin: '1rem 0'}}>
                  <div style={{width: `${results?.score}%`, height: '100%', background: 'var(--primary)', borderRadius: '10px', boxShadow: '0 0 10px var(--primary)'}}></div>
                </div>
                <p style={{textAlign: 'right', fontWeight: 'bold'}}>{results?.score}/100</p>
              </div>

              <button 
                className="upload-button" 
                style={{marginTop: '3rem', width: '100%'}}
                onClick={() => {
                  setShowResults(false);
                  setPdfPreviewUrl(null);
                }}
              >
                NOVA ANÁLISE
              </button>
            </div>
          </div>
        </section>
      ) : null}

      <footer style={{padding: '4rem 5%', textAlign: 'center', borderTop: '1px solid var(--border)', marginTop: 'auto'}}>
        <p style={{color: 'var(--text-dim)'}}>&copy; 2026 Linked Bypass AI - Estratégia é Vantagem.</p>
      </footer>
    </div>
  )
}
