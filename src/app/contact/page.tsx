export default function ContactPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
      <p className="text-slate-600 mb-4">
        Fill out the form below and our team will guide you through the next
        steps.
      </p>
      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded px-3 py-2"
        />
        <textarea
          placeholder="Message"
          className="w-full border rounded px-3 py-2"
          rows={4}
        />
        <button
          type="submit"
          className="bg-black text-white rounded px-4 py-2 hover:opacity-90"
        >
          Send
        </button>
      </form>
    </div>
  );
}
