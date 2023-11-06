import React from "react";
import { Link } from "react-router-dom";

import Search from "./atoms/button/Search"

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
