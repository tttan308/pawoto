import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import Layout from "layout/Layout";
import Typical from "react-typical";
import Fade from "react-reveal/Fade";

const ImageBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "2rem",
  maxWidth: "100%",
  "&:hover": {
    transform: "scale(1.05)",
    transition: "transform 0.3s ease-in-out",
  },
});

const ImageBox2 = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "2rem",
  maxWidth: "100%",
});

const Image = styled("img")({
  width: "90%",
  maxWidth: "600px",
  height: "auto",
  borderRadius: "8px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  transition: "box-shadow 0.3s ease",
  "&:hover": {
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
  },
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

const Keyword = styled("span")({
  color: "#E65100",
  fontWeight: "bold",
  "&:hover": {
    color: "#FB8C00",
    transition: "color 0.3s ease",
  },
});

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

const GradientText = styled("span")({
  background: "linear-gradient(90deg, rgba(255,183,77,1), rgba(255,138,101,1), rgba(255,183,77,1))",
  backgroundSize: "200% 200%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: `${gradientAnimation} 3s ease infinite`,
  fontWeight: "bold",
  fontSize: "3rem",
});

const Pawoto = () => {
  return (
    <Layout title="Pawoto">
      <Container maxWidth="lg">
        <Box mt={4}>
          <ImageBox>
            <Image src="image1.png" alt="Ảnh Logo sặc sỡ" />
          </ImageBox>
          <Typography variant="h5" align="center" gutterBottom sx={{ color: "transparent" }}>
            <GradientText>
              <Typical
                steps={["PAWOTO - Những mảnh vải biết nói?", 2000]}
                loop={1}
                wrapper="span"
              />
            </GradientText>
          </Typography>
        </Box>

        <SectionBox component={Paper} elevation={2}>
          <HighlightText variant="h4" gutterBottom>
            Tầm nhìn
          </HighlightText>
          <Typography variant="body1" paragraph>
            <Keyword>Pawoto</Keyword> hướng tới trở thành thương hiệu thời trang <Keyword>bền vững</Keyword> hàng đầu, truyền cảm hứng cho cộng đồng và góp phần xây dựng <Keyword>tương lai tốt đẹp hơn</Keyword>. Chúng tôi cam kết cung cấp sản phẩm <Keyword>chất lượng cao</Keyword>, tôn trọng <Keyword>môi trường</Keyword> và mang đến trải nghiệm mua sắm ý nghĩa.
          </Typography>
        </SectionBox>

        <SectionBox component={Paper} elevation={2}>
          <HighlightText variant="h4" gutterBottom>
            Sứ mệnh
          </HighlightText>
          <Typography variant="body1" paragraph>
            Kết nối <Keyword>thời trang</Keyword> và <Keyword>bảo vệ môi trường</Keyword>, tạo ra những sản phẩm <Keyword>túi tái chế</Keyword> độc đáo, góp phần xây dựng một thế giới <Keyword>bền vững hơn</Keyword>.
          </Typography>
        </SectionBox>

        <SectionBox component={Paper} elevation={2}>
          <HighlightText variant="h4" gutterBottom>
            Giá trị cốt lõi
          </HighlightText>
          <Typography variant="body1" paragraph>
            <Keyword>Bền vững</Keyword> - <Keyword>Tiết kiệm</Keyword> - <Keyword>Sáng tạo</Keyword> - <Keyword>Giá trị</Keyword> - <Keyword>Trách nhiệm</Keyword>.
          </Typography>
        </SectionBox>

        <SectionBox component={Paper} elevation={2}>
          <HighlightText variant="h4" gutterBottom>
            Câu chuyện thương hiệu
          </HighlightText>
          <Typography variant="body1" paragraph>
            Chắc hẳn bạn đang thắc mắc tại sao chúng mình lại chọn cái tên "<Keyword>Pawoto</Keyword>" phải không? Hãy ngồi lại, thư giãn và để mình kể cho bạn nghe câu chuyện thú vị này! Khi tụi mình nghĩ đến cái tên, không chỉ đơn giản là đặt một cái tên cho có. Mỗi chữ cái trong "<Keyword>Pawoto</Keyword>" đều có một ý nghĩa riêng, như một món quà nhỏ mà tụi mình muốn gửi gắm đến bạn!
          </Typography>
          <Typography variant="body1" paragraph>
            Đầu tiên là <Keyword>Pa</Keyword> – viết tắt của từ "<Keyword>Patch</Keyword>". Bạn biết không, những mảnh vải vụn nhỏ xinh mà tụi mình sử dụng có thể nói lên cả một hành trình! Mỗi mảnh vải không chỉ là một phần của chiếc túi mà còn là một câu chuyện về sự <Keyword>sáng tạo</Keyword> và tài năng của những người thợ thủ công.
          </Typography>
          <Typography variant="body1" paragraph>
            Tiếp theo là <Keyword>Wo</Keyword>, đại diện cho "<Keyword>Work</Keyword>". Nhưng không phải chỉ là công việc như bạn nghĩ đâu! Đây chính là quá trình đầy tâm huyết và <Keyword>kiên nhẫn</Keyword> mà tụi mình dành cho từng chiếc túi. Mỗi chiếc túi đều có <Keyword>tính cách riêng</Keyword>.
          </Typography>
          <Typography variant="body1" paragraph>
            Cuối cùng, chúng ta có <Keyword>To</Keyword> – viết tắt của "<Keyword>Tote</Keyword>". Đây là sản phẩm chính của tụi mình! Những chiếc túi tote <Keyword>Pawoto</Keyword> không chỉ là những món đồ thời trang mà còn là biểu tượng cho lối sống <Keyword>bền vững</Keyword>.
          </Typography>
          <Typography variant="body1" paragraph>
            Và đó là "<Keyword>Pawoto</Keyword>" – một cái tên không chỉ đơn thuần là một nhãn hiệu. Đó là sự kết hợp của nghệ thuật, sự tỉ mỉ, và một trái tim luôn hướng về <Keyword>môi trường</Keyword>.
          </Typography>
          <Fade bottom>
            <Typography
              variant="h6"
              align="center"
              fontStyle="italic"
              sx={{ color: "#FB8C00", mt: 3 }}
            >
                "Với Pawoto, mỗi chiếc túi tote là một câu chuyện được kể qua những mảnh ghép đầy màu
                sắc”
            </Typography>
          </Fade>
          <ImageBox2>
            <img
              src="image2.png"
              alt="Brand Story Image"
              style={{ maxWidth: "250px", margin: "10px" }}
            />
          </ImageBox2>
        </SectionBox>
      </Container>
    </Layout>
  );
};

export default Pawoto;
