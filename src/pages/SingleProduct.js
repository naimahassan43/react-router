import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { productId } = useParams();
  return (
    <section className="section product">
      <h2>single product id: {productId}</h2>
      <Link to='/products'>back to products list</Link>
    </section>
  );
};

export default SingleProduct;
