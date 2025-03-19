import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

import euAmoVoce from '../assets/audios/eu_amo_voce.mp3';
import epitafio from '../assets/audios/epitafio.mp3';
import ceuAzul from '../assets/audios/ceu_azul.mp3';
import ipanema from '../assets/audios/ipanema.mp3';
import oceano from '../assets/audios/oceano.mp3';
import anjos from '../assets/audios/anjos.mp3';

import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.avif';
import img8 from '../assets/images/img8.jpeg';

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif", 
  },
});

const categories = [
  {
    title: "Fofa 🥰",
    color: "#FFABAB",
    date: "2025-03-16",
    image: img1,
    items: [
      "O brilho dos seus olhos me encanta.",
      "O carinho que você coloca em cada mensagem.",
      "A forma como você se preocupa comigo.",
      "O som da sua risada me faz feliz.",
      "Como você me faz sentir especial todos os dias.",
      "O jeito animado como você fala das coisas que ama.",
      "A vontade que me dá de te abraçar através da tela.",
    ],
    music: anjos,
  },
  {
    title: "Engraçada 😊",
    color: "#FFD5A1",
    date: "2025-03-17",
    image: img2,
    items: [
      "Sua risada contagiante.",
      "As piadinhas internas que só nós entendemos.",
      "As mensagens aleatórias e engraçadas que você manda.",
      "Seu drama exagerado em algumas situações.",
      "O jeito empolgado como você digita.",
      "Suas reações exageradas nos áudios.",
      "Seu talento para esquecer o que ia falar no meio da frase.",
    ],
    music: epitafio,
  },
  {
    title: "Única 🌟",
    color: "#A0E7E5",
    date: "2025-03-18",
    image: img3,
    items: [
      "O jeito como você torna tudo mais especial.",
      "Seu coração gigante.",
      "Como você sempre me entende sem que eu fale muito.",
      "Sua criatividade para deixar qualquer momento divertido.",
      "A forma como você me faz sentir perto, mesmo de longe.",
      "Sua paciência (ou falta dela, mas eu amo mesmo assim kkkkk).",
      "Seu jeito autêntico e sincero.",
      "Como você me inspira a ser alguém melhor.",
    ],
    music: ipanema,
  },
  {
    title: "Guerreira 💪",
    color: "#FFE156",
    date: "2025-03-19",
    image: img4,
    items: [
      "Como você nunca desiste dos seus sonhos.",
      "Sua coragem para enfrentar qualquer obstáculo.",
      "Sua determinação em seguir em frente.",
      "A força que você demonstra todos os dias.",
      "O jeito como você transforma dificuldades em crescimento.",
      "Sua resiliência incrível.",
      "Como você me inspira a ser mais forte.",
    ],
    music: ceuAzul,
  },
  {
    title: "Memórias Especiais 💖",
    color: "#CBAACB",
    date: "2025-03-20",
    image: img5,
    items: [
      "Nossa primeira conversa no Slowly.",
      "A primeira vez que rimos juntos.",
      "As vezes que ficamos conversando até tarde.",
      "Quando percebemos quantas coisas temos em comum.",
      "Cada 'bom diaaa 🌼' que melhora meu dia inteiro.",
      "Sempre que me fez chorar de tanto rir.",
      "O simples fato de ter você na minha vida já é especial ❤.",
    ],
    music: oceano,
  },
  {
    title: "Sonhos e Futuro 🌈",
    color: "#B9FBC0",
    date: "2025-03-21",
    image: img6,
    items: [
      "Como você me faz querer estar presente em cada momento especial da sua vida.",
      "Como você me faz querer estar ao seu lado para ver seus sonhos se realizarem.",
      "A forma como você me inspira a sonhar mais alto.",
      "O jeito como você me faz acreditar que podemos conquistar qualquer coisa juntos.",
      "Como você me faz imaginar um futuro cheio de felicidade.",
      "O jeito como você me faz acreditar que podemos superar qualquer desafio juntos.",
      "A forma como você me faz sonhar com um futuro cheio de amor e realizações.",
    ],
    music: euAmoVoce,
  },
  {
    title: "Parabéns ❤️",
    color: "#FFABAB",
    date: "2025-03-03",
    image: img7,
    items: [
      "Feliz aniversáio Ériquinhaaaaaa, muito feliz de ainda ser seu amigo, desculpa as vezes que te irrito, eu sei que mandei mal e to tentando me redimir. Desejo tanto que vc consiga completar todos seus sonhos, e quero estar junto com vc pra poder comemorar e ver sua alegria e seu rostinho de felicidade. Tudo de bom pra vc e sua familia, vc merece 🌹",
    ],
    music: null,
    extraImage: img8,
  },
];

export default function CuteMotives() {
  const today = new Date();
  const startDate = new Date("2025-03-16");
  const endDate = new Date("2025-03-22");
  const [audio] = useState<HTMLAudioElement>(new Audio());
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentAudio, setCurrentAudio] = useState<string | null>(null);

  let message = "";
  if (today < startDate) message = "Calma ai, curiosa! Cartões disponíveis a partir de 16 de março de 2025.";
  else if (today >= startDate && today < endDate) message = "Volte amanhã para ver os novos cards.";
  else if (today >= endDate) message = "Os cards chegaram ao fim, feliz aniversário, te amo Ériquinha 🥰";

  const filteredCategories = categories.filter((category) => new Date(category.date) <= today);

  const playSound = (sound: string | null) => {
    if (!sound) return;

    if (currentAudio === sound) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      audio.src = sound;
      audio.play();
      setCurrentAudio(sound);
      setIsPlaying(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ minHeight: "100vh", backgroundColor: "#FCE4EC", display: "flex", flexDirection: "column", alignItems: "center", padding: "20px", overflowX: "hidden", position: "relative" }}>
        <Typography
          variant="h4"
          component="h1"
          color="black"
          gutterBottom
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "'Dancing Script', cursive", 
          }}
        >
          💖 Motivos Que Te Fazem Especial 💖
        </Typography>

        <div style={{ width: "100%", maxWidth: "600px", padding: "0 20px" }}>
          {filteredCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => playSound(category.music)}
              style={{ marginBottom: "24px", cursor: "pointer" }}
            >
              <Card sx={{ backgroundColor: category.color, boxShadow: 3, borderRadius: 2 }}>
                <CardMedia component="img" height="140" sx={{ objectFit: "cover" }} image={category.image} alt={category.title} />
                <CardContent>
                  <Typography variant="h6" component="h2" color="#4A4A4A" gutterBottom textAlign="center">
                    {category.title}
                  </Typography>
                  <ul style={{ paddingLeft: "20px", color: "#333", margin: 0 }}>
                    {category.items.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: "8px", fontSize: "14px" }}>{item}</li>
                    ))}
                  </ul>
                  {category.extraImage && ( // Renderiza a imagem extra se existir
                    <div style={{ marginTop: "16px", textAlign: "center" }}>
                      <img
                        src={category.extraImage}
                        alt="Imagem extra"
                        style={{ maxWidth: "100%", borderRadius: "8px" }}
                      />
                    </div>
                  )}
                  {category.music ? (
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                      {isPlaying && currentAudio === category.music ? (
                        <span
                          onClick={() => playSound(category.music)}
                          style={{
                            color: "#FF5252", 
                            cursor: "pointer",
                            fontSize: "18px",
                          }}
                        >
                          ⏸️ Pausar Música
                        </span>
                      ) : (
                        <span
                          onClick={() => playSound(category.music)}
                          style={{
                            color: "#4CAF50",
                            cursor: "pointer",
                            fontSize: "18px",
                          }}
                        >
                          ▶️ Tocar Música
                        </span>
                      )}
                    </div>
                  ) : (
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                      <span
                        style={{
                          color: "#E91E63", 
                          fontSize: "18px",
                        }}
                      >
                        Sem Música Hoje, Meu Som Favorito é sua Voz ❤️
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {message && (
          <Typography variant="h6" color="#4A4A4A" style={{ textAlign: "center", marginTop: "20px" }}>
            {message}
          </Typography>
        )}
      </div>
    </ThemeProvider>
  );
}