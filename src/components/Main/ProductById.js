import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

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

                // Fetch similar products based on product type
                if (productResponse.data.result.product_type) {
                    const similarResponse = await axios.post(`${process.env.REACT_APP_API_URL}/products/getSimilarProducts`, { productType: productResponse.data.result.product_type });
                    setSimilarProducts(similarResponse.data.result);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [productId]);

    return (
        <div className="flex flex-col items-center py-8">
            {/* Render product details */}
            {product ? (
                <>
                    <div className="max-w-lg p-6 bg-white shadow-md rounded-md mb-8">
                        <img src={product.product_img} alt='product' className='h-72 w-72 mx-auto mb-4'/>
                        <h2 className="text-2xl font-semibold mb-2">{product.product_name}</h2>
                        <p className="text-lg text-gray-600 mb-4">Price: ${product.price}</p>
                        <Link to={`/orderAddress/${product._id}`}>
                            <button className='block w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-700'>
                                Buy Now
                            </button>
                        </Link>
                    </div>

                    {/* Render customer reviews */}
                    <div className="max-w-lg p-6 bg-white shadow-md rounded-md mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
                        {/* Add your review section here */}
                        <p className="text-lg text-gray-600">No reviews yet</p>
                    </div>

                    {/* Render similar products */}
                    {/* {similarProducts.length > 0 && (
                        <div className="max-w-lg p-6 bg-white shadow-md rounded-md">
                            <h2 className="text-2xl font-semibold mb-4">Similar Products</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {similarProducts.map(similarProduct => (
                                    <div key={similarProduct._id} className="flex flex-col bg-gray-100 p-4 rounded-md shadow-md">
                                        <img src={similarProduct.product_img} alt={similarProduct.product_name} className="h-40 w-full object-contain mb-2" />
                                        <p className="text-lg font-semibold">{similarProduct.product_name}</p>
                                        <p className="text-lg text-gray-600">Price: ${similarProduct.price}</p>
                                        <Link to={`/productbyid/${similarProduct._id}`} className="mt-auto">
                                            <button className='block w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700'>
                                                View Details
                                            </button>
                                        // </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )} */}
                </>
            ) : (
                <p className="text-center">Loading...</p>
            )}
        </div>
    );
}

export default ProductById;
