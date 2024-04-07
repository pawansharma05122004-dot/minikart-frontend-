import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postProduct } from "../Api/Apis";
import { useNavigate } from "react-router";
import { SuccessModal } from "../Helper/Succes";

const style = {
    inputBar: "w-full  px-2 py-2 mt-2 mb-4 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    label: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
}

const PostProduct = () => {
    const [imgUpload, setImgUpload] = useState('')
    const [productName, setProductName] = useState('')
    const [brand, setBrand] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [device, setDeviceType] = useState('')
    const [discount, setDiscount] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    // const openModal = () => {
    //     setIsOpen(true);
    // };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('product_img', imgUpload);
        data.append('product_name', productName);
        data.append('price', price);
        data.append('device_type', device); // Here, use select directly
        data.append('discount', discount);
        data.append('thumbnail', thumbnail);
        data.append('product_description', description);
        data.append('brand', brand);

        try {
            const postProducts = await postProduct(data)
            

            if (postProducts.status === 200) {
                toast("Product Added Success Fully");
                <SuccessModal isOpen={isOpen} onClose={closeModal} />
                navigate('/')
            }

        } catch (err) {
            throw err;
        }
    };

    return (
        <div className=" bg-gray-100  min-h-screen flex justify-center">
            <div className="max-w-lg w-full">
                <section className=" bg-white rounded-lg shadow-md dark:border-gray-700">
                    <div className="p-4">
                        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Create an Account</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-3">
                                <div>
                                    <label htmlFor="name" className={style.label}>Product Name</label>
                                    <input type="text" id="name" placeholder="Product Name" className={style.inputBar} name="product_name" onChange={(e) => setProductName(e.target.value)} required />
                                </div>
                                <div>
                                    <label htmlFor="file" className={style.label}>Product Image</label>
                                    <input type="file" id="product_img" placeholder="Product Image" className={style.inputBar} name="product_img" onChange={(e) => setImgUpload(e.target.files[0])} required />
                                </div>
                                <div>
                                    <label htmlFor="price" className={style.label}>Price</label>
                                    <input type="text" id="price" placeholder="Price" className={style.inputBar} name="price" onChange={(e) => setPrice(e.target.value)} required />
                                </div>
                                <div>
                                    <label htmlFor="brand" className={style.label}>Brand</label>
                                    <input type="text" id="brand" placeholder="Brand" className={style.inputBar} name="brand" onChange={(e) => setBrand(e.target.value)} required />
                                </div>
                                <div>
                                    <label htmlFor="device_type" className={style.label}>Device Type</label>
                                    <select onChange={(e) => setDeviceType(e.target.value)}>
                                        <option value='electric'>Electric</option>
                                        <option value='faishon'>Faishon</option>
                                        <option value='homeAccerceris'>Home Accessories</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="thumbnail" className={style.label}>Thumbnail</label>
                                    <input type="file" id="thumbnail" placeholder="Thumbnail URL" className={style.inputBar} name="thumbnail" onChange={(e) => setThumbnail(e.target.files[0])} required />
                                </div>
                                <div>
                                    <label htmlFor="discount" className={style.label}>Discount</label>
                                    <input type="number" id="discount" placeholder="Discount" className={style.inputBar} name="discount" onChange={(e) => setDiscount(e.target.value)} required />
                                </div>
                                <div>
                                    <label htmlFor="description" className={style.label}>Description</label>
                                    <textarea id="description" placeholder="Description" className={style.inputBar} name="description" onChange={(e) => setDescription(e.target.value)} required />
                                </div>
                            </div>
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">Upload Item</button>
                        </form>
                    </div>
                </section>
                <ToastContainer />
            </div>
        </div>
    );
};

export default PostProduct;
