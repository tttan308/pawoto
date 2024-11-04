import { Badge, Card, CardBody } from "@windmill/react-ui";
import { format, parseISO } from "date-fns";
import { formatCurrency } from "helpers/formatCurrency";
import Layout from "layout/Layout";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import orderService from "services/order.service";

const OrderDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [items, setItems] = useState(null);

  useEffect(() => {
    orderService.getOrder(id).then((res) => setItems(res.data));
  }, [id]);

  return (
    <Layout>
      <div className="my-8 px-4 md:px-10 lg:px-20">
        <h1 className="font-bold text-3xl text-center mb-6">Chi Tiết Đơn Hàng</h1>
        <div className="bg-gray-100 rounded-lg p-4 shadow-md mb-8">
          <p className="text-lg font-semibold">Mã Đơn Hàng: #{state.order.order_id}</p>
          <p className="text-lg">Số lượng: {state.order.total || "Không có thông tin"} sản phẩm</p>
          <p className="text-lg">
            Trạng thái:{" "}
            <Badge type="success" className="text-white bg-green-500 px-2 py-1 rounded">
              {state.order.status === "complete" ? "Hoàn tất" : "Đang xử lý"}
            </Badge>
          </p>
          <p className="text-lg font-semibold">Tổng Tiền: {formatCurrency(state.order.amount)}</p>
          <p className="text-lg">
            Ngày đặt hàng: {format(parseISO(state.order.date), "d MMM, yyyy")}
          </p>
        </div>

        <h2 className="font-bold text-2xl mb-4">Danh Sách Sản Phẩm</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items?.map((item) => (
            <Card key={item.product_id} className="flex flex-col items-center p-4 shadow-md">
              <img
                className="w-full h-48 object-cover rounded-md mb-4"
                loading="lazy"
                decoding="async"
                src={item.image_url}
                alt={item.name}
              />
              <CardBody className="text-center">
                <h1 className="font-semibold text-lg text-gray-700">{item.name}</h1>
                <p className="text-lg font-semibold text-orange-500 my-2">
                  {formatCurrency(item.price)}
                </p>
                <p className="text-gray-600">Số lượng: {item.quantity}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default OrderDetails;
