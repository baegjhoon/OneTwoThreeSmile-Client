import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <React.Fragment>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to="" className="btn btn-ghost normal-case text-xl">하나 둘 셋, 스마일</Link>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="">쇼핑</Link>
            </li>
            <li>
              <Link to="">갤러리</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li>
                {/* 검색 버튼 */}
                <button className="btn btn-ghost btn-circle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                </button>
            </li>
            <li>
              <Link to="">로그인/회원가입</Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
