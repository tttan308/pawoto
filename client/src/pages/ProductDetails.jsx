import { Button } from "@windmill/react-ui";
import { useCart } from "context/CartContext";
import { formatCurrency } from "helpers/formatCurrency";
import Layout from "layout/Layout";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ReactStars from "react-rating-stars-component";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import productService from "services/product.service";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const VideoContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "24rem",
  width: "100%",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
});

const ProductDetails = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const addToCart = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await addItem(product, 1);
      toast.success("Added to cart");
    } catch (error) {
      console.log(error);
      toast.error("Error adding to cart");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const { data: product } = await productService.getProduct(slug);
        setProduct(product);
      } catch (error) {
        return navigate("/404", {
          replace: true,
        });
      } finally {
        setIsFetching(false);
      }
    }
    fetchData();
  }, [slug]);

  return (
    <Layout loading={isFetching} title={product?.name || "Product Details"}>
      <section className="body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full">
              <Carousel showThumbs={false} showStatus={false}>
                <div>
                  <img
                    decoding="async"
                    loading="lazy"
                    src={product?.image_url}
                    alt={product?.name}
                    className="w-full h-96 object-contain rounded"
                  />
                </div>
                <VideoContainer>
                  <video
                    controls
                    src="/tote1.mp4"
                    className="w-auto h-auto max-w-full max-h-full object-contain rounded"
                  >
                    <track kind="captions" srcLang="en" src="/captions_en.vtt" label="English" />
                  </video>
                </VideoContainer>
              </Carousel>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-3xl title-font font-medium mb-1">{product?.name}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value={product?.avg_rating ?? 5}
                    activeColor="#ffd700"
                  />
                  <span className="ml-3 text-sm text-gray-600">
                    {+product?.count > 0 ? `${+product.count} Ratings` : ""}
                  </span>
                </span>
              </div>
              <div
                className="leading-relaxed pb-6 border-b-2 border-gray-200"
                dangerouslySetInnerHTML={{ __html: product?.description }}
              />
              <div className="flex mt-4 justify-between items-center">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {formatCurrency(product?.price)}
                </span>
                <Button
                  className="border-0 focus:outline-none bg-indigo-500 hover:bg-indigo-600 text-white rounded"
                  onClick={addToCart}
                >
                  {isLoading ? <ClipLoader color="#FFFFFF" size={20} /> : "Add to Cart"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetails;
