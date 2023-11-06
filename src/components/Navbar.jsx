import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <React.Fragment>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
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
              <Link to="">회원가입/로그인</Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
