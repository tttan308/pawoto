import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import { styled } from "@mui/system";
import Layout from "layout/Layout";

const ImageBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "2rem",
  maxWidth: "100%",
});

const Image = styled("img")({
  width: "60%",
  maxWidth: "400px",
  height: "auto",
  borderRadius: "8px",
});

const SectionBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  borderLeft: "6px solid #FFA726",
  backgroundColor: "#FFF8E1",
  borderRadius: "8px",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));

const HighlightText = styled(Typography)({
  color: "#FB8C00",
  fontWeight: "bold",
});

const Home = () => {
  return (
    <Layout title="Home">
      <Container maxWidth="lg">
        <Box mt={4}>
          <ImageBox>
            <Image src="logo.svg" alt="Ảnh Logo sặc sỡ" />
          </ImageBox>
          <Typography variant="h5" align="center" gutterBottom sx={{ color: "#FB8C00" }}>
            PAWOTO - Những mảnh vải biết nói?
          </Typography>
        </Box>

        <SectionBox component={Paper} elevation={2}>
          <HighlightText variant="h4" gutterBottom>
            Tầm nhìn
          </HighlightText>
          <Typography variant="body1">
            Chúng tôi muốn Pawoto trở thành thương hiệu hàng đầu về thời trang bền vững, truyền cảm hứng cho cộng đồng và tạo ra một tương lai mới cho ngành công nghiệp thời trang.
          </Typography>
        </SectionBox>

        <SectionBox component={Paper} elevation={2}>
          <HighlightText variant="h4" gutterBottom>
            Sứ mệnh
          </HighlightText>
          <Typography variant="body1">
            Kết nối thời trang với bảo vệ môi trường. Tạo nên những chiếc túi tái chế độc đáo, giúp bảo vệ hành tinh xanh cho các thế hệ mai sau.
          </Typography>
        </SectionBox>

        <SectionBox component={Paper} elevation={2}>
          <HighlightText variant="h4" gutterBottom>
            Giá trị cốt lõi
          </HighlightText>
          <Typography variant="body1">
            Bền vững - Tiết kiệm - Sáng tạo - Giá trị - Trách nhiệm.
          </Typography>
        </SectionBox>

        <SectionBox component={Paper} elevation={2}>
          <HighlightText variant="h4" gutterBottom>
            Câu chuyện thương hiệu
          </HighlightText>
          <Typography variant="body1" paragraph>
            Có thể bạn đang tự hỏi, tại sao lại là "Pawoto"? Hãy cùng chúng mình khám phá nhé!
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Pa</strong> - viết tắt của "Patch" (mảnh ghép). Những mảnh vải nhỏ mà chúng mình sử dụng không chỉ là phần của chiếc túi, mà còn là câu chuyện về sự sáng tạo và nỗ lực của người thợ.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Wo</strong> - đại diện cho "Work" (công việc). Không chỉ đơn giản là sản xuất, đây là quá trình đong đầy tâm huyết và kiên nhẫn mà chúng mình dành cho từng sản phẩm, biến chúng thành những tác phẩm nghệ thuật.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>To</strong> - viết tắt của "Tote". Đây chính là sản phẩm chính mà chúng mình mang đến cho bạn. Mỗi chiếc túi tote là một câu chuyện nhỏ, một món quà bền vững dành cho thế giới và cho bạn.
          </Typography>
          <Typography variant="h6" align="center" fontStyle="italic" sx={{ color: "#FB8C00", mt: 3 }}>
            "Với Pawoto, mỗi chiếc túi là một câu chuyện được kể qua những mảnh ghép đầy màu sắc.”
          </Typography>
          <ImageBox>
            <Image src="image2.png" alt="Brand Story Image" />
          </ImageBox>
        </SectionBox>
      </Container>
    </Layout>
  );
};

export default Home;
