import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/img/avatar.jpg";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  const loadPage = (page) => {
    props.onPageChanged(page);
  };
  const totalEntries = props.totalUsersCount;
  const totalPage = Math.ceil(props.totalUsersCount / props.pageSize);
  const currentPage = props.currentPage;
  const nextPage = currentPage !== totalPage;
  const perPage = props.pageSize;
  const start = currentPage === 1 ?currentPage :  currentPage * 10;
  const end = currentPage === 1 ? currentPage + perPage : currentPage * 10 + perPage > totalEntries ? totalEntries : currentPage * 10 + perPage;

  const PagesLink = () => {
    let pages = [];
    pages.push(
      <li
        key={"first"}
        onClick={(e) => loadPage(1)}
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
          <li key={i} onClick={(e) => loadPage(i)} className={currentPage === i ? styles.selectedPage : "paginate_button page-item"}>
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
          <li key={i} onClick={(e) => loadPage(i)} className={currentPage === i ? styles.selectedPage : "paginate_button page-item"}>
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
        onClick={(e) => loadPage(totalPage)}
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
    <div>
      {totalEntries > 0 && (
        <div className="pagenation-foot d-flex align-items-center justify-content-between">
          <div className="totlecountpage">
            {" "}
            <span id="displayed-record">
              Showing {start}-{end}
            </span>{" "}
            of {totalEntries} entries
          </div>
          <div className="countingpaging">
            <div className="dataTables_paginate paging_simple_numbers" id="listingTable_paginate">
              <ul className={styles.userList}>
                <PagesLink />
              </ul>
            </div>
          </div>
        </div>
      )}

      {props.users.map((user) => (
        <div className={styles.userWrapper} key={user.id} id={"user" + user.id}>
          <NavLink to={"/profile/" + user.id}>
            <img className={styles.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto} alt="user" />
          </NavLink>
          <div className={styles.userInfo}>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </div>
          <div className={styles.userAction}>
            {user.isFollow ? (
              <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
            ) : (
              <button onClick={() => props.follow(user.id)}>Follow</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
