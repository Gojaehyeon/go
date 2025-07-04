"use client";

export default function About() {
  return (
    <section className="flex flex-col items-center gap-8 py-16">
      <h1 className="text-4xl font-bold mb-4">About</h1>
      <img src="/images/go.png" alt="Go Jaehyun Logo" className="w-60 h-60 rounded-full object-cover mx-auto mb-4" />
      <div className="max-w-2xl text-lg text-center text-gray-700 dark:text-gray-300">
        <p className="mb-4">
          Hello, I&apos;m <b>Go Jaehyun</b>.<br />
          I&apos;m an experience designer who started in furniture design<br className='max-[430px]:block hidden' />
          and expanded into graphic, web, UX design,<br className='max-[430px]:block hidden' />
          and development.
        </p>
        <p className="mb-4">
          Driven by a passion to deliver the best experiences,<br className='max-[430px]:block hidden' />
          I have designed and released <b>11 apps</b> so far.
        </p>
        <p className="mb-4">
          Currently, I am furthering my skills and vision<br className='max-[430px]:block hidden' />
          at the <b>Apple Developer Academy</b>.
        </p>
        <p>
          My goal is to become a designer who connects<br className='max-[430px]:block hidden' />
          people, technology, and design.
        </p>
      </div>
    </section>
  );
} 