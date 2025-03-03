import React from "react";

function Pagination({ nPages, currentPage, setCurrentPage }) {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={goToPrevPage}>
            Previous
          </button>
        </li>

        {pageNumbers.map((pgNumber) => (
          <li key={pgNumber} className={`page-item ${currentPage === pgNumber ? "active" : ""}`}>
            <button onClick={() => setCurrentPage(pgNumber)} className="page-link">
              {pgNumber}
            </button>
          </li>
        ))}

        <li className={`page-item ${currentPage === nPages ? "disabled" : ""}`}>
          <button className="page-link" onClick={goToNextPage}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
