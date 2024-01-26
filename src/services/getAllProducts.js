import axios from "axios";

async function FetchAllProducts({ setProductList }) {
  try {
    const res = await axios.get("http://127.0.0.1:4000/products/");
    setProductList(res.data.data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
export default FetchAllProducts;
