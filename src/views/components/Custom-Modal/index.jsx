import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./index.scss";
import { Fields } from "../../../data";
import { Field } from "../field/index";
import axios from "axios";

function CustomModal({
  button = "Add Product",
  modalIsOpen = () => {},
  closeModal = () => {},
  onSubmit = () => {},
  productData = {},
  defaultValue = {},
  update = false,
  currentProductId = "",
}) {
  const [formData, setFormData] = useState(productData);
  const [defaultProductData, setDefaultProductData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Field changed:", name, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData?._id) {
      delete formData?._id;
    }
    onSubmit(formData);
  };
  const getOneProduct = async () => {
    const result = await axios.get(
      `http://127.0.0.1:4000/products/${currentProductId}`
    );
    const res = result.data.data;
    console.log("getOne===", res);

    setDefaultProductData(res);
  };

  useEffect(() => {
    getOneProduct();
  }, []);

  console.log("defaultProductData===", defaultProductData);
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Add Product Modal"
      className="modalContainer"
      overlayClassName="modalOverlay"
    >
      <div className="modalBody">
        <form className="modalForm" onSubmit={handleSubmit}>
          <div className="formGrid">
            {Fields?.map((field, index) => (
              <Field
                defaultValue={
                  update ? defaultProductData[field?.id] : undefined
                }
                // value={value}
                key={index}
                label={field?.label}
                name={field?.id}
                onChange={handleChange}
              />
            ))}
          </div>
          <div className="imageUploadSection custom-image-upload">
            <label>Drop your image here, or browse</label>
            <input type="file" accept=".jpg, .png" className="upload-button" />
          </div>
          <div className="modalActions">
            <button className="cancel-button" onClick={closeModal}>
              Cancel
            </button>
            <button className="submit-button" type="submit" onClick={onSubmit}>
              {button}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default CustomModal;
