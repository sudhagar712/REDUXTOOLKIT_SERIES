import React, { useState } from "react";
import { useGetProductsQuery } from "../features/apiSlice";
import { Link } from "react-router-dom";

const Products = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  const totalPages = Math.ceil(data.length / productsPerPage);
  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const currentProducts = data.slice(start, end);

  const handlePageClick = (pageNum) => setCurrentPage(pageNum);
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="p-10">
      <h3 className="text-xl font-bold mb-4">My Products</h3>

      {!data || data.length === 0 ? (
        <p>No Products</p>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
            {currentProducts.map((item) => (
              <Link
                to={`/product/${item.id}`}
                key={item.id}
                className="group relative border p-2 rounded shadow overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[400px] p-10 object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-center px-4">
                  <p className="text-lg font-semibold">{item.title}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </button>

            {pageNumbers.map((num) => (
              <button
                key={num}
                onClick={() => handlePageClick(num)}
                className={`px-3 py-1 rounded ${
                  num === currentPage
                    ? "bg-blue-600 text-white font-semibold"
                    : "bg-gray-200"
                }`}
              >
                {num}
              </button>
            ))}

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
