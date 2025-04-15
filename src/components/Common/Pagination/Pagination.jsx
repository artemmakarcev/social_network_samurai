import styles from "./Pagination.module.css";

const Pagination = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
  const totalPages = Math.ceil(totalItemsCount / pageSize);

  const startPage = Math.max(1, Math.floor(currentPage - portionSize / 2 || 1));
  const endPage = Math.min(totalPages, startPage + portionSize - 1);

  const handlePageClick = (pageNumber) => {
    onPageChanged(pageNumber);
  };

  const handleFirstPageClick = () => {
    handlePageClick(1);
  };

  const handlePreviousPageClick = () => {
    handlePageClick(currentPage - 1);
  };

  const handleNextPageClick = () => {
    handlePageClick(currentPage + 1);
  };

  const handleLastPageClick = () => {
    handlePageClick(totalPages);
  };

  return (
    <nav className={styles.pagination}>
      <button className={styles.btn} onClick={handleFirstPageClick} disabled={currentPage === 1}>
        {"<<"} First
      </button>
      <button className={styles.btn} onClick={handlePreviousPageClick} disabled={currentPage === 1}>
        {"<"} Prev
      </button>

      {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
        <button
          className={[styles.btn, currentPage === startPage + index ? styles.active : ""].join(" ")}
          key={index}
          onClick={() => handlePageClick(startPage + index)}
        >
          {startPage + index}
        </button>
      ))}

      <button className={styles.btn} onClick={handleNextPageClick} disabled={currentPage === totalPages}>
        Next {">"}
      </button>
      <button className={styles.btn} onClick={handleLastPageClick} disabled={currentPage === totalPages}>
        Last {">>"}
      </button>
    </nav>
  );
};

export default Pagination;
