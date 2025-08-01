import React from 'react';
import styles from './NoticeMain.module.css';
import boardcategory from '../../assets/img/boardcategory.png';
import now1 from '../../assets/img/now1.png';
import now2 from '../../assets/img/now2.png';
import now3 from '../../assets/img/now3.png';
import now4 from '../../assets/img/now4.png';
import sns1 from '../../assets/img/sns1.png';
import sns2 from '../../assets/img/sns2.png';
import sns3 from '../../assets/img/sns3.png';
import sns4 from '../../assets/img/sns4.png';
import sns5 from '../../assets/img/sns5.png';
import sns6 from '../../assets/img/sns6.png';
import sns7 from '../../assets/img/sns7.png';
import sns8 from '../../assets/img/sns8.png';
import instagram from '../../assets/img/instagram.png';
import youtube from '../../assets/img/youtube.png';
import facebook from '../../assets/img/facebook.png';
import blog from '../../assets/img/blog.png';


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
                    <button type='button' className={styles.allbtn}>
                        <span>전체보기 →</span>
                    </button>
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
                    <button type='button' className={styles.allbtn}>
                        <span>전체보기 →</span>
                    </button>
                </div>
                <div className={styles.now_content_container}>
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
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>웰케어산업</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>웰뷰티</th>
                            <td>
                                <ul>
                                    <li>피부건강관리과</li>
                                    <li>뷰티스타일리스트과</li>
                                    <li>LiFE융합학부 (웰스킨케어전공)</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th>웰스포츠</th>
                            <td>
                                <ul>
                                    <li>스포츠레저과</li>
                                    <li>치료재활과</li>
                                    <li>LiFE융합학부 (시니어골프전공)</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th>웰푸드</th>
                            <td>
                                <ul>
                                    <li>호텔조리과</li>
                                    <li>제과제빵커피과</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th>웰헬스</th>
                            <td>
                                <ul>
                                    <li>간호학과</li>
                                    <li>방사선과</li>
                                    <li>치기공과</li>
                                    <li>치위생과</li>
                                    <li>안경공학과</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th>웰시티</th>
                            <td>
                                <ul>
                                    <li>경찰행정과</li>
                                    <li>보건복지경영과</li>
                                    <li>사회복지과</li>
                                    <li>유아교육과</li>
                                    <li>미술심리보육과</li>
                                    <li>반려동물보건과</li>
                                    <li>LiFE융합학부 (사회복지상담전공)</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.sns}>
                <div className={styles.photo_boxs}>
                    <img src={sns1} alt='SNS 사진1' />
                    <img src={sns2} alt='SNS 사진2' />
                    <img src={sns3} alt='SNS 사진3' />
                    <img src={sns4} alt='SNS 사진4' />
                    <img src={sns3} alt='SNS 사진3' />
                    <img src={sns5} alt='SNS 사진5' />
                    <img src={sns6} alt='SNS 사진6' />
                    <img src={sns7} alt='SNS 사진7' />
                    <img src={sns8} alt='SNS 사진8' />
                    <img src={sns7} alt='SNS 사진7' />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>SSU <span>SNS</span> 소식</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src={instagram} alt='인스타그램' />
                                <span>INSTAGRAM</span>
                            </td>
                            <td>
                                <img src={youtube} alt='유튜브' />
                                <span>YOUTUBE</span>
                            </td>
                            <td>
                                <img src={facebook} alt='페이스북' />
                                <span>FACEBOOK</span>
                            </td>
                            <td>
                                <img src={blog} alt='네이버블로그' />
                                <span>BLOG</span>
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
