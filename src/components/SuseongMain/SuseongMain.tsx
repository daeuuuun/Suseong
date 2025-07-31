import React from 'react';
import styles from './SuseongMain.module.css';
import leftbtn from '../../assets/img/leftbtn.png';
import stopbtn from '../../assets/img/stopbtn.png';
import rightbtn from '../../assets/img/rightbtn.png';
import mapicon from '../../assets/img/mapicon.png';

function SuseongMain() {
  return (
    <>
        <div className={styles.main_container}>
            <div className={styles.content_container}>
                <div className={styles.main_text_box}>
                    <p className={styles.main_text}>
                        끊임없이 배우고 (LEARN)<br />
                        미래를 이끌고 (LEAD)<br />
                        더불어 함께하는 (LIVE)
                    </p>
                    <p className={styles.sub_text}>
                        수성대에서 시작됩니다.
                    </p>
                </div>
                <div className={styles.progress_bar}>
                    <p>01&nbsp;&nbsp;<span>/&nbsp;&nbsp;05</span></p>
                    <img src={leftbtn} alt='이전' />
                    <img src={stopbtn} alt='정지' />
                    <img src={rightbtn} alt='다음' />
                </div>
                <div className={styles.bottom_content_container}>
                    <img src={mapicon} alt='교육환경' />
                    <div className={styles.s_link}>
                        <table>
                            <thead>
                                <th colSpan={3}>SSU <span>주요링크</span></th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={styles.table_number}>01</td>
                                    <td className={styles.table_name}>입학·편입</td>
                                    <td>
                                        <ul className={styles.table_manu}>
                                            <li>캠퍼스안내</li>
                                            <li>학사 일정</li>
                                            <li>입학안내</li>
                                            <li>학사정보</li>
                                            <li>학과 안내</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.table_number}>02</td>
                                    <td className={styles.table_name}>재학생</td>
                                    <td>
                                        <ul className={styles.table_manu}>
                                            <li>증명서발급</li>
                                            <li>장학 및 학자금대출</li>
                                            <li>사이버강의실</li>
                                            <li>HC경력개발 시스템</li>
                                            <li>성인학습자 이력관리시스템</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles.table_number}>03</td>
                                    <td className={styles.table_name}>교직원</td>
                                    <td>
                                        <ul className={styles.table_manu}>
                                            <li>메일</li>
                                            <li>전자결제</li>
                                            <li>사이버강의실</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default SuseongMain;
