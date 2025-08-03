import React from 'react'

const Pagination = ({ pageNumber, paginate, currentPage, firstPage, lastPage, info }) => {

    return (
        <div className="flex items-center pb-[60px]">
            <nav aria-label="Page navigation example">
                <ul className="flex items-center -space-x-px h-10 text-base">
                    <li >
                        <a onClick={() => {
                            if (currentPage > 1) {
                                paginate(currentPage - 2);
                            }
                        }} className={`flex items-center justify-center mr-[5px] px-4 h-10 ms-0 leading-tight border  border-gray-300 w-[50px] rounded-full   ${currentPage === 1 ? "opacity-[.1]" : "opacity-100 hover:bg-black hover:text-white"}`}>
                            <span className="sr-only">Previous</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                        </a>
                    </li>
                    {pageNumber.map((item, i) => (
                        <li key={i} >
                            <a onClick={() => paginate(i)} className={`flex  items-center justify-center px-4 h-10 leading-tight mx-[5px] rounded-full border border-gray-500 ${currentPage === i + 1 ? "bg-black text-white" : "bg-transparent"} `}>{item + 1}</a>
                        </li>
                    ))}
                    <li>
                        <a onClick={() => {
                            if (currentPage < pageNumber.length) {
                                paginate(currentPage + 0);
                            }
                        }} className={`flex items-center justify-center px-4 ml-[5px] h-10  leading-tight  border border-gray-300 rounded-full   ${currentPage === pageNumber.length ? "opacity-[.1]" : "opacity-100 hover:bg-black hover:text-white"}`}>
                            <span className="sr-only">Next</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
            <h4 className='pl-[330px]'>Products from {firstPage + 1} to {lastPage} of {info.length}</h4>
        </div>
    )
}

export default Pagination