import Image from "next/image";

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
  },
  {
    name: "ClipGO",
    desc: "A smart clipboard manager that helps you organize and quickly access your copied items.",
    url: "https://apps.apple.com/kr/app/clipgo/idYOUR_APP_ID",
    img: "/images/clipgo.png",
  },
  {
    name: "DisplayGO",
    desc: "A display management tool for Mac. Easily control and arrange your external displays.",
    url: "https://apps.apple.com/kr/app/displaygo/id6746069948?l=en-GB&mt=12",
    img: "/images/displaygo.png",
  },
  {
    name: "FolderGO",
    desc: "Organize and manage your folders efficiently on Mac with FolderGO.",
    url: "https://apps.apple.com/kr/app/foldergo/id6747735485?l=en-GB&mt=12",
    img: "/images/foldergo.png",
  },
  {
    name: "ShareGO",
    desc: "A seamless sharing utility to quickly send files and links between your devices.",
    url: "https://apps.apple.com/kr/app/sharego/idYOUR_APP_ID",
    img: "/images/sharego.png",
  },
  // iOS Apps
  {
    name: "Takeagain",
    desc: "Minimal video camera for quick retakes. Instantly save or retake with a simple UI.",
    url: "https://apps.apple.com/kr/app/takeagain/id6745813619?l=en-GB",
    img: "/images/takeagain.jpg",
  },
  {
    name: "Dodot",
    desc: "Goal-based routine & to-do manager. Build habits and track your progress.",
    url: "https://apps.apple.com/kr/app/%EB%91%90%EB%8B%B7/id6744737392?l=en-GB",
    img: "/images/dodot.png",
  },
  {
    name: "LetGo",
    desc: "Minimal writing app for building a writing habit. Distraction-free and easy to use.",
    url: "https://apps.apple.com/kr/app/letgo/id6746320131?l=en-GB",
    img: "/images/letgo.jpg",
  },
  {
    name: "RefreshGO",
    desc: "Wellness app to refresh your mind and body. Track routines and build healthy habits.",
    url: "https://apps.apple.com/kr/app/refreshgo/id6745421205?l=en-GB",
    img: "/images/refreshgo.jpg",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-16 py-16">
      {/* App icons row */}
      <div className="flex flex-row flex-wrap justify-center gap-8 mb-6">
        {imageIcons.slice(0, 5).map((img) => (
          <Image
            key={img}
            src={`/images/${img}`}
            alt={img}
            width={120}
            height={120}
            className="rounded-2xl shadow-md object-cover transition-transform duration-200 hover:scale-110"
          />
        ))}
        <div className="w-full h-0" />
        {imageIcons.slice(5).map((img) => (
          <Image
            key={img}
            src={`/images/${img}`}
            alt={img}
            width={120}
            height={120}
            className="rounded-3xl shadow-md object-cover transition-transform duration-200 hover:scale-110"
          />
        ))}
      </div>

      {/* Hero */}
      <section className="flex flex-col items-center gap-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center">GO JAEHYUN</h1>
        <h2 className="text-xl sm:text-2xl text-blue-600 font-semibold mb-2">Experience Designer / Web, App Developer</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-xl">
          From furniture design to graphic, web, UX, and development.<br />
          Designing the best experiences.<br />
          Released 11 apps. Currently at Apple Developer Academy.
        </p>
      </section>

      {/* Project cards section */}
      <section className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {apps.map((app, idx) => (
          <div
            key={app.name}
            className="flex flex-col md:flex-row items-center bg-[#181818] rounded-3xl p-12 min-h-[320px] shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#232323] group hover:shadow-[0_0_60px_0_rgba(255,255,255,0.15)]"
          >
            <img
              src={app.img}
              alt={app.name}
              className={`w-32 h-32 object-cover mb-6 md:mb-0 md:mr-12 ${idx >= apps.length - 4 ? 'rounded-3xl' : 'rounded-2xl'}`}
            />
            <div>
              <div className="text-3xl font-bold text-white mb-4">{app.name}</div>
              <div className="text-gray-300 text-xl mb-4">{app.desc}</div>
              {(() => {
                // Product Hunt badge info for each Mac app
                const productHuntBadges = {
                  BatteryGO: {
                    url: "https://www.producthunt.com/products/batterygo?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-batterygo",
                    img: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=979356&theme=light&t=1751368799554",
                  },
                  ClipGO: {
                    url: "https://www.producthunt.com/products/clipgo?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-clipgo",
                    img: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=982357&theme=light&t=1751368772345",
                  },
                  DisplayGO: {
                    url: "https://www.producthunt.com/products/displaygo?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-displaygo",
                    img: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=973288&theme=light&t=1751368819035",
                  },
                  FolderGO: {
                    url: "https://www.producthunt.com/products/foldergo?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-foldergo",
                    img: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=984032&theme=light&t=1751368670454",
                  },
                  ShareGO: {
                    url: "https://www.producthunt.com/products/sharego?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-sharego",
                    img: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=985049&theme=light&t=1751367718007",
                  },
                } as const;
                type BadgeKey = keyof typeof productHuntBadges;
                if ((app.name as BadgeKey) in productHuntBadges) {
                  const badge = productHuntBadges[app.name as BadgeKey];
                  return (
                    <div className="flex items-center gap-4">
                      <a href={app.url} target="_blank" rel="noopener noreferrer">
                        <img
                          src="/svg/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                          alt="Download on the Mac App Store"
                          className="h-10 w-auto object-contain"
                        />
                      </a>
                      <a
                        href={badge.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={badge.img}
                          alt={`${app.name} on Product Hunt`}
                          className="h-10 w-auto object-contain"
                        />
                      </a>
                    </div>
                  );
                } else if (idx < apps.length - 4) {
                  return (
                    <a href={app.url} target="_blank" rel="noopener noreferrer">
                      <img
                        src="/svg/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                        alt="Download on the Mac App Store"
                        className="h-10 w-auto object-contain"
                      />
                    </a>
                  );
                } else {
                  return (
                    <a href={app.url} target="_blank" rel="noopener noreferrer">
                      <img
                        src="/svg/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                        alt="Download on the App Store"
                        className="h-10 w-auto object-contain"
                      />
                    </a>
                  );
                }
              })()}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
