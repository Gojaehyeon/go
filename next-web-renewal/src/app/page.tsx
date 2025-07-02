import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white flex flex-col items-center px-4">
      {/* Hero Section */}
      <section className="w-full max-w-3xl flex flex-col items-center text-center py-24 gap-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
          GO JAEHYUN
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-300">Experience Designer / Web, App Developer</h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          From furniture design to graphic, web, UX, and development.<br />
          Designing the best experiences.<br />
          Released 11 apps. Currently at Apple Developer Academy.
        </p>
        <div className="flex gap-4 justify-center mt-4">
          <a href="#projects" className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg">My Projects</a>
          <a href="#contact" className="px-6 py-2 rounded-full border border-blue-400 text-blue-300 hover:bg-blue-800 transition font-semibold shadow-lg">Contact</a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-5xl py-16">
        <h3 className="text-3xl font-bold mb-10 text-center text-blue-200">Projects & Apps</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 샘플 프로젝트 카드 */}
          <div className="bg-gray-800 rounded-2xl p-8 shadow-xl flex flex-col items-center hover:scale-105 transition">
            <Image src="/vercel.svg" alt="Sample App" width={80} height={80} className="mb-4" />
            <div className="text-xl font-bold mb-2">Sample App</div>
            <div className="text-gray-400 mb-4 text-center">A beautiful and useful app for everyone.</div>
            <a href="#" className="text-blue-400 hover:underline">View More</a>
          </div>
          <div className="bg-gray-800 rounded-2xl p-8 shadow-xl flex flex-col items-center hover:scale-105 transition">
            <Image src="/next.svg" alt="Another App" width={80} height={80} className="mb-4" />
            <div className="text-xl font-bold mb-2">Another App</div>
            <div className="text-gray-400 mb-4 text-center">Another amazing project to showcase skills.</div>
            <a href="#" className="text-blue-400 hover:underline">View More</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-2xl py-16 flex flex-col items-center">
        <h3 className="text-3xl font-bold mb-6 text-blue-200">Contact</h3>
        <div className="bg-gray-800 rounded-2xl p-8 shadow-xl w-full flex flex-col items-center">
          <div className="text-lg mb-2">Email: <a href="mailto:your@email.com" className="text-blue-400 hover:underline">your@email.com</a></div>
          <div className="text-lg">LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-400 hover:underline">linkedin.com/in/yourprofile</a></div>
        </div>
      </section>
    </main>
  );
}
