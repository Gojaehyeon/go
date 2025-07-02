"use client";

export default function Contact() {
  return (
    <section className="flex flex-col items-center gap-8 py-16">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <div className="max-w-xl text-lg text-center text-gray-700 dark:text-gray-300">
        <p className="mb-4">Feel free to reach out for projects, collaborations, or any inquiries.</p>
        <p className="mb-4">
          Email: <a href="mailto:abr0402@naver.com" className="underline text-blue-600">abr0402@naver.com</a>
        </p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/jaehyun-go-91a072356" className="underline text-blue-600" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/jaehyun-go-91a072356</a>
        </p>
      </div>
    </section>
  );
} 