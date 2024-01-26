import EditProduct from "../../../services/editProduct";

export async function editProductService(productData, closeModal) {
  try {
    await EditProduct(productData);
    closeModal();
  } catch (error) {
    console.error("Error editing product:", error);
  }
}
