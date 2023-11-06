import React from "react";
import { Link } from "react-router-dom";

import Search from "./atoms/button/Search";

function Navbar() {
  return (
    <React.Fragment>
      <div
        className="navbar bg-base-100"
        style={{ borderBottom: "solid 1px rgb(234,234,234)" }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to="" className="btn btn-ghost normal-case text-xl">
            하나 둘 셋, 스마일
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="">쇼핑</Link>
            </li>
            <div className="items-center" style={{ margin: "auto 0" }}>
              <div className="divider divider-horizontal px-1 h-6"></div>
            </div>
            <li>
              <Link to="">갤러리</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              {/* 검색 버튼 */}
              <Search />
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
