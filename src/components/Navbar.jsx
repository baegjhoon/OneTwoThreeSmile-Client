import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

import Logo from './atoms/Logo';

function Navbar() {
  return (
    <React.Fragment>
        <Menu
            mode='horizontal'
            theme='light'
            className='app-header'
        >
            <Menu.Item key="/main" className='logo'>
                <Logo />
            </Menu.Item>
            <React.Fragment>
                <Menu.Item>
                    <Link to=''>상점</Link>
                    <Link to=''>갤러리</Link>
                </Menu.Item>
            </React.Fragment>
            <React.Fragment>
                <Menu.Item>
                    <Link to=''>로그인/회원가입</Link>
                </Menu.Item>
            </React.Fragment>
        </Menu>
    </React.Fragment>
  );
}

export default Navbar;