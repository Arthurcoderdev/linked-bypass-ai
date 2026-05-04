import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdfParse = require('pdf-parse');
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/analyze', upload.single('resume'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Nenhum arquivo enviado.' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'Configuração da API ausente no servidor.' });
    }

    // 1. Extrair texto do PDF
    const pdfData = await pdfParse(req.file.buffer);
    const resumeText = pdfData.text;

    // 2. Chamar a IA
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const prompt = `
      Você é um especialista em recrutamento e algoritmos de busca do LinkedIn (ATS).
      Analise o currículo abaixo e forneça:
      1. 4 Dicas de melhorias específicas e acionáveis. Para cada dica, extraia um trecho exato (quote) do currículo que ilustra o problema e que deve ser alterado (marcado como erro).
      2. Uma lista de 10 palavras-chave estratégicas para esse perfil ser encontrado no LinkedIn.
      3. Um score de 0 a 100 baseado na otimização para filtros de IA.

      Currículo:
      ${resumeText}

      Responda estritamente em formato JSON válido com as seguintes chaves e estrutura:
      {
        "tips": [
          {
            "advice": "Sua dica aqui",
            "quote": "Trecho exato do currículo que precisa melhorar"
          }
        ],
        "keywords": ["palavra 1", "palavra 2", ...],
        "score": 85
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    
    // Limpar markdown se houver
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      text = jsonMatch[0];
    }


    const analysis = JSON.parse(text);
    res.json(analysis);

  } catch (error) {
    console.error('Erro na análise:', error);
    res.status(500).json({ error: 'Erro interno na análise do currículo.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
