// services/deleteProduct.js
import axios from "axios";
import swal from "sweetalert";
import FetchAllProducts from "./getAllProducts";

export const deleteProduct = async (id = "", setProductList) => {
  const willDelete = await swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this product!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  });

  if (willDelete) {
    await axios.delete(`http://127.0.0.1:4000/products/${id}`);
    swal("The product has been deleted!", { icon: "success" });
    FetchAllProducts({ setProductList });
  } else {
    swal("Your product is safe!");
  }
};
