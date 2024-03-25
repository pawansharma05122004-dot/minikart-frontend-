import { Link, useNavigate, useParams } from 'react-router-dom';
function TotalPrice() {

    return (
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
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <p className='font-bold'> Total Saving Amount</p>
        </>
    )
}

export default TotalPrice