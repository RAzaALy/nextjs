import { useRouter } from "next/dist/client/router";

const ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return <div>Details about Product {productId}</div>;
};

export default ProductDetails;
