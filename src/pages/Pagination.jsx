import React from 'react'
import "./Pagination.scss";

const Pagination = ({handleNextPage,handlePrevPage,currentPage,totalPages}) => {
    console.log(currentPage);
  return (
    <div className="pagination">
        <button className='button' onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{currentPage} of {totalPages}</span>
        <button className='button' onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
    </div>
  )
}

export default Pagination