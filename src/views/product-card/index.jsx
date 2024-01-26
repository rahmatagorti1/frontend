import React from "react";
import "./index.scss";
import battery from "../../assets/battery.jpg";

function ProductCard({
  product = {},
  editHandleClick = () => {},
  deleteHandleClick = () => {},
}) {
  return (
    <div className="CardContainer">
      <div className="product-header-flex">
        <img
          src={battery}
          alt="battery"
          style={{ width: "100px", height: "auto" }}
        />
        {/* <div className="product-header"> */}
        <div className="product-flex">
          <div className="productName">{product.ProductName}</div>
          <div className="productType">{product.Category}</div>
          <div className="productPrice">{product.Price}</div>
        </div>
      </div>
      <div className="descriptionHeader">Summary</div>
      <div className="descriptionBody">{product.Description}</div>

      <div className="cardFooter">
        <button className="editButton" onClick={editHandleClick}>
          Edit
        </button>
        <button className="deleteButton" onClick={deleteHandleClick}>
          Delete
        </button>
      </div>
      {/* <FontAwesomeIcon icon={faStar} className={styles.starIcon} /> */}
    </div>
  );
}

export default ProductCard;
