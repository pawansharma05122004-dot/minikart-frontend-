import { Link, useNavigate, useParams } from 'react-router-dom';
function TotalPrice(){

    return(
        <>
        <h1 className='text-base font-bold '>PRICE DETAILS</h1>

<hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
<div>
    <p className='font-bold'> Price</p>
    <p className='font-bold'> Discount</p>
    <p className='font-bold'> Delivery Charges</p>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    <h1 className='font-bold'>Total Amount </h1>
</div>
<Link to='/OrderProduct/'>
    <button className='bg-blue-600 text-white rounded-md hover:bg-blue-700 w-48 h-16 mt-10 justify '>Order Item</button>
</Link>
<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </>
    )
}

export default TotalPrice