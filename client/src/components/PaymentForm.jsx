import { Button, HelperText } from "@windmill/react-ui";
import { useCart } from "context/CartContext";
import { formatCurrency } from "helpers/formatCurrency";
import { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import OrderSummary from "./OrderSummary";

const PaymentForm = ({ previousStep, addressData }) => {
  const { cartSubtotal, cartData, setCartData } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate successful payment
    setTimeout(() => {
      setCartData({ ...cartData, items: [] });
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 1000); // Short delay to mimic processing
  };

  return (
    <div className="w-full md:w-1/2">
      <h1 className="text-3xl font-semibold text-center mb-2">Thanh Toán</h1>
      <OrderSummary />
      <h1 className="font-medium text-2xl">Phương Thức Vận Chuyển</h1>
      <select className="w-full border py-2 mt-2" disabled>
        <option value="standard">Vận Chuyển Tiêu Chuẩn</option>
        <option value="express">Vận Chuyển Nhanh</option>
      </select>
      {paymentSuccess && (
        <HelperText valid={true} className="mt-4 text-center">
          Thanh toán thành công! Cảm ơn bạn đã mua hàng.
        </HelperText>
      )}
      <div className="flex justify-between py-4">
        <Button onClick={previousStep} layout="outline" size="small">
          Quay Lại
        </Button>
        <Button
          disabled={isProcessing}
          onClick={handleSubmit}
          size="small"
          style={{
            backgroundColor: "#FFA500", // Màu cam
            color: "#fff", // Màu chữ trắng
          }}
          className="hover:bg-orange-600"
        >
          {isProcessing ? (
            <PulseLoader size={10} color={"#ffffff"} />
          ) : (
            `Thanh Toán Khi Nhận Hàng ${formatCurrency(cartSubtotal)}`
          )}
        </Button>
      </div>
    </div>
  );
};

export default PaymentForm;
