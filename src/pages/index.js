import Header from "../components/Header"; // Ensure correct import path

export default function Home() {
  return (
    <div>
      <Header />
      <main className="text-center mt-10">
        <h2 className="text-3xl font-bold">Welcome to Kittokatsu</h2>
        <p className="mt-4 text-lg">
          Learn JLPT N1 & N2 vocabulary efficiently.
        </p>
      </main>
    </div>
  );
}
