import React from "react";
import styles from "./Pagination.module.css";
import { NavLink } from "react-router-dom";

const Pagination = ({currentPage, onPageChanged, totalUsersCount, pageSize, portionSize = 10}) => {
  const totalEntries = totalUsersCount;
  const totalPage = Math.ceil(totalUsersCount / pageSize);
  const nextPage = currentPage !== totalPage;
  const perPage = pageSize;
  const start = currentPage === 1 ? currentPage : currentPage * 10;
  const end = currentPage === 1 ? currentPage + perPage : currentPage * 10 + perPage > totalEntries ? totalEntries : currentPage * 10 + perPage;

  const PagesLink = () => {
    let pages = [];
    pages.push(
      <li
        key={"first"}
        onClick={(e) => onPageChanged(1)}
        className={currentPage === 1 ? "paginate_button page-item previous disabled" : "paginate_button page-item previous"}
      >
        <NavLink to="#" aria-controls="listingTable" data-dt-idx="0" className="page-link">
          &lt;&lt; First
        </NavLink>
      </li>
    );
    let previousLinks = currentPage - 4;
    for (let i = previousLinks; i <= currentPage; i++) {
      if (i < currentPage && i > 0) {
        pages.push(
          <li key={i} onClick={(e) => onPageChanged(i)} className={currentPage === i ? styles.selectedPage : "paginate_button page-item"}>
            <NavLink to="#" aria-controls="listingTable" data-dt-idx="1" className="page-link">
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
          <li key={i} onClick={(e) => onPageChanged(i)} className={currentPage === i ? styles.selectedPage : "paginate_button page-item"}>
            <NavLink to="#" aria-controls="listingTable" data-dt-idx="1" className="page-link">
              {i}
            </NavLink>
          </li>
        );
      }
    }
    pages.push(
      <li
        key={"last"}
        onClick={(e) => onPageChanged(totalPage)}
        className={nextPage ? "paginate_button page-item next" : "paginate_button page-item next disabled"}
      >
        <NavLink to="#" aria-controls="listingTable" data-dt-idx="2" className="page-link">
          Last &gt;&gt;
        </NavLink>
      </li>
    );
    return pages;
  };

  return (
    <>
      {totalEntries > 0 && (
        <div className="pagenation-foot d-flex align-items-center justify-content-between">
          <div className="countingpaging">
            <div className="dataTables_paginate paging_simple_numbers" id="listingTable_paginate">
              <ul className={styles.userList}>
                <PagesLink />
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Pagination;
