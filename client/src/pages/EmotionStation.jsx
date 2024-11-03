import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Button, Paper, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { styled } from "@mui/system";
import { Howl } from "howler";
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

let soundInstance;

const EmotionStation = () => {
  const [mood, setMood] = useState(null);
  const [showGift, setShowGift] = useState(false);
  const [motivationalMessage, setMotivationalMessage] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false); // Kiểm tra người dùng có nhập mã đúng không
  const [inputCode, setInputCode] = useState("");
  const [openDialog, setOpenDialog] = useState(true); // Hiển thị popup mã
  const [errorMessage, setErrorMessage] = useState(""); // Thông báo lỗi nếu mã không đúng

  const handleMoodSelect = (selectedMood) => {
    setMood(selectedMood);
    setMotivationalMessage(motivationalMessages[selectedMood]);
  };

  const playMusic = (moodType) => {
    let soundOptions;
    if (moodType === "happy") {
      soundOptions = ["happy-song.mp3", "happy-song.wav"];
    } else if (moodType === "sad") {
      soundOptions = ["sad-song.mp3", "sad-song1.mp3"];
    } else if (moodType === "calm") {
      soundOptions = ["calm-song1.mp3", "calm-song2.mp3"];
    }

    const randomSound = soundOptions[Math.floor(Math.random() * soundOptions.length)];
    soundInstance = new Howl({
      src: [randomSound],
      volume: 0.5,
    });
    soundInstance.play();
  };

  const handleGiftClick = () => {
    setShowGift(true);
    playMusic(mood); // Phát nhạc khi người dùng nhận quà
  };

  // Dừng audio khi component bị unmounted
  useEffect(() => {
    return () => {
      if (soundInstance) {
        soundInstance.stop();
      }
    };
  }, []);

  // Xử lý khi người dùng nhập mã vào popup
  const handleCodeSubmit = () => {
    if (inputCode === "pawoto23") {
      setIsAuthorized(true);
      setOpenDialog(false); // Đóng popup
      setErrorMessage(""); // Xóa thông báo lỗi nếu mã đúng
    } else {
      setErrorMessage("Mã không đúng, vui lòng thử lại."); // Hiển thị thông báo lỗi
    }
  };

  const handleCancel = () => {
    setOpenDialog(false);
    setIsAuthorized(false); // Đặt lại trạng thái khi người dùng hủy
  };

  return (
    <Layout>
      <Container maxWidth="md">
        {/* Popup yêu cầu mã */}
        <Dialog open={openDialog} disableEscapeKeyDown>
          <DialogTitle>Nhập mã truy cập</DialogTitle> {/* Màu cam cho tiêu đề */}
          <DialogContent>
  <TextField
    autoFocus
    margin="dense"
    label="Mã truy cập"
    type="password"
    fullWidth
    variant="outlined"
    value={inputCode}
    onChange={(e) => setInputCode(e.target.value)}
    error={!!errorMessage} // Hiển thị viền đỏ khi có lỗi
    helperText={errorMessage} // Hiển thị thông báo lỗi bên dưới
    sx={{
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#FFB74D", // Màu cam cho viền TextField
        },
        "&:hover fieldset": {
          borderColor: "#FFA726", // Màu cam đậm khi hover
        },
        "&.Mui-focused fieldset": {
          borderColor: "#FB8C00", // Màu cam đậm khi focus
        },
      },
      "& .MuiInputLabel-root": {
        color: "#FFB74D", // Màu cam cho label khi bình thường
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "#FB8C00", // Màu cam đậm cho label khi focus
      },
      "& .MuiFormHelperText-root": {
        color: "#FFB74D", // Màu cam cho helper text (thông báo lỗi)
      },
    }}
  />
        </DialogContent>

          <DialogActions>
            <Button
              onClick={handleCancel}
              variant="outlined"
              sx={{
                color: "#FB8C00",
                borderColor: "#FFB74D",
                "&:hover": { backgroundColor: "#FFF3E0", borderColor: "#FFA726" },
              }}
            >
              Hủy
            </Button>
            <Button
              onClick={handleCodeSubmit}
              variant="contained"
              sx={{
                backgroundColor: "#FFB74D", // Màu cam cho nút Xác nhận
                "&:hover": {
                  backgroundColor: "#FFA726", // Màu cam đậm hơn khi hover
                },
              }}
            >
              Xác nhận
            </Button>
          </DialogActions>
        </Dialog>

        {/* Nội dung EmotionStation nếu người dùng nhập đúng mã */}
        {isAuthorized && (
          <>
            {!mood && (
              <Box mt={4} textAlign="center">
                <Typography variant="h4" gutterBottom sx={{ color: "#FB8C00", fontWeight: "bold" }}>
                  Pawoto xin chào bạn yêu!!!
                </Typography>
                <ImageBox>
                  <img
                    src="greeting.gif"
                    alt="Greeting Meme"
                    style={{ width: "50%", maxWidth: "250px", borderRadius: "8px" }}
                  />
                </ImageBox>
              </Box>
            )}

            {/* Mood Selection */}
            {!mood && (
              <Box>
                <Typography variant="h5" gutterBottom sx={{ color: "#FB8C00", fontWeight: "bold" }}>
                  Nếu hôm nay bạn là một chiếc túi Pawoto, bạn sẽ là túi nào?
                </Typography>
                <OptionBox
                  onClick={() => handleMoodSelect("happy")}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#F8BBD0", // Hồng pastel cho happy
                    "&:hover": {
                      backgroundColor: "#F48FB1",
                      transform: "scale(1.05)",
                    },
                    transition: "transform 0.2s ease",
                  }}
                >
                  <Typography variant="body1" sx={{ display: "flex", alignItems: "center" }}>
                    <span role="img" aria-label="happy" style={{ fontSize: "1.5rem", marginRight: "8px" }}>
                      😊
                    </span>
                    A. Vui như nhặt được túi Pawoto độc nhất – Hôm nay mình cực kỳ vui, kiểu như vừa tìm được một chiếc túi hiếm mà không ai có!
                  </Typography>
                </OptionBox>

                <OptionBox
                  onClick={() => handleMoodSelect("sad")}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#FFE0B2", // Màu cam pastel cho sad
                    "&:hover": {
                      backgroundColor: "#FFD54F",
                      transform: "scale(1.05)",
                    },
                    transition: "transform 0.2s ease",
                  }}
                >
                  <Typography variant="body1" sx={{ display: "flex", alignItems: "center" }}>
                    <span role="img" aria-label="sad" style={{ fontSize: "1.5rem", marginRight: "8px" }}>
                      😢
                    </span>
                    B. Buồn như túi Pawoto chưa tìm được chủ – Tâm trạng có chút buồn, giống như một chiếc túi vẫn đang nằm yên chờ đợi người đến mang về.
                  </Typography>
                </OptionBox>

                <OptionBox
                  onClick={() => handleMoodSelect("calm")}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#B3E5FC", // Màu xanh pastel đậm hơn cho calm
                    "&:hover": {
                      backgroundColor: "#81D4FA", // Xanh đậm khi hover
                      transform: "scale(1.05)",
                    },
                    transition: "transform 0.2s ease",
                  }}
                >
                  <Typography variant="body1" sx={{ display: "flex", alignItems: "center" }}>
                    <span role="img" aria-label="calm" style={{ fontSize: "1.5rem", marginRight: "8px" }}>
                      😌
                    </span>
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
                    src={mood === "happy" ? "happy.gif" : mood === "sad" ? "sad.gif" : "calm.gif"}
                    alt="Mood"
                    style={{ width: "50%", maxWidth: "250px", borderRadius: "8px" }}
                  />
                </ImageBox>

                <Typography variant="body1" gutterBottom sx={{ fontStyle: "italic", color: "#FB8C00" }}>
                  {motivationalMessage}
                </Typography>

                <ImageBox>
                  <img
                    src="end.gif"
                    alt="End"
                    style={{ width: "50%", maxWidth: "250px", borderRadius: "8px" }}
                  />
                </ImageBox>

                {!showGift && (
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#FFB74D", "&:hover": { backgroundColor: "#FFA726" } }}
                    onClick={handleGiftClick}
                  >
                    Nhận quà từ Pawoto
                  </Button>
                )}
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
          </>
        )}
      </Container>
    </Layout>
  );
};

export default EmotionStation;
