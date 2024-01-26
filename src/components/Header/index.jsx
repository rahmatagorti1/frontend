import React, { useState } from "react";
import "./index.scss";
import CustomModal from "../../views/components/Custom-Modal";
import AddProduct from "../../services/addProduct";

function Header() {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  async function handleAddProductSubmit(productData) {
    console.log("productData===", productData);
    try {
      await AddProduct(productData);
      closeModal();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }
  return (
    <div className="HeaderContainer">
      <div className="HeaderTitle">All Products</div>
      <button className="HeaderButton" onClick={openModal}>
        ADD NEW PRODUCT
      </button>
      <CustomModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        button="Add Product"
        onSubmit={handleAddProductSubmit}
      />
    </div>
  );
}

export default Header;
