import React from 'react'
import useFetch from '../hooks/useFetch'
import Product from './Product'
import useForm from '../hooks/useForm'

function ProductList() {

    const { data, isError, isLoading } = useFetch("https://dummyjson.com/products")

    const initialvalue = {
        search: ''
    }

    const { values, handleChange } = useForm(initialvalue)

    if (isLoading) return (
        <div className="min-h-screen bg-indigo-900 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-white">Loading...</h2>
        </div>
    )

    if (isError) return (
        <div className="min-h-screen bg-indigo-950 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-red-400">Something went wrong!</h2>
        </div>
    )

    const filteredProducts = data.products.filter(product =>
        product.title.toLowerCase().includes(values.search.toLowerCase())
    )

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 px-5 py-10">

            <div className="max-w-7xl mx-auto">

                <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-2">
                    Product Store
                </h1>

                <p className="text-indigo-100 text-center mb-8">
                    Explore our collection of products
                </p>

                <div className="flex justify-center mb-10">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search by product name..."
                        value={values.search}
                        onChange={handleChange}
                        className="w-full max-w-md px-5 py-3 bg-white/95 border border-white/30 rounded-xl shadow-lg outline-none text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>

            </div>

        </div>
    )
}

export default ProductList