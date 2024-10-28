import React, { useState } from "react";
import { Container, Typography, Box, Button, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { Howl } from "howler"; // For playing music
import Layout from "layout/Layout";

const OptionBox = styled(Paper)({
  padding: "16px",
  marginBottom: "16px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#FFF3E0",
  },
  borderRadius: "8px",
});

const ImageBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "2rem",
  maxWidth: "100%",
});

const motivationalMessages = {
  happy: "Chúc bạn một ngày tràn đầy niềm vui và năng lượng tích cực! Hãy lan tỏa niềm vui này nhé!",
  sad: "Pawoto ở đây để cùng bạn vượt qua mọi cảm xúc. Đừng lo, bạn luôn có người đồng hành!",
  calm: "Giữ mãi sự bình yên và thư thái này nhé! Thật tuyệt khi bạn cảm thấy thoải mái như vậy!",
};

const EmotionStation = () => {
  const [mood, setMood] = useState(null);
  const [showGift, setShowGift] = useState(false);
  const [motivationalMessage, setMotivationalMessage] = useState("");

  const handleMoodSelect = (selectedMood) => {
    setMood(selectedMood);
    setMotivationalMessage(motivationalMessages[selectedMood]);
    playMusic(selectedMood);
  };

  const playMusic = (moodType) => {
    let soundUrl;
    if (moodType === "happy") {
      soundUrl = "happy-song.mp3";
    } else if (moodType === "sad") {
      soundUrl = "sad-song.mp3";
    } else if (moodType === "calm") {
      soundUrl = "calm-song.mp3";
    }
    if (soundUrl) {
      const sound = new Howl({
        src: [soundUrl],
        volume: 0.5,
      });
      sound.play();
    }
  };

  return (
    <Layout>
      <Container maxWidth="md">
        {/* Greeting Meme */}
        {!mood && (
          <Box mt={4} textAlign="center">
            <Typography variant="h4" gutterBottom sx={{ color: "#FB8C00", fontWeight: "bold" }}>
              Pawoto xin chào bạn yêu!!!
            </Typography>
            <ImageBox>
              <img src="greeting.gif" alt="Greeting Meme" style={{ width: "50%", maxWidth: "250px", borderRadius: "8px" }} />
            </ImageBox>
          </Box>
        )}

        {/* Mood Selection */}
        {!mood && (
          <Box>
            <Typography variant="h5" gutterBottom sx={{ color: "#FB8C00", fontWeight: "bold" }}>
              Nếu hôm nay bạn là một chiếc túi Pawoto, bạn sẽ là túi nào?
            </Typography>
            <OptionBox onClick={() => handleMoodSelect("happy")}>
              <Typography variant="body1">
                A. Vui như nhặt được túi Pawoto độc nhất – Hôm nay mình cực kỳ vui, kiểu như vừa tìm được một chiếc túi hiếm mà không ai có!
              </Typography>
            </OptionBox>
            <OptionBox onClick={() => handleMoodSelect("sad")}>
              <Typography variant="body1">
                B. Buồn như túi Pawoto chưa tìm được chủ – Tâm trạng có chút buồn, giống như một chiếc túi vẫn đang nằm yên chờ đợi người đến mang về.
              </Typography>
            </OptionBox>
            <OptionBox onClick={() => handleMoodSelect("calm")}>
              <Typography variant="body1">
                C. Bình yên như túi Pawoto trên vai – Hôm nay mình thấy thật nhẹ nhàng và thư thái, như đang đeo một chiếc túi thoải mái trên vai, chẳng có gì phải lo lắng.
              </Typography>
            </OptionBox>
          </Box>
        )}

        {/* Mood Result */}
        {mood && (
          <Box mt={4} textAlign="center">
            <ImageBox>
              <img
                src={
                  mood === "happy"
                    ? "happy.gif"
                    : mood === "sad"
                    ? "sad.gif"
                    : "calm.gif"
                }
                alt="Mood"
                style={{ width: "50%", maxWidth: "250px", borderRadius: "8px" }}
              />
            </ImageBox>
            <Typography variant="body1" gutterBottom sx={{ fontStyle: "italic", color: "#FB8C00" }}>
              {motivationalMessage}
            </Typography>
            <Button variant="contained" color="primary" onClick={() => setShowGift(true)}>
              Nhận quà từ Pawoto
            </Button>
          </Box>
        )}

        {/* Final Gift Message */}
        {showGift && (
          <Box mt={4} textAlign="center">
            <Typography variant="h5" gutterBottom sx={{ color: "#FB8C00", fontWeight: "bold" }}>
              Chào bạn! Pawoto rất vui được gửi đến bạn món quà nhỏ này với tất cả tình cảm chân thành.
            </Typography>
            <Typography variant="body1">
              Mong rằng bạn sẽ thích nó và luôn đồng hành cùng Pawoto nhé! Yêu thương bạn rất nhiều! ❤
            </Typography>
          </Box>
        )}
      </Container>
    </Layout>
  );
};

export default EmotionStation;
