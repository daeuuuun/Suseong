import React from 'react';
import SuseongMain from '../components/SuseongMain/SuseongMain';
import QuickMenu from '../components/QuickMenu/QuickMenu';
import OverviewMain from '../components/OverviewMain/OverviewMain';
import NoticeMain from '../components/NoticeMain/NoticeMain';


function Main() {
  return (
    <>
        <QuickMenu />
        <SuseongMain />
        <OverviewMain />
        <NoticeMain />
    </>
  );
}

export default Main;
