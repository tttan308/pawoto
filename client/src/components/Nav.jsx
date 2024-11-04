import { Button, HelperText, Checkbox } from "@windmill/react-ui";
import { useCart } from "context/CartContext";
import { formatCurrency } from "helpers/formatCurrency";
import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import OrderService from "services/order.service";
import OrderSummary from "./OrderSummary";

const PaymentForm = ({ previousStep }) => {
  const { cartSubtotal, cartTotal, cartData, setCartData } = useCart();
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleCODPayment = async () => {
    setError(null);
    setIsProcessing(true);

    try {
      await OrderService.createOrder(cartSubtotal, cartTotal, null, "COD");
      setCartData({ ...cartData, items: [] });
      setIsProcessing(false);
      navigate("/cart/success", {
        state: {
          fromPaymentPage: true,
        },
      });
    } catch (error) {
      setIsProcessing(false);
      setError("Đã xảy ra lỗi khi đặt hàng. Vui lòng thử lại.");
    }
  };

  return (
    <div className="w-full md:w-1/2">
      <h1 className="text-3xl font-semibold text-center mb-2">Thanh toán</h1>
      <OrderSummary />
      
      <h1 className="font-medium text-2xl mt-4">Thanh toán khi nhận hàng</h1>
      <div className="flex items-center mt-2">
        <Checkbox checked={true} disabled />
        <span className="ml-2 text-gray-600">Thanh toán khi nhận hàng (COD)</span>
      </div>

      {error && (
        <HelperText valid={false} className="mt-2 text-red-600">
          {error}
        </HelperText>
      )}
      
      <div className="flex justify-between py-4">
        <Button onClick={previousStep} layout="outline" size="small">
          Quay lại
        </Button>
        <Button
          onClick={handleCODPayment}
          disabled={isProcessing}
          size="small"
          style={{ backgroundColor: "#FFA500", color: "#fff" }}
        >
          {isProcessing ? (
            <PulseLoader size={10} color={"#fff"} />
          ) : (
            `Xác nhận thanh toán ${formatCurrency(cartSubtotal)}`
          )}
        </Button>
      </div>
    </div>
  );
};

PaymentForm.propTypes = {
  previousStep: PropTypes.func.isRequired,
};

export default PaymentForm;
