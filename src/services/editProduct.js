import axios from "axios";

const EditProduct = async (productData) => {
  try {
    const response = await axios.put(
      `http://127.0.0.1:4000/products/`,
      productData
    );
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

export default EditProduct;
