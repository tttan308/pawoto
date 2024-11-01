import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import { styled } from "@mui/system";
import ReactPlayer from "react-player";
import Layout from "layout/Layout";

const CenteredBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "2rem",
  width: "100%",
});

const Image = styled("img")({
  width: "90vw",
  maxWidth: "1000px",
  height: "auto",
  borderRadius: "8px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
  },
});

const VideoContainer = styled(Box)({
  width: "90vw",
  maxWidth: "1000px",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
});

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Layout title="Custom Page">
      <Container maxWidth="lg">
        <CenteredBox>
          <Image src="home1.png" alt="Ảnh Logo sặc sỡ" />
        </CenteredBox>

        <CenteredBox>
          <VideoContainer>
            <ReactPlayer
              url="home3.mp4"
              playing={isPlaying}
              controls
              light="image1.png"  
              onClickPreview={() => setIsPlaying(true)}
              width="100%"
              height="100%"
              style={{ aspectRatio: "16/9" }} 
            />
          </VideoContainer>
        </CenteredBox>

        <CenteredBox>
          <Image src="home2.png" alt="Hình ảnh cuối trang" />
        </CenteredBox>
      </Container>
    </Layout>
  );
};

export default Home;
