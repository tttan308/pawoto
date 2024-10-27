const Footer = () => {
  const date = new Date();

  return (
    <footer aria-labelledby="footer-heading">
      <div className="mx-auto max-w-full px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 flex flex-col items-center">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-10 md:mt-0">
                <h3 className="text-xl font-bold leading-6 text-gray-900">CHĂM SÓC KHÁCH HÀNG</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Kiểm tra trạng thái đơn hàng
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Ưu đãi thành viên
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Câu hỏi thường gặp
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Chính sách thanh toán
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Tài khoản của tôi
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Chính sách giao hàng
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Chính sách bảo hành và đổi trả
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Khuyến mãi
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xl font-bold leading-6 text-gray-900">Help</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Shipping Info
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Track My Order
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Returns & Exchanges
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-xl font-bold leading-6 text-gray-900">More</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Carrers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <img
              className="h-20 object-cover w-full"
              src={"/src/assets/images/img-footer.png"}
              alt="Company name"
            />
            <p className="text-lg font-bold leading-6 text-gray-800">
              CÔNG TY TRÁCH NHIỆM HỮU HẠN PAWOTO
            </p>
            <p className="text-sm leading-6 text-gray-600 mt-1">
              Địa chỉ:{" "}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Tầng+3,+số+46/1/8+Vườn+Chuối,+phường+4,+Quận+3,+Thành+Phố+Hồ+Chí+Minh"
                className="font-medium"
                target="_blank"
                rel="noreferrer"
              >
                Tầng 3, số 46/1/8 Vườn Chuối, phường 4, Quận 3, Thành Phố Hồ Chí Minh.
              </a>
            </p>
            <p className="text-sm leading-6 text-gray-600 mt-1">
              Điện thoại:{" "}
              <a href="tel:0286688666" className="font-medium">
                0286 688 666
              </a>
            </p>
            <p className="text-sm leading-6 text-gray-600 mt-1">
              Email:{" "}
              <a href="mailto:PawotoVietnam@work.com" className="font-medium">
                PawotoVietnam@work.com
              </a>
            </p>
            <div className="flex space-x-6 items-center">
              <a
                href="https://www.facebook.com/pawotovietnam"
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@pawoto.vietnam?_t=8qhhe7e0Hm3&_r=1"
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">TikTok</span>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 512 512"
                  id="icons"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-base leading-5 text-gray-500">
            &copy; {date.getFullYear()} Pawoto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
