import React, { useEffect, useState } from 'react';
import styles from './QuickMenu.module.css';
import arrowbtn from '../../assets/img/arrowbtn.png';
import topbtn from '../../assets/img/topbtn.png';
import scrolldown from '../../assets/img/scrolldown.png';


function QuickMenu() {
    const [position, setPosition] = useState(400);

    useEffect(() => {
        const handleScroll = () => {
        setPosition(window.scrollY + 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <>
        <div className={styles.container} style={{ top: `${position}px` }}>
            <img src={arrowbtn} className={styles.arrow_btn} alt='화살표버튼' />
            <div className={styles.quick_container}>
                <p>SSU QUICK</p>
                <ul>
                    <li>캠퍼스안내</li>
                    <li>입학안내</li>
                    <li>학사일정</li>
                    <li>제증명발급</li>
                    <li>장학 및 대출</li>
                    <li>통학버스</li>
                </ul>
            </div>
            <img src={topbtn} className={styles.top_btn} alt='TOP버튼' />
        </div>
        <div className={styles.scroll_down} style={{top: `${position}px`}}>
            <img src={scrolldown} alt='스크롤다운' />
        </div>
    </>
  );
}

export default QuickMenu;
