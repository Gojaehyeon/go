export default function About() {
  return (
    <section className="flex flex-col items-center gap-8 py-16">
      <h1 className="text-4xl font-bold mb-4">About</h1>
      <img
        src="/images/go.png"
        alt="Go Jaehyun Logo"
        className="w-70 h-70 rounded-full object-cover mx-auto mb-4"
      />
      <div className="max-w-2xl text-lg text-center text-gray-700 dark:text-gray-300">
        <p className="mb-4">Hello, I'm <b>Go Jaehyun</b>.<br />I'm an experience designer who started in furniture design and expanded into graphic, web, UX design, and development.</p>
        <p className="mb-4">Driven by a passion to deliver the best experiences,<br></br> I have designed and released <b>11 apps</b> so far.</p>
        <p className="mb-4">Currently, I am furthering my skills and vision at the <b>Apple Developer Academy</b>.</p>
        <p>My goal is to become a designer who connects people, technology, and design.</p>
      </div>
    </section>
  );
} 