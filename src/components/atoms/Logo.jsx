import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to='/main'>
        {/* 추후 이미지가 들어감 */}
        <p>하나 둘 셋, 스마일</p>
    </Link>
  );
}

export default Logo