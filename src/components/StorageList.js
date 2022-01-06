import React, { useState, useEffect, useRef } from "react";
import { GrFormAdd } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  addCategory,
  deleteProduct,
} from "../actions/productActions";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import {toast } from "react-toastify"
const StorageList = () => {
  const [showCategory, SetShowCategory] = useState(false);
  const [product, setProduct] = useState({
    title: "",
    category: "select",
  });
  const [categoryState, setCategoryState] = useState("");
  const categoryInput = useRef()

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const { products } = useSelector((state) => state.products);

  const changeHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (product.category === "select" || !product.title) {
      return toast.warn("Select Category or Type Product Name!")
    } else if (product.title.length > 30) {
      return alert("Product title can't be this long");
    } else {
      const id = Math.floor(Math.random() * 1000);
      dispatch(addProduct(id, product));
      setProduct({ title: "", category: categoryState ? categoryState : "select" });
      toast.success("Product added successfully!")
    }
  };
  const deleteHandler = (id) => {
    dispatch(deleteProduct(id));
    toast.success("Product removed successfully!")
  };

  const categoryHandler = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    dispatch(addCategory(id, categoryState));


    SetShowCategory(!showCategory);
    setProduct({...product, category: categoryState});
    toast.success("Category added successfully!")

    
  };
  return (
    <div className="w-full p-12 h-full">
      <div className="w-90 md:w-[700px] m-auto border-2 border-gray-100 p-3 shadow-sm rounded-sm">
        <p className="text-xl text-center mb-6">Add Product:</p>
        <form onSubmit={submitHandler}>
          <div className="items-center mb-5">
            <label
              htmlFor="productName"
              className="text-sm mr-4 text-gray-600 ml-1"
            >
              Name:
            </label>
            <input
              type="text"
              id="productName"
              className="w-full border-2 rounded-md text-sm outline-emerald-400 py-1 px-3 mt-3"
              placeholder="Apple"
              name="title"
              value={product.title}
              onChange={changeHandler}
            />
          </div>
          <div className="items-center">
            <label
              htmlFor="productCategory"
              className="text-sm mr-4 text-gray-600 ml-1"
            >
              Category:
            </label>
            <select
              name="category"
              id="productCategory"
              className="border-2 border-gray-100 outline-none py-1 px-2 rounded-md text-sm bg-white w-full mt-3"
              value={product.category}
              onChange={changeHandler}
            >
              <option value="select" disabled>
                Select
              </option>
              {/* <option value="electric">Electric</option>
                            <option value="wood">Wood</option>
                            <option value="metal">Metal</option> */}
              {categories &&
                categories.map((c) => (
                  <option key={c.id} value={c.category}>
                    {c.category}
                  </option>
                ))}
            </select>
            <p
              className="text-emerald-900 text-sm underline mt-6 cursor-pointer hover:no-underline ml-2"
              onClick={() => {SetShowCategory(!showCategory)
                            categoryInput.current.focus()}}
            >
              No Category? Add one!
            </p>
          </div>
          <button className="mt-6 py-2 px-4 bg-emerald-400 cursor-pointer rounded-md text-white text-sm w-full hover:shadow-xl transition duration-300 font-semibold">
            Add Product
          </button>
        </form>
      </div>

      <div
        className={`w-full border-2 border-gray-100 rounded-sm fixed bottom-0 right-0 left-0 transition duration-300 translate-y-full ${
          showCategory && "translate-y-0"
        } flex justify-center bg-white`}
      >
        <div className="w-full md:w-[700px]">
          <div className="w-full flex justify-between py-2 px-4">
          <label className="text-sm">New Category</label>
            <AiOutlineCloseCircle
              className="text-emerald-400 text-xl cursor-pointer"
              onClick={() => SetShowCategory(!showCategory)}
            />
          </div>

          <form
            onSubmit={categoryHandler}
            className="w-full flex flex-col space-y-6 p-6"
          >
            
            <input
              type="text"
              ref={categoryInput}
              placeholder="Example: Fruits"
              value={categoryState}
              onChange={(e) => setCategoryState(e.target.value)}
              className="flex-1 border-2 rounded-md text-sm outline-emerald-400 py-1 px-3 mr-6 w-full"
            />
            <button className="py-2 px-4 rounded-md text-white text-sm bg-emerald-400 font-semibold">
              Add category
            </button>
          </form>
        </div>
      </div>

      {/* // list of categorie */}
        <div className="w-90 md:w-[700px] m-auto rounded-sm mt-3 text-sm space-y-2">
        {categories.length === 0 && <p className="p-4">Storage is empty!</p>}
        
        {categories &&
          categories.map((c) => (
              <div className="p-2 bg-white rounded-md" key={c.id}>
              {products.filter((p) => p.category === c.category).length > 0 ? (
                <>
                  <p className="text-emerald-800 font-semibold text-md mb-2">
                    {c.category}: (
                    {products.filter((p) => p.category === c.category).length})
                  </p>

                  {products
                    .filter((p) => p.category === c.category)
                    .map((product) => (
                      <div
                        className="flex justify-between items-center text-emerald-900 text-sm bg-emerald-100 py-1 px-3 rounded-md my-2"
                        key={product.id}
                      >
                        <li className="m-2">{product.title}</li>
                        <FaTrash
                          className="cursor-pointer"
                          onClick={() => deleteHandler(product.id)}
                        />
                      </div>
                    ))}
                </>
              ) : (
                ""
              )}
            </div>
          ))}
          </div>
    </div>
  );
};

export default StorageList;
