import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Spinner } from "@material-tailwind/react";

function ProductById() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch the product details by ID
                const productResponse = await axios.post(`${process.env.REACT_APP_API_URL}/products/getProductById`, { productById: productId });
                setProduct(productResponse.data.result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [productId]);

    return (
        <div className="container mx-auto mt-8 px-4">
            {product ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white shadow-md rounded-md">
                        <img src={product.product_img} alt='product' className='w-full h-auto object-cover rounded-t-md' />

                    </div>
                    <div className="p-6 flex flex-col justify-center  bg-white shadow-md rounded-md">
                        <h2 className="text-2xl font-semibold mb-2">{product.product_name}</h2>
                        <p className="text-lg text-gray-600  font-semibold mb-4">Price: ${product.price}</p>
                        <p className="text-lg text-gray-600 font-semibold mb-4">Discount: {product.discount}</p>
                        <p className="text-lg text-gray-600 font-semibold mb-4">Brand: {product.brand}</p>
                        <p className="text-lg text-gray-600 font-semibold font-semibold mb-4">Warranty: 2 years</p>
                        <p className="text-lg text-gray-600 font-semibold mb-4">Description: {product.product_description}</p>
                        <div className='flex flex-row justify-items-center items-center'>
                            <Link to={`/orderAddress/${product._id}`}>
                                <button className='block w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-700'>
                                    Buy Now
                                </button>
                            </Link>
                            <Link to={`/orderAddress/${product._id}`}>
                                <button className='block w-full py-2 px-4 bg-blue-700 text-white rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-700'>
                                    Add Cart
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">Thumbmail</h2>
                        <p className="text-lg text-gray-600">No reviews yet</p>
                    </div>
                    <div className="bg-white shadow-md rounded-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
                        <p className="text-lg text-gray-600">No reviews yet</p>
                    </div>
                </div>

            ) : (
                <div className="flex justify-center items-center h-screen">
              <Spinner className="h-16 w-16 text-gray-900/50" />
            </div>
            )}
        </div>
    );
}

export default ProductById;
