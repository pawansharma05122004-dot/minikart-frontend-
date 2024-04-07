import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

export default function CartHelper() {
  const [open, setOpen] = useState(true)
  const navigate = useNavigate()
  const cancelButtonRef = useRef(null)

  const handleLogin = () => {
    navigate('/login')
  }

  const handleContinueShopping = () => {
    navigate('/')
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-y-auto" onClose={setOpen}>
        <div className="flex items-center justify-center min-h-screen px-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="bg-white rounded-lg w-full max-w-md p-6 mx-auto">
              <div className="flex items-center justify-center">
                <ShoppingCartIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                <h3 className="ml-2 text-lg font-semibold text-gray-800">Item Added to Cart</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Please add Item to your cart.
              </p>
              <div className="mt-4 space-x-4 flex justify-center">
                <button
                  className="inline-flex justify-center w-1/2 rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <button
                  className="inline-flex justify-center w-1/2 rounded-md border border-transparent px-4 py-2 bg-gray-200 text-base font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  onClick={handleContinueShopping}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
