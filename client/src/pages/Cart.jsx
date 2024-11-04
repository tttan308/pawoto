import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  TableRow,
} from "@windmill/react-ui";
import CartItem from "components/CartItem";
import { useCart } from "context/CartContext";
import { formatCurrency } from "helpers/formatCurrency";
import Layout from "layout/Layout";
import { ShoppingCart } from "react-feather";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartData, isLoading, cartSubtotal } = useCart();

  if (cartData?.items?.length === 0) {
    return (
      <Layout title="Cart" loading={isLoading}>
        <h1 className="my-10 text-center text-4xl font-semibold">Giỏ hàng</h1>
        <div className="h-full flex flex-col justify-center items-center">
          <ShoppingCart size={150} />
          <p className="mt-4">Giỏ hàng trống</p>
          <Button
            tag={Link}
            to="/products"
            className="mt-4 hover:bg-orange-600"
            style={{
              backgroundColor: "#FFA500", // Màu cam
              color: "#fff", // Màu chữ trắng
            }}
          >
            Tiếp tục mua hàng
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout loading={isLoading || cartData === undefined}>
      <h1 className="my-10 text-center text-4xl font-semibold">Giỏ hàng</h1>
      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>Sản phẩm</TableCell>
              <TableCell>Giá</TableCell>
              <TableCell>Số lượng</TableCell>
              <TableCell>Tổng tiền</TableCell>
              <TableCell>Xóa khỏi giỏ hàng</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cartData?.items?.map((item) => {
              return (
                <TableRow key={item.product_id}>
                  <CartItem item={item} />
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <TableFooter className="flex flex-col justify-end items-end">
          <div className="mb-2">Tổng: {formatCurrency(cartSubtotal)}</div>
          <Button
            tag={Link}
            to="/cart/checkout"
            state={{ fromCartPage: true }}
            style={{
              backgroundColor: "#FFA500", // Màu cam
              color: "#fff", // Màu chữ trắng
            }}
            className="hover:bg-orange-600"
          >
            Tiến hành thanh toán
          </Button>
        </TableFooter>
      </TableContainer>
    </Layout>
  );
};

export default Cart;
