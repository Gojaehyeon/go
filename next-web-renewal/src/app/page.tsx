"use client";

import React, { useEffect, useState } from 'react';

const imageIcons = [
  "batterygo.png",
  "clipgo.png",
  "displaygo.png",
  "foldergo.png",
  "sharego.png",
  "takeagain.jpg",
  "dodot.png",
  "letgo.jpg",
  "refreshgo.jpg",
];

const apps = [
  {
    name: "BatteryGO",
    desc: "A simple and beautiful battery status app for Mac. Monitor your battery status at a glance.",
    url: "https://apps.apple.com/us/app/batterygo/id6747229304?l=en-GB&mt=12",
    img: "/images/batterygo.png",
    storeBadge: "/svg/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg",
    phBadge: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=979356&theme=light&t=1751368799554",
    phAlt: "BatteryGO on Product Hunt",
    storeAlt: "Download on the Mac App Store",
  },
  {
    name: "ClipGO",
    desc: "A smart clipboard manager that helps you organize and quickly access your copied items.",
    url: "https://apps.apple.com/kr/app/clipgo/idYOUR_APP_ID",
    img: "/images/clipgo.png",
    storeBadge: "/svg/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg",
    phBadge: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=982357&theme=light&t=1751368772345",
    phAlt: "ClipGO on Product Hunt",
    storeAlt: "Download on the Mac App Store",
  },
  {
    name: "DisplayGO",
    desc: "A display management tool for Mac. Easily control and arrange your external displays.",
    url: "https://apps.apple.com/kr/app/displaygo/id6746069948?l=en-GB&mt=12",
    img: "/images/displaygo.png",
    storeBadge: "/svg/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg",
    phBadge: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=973288&theme=light&t=1751368819035",
    phAlt: "DisplayGO on Product Hunt",
    storeAlt: "Download on the Mac App Store",
  },
  {
    name: "FolderGO",
    desc: "Organize and manage your folders efficiently on Mac with FolderGO.",
    url: "https://apps.apple.com/kr/app/foldergo/id6747735485?l=en-GB&mt=12",
    img: "/images/foldergo.png",
    storeBadge: "/svg/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg",
    phBadge: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=984032&theme=light&t=1751368670454",
    phAlt: "FolderGO on Product Hunt",
    storeAlt: "Download on the Mac App Store",
  },
  {
    name: "ShareGO",
    desc: "A seamless sharing utility to quickly send files and links between your devices.",
    url: "https://apps.apple.com/kr/app/sharego/idYOUR_APP_ID",
    img: "/images/sharego.png",
    storeBadge: "/svg/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg",
    phBadge: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=985049&theme=light&t=1751367718007",
    phAlt: "ShareGO on Product Hunt",
    storeAlt: "Download on the Mac App Store",
  },
  // iOS Apps
  {
    name: "Takeagain",
    desc: "Minimal video camera for quick retakes. Instantly save or retake with a simple UI.",
    url: "https://apps.apple.com/kr/app/takeagain/id6745813619?l=en-GB",
    img: "/images/takeagain.jpg",
    storeBadge: "/svg/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg",
    storeAlt: "Download on the App Store",
  },
  {
    name: "Dodot",
    desc: "Goal-based routine & to-do manager. Build habits and track your progress.",
    url: "https://apps.apple.com/kr/app/%EB%91%90%EB%8B%B7/id6744737392?l=en-GB",
    img: "/images/dodot.png",
    storeBadge: "/svg/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg",
    storeAlt: "Download on the App Store",
  },
  {
    name: "LetGo",
    desc: "Minimal writing app for building a writing habit. Distraction-free and easy to use.",
    url: "https://apps.apple.com/kr/app/letgo/id6746320131?l=en-GB",
    img: "/images/letgo.jpg",
    storeBadge: "/svg/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg",
    storeAlt: "Download on the App Store",
  },
  {
    name: "RefreshGO",
    desc: "Wellness app to refresh your mind and body. Track routines and build healthy habits.",
    url: "https://apps.apple.com/kr/app/refreshgo/id6745421205?l=en-GB",
    img: "/images/refreshgo.jpg",
    storeBadge: "/svg/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg",
    storeAlt: "Download on the App Store",
  },
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 1200); // 1.2초 후 페이드아웃+축소 시작
    const timer2 = setTimeout(() => setShowIntro(false), 1500); // 1.5초 후 인트로 종료
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    if (!showIntro) {
      setFadeIn(true);
      window.scrollTo(0, 0); // 인트로가 끝날 때 스크롤 맨 위로
    }
  }, [showIntro]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 인트로와 메인 UI를 겹쳐서 렌더링
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* 인트로 화면: 모바일에서는 렌더링하지 않음 */}
      {!isMobile && showIntro ? (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 1000,
            pointerEvents: 'none',
          }}
        >
          {/* 배경 */}
          <div
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              background: '#111',
              transition: 'opacity 0.3s',
              opacity: fadeOut ? 0 : 1,
            }}
          />
          {/* 아이콘 row */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '100vh',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '48px',
                marginBottom: '32px',
                transition: 'transform 0.3s',
                transform: fadeOut ? 'scale(0.85)' : 'scale(1)',
              }}
            >
              {imageIcons.slice(0, 5).map((img) => (
                <img
                  key={img}
                  src={`/images/${img}`}
                  alt={img}
                  width={120}
                  height={120}
                  style={{ borderRadius: '24px', background: 'rgba(0,0,0,0.2)', transition: 'transform 0.3s', transform: fadeOut ? 'scale(0.85)' : 'scale(1)' }}
                />
              ))}
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '48px',
                transition: 'transform 0.3s',
                transform: fadeOut ? 'scale(0.85)' : 'scale(1)',
              }}
            >
              {imageIcons.slice(5).map((img) => (
                <img
                  key={img}
                  src={`/images/${img}`}
                  alt={img}
                  width={120}
                  height={120}
                  style={{ borderRadius: '24px', background: 'rgba(0,0,0,0.2)', transition: 'transform 0.3s', transform: fadeOut ? 'scale(0.85)' : 'scale(1)' }}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
      {/* 메인 UI */}
      <div
        style={{
          transition: 'opacity 0.7s',
          opacity: fadeIn ? 1 : 0,
        }}
      >
        <div className="flex flex-col items-center gap-16 py-16">
          {/* Mac 목업만 표시 */}
          <div
            style={{
              width: '100%',
              maxWidth: 800,
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src="/images/mac.png"
              alt="mac mockup"
              style={{
                width: '100%',
                maxWidth: isMobile ? '300px' : '800px',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
          {/* Hero */}
          <section className="flex flex-col items-center gap-4 text-center w-full">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center">GO JAEHYUN</h1>
            <h2 className="text-xl sm:text-2xl text-blue-600 font-semibold mb-2">
              Experience Designer /<span className='max-[430px]:block hidden'></span> Web, App Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-xl">
              From furniture design to graphic, web, UX, and development.<br />
              Designing the best experiences.<br />
              Released 11 apps.<br />
              Currently at Apple Developer Academy.
            </p>
          </section>

          {/* Project cards section */}
          <section className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 gap-8 justify-items-center">
            {apps.map((app, idx) => (
              <div
                key={app.name}
                id={app.name.toLowerCase()}
                className="flex flex-col md:flex-row items-center bg-[#181818] rounded-3xl p-12 min-h-[320px] shadow-2xl transition-transform duration-75 hover:scale-105 hover:bg-[#232323] group hover:shadow-[0_0_60px_0_rgba(255,255,255,0.15)] w-full max-w-5xl max-[430px]:max-w-sm max-[430px]:mx-2 text-left max-[430px]:text-center mx-4"
              >
                <img
                  src={app.img}
                  alt={app.name}
                  className={`w-32 h-32 max-[430px]:w-[88px] max-[430px]:h-[88px] object-cover mb-6 md:mb-0 md:mr-12 ${idx >= apps.length - 4 ? 'rounded-3xl' : 'rounded-2xl'} max-[430px]:mx-auto max-[430px]:rounded-xl`}
                />
                <div className="text-left max-[430px]:text-center">
                  <div className="text-3xl font-bold text-white mb-4">{app.name}</div>
                  <div className="text-gray-300 text-xl mb-4 max-[430px]:px-2">{app.desc}</div>
                  <div className="flex flex-nowrap items-center gap-3 mt-4 justify-start max-[430px]:justify-center">
                    <a href={app.url} target="_blank" rel="noopener noreferrer">
                      <img src={app.storeBadge} alt={app.storeAlt} className="h-8 sm:h-10 max-[430px]:h-10 w-auto object-contain" />
                    </a>
                    {app.phBadge && (
                      <a href={`https://www.producthunt.com/products/${app.name.toLowerCase()}?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-${app.name.toLowerCase()}`} target="_blank" rel="noopener noreferrer">
                        <img src={app.phBadge} alt={app.phAlt} className="h-8 sm:h-10 max-[430px]:h-10 w-auto object-contain" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

Home.showHeader = true; 