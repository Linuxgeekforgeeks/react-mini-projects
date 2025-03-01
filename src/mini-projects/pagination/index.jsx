import "./Pagination.css";

function Pagination({ currentPage, totalPages = 10, onPageChange }) {
  function generateNoOfPages() {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) { // ✅ Start from 1
      pages.push(i);
    }
    return pages;
  }

  return (
    <div className="pagination">
      <button 
        disabled={currentPage === 1} 
        onClick={() => onPageChange(currentPage - 1)} // ✅ Corrected
        className="pagination-btn"
      >
        Prev
      </button>

      {generateNoOfPages().map((pageNo) => (
        <button 
          key={pageNo} 
          className="pagination-btn" 
          onClick={() => onPageChange(pageNo)} // ✅ Corrected
          style={{ backgroundColor: pageNo === currentPage ? "blue" : "gray", color: "white" }}
        >
          {pageNo}
        </button>
      ))}

      <button 
        disabled={currentPage === totalPages} 
        onClick={() => onPageChange(currentPage + 1)} // ✅ Corrected
        className="pagination-btn"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
