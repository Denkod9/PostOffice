import React, { useEffect } from "react";
import '../../../assets/css/pagination.css'

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Pagination = ({
  editionsPerPage,
  totalEditions,
  paginate,
  setCurrentPage,
  currentPage,
  getCurrentEditions
}) => {
  // Количество страниц
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEditions / editionsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageItem = (number) => currentPage === number ? 'active page-item' : 'page-item'

  return (
    // <div className="text-center">
    <div>
      <nav className="mt-5 pagination_center ">
        <ul className="pagination">
          {pageNumbers.map((number) => (
             
            <li className={pageItem(number)} key={number}>
              <button
                className="page-link"
                href="!#"
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
