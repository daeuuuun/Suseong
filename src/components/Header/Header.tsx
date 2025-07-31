import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/img/suseonglogo.png';
import hambergur from '../../assets/img/hamburger.png';

function Header() {
  return (
    <>
        <header>
            <div className={styles.logo}>
                <h1>수성대학교</h1>
                <img src={logo} alt='수성대학교' />
            </div>
            <nav>
                <ul className={styles.manu_bar}>
                    <li>사이버강의실</li>
                    <li>원격지원</li>
                    <li>입시안내</li>
                    <li>통상정보시스템</li>
                    <li>메일</li>
                    <li>로그인</li>
                    <li>
                        <img src={hambergur} alt='메뉴' />
                    </li>
                </ul>
            </nav>
        </header>
    </>
  );
}

export default Header;
