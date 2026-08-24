import React from 'react'
import useToggle from '../hooks/useToggle'

function Product({ product }) {

    const [isOpen, handleToggle] = useToggle()

    return (
        <div className="bg-white rounded-2xl p-5 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-white/20">

            <div className="h-48 flex items-center justify-center bg-indigo-100 rounded-xl mb-4 overflow-hidden">
                <img
                    className="w-full h-full object-contain p-4 hover:scale-110 transition-transform duration-300"
                    src={product.thumbnail}
                    alt={product.title}
                />
            </div>

            <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                {product.title}
            </h2>

            <p className="text-2xl font-extrabold text-purple-700 mb-4">
                ${product.price}
            </p>

            <button
                type="button"
                onClick={handleToggle}
                className="w-full py-2.5 px-4 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-purple-700 active:scale-95 transition-all duration-200"
            >
                {!isOpen ? "Show Description" : "Hide Description"}
            </button>

            {isOpen && (
                <p className="mt-4 pt-4 border-t border-indigo-100 text-sm leading-6 text-gray-600">
                    {product.description}
                </p>
            )}

        </div>
    )
}

export default Product