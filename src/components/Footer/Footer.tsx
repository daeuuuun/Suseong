import React from 'react';
import styles from './Footer.module.css';
import f_logo1 from '../../assets/img/f_logo1.png';
import f_logo2 from '../../assets/img/f_logo2.png';
import f_logo3 from '../../assets/img/f_logo3.png';
import f_logo4 from '../../assets/img/f_logo4.png';
import f_logo5 from '../../assets/img/f_logo5.png';
import f_logo6 from '../../assets/img/f_logo6.png';
import f_suseong from '../../assets/img/f_suseong.png';

function Footer() {
  return (
    <>
      <footer>
        <div className={styles.white_container}>
            <span>&lt;</span>
            <img src={f_logo1} alt='푸른등대 한국장학재단' />
            <img src={f_logo2} alt='교육부' />
            <img src={f_logo3} alt='한국산업인력공단 대구지역본부' />
            <img src={f_logo4} alt='함께하는 병무청' />
            <img src={f_logo5} alt='한국전문대학교육협의회' />
            <img src={f_logo6} alt='교육부중앙교육연수원' />
            <span>&gt;</span>
        </div>
        <div className={styles.dark_detail}>
            <img src={f_suseong} alt='수성대학교' />
            <div className={styles.f_info_text}>
                <p>Tel:053&#41;749-7000</p>
                <p>Fax:053&#41;751-1823</p>
                <p>우&#41;42078 대구광역시 수성구 달구벌대로 528길15(만촌동)</p>
            </div>
            <div className={styles.f_survice}>
                <p>빠른 서비스</p>
                <div className={styles.f_sur_info}>
                    <span>대학정보공시</span>
                    <span>예/결산</span>
                    <span>등록금심의위원회회의록</span>
                    <span>구매/입찰공고</span>
                    <span>산악협력단</span>
                    <span>창업보육센터</span>
                    <span>도서관</span>
                </div>
            </div>
        </div>
        <div className={styles.f_sub}>
            <div className={styles.f_sub_menu}>
                <span>사이트맵</span>
                <span>개인정보처리방침</span>
                <span>개인정보목적이외이용/제공대장</span>
                <span>개인정보위탁</span>
                <span>영상정보처리기기 운영방침</span>
                <span>영리목적의 광고성 정보전송거부</span>
                <span>사전정보공개</span>
                <span>원격지원</span>
                <span>저작권정책</span>
            </div>
            <p>(c) 2025 SUSEONG UNIVERSITY. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
