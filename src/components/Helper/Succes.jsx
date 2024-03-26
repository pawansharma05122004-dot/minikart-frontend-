import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Success!</h2>
        <p className="text-lg mb-4">Your action was successful.</p>
        <FaArrowRight className="text-3xl text-green-500" />
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="App">
//       <button onClick={openModal} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Show Success Message</button>
//       <SuccessModal isOpen={isOpen} onClose={closeModal} />
//     </div>
//   );
// };

// export default App;
