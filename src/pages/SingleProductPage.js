import React, { useState } from "react";
import { data } from "../tools/data";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";
import { useCartContext } from "../contexts/cart_context";

const SingleProduct = () => {
  const [datas, setDatas] = useState(data);
  const [amount, setAmount] = useState(1);
  const { AddToCart } = useCartContext();
  const { id } = useParams();
  const product = datas.find((item) => item.id === parseInt(id));

  if (!product) {
    <Loading />;
  }
  return (
    <section className="single-product">
      <Link to="/products">
        <button className="btn">Back to Products</button>
      </Link>
      <div className="single-product-container">
        <article className="single-product-image">
          <img className="imagee" src={product.image.url} alt={product.title} />
        </article>
        <article>
          <h1>{product.title}</h1>
          <h2>${product.price}</h2>
          <p>{product.description}</p>
          <Link
            to="/cart"
            className="btn"
            onClick={() => AddToCart(id, amount, product)}
          >
            add to cart
          </Link>
        </article>
      </div>
    </section>
  );
};

export default SingleProduct;
