import styles from "./Pagination.module.css";
import { NavLink } from "react-router-dom";

const Pagination = ({ currentPage, onPageChanged, totalUsersCount, showUsersLimit }) => {
  const totalEntries = totalUsersCount;
  const totalPage = Math.ceil(totalUsersCount / showUsersLimit);
  const nextPage = currentPage !== totalPage;
  const perPage = 10;
  const start = currentPage === 1 ? currentPage : currentPage * 10;
  const end = currentPage === 1 ? currentPage + perPage : currentPage * 10 + perPage > totalEntries ? totalEntries : currentPage * 10 + perPage;

  const PagesLink = () => {
    const goToNextPage = () => {
      if (currentPage !== totalPage) onPageChanged(currentPage + 1);
    };

    const goToPrevPage = () => {
      if (currentPage !== 1) onPageChanged(currentPage - 1);
    };

    let pages = [];
    pages.push(
      <li
        key={"first"}
        onClick={() => onPageChanged(1)}
        className={currentPage === 1 ? "paginate_button page-item previous disabled" : "paginate_button page-item previous"}
      >
        <NavLink to="#" className="page-link">
          {"<<"}First
        </NavLink>
      </li>
    );
    pages.push(
      <li
        key={"prev"}
        onClick={() => goToPrevPage(totalPage)}
        className={nextPage ? "paginate_button page-item next" : "paginate_button page-item next disabled"}
      >
        <NavLink to="#" className="page-link">
          Prev
        </NavLink>
      </li>
    );
    let previousLinks = currentPage - 4;
    for (let i = previousLinks; i <= currentPage; i++) {
      if (i < currentPage && i > 0) {
        pages.push(
          <li key={i} onClick={() => onPageChanged(i)} className={currentPage === i ? styles.selectedPage : "paginate_button page-item"}>
            <NavLink to="#" className="page-link">
              {i}
            </NavLink>
          </li>
        );
      }
    }

    let nextLinks = currentPage < totalPage ? currentPage + 4 : currentPage;
    for (let i = currentPage; i <= nextLinks; i++) {
      if (i <= totalPage) {
        pages.push(
          <li key={i} onClick={() => onPageChanged(i)} className={currentPage === i ? styles.selectedPage : "paginate_button page-item"}>
            <NavLink to="#" className="page-link">
              {i}
            </NavLink>
          </li>
        );
      }
    }
    pages.push(
      <li
        key={"next"}
        onClick={() => goToNextPage(totalPage)}
        className={nextPage ? "paginate_button page-item next" : "paginate_button page-item next disabled"}
      >
        <NavLink to="#" className="page-link">
          Next
        </NavLink>
      </li>
    );
    pages.push(
      <li
        key={"last"}
        onClick={() => onPageChanged(totalPage)}
        className={nextPage ? "paginate_button page-item next" : "paginate_button page-item next disabled"}
      >
        <NavLink to="#" className="page-link">
          Last{">>"}
        </NavLink>
      </li>
    );
    return pages;
  };

  return (
    <>
      {totalEntries > 0 && (
        <nav>
          <ul className={styles.pagination}>
            <PagesLink />
          </ul>
        </nav>
      )}
    </>
  );
};

export default Pagination;
