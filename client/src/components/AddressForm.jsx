import { Button, HelperText, Input, Label } from "@windmill/react-ui";
import { useUser } from "context/UserContext";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const PaymentForm = ({ next }) => {
  const { userData } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: userData?.fullname,
      email: userData?.email,
      username: userData?.username,
      address: userData?.address,
      country: userData?.country,
      city: userData?.city,
      state: userData?.state,
    },
  });

  return (
    <div className="w-full">
      <h1 className="text-3xl text-center mb-4 font-semibold">Địa chỉ</h1>
      <form
        className="border p-4 border-black-4 w-full md:w-1/2 mx-auto"
        onSubmit={handleSubmit((data) => next(data))}
      >
        <Label className="block text-grey-darker text-sm font-bold mb-4">
          <span>Họ và tên</span>
          <Input
            disabled
            type="text"
            className="shadow appearance-none rounded w-full text-grey-darker mt-2 px-2 py-2 border focus:outline-none"
            name="fullname"
            {...register("fullname", { required: "Bắt buộc" })}
          />
          {errors.fullname && <HelperText valid={false}>{errors.fullname.message}</HelperText>}
        </Label>
        <Label className="block text-grey-darker text-sm font-bold mb-4">
          <span>Email</span>
          <Input
            disabled
            className="shadow appearance-none rounded w-full text-grey-darker mt-2 px-2 py-2 border focus:outline-none"
            type="text"
            name="email"
            {...register("email", { required: "Bắt buộc" })}
          />
          {errors.email && <HelperText valid={false}>{errors.email.message}</HelperText>}
        </Label>
        <Label className="block text-grey-darker text-sm font-bold mb-4">
          <span>Địa chỉ</span>
          <Input
            className="shadow appearance-none rounded w-full text-grey-darker mt-2 px-2 py-2 border focus:outline-none"
            type="text"
            name="address"
            {...register("address", { required: "Bắt buộc" })}
          />
          {errors.address && <HelperText valid={false}>{errors.address.message}</HelperText>}
        </Label>
        {/* <Label className="block text-grey-darker text-sm font-bold mb-4">
          <span>Country</span>
          <Input
            className="shadow appearance-none rounded w-full text-grey-darker mt-2 px-2 py-2 border focus:outline-none"
            type="text"
            name="country"
            {...register("country", { required: "Required" })}
          />
          {errors.country && <HelperText valid={false}>{errors.country.message}</HelperText>}
        </Label> */}
        <Label className="block text-grey-darker text-sm font-bold mb-4">
          <span>Quận/Huyện</span>
          <Input
            className="shadow appearance-none rounded w-full text-grey-darker mt-2 px-2 py-2 border focus:outline-none"
            type="text"
            name="state"
            {...register("state", { required: "Bắt buộc" })}
          />
          {errors.state && <HelperText valid={false}>{errors.state.message}</HelperText>}
        </Label>
        <Label className="block text-grey-darker text-sm font-bold mb-4">
          <span>Thành phố</span>
          <Input
            className="shadow appearance-none rounded w-full text-grey-darker mt-2 px-2 py-2 border focus:outline-none"
            type="text"
            name="city"
            {...register("city", { required: "Bắt buộc" })}
          />
          {errors.city && <HelperText valid={false}>{errors.city.message}</HelperText>}
        </Label>
        <div className="flex justify-between">
          <Button tag={Link} to="/cart" layout="outline" size="small">
            Quay lại
          </Button>
          <Button
            type="submit"
            size="small"
            style={{
              backgroundColor: "#FFA500", // Màu cam
              color: "#fff", // Màu chữ trắng
            }}
            className="hover:bg-orange-700"
          >
            Tiếp tục
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
