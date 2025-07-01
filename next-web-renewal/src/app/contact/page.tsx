export default function Contact() {
  return (
    <section className="flex flex-col items-center gap-8 py-16">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <div className="max-w-xl text-lg text-center text-gray-700 dark:text-gray-300">
        <p className="mb-4">Feel free to reach out for projects, collaborations, or any inquiries.</p>
        <p className="mb-4">Email: <a href="mailto:contact@goapp.com" className="underline text-blue-600">contact@goapp.com</a></p>
      </div>
    </section>
  );
} 