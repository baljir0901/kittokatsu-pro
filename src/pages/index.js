import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="text-center mt-10 p-6">
        <h2 className="text-4xl font-bold text-blue-700">
          Welcome to Kittokatsu
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Learn JLPT N1 & N2 vocabulary effectively.
        </p>

        {/* Call to Action */}
        <div className="mt-8">
          <a
            href="/vocabulary"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-700"
          >
            Start Learning Now
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
