import React, { useEffect, useState } from "react";
import "./index.scss";
import CustomModal from "../components/Custom-Modal";
import ProductCard from "../product-card";
import swal from "sweetalert";
import axios from "axios";
import FetchAllProducts from "../../services/getAllProducts";
import EditProduct from "../../services/editProduct";

function ProductsList() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [ProductList, setProductList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductId, setSelectedProductId] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedProductId(null);
  }

  function deleteOne(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      console.log("will", willDelete);
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        }).then(async (res) => {
          await axios.delete("http://127.0.0.1:4000/products/" + id);
          FetchAllProducts({ setProductList });
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  }

  const update = (e, id) => {
    e.preventDefault();
    setSelectedProductId(id);
    openModal();
  };
  async function handleEditProductSubmit(productData) {
    try {
      await EditProduct({ ...productData, id: selectedProductId });
      closeModal();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  useEffect(() => {
    FetchAllProducts({ setProductList });
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = ProductList.filter((product) => {
    const productName = product.ProductName
      ? product.ProductName.toLowerCase()
      : "";
    const category = product.Category ? product.Category.toLowerCase() : "";
    return (
      productName.includes(searchQuery.toLowerCase()) ||
      category.includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="ProductList">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="ListContainer">
        {filteredProducts.map((product, i) => (
          <div key={i}>
            <ProductCard
              product={product}
              editHandleClick={(e) => update(e, product._id)}
              deleteHandleClick={() => deleteOne(product._id)}
            />
            {selectedProductId === product._id && (
              <CustomModal
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                button="UPDATE"
                update={true}
                productData={product}
                onSubmit={handleEditProductSubmit}
                currentProductId={selectedProductId}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
