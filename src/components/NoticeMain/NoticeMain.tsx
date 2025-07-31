import React from 'react';
import styles from './NoticeMain.module.css';
import allbtn from '../../assets/img/allbtn.png';
import allbtn2 from '../../assets/img/allbtn2.png';
import boardcategory from '../../assets/img/boardcategory.png';
import now1 from '../../assets/img/now1.png';
import now2 from '../../assets/img/now2.png';
import now3 from '../../assets/img/now3.png';
import now4 from '../../assets/img/now4.png';


function NoticeMain() {
  return (
    <>
        <div className={styles.notice_container}>
            <div className={styles.notice}>
                <div className={styles.notice_text}>
                    <p>한눈에 보는<br /><span>SSU 공지사항</span></p>
                    <ul className={styles.text_list}>
                        <li>전체</li>
                        <li>대학</li>
                        <li>학과</li>
                        <li>입시</li>
                        <li>부속기관</li>
                        <li>부설기관</li>
                    </ul>
                    <img src={allbtn} alt='전체보기' />
                </div>
                <div className={styles.notice_board}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <img src={boardcategory} alt='장학' />
                                </td>
                                <td>2025 시설보호 여성청소년 자립지원사업 「JUMP ON 멘토링」여성 대학생 멘토 모...</td>
                                <td>2025-05-20</td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={boardcategory} alt='장학' />
                                </td>
                                <td>2025 시설보호 여성청소년 자립지원사업 「JUMP ON 멘토링」여성 대학생 멘토 모...</td>
                                <td>2025-05-20</td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={boardcategory} alt='장학' />
                                </td>
                                <td>2025 시설보호 여성청소년 자립지원사업 「JUMP ON 멘토링」여성 대학생 멘토 모...</td>
                                <td>2025-05-20</td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={boardcategory} alt='장학' />
                                </td>
                                <td>2025 시설보호 여성청소년 자립지원사업 「JUMP ON 멘토링」여성 대학생 멘토 모...</td>
                                <td>2025-05-20</td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={boardcategory} alt='장학' />
                                </td>
                                <td>2025 시설보호 여성청소년 자립지원사업 「JUMP ON 멘토링」여성 대학생 멘토 모...</td>
                                <td>2025-05-20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles.now_container}>
                <div className={styles.now_content}>
                    <p className={styles.main_text}>
                        지금<br />
                        <span>수성대</span>는?
                    </p>
                    <img src={allbtn2} alt='전체보기' />
                </div>
                <div className={styles.now_content}>
                    <img src={now1} alt='사진1' />
                    <p className={styles.title}>피비에스(PBS) 코리아, 수성대에 반영구 화...</p>
                    <p className={styles.date}>2025-03-24</p>
                </div>
                <div className={styles.now_content}>
                    <img src={now2} alt='사진2' />
                    <p className={styles.title}>피비에스(PBS) 코리아, 수성대에 반영구 화...</p>
                    <p className={styles.date}>2025-03-24</p>
                </div>
                <div className={styles.now_content}>
                    <img src={now3} alt='사진3' />
                    <p className={styles.title}>피비에스(PBS) 코리아, 수성대에 반영구 화...</p>
                    <p className={styles.date}>2025-03-24</p>
                </div>
                <div className={styles.now_content}>
                    <img src={now4} alt='사진4' />
                    <p className={styles.title}>피비에스(PBS) 코리아, 수성대에 반영구 화...</p>
                    <p className={styles.date}>2025-03-24</p>
                </div>
            </div>
            <div className={styles.now_department}>
                <table>
                    <thead>
                        <tr>
                            <th>SSU <span>학과</span></th>
                            <th>신산업</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>인공지능</th>
                            <td>
                                <ul>
                                    <li>AI빅데이터과</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th>메타버스</th>
                            <td>
                                <ul>
                                    <li>메타버스크리에이터과</li>
                                    <li>웹툰웹소설과</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th>드론</th>
                            <td>
                                <ul>
                                    <li>드론기계과</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
  );
}

export default NoticeMain;
