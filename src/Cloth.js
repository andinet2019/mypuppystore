const Cloth = ({ id, img, title, detail, price, children }) => {
  const addTocart = () => {
    console.log(title);
  };

  const clickHandler = (e) => {
    console.log(e.target);
  };

  return (
    <article className="cloth">
  
      <img
        onMouseOver={clickHandler}
        className="product-image"
        src={img}
        alt=""
      />
      <h3 style={{ color: "white", marginLeft: "5", fontSize: "0.85rem" }}>
        {title}
      </h3>
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", letterSpacing: "5px" }}
      >
        {detail}
      </h4>
      <h5>${price}</h5>
      {children}
      <button
        type="button"
        onClick={() => addTocart(title)}
        className="cart-button"
      >
        Add to Cart
      </button>
    </article>
  );
};
export default Cloth;
