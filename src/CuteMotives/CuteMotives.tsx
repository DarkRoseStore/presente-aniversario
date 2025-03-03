import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

const categories = [
  {
    title: "Fofa 🥰",
    color: "#FFABAB", // bg-pink-300
    date: "2025-03-17",
    items: [
      "O seu sorriso, mesmo que por foto, ilumina meu dia.",
      "O jeito como seus olhos brilham me deixa apaixonado.",
      "O carinho que você coloca em cada mensagem que me manda.",
      "A forma como você se preocupa comigo, mesmo de longe.",
      "O som da sua risada me deixa todo feliz.",
      "Como você me faz sentir especial com suas palavras.",
      "O jeito que você fala quando está animada.",
      "O carinho que você transmite.",
      "Como você me faz sentir amado todos os dias, mesmo sem estar perto.",
      "A forma como você me faz querer te abraçar através da tela.",
    ],
  },
  {
    title: "Engraçada 😊",
    color: "#FFD5A1", // bg-yellow-300
    date: "2025-03-18",
    items: [
      "Sua risada contagiante que me faz sorrir do outro lado da tela.",
      "Como você sempre faz piadinhas entre nós.",
      "Como você me manda mensagens aleatórias e engraçadas.",
      "Seu drama em algumas situações.",
      "O jeito que você digita quando está empolgada.",
      "Suas reações exageradas nos áudios.",
      "Como você fala algumas palavras erradas.",
      "Seu talento especial para esquecer o que ia falar no meio da frase.",
    ],
  },
  {
    title: "Única 🌟",
    color: "#A0E7E5", // bg-blue-200
    date: "2025-03-19",
    items: [
      "O jeito como você faz tudo parecer mais especial, mesmo à distância.",
      "Seu coração gigante que eu admiro tanto.",
      "Como você sempre me entende sem eu precisar falar muito.",
      "Sua criatividade para deixar nossa conversa divertida.",
      "A forma como você me faz sentir perto, mesmo estando longe.",
      "Como você sempre quer me ver feliz.",
      "Sua paciência (ou falta dela, mas eu amo mesmo assim kkkkk).",
      "O brilho que você traz para a minha vida, mesmo pela tela.",
      "Seu jeito autêntico e sincero, que me faz confiar em você.",
      "Como você me inspira a ser uma pessoa melhor, mesmo sem nos conhecermos pessoalmente ainda.",
    ],
  },
  {
    title: "Guerreira 💪",
    color: "#FFE156", // bg-yellow-100
    date: "2025-03-20",
    items: [
      "A forma como você nunca desiste, mesmo diante dos desafios.",
      "Seu empenho em buscar seus objetivos, não importa o quão difíceis sejam.",
      "A coragem que você tem para enfrentar qualquer obstáculo.",
      "Como você transforma dificuldades em oportunidades de crescimento.",
      "Sua determinação em seguir em frente, mesmo quando tudo parece difícil.",
      "A força que você demonstra todos os dias, inspirando quem está ao seu redor.",
      "O jeito como você luta pelos seus sonhos, sem medo de errar.",
      "Sua resiliência, que mostra o quanto você é capaz de superar qualquer coisa.",
      "A forma como você encara a vida com coragem e otimismo.",
      "Como você me inspira a ser mais forte e determinado também.",
    ],
  },
  {
    title: "Memórias Especiais 💖",
    color: "#CBAACB", // bg-purple-200
    date: "2025-03-21",
    items: [
      "A primeira vez que conversamos lá pelo Slowly.",
      "Nossa primeira risada juntos, mesmo por mensagem.",
      "Todas as vezes que ficamos conversando até tarde.",
      "Quando percebemos quantas coisas temos em comum.",
      "O dia em que você me fez sentir especial de um jeito novo.",
      "Cada vez que você me manda um 'bom diaaa 🌼' e melhora meu dia inteiro.",
      "O dia em que você me fez chorar de tanto rir.",
      "Todos os momentos em que você me faz sentir querido.",
      "O simples fato de ter você na minha vida já é especial ❤.",
    ],
  },
  {
    title: "Sonhos e Futuro 🌈",
    color: "#B9FBC0", // bg-green-100
    date: "2025-03-22",
    items: [
      "Como você me faz querer estar ao seu lado para ver todos os seus sonhos se realizarem.",
      "A forma como você me inspira a sonhar mais alto.",
      "O jeito como você me faz acreditar que podemos conquistar qualquer coisa juntos.",
      "Como você me faz querer construir um futuro ao seu lado.",
      "A forma como você me faz imaginar um futuro cheio de conquistas e felicidade.",
      "Como você me faz querer ser parte de cada vitória sua.",
      "O jeito como você me faz acreditar que podemos superar qualquer desafio juntos.",
      "Como você me faz querer estar presente em cada momento especial da sua vida.",
      "A forma como você me faz sonhar com um futuro cheio de amor e realizações.",
      "Como você me faz querer ser a pessoa que te apoia em cada passo rumo aos seus sonhos.",
    ],
  },
];

export default function CuteMotives() {
  const today = new Date();
  const startDate = new Date("2025-03-17");
  const endDate = new Date("2025-03-22");

  let message = "";

  // Verifica se a data atual está antes da data de início
  if (today < startDate) {
    message = "Calma ai, curiosa! Cartões disponíveis a partir de 17 de março de 2025.";
  }
  // Verifica se a data atual está dentro do intervalo de datas
  else if (today >= startDate && today < endDate) {
    message = "Volte amanhã para ver os novos cards.";
  }
  // Verifica se a data atual é posterior à data final
  else if (today >= endDate) {
    message = "Os cards chegaram ao fim, feliz aniversário, te amo Ériquinha 🥰";
  }

  // Filtra os cards com base na data atual
  const filteredCategories = categories.filter((category) => {
    const categoryDate = new Date(category.date);
    return categoryDate <= today; // Exibe apenas os cards com data menor ou igual à data atual
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ minHeight: "100vh", backgroundColor: "#FCE4EC", display: "flex", flexDirection: "column", alignItems: "center", padding: "20px", overflowX: "hidden" }}>
        <Typography variant="h4" component="h1" color="black" gutterBottom style={{ fontWeight: 'bold', textAlign: 'center' }}>
          💖 Motivos Que Te Fazem Especial 💖
        </Typography>
        <div style={{ width: "100%", maxWidth: "600px", padding: "0 20px" }}>
          {filteredCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ marginBottom: "24px" }} // Espaçamento entre os cards
            >
              <Card sx={{ backgroundColor: category.color, boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" component="h2" color="#4A4A4A" gutterBottom textAlign="center">
                    {category.title}
                  </Typography>
                  <ul style={{ paddingLeft: "20px", color: "#333", margin: 0 }}>
                    {category.items.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: "8px", fontSize: "14px" }}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mensagem abaixo dos cards */}
        {message && (
          <Typography variant="h6" color="#4A4A4A" style={{ textAlign: "center", marginTop: "20px" }}>
            {message}
          </Typography>
        )}
      </div>
    </ThemeProvider>
  );
}