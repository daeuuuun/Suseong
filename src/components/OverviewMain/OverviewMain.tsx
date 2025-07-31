import React from 'react';
import styles from './Overview.module.css';


function OverviewMain() {
  return (
    <>
        <div className={styles.overview_container}>
            <div className={styles.content_container}>
                <div className={styles.content_box}>
                    <p className={styles.top_text}>취업률</p>
                    <p className={styles.middle_text}>74.0<span>%</span></p>
                    <p className={styles.bottom_text}>(2025학년도 공시기준)</p>
                </div>
                <div className={styles.content_null_box}></div>
                <div className={styles.content_box}>
                    <p className={styles.top_text}>신입생 충원률</p>
                    <p className={styles.middle_text}>100<span>%</span></p>
                    <p className={styles.bottom_text}>(2025학년도 공시기준)</p>
                </div>
                <div className={styles.content_box}>
                    <p className={styles.top_text}>재학생 충원률</p>
                    <p className={styles.middle_text}>92.1<span>%</span></p>
                    <p className={styles.bottom_text}>(2025학년도 공시기준)</p>
                </div>
                <div className={styles.content_null_box}>
                    <p className={styles.overview_text}>숫자로 보는<br /><span>수성대 현황</span></p>
                </div>
                <div className={styles.content_box}>
                    <p className={styles.top_text}>장학금 지급률</p>
                    <p className={styles.sub_text}>1인당 장학금</p>
                    <p className={styles.second_text}>4,672,400<span>원</span></p>
                    <p className={styles.bottom_text}>(2025학년도 공시기준)</p>
                </div>
                <div className={styles.content_null_box}></div>
                <div className={styles.content_box}>
                    <p className={styles.top_text}>가족회사 현황</p>
                    <p className={styles.middle_text}>736<span>개</span></p>
                    <p className={styles.bottom_text}>(2025.04.01 기준)</p>
                </div>
            </div>
        </div>
    </>
  );
}

export default OverviewMain;
