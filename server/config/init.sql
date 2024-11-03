CREATE TABLE public.cart
(
    id SERIAL NOT NULL,
    user_id integer UNIQUE NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE public.cart_item
(
    id SERIAL NOT NULL,
    cart_id integer NOT NULL,
    product_id integer NOT NULL,
    quantity integer NOT NULL CHECK (quantity > 0),
    PRIMARY KEY (id),
    UNIQUE (cart_id, product_id)
);

CREATE TABLE public.order_item
(
    id SERIAL NOT NULL,
    order_id integer NOT NULL,
    product_id integer NOT NULL,
    quantity integer NOT NULL,
    PRIMARY KEY (id)
);

CREATE TYPE "payment" AS ENUM (
  'PAYSTACK',
  'STRIPE'
);

CREATE TABLE public.orders
(
    order_id SERIAL NOT NULL,
    user_id integer NOT NULL,
    status character varying(20) NOT NULL,
    date timestamp without time zone DEFAULT CURRENT_DATE NOT NULL,
    amount real,
    total integer,
    ref character varying(100),
    payment_method payment,
    PRIMARY KEY (order_id)
);

CREATE TABLE public.products
(
    product_id SERIAL NOT NULL,
    name character varying(100) NOT NULL UNIQUE,
    slug character varying(100) NOT NULL UNIQUE,
    price real NOT NULL,
    description text NOT NULL,
    image_url character varying,
    PRIMARY KEY (product_id)
);

CREATE TABLE public."resetTokens"
(
    id SERIAL NOT NULL,
    email character varying NOT NULL,
    token character varying NOT NULL,
    used boolean DEFAULT false NOT NULL,
    expiration timestamp without time zone,
    PRIMARY KEY (id)
);

CREATE TABLE public.reviews
(
    user_id integer NOT NULL,
    content text NOT NULL,
    rating integer NOT NULL,
    product_id integer NOT NULL,
    date date NOT NULL,
    id integer NOT NULL,
    PRIMARY KEY (user_id, product_id)
);

CREATE TABLE public.users
(
    user_id SERIAL NOT NULL,
    password character varying(200),
    email character varying(100) UNIQUE NOT NULL,
    fullname character varying(100) NOT NULL,
    username character varying(50) UNIQUE NOT NULL,
    google_id character varying(100) UNIQUE,
    roles character varying(10)[] DEFAULT '{customer}'::character varying[] NOT NULL,
    address character varying(200),
    city character varying(100),
    state character varying(100),
    country character varying(100),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id)
);

ALTER TABLE public.cart
    ADD FOREIGN KEY (user_id)
    REFERENCES public.users (user_id)
    ON DELETE SET NULL
    NOT VALID;


ALTER TABLE public.cart_item
    ADD FOREIGN KEY (cart_id)
    REFERENCES public.cart (id)
    ON DELETE CASCADE
    NOT VALID;


ALTER TABLE public.cart_item
    ADD FOREIGN KEY (product_id)
    REFERENCES public.products (product_id)
    ON DELETE SET NULL
    NOT VALID;


ALTER TABLE public.order_item
    ADD FOREIGN KEY (order_id)
    REFERENCES public.orders (order_id)
    ON DELETE CASCADE
    NOT VALID;


ALTER TABLE public.order_item
    ADD FOREIGN KEY (product_id)
    REFERENCES public.products (product_id)
    ON DELETE SET NULL
    NOT VALID;


ALTER TABLE public.orders
    ADD FOREIGN KEY (user_id)
    REFERENCES public.users (user_id)
    ON DELETE CASCADE
    NOT VALID;


ALTER TABLE public.reviews
    ADD FOREIGN KEY (product_id)
    REFERENCES public.products (product_id)
    ON DELETE SET NULL
    NOT VALID;


ALTER TABLE public.reviews
    ADD FOREIGN KEY (user_id)
    REFERENCES public.users (user_id)
    ON DELETE SET NULL
    NOT VALID;

CREATE UNIQUE INDEX users_unique_lower_email_idx
    ON public.users (lower(email));

CREATE UNIQUE INDEX users_unique_lower_username_idx
    ON public.users (lower(username));

    -- Seed data for products table 
INSERT INTO public.products (product_id, name, slug, price, description, image_url) VALUES (1, 'TÚI TOTE HANDMADE Mã NT11 Trắng', 'tote-1', 373000, 
'<p><strong>Chiếc túi tote NT11</strong> này có kích thước <strong>30x42cm</strong>, đủ rộng để đựng sách vở, laptop, ví tiền và các vật dụng cá nhân khác. Phần thân túi được ghép từ những mảnh vải hình lục giác, tạo nên một tổng thể hài hòa và bắt mắt. Các mảnh vải lục giác này được phối màu tinh tế, chủ yếu là tông màu trắng dễ dùng thêm họa tiết hoa màu hồng điểm xuyến tạo cảm giác nhẹ nhàng và nữ tính.</p>
</br>
<h2><strong>🍀HƯỚNG DẪN BẢO QUẢN VÀ SỬ DỤNG</strong></h2>
<ol>
    <li><strong>Bước 1: </strong>Bỏ hết các vụn bẩn sót trong túi trước khi giặt.</li>
    <li><strong>Bước 2: </strong>Sử dụng chất tẩy rửa nhẹ nhàng như sữa tắm, dầu gội đầu hoặc xà phòng rửa chén để làm sạch vết bẩn, mà không gây ảnh hưởng đến chất lượng vải.</li>
    <li><strong>Bước 3: </strong>Dùng bàn chải lông mềm (có thể sử dụng bàn chải đánh răng) chà nhẹ lên vị trí các vết bẩn.</li>
    <li><strong>Bước 4: </strong>Vắt ráo nước và tiến hành phơi khô sản phẩm trong điều kiện mát tự nhiên, tránh ánh nắng trực tiếp.</li>
</ol>', 
'/tote1.jpg');

INSERT INTO public.products (product_id, name, slug, price, description, image_url) VALUES (2, 'TÚI TOTE HANDMADE Mã NT12 Trắng', 'tote-2', 373000, 
'<p>Chiếc túi tote NT12 này có kích thước <strong>30x42cm</strong>, đủ rộng để đựng sách vở, laptop, ví tiền và các vật dụng cá nhân khác. Phần thân túi được ghép từ những mảnh vải hình lục giác, tạo nên một tổng thể hài hòa và bắt mắt. Các mảnh vải lục giác này được phối màu tinh tế, chủ yếu là tông màu trắng dễ dùng thêm họa tiết hoa thêu tinh tế làm nổi bật chiếc túi.</p>

<h3>🍀 HƯỚNG DẪN BẢO QUẢN VÀ SỬ DỤNG</h3>
<ul>
    <li><strong>Bước 1: </strong> Bỏ hết các vụn bẩn sót trong túi trước khi giặt.</li>
    <li><strong>Bước 2: </strong> Sử dụng chất tẩy rửa nhẹ nhàng như sữa tắm, dầu gội đầu hoặc xà phòng rửa chén để làm sạch vết bẩn, mà không gây ảnh hưởng đến chất lượng vải.</li>
    <li><strong>Bước 3: </strong> Dùng bàn chải lông mềm (có thể sử dụng bàn chải đánh răng) chà nhẹ lên vị trí các vết bẩn.</li>
    <li><strong>Bước 4: </strong> Vắt ráo nước và tiến hành phơi khô sản phẩm trong điều kiện mát tự nhiên, tránh ánh nắng trực tiếp.</li>
</ul>', 
'/tote2.jpg');

INSERT INTO public.products (product_id, name, slug, price, description, image_url) VALUES (3, 'TÚI TOTE HANDMADE Mã CB21 Xanh Jean', 'tote-3', 253000, 
'<p>Chiếc túi CB21 có kích thước <strong>33x37cm</strong> phong cách hiện đại, form chữ nhật đơn giản thích hợp cho các bạn có gu thời trang tối giản.</p>

<h3>🍀 HƯỚNG DẪN BẢO QUẢN VÀ SỬ DỤNG</h3>
<ul>
    <li><strong>Bước 1: </strong> Bỏ hết các vụn bẩn sót trong túi trước khi giặt.</li>
    <li><strong>Bước 2: </strong> Sử dụng chất tẩy rửa nhẹ nhàng như sữa tắm, dầu gội đầu hoặc xà phòng rửa chén để làm sạch vết bẩn, mà không gây ảnh hưởng đến chất lượng vải.</li>
    <li><strong>Bước 3: </strong> Dùng bàn chải lông mềm (có thể sử dụng bàn chải đánh răng) chà nhẹ lên vị trí các vết bẩn.</li>
    <li><strong>Bước 4: </strong> Vắt ráo nước và tiến hành phơi khô sản phẩm trong điều kiện mát tự nhiên, tránh ánh nắng trực tiếp.</li>
</ul>', 
'/tote3.jpg');
