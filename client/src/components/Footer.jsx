import React from "react";
import { Container, Typography, Box, Grid, Link as MuiLink, Divider } from "@mui/material";
import { Facebook, Phone, Email } from "@mui/icons-material";

const Footer = () => {
  const date = new Date();

  return (
    <footer>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* Customer Care */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              CHĂM SÓC KHÁCH HÀNG
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {[
                "Kiểm tra trạng thái đơn hàng",
                "Ưu đãi thành viên",
                "Câu hỏi thường gặp",
                "Chính sách thanh toán",
                "Tài khoản của tôi",
                "Chính sách giao hàng",
                "Chính sách bảo hành và đổi trả",
                "Khuyến mãi",
              ].map((item, index) => (
                <li key={index}>
                  <MuiLink href="#" variant="body2" color="text.secondary" underline="hover">
                    {item}
                  </MuiLink>
                </li>
              ))}
            </Box>
          </Grid>

          {/* Help */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Help
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {[
                "Help Center",
                "Contact Us",
                "Shipping Info",
                "Track My Order",
                "Returns & Exchanges",
              ].map((item, index) => (
                <li key={index}>
                  <MuiLink href="#" variant="body2" color="text.secondary" underline="hover">
                    {item}
                  </MuiLink>
                </li>
              ))}
            </Box>
          </Grid>

          {/* More */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              More
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {["About Us", "Careers"].map((item, index) => (
                <li key={index}>
                  <MuiLink href="#" variant="body2" color="text.secondary" underline="hover">
                    {item}
                  </MuiLink>
                </li>
              ))}
            </Box>
          </Grid>

          {/* Company Information */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Box
                component="img"
                src="/logo.svg"
                alt="Company Logo"
                sx={{ mb: 2, width: "100%", maxWidth: 100 }}
              />
              <Typography variant="body1" fontWeight="bold">
                CÔNG TY TRÁCH NHIỆM HỮU HẠN PAWOTO
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                Địa chỉ:{" "}
                <MuiLink
                  href="https://www.google.com/maps/search/?api=1&query=Tầng+3,+số+46/1/8+Vườn+Chuối,+phường+4,+Quận+3,+Thành+Phố+Hồ+Chí+Minh"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                >
                  Tầng 3, số 46/1/8 Vườn Chuối, phường 4, Quận 3, Thành Phố Hồ Chí Minh
                </MuiLink>
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                Điện thoại: <MuiLink href="tel:0286688666">0286 688 666</MuiLink>
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                Email: <MuiLink href="mailto:PawotoVietnam@work.com">PawotoVietnam@work.com</MuiLink>
              </Typography>

              {/* Social Media Links */}
              <Box mt={2} display="flex" justifyContent={{ xs: "center", md: "flex-start" }} gap={2}>
                <MuiLink href="https://www.facebook.com/pawotovietnam" target="_blank" color="inherit" aria-label="Facebook">
                  <Facebook fontSize="medium" />
                </MuiLink>
                <MuiLink href="https://www.tiktok.com/@pawoto.vietnam?_t=8qhhe7e0Hm3&_r=1" target="_blank" color="inherit" aria-label="TikTok">
                  <img src="tiktok.png" alt="TikTok" width="24" height="24" />
                </MuiLink>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Divider and Copyright */}
        <Divider sx={{ my: 4 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          &copy; {date.getFullYear()} Pawoto. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
