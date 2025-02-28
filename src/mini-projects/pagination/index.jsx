import "./Pagination.css"

function Pagination({ currentPage, totalPages = 10, onPageChange }) {
  function generateNoOfPages(){
    const pages = []
    for (let i = 0; i <= totalPages; i++) {
        pages.push(i)
    }

    return pages
  }


  // const onPageChange=(page)=>{

  //   console.log(page)

  // }

    return (
        <div className="pagination">

            <button className="pagination-btn">Prev</button>
            {generateNoOfPages()?.map(pageNo => <><button key={pageNo} className="pagination-btn" onClick={()=>onPageChange(pageNo)}>{pageNo}</button></>)}
            <button className="pagination-btn">Next</button>
        </div>
    )
}

export default Pagination