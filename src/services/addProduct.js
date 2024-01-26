// AddProduct.js
import axios from "axios";

const AddProduct = async (productData) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:4000/products/",
      productData
    );
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

export default AddProduct;
