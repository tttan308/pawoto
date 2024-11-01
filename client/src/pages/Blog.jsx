import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import Layout from "layout/Layout";
import Typical from "react-typical";

// Keyframes for gradient animation on title
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

// Styled component for title text with animated gradient effect
const GradientTitle = styled("span")({
  background: "linear-gradient(90deg, rgba(255,183,77,1), rgba(255,138,101,1), rgba(255,183,77,1))",
  backgroundSize: "200% 200%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: `${gradientAnimation} 3s ease infinite`,
  fontWeight: "bold",
  fontSize: "1.8rem",
  display: "inline-block",
});

const SectionBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(4, 0),
  backgroundColor: "#FFF8E1",
  borderRadius: "8px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
}));

const Highlight = styled("span")({
  color: "#E65100",
  fontWeight: "bold",
});

const ImageBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "2rem",
});

const BlogPage = () => {
  return (
    <Layout title="Blog">
      <Container maxWidth="md">
        <SectionBox>
          <Typography variant="h4" align="center" gutterBottom>
            <GradientTitle>
              <Typical steps={["Giải Cứu Những Người Bạn Cũ: Chuyện Từ Vải Vụn Đến Túi Tote Độc Đáo", 2000]} loop={1} wrapper="span" />
            </GradientTitle>
          </Typography>
          <Typography variant="body1" paragraph>
            Bạn có biết rằng trong tủ quần áo của mình có bao nhiêu <Highlight>“người bạn cũ”</Highlight> đang chờ được giải cứu? Có những chiếc áo, chiếc quần đã một thời làm bạn say mê nhưng giờ đã bị lãng quên, hay thậm chí, chúng chỉ còn là những <Highlight>mảnh vải vụn</Highlight>. Nhưng đừng vội quẳng chúng vào thùng rác! Thay vào đó, hãy biến chúng thành những <Highlight>chiếc túi tote độc đáo</Highlight>!
          </Typography>
          <Typography variant="body1" paragraph>
            Hiện nay, <Highlight>vấn đề vải vụn</Highlight> đang trở thành một cuộc khủng hoảng nghiêm trọng. Theo thống kê, hàng triệu tấn vải thải ra mỗi năm, và chỉ một phần nhỏ trong số đó được tái chế. Thế giới đang ngập tràn trong những mảnh vải cũ, trong khi chúng ta lại có khả năng biến đổi chúng thành những <Highlight>sản phẩm mới đầy sức sống</Highlight>. Có bao giờ bạn nghĩ rằng, từ một chiếc áo phông cũ, bạn có thể tạo ra một chiếc <Highlight>túi thời trang</Highlight>? Không chỉ giúp <Highlight>tiết kiệm tiền</Highlight>, mà còn mang lại cho bạn một sản phẩm mang đậm dấu ấn cá nhân!
          </Typography>
          <Typography variant="body1" paragraph>
            Hãy tưởng tượng nhé! Khi bạn cầm trên tay một <Highlight>chiếc túi tote</Highlight> được làm từ <Highlight>vải vụn</Highlight>, bạn không chỉ đang sử dụng một sản phẩm <Highlight>thân thiện với môi trường</Highlight>, mà còn đang mang theo câu chuyện về quá trình <Highlight>tái chế đầy sáng tạo</Highlight> của chính mình. Bạn có thể khoe với bạn bè rằng: “<Highlight>Chiếc túi này được làm từ những mảnh vải mà tôi đã cứu giúp!</Highlight>” Cảm giác này thật tuyệt vời phải không?
          </Typography>
          <Typography variant="body1" paragraph>
            Mặt khác, việc tái chế vải vụn cũng có lợi cho <Highlight>sức khỏe của hành tinh</Highlight> chúng ta. Theo các nhà nghiên cứu, <Highlight>ngành thời trang</Highlight> là một trong những nguyên nhân chính gây <Highlight>ô nhiễm môi trường</Highlight>. Việc sản xuất một chiếc áo mới không chỉ tốn kém tài nguyên mà còn tiêu tốn <Highlight>hàng triệu lít nước</Highlight>. Khi bạn quyết định tái chế, bạn đang góp phần làm giảm lượng nước và năng lượng tiêu thụ.
          </Typography>
          <Typography variant="body1" paragraph>
            Vì vậy, hãy cùng nhau hành động! Thay vì chỉ đơn giản là vứt bỏ những chiếc áo cũ, hãy thử sức với việc làm <Highlight>túi tote từ vải vụn</Highlight>. Hãy <Highlight>sáng tạo</Highlight> và tự tay làm những sản phẩm không chỉ <Highlight>độc đáo</Highlight> mà còn góp phần bảo vệ môi trường. Có thể bạn sẽ tạo ra một chiếc túi không giống ai, và biết đâu đấy, nó sẽ trở thành <Highlight>“tín đồ thời trang”</Highlight> của bạn trong mùa hè này!
          </Typography>
          <Typography variant="body1" paragraph>
            Hãy nhớ rằng, <Highlight>mỗi mảnh vải vụn</Highlight> đều có một <Highlight>câu chuyện</Highlight> để kể. Chỉ cần bạn có đam mê và một chút sáng tạo, những sản phẩm tưởng chừng như vô dụng có thể trở thành <Highlight>tác phẩm nghệ thuật</Highlight>. Cùng nhau, chúng ta có thể biến <Highlight>cuộc khủng hoảng vải vụn</Highlight> thành một cơ hội để thể hiện bản thân và <Highlight>bảo vệ hành tinh</Highlight>. Hãy bắt đầu ngay hôm nay, và cùng nhau làm cho thế giới trở nên xanh hơn!
          </Typography>

          <ImageBox>
            <img
              src="blog.png"
              alt="Blog"
              style={{
                width: "80%",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </ImageBox>
        </SectionBox>
      </Container>
    </Layout>
  );
};

export default BlogPage;
