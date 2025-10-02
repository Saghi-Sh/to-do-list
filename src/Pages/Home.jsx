import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import todoimg from "../photos/home-page.jpg";
import mobileimg from "../photos/mobile-app.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();

  // Desktop: start big (1.2), shrink to 1.0 earlier (centered effect)
  const desktopScale = useTransform(scrollY, [0, 200], [1.3, 1.0]);

  // Mobile: fade in & move up faster (center of viewport ~200px)
  const mobileOpacity = useTransform(scrollY, [50, 200], [0, 1]);
  const mobileY = useTransform(scrollY, [50, 200], [50, 0]);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Navbar />

      <main className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-30">
        {/* Blobs (hero section) */}
        <div className="absolute w-[800px] h-[600px] top-40 left-1/2 -translate-x-[calc(50%-300px)] rounded-full bg-lightTaupe blur-[300px] z-0" />
        <div className="absolute w-[800px] h-[400px] top-60 left-1/2 -translate-x-[calc(50%+300px)] rounded-full bg-Taupe blur-[250px] z-0" />

        {/* Hero text */}
        <div className="relative text-center max-w-2xl z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 mt-6 text-darkGray">
            Connect the dots.
          </h1>
          <p className="text-gray-700 mb-6 text-[16px] md:text-[19px] leading-9">
            Turn your sprawling ideas into simple, actionable steps.
            <br />
            Our To-Do List app helps you stay productive with a clean and simple interface.
          </p>
          <blockquote className="italic text-gray-500 text-[14px] md:text-lg mb-6">
            "The easiest way to manage your tasks and never forget anything again."
          </blockquote>
        </div>

        {/* Images */}
        <div className="relative mt-12 z-10">
          {/* Desktop image */}
          <motion.img
            src={todoimg}
            alt="Todo List App Desktop Screenshot"
            className="rounded-xl shadow-xl w-[330px] md:w-[500px]"
            style={{ scale: desktopScale }}
          />

          {/* Mobile image */}
          <motion.img
            src={mobileimg}
            alt="Todo List App Mobile Screenshot"
            className="absolute top-[65%] md:top-[61%] right-[-65px] md:right-[-120px] -translate-y-1/2 w-[110px] md:w-[180px] rounded-xl shadow-lg"
            style={{ opacity: mobileOpacity, y: mobileY }}
          />
        </div>
      </main>

      {/* Cards Section */}
      <section className="relative z-10 px-6 md:px-12 lg:px-24 py-24">
        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Organize Your Tasks</h3>
            <p className="text-gray-600">
              Create, edit, and manage tasks easily with an intuitive interface.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Set Reminders</h3>
            <p className="text-gray-600">
              Never miss a deadline by setting quick reminders and alerts.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-xl font-semibold mb-4">Sync Across Devices</h3>
            <p className="text-gray-600">
              Your to-do list stays updated everywhere, automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <section className="relative bg-white py-32 px-6 md:px-12 text-center overflow-hidden">
        {/* Blobs — moved slightly upward so they overlap with cards */}
        <div className="absolute w-[700px] h-[350px] -top-32 left-1/2 -translate-x-[calc(50%-200px)] rounded-full bg-lightTaupe blur-[400px] z-0" />
        <div className="absolute w-[700px] h-[350px] top-80 left-1/2 -translate-x-[calc(50%+200px)] rounded-full bg-Taupe blur-[400px] z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-[34px] md:text-5xl font-bold text-darkGray mb-6 leading-[53px] md:leading-[65px]">
            Stop planning, start doing. <br /> Get organized for free.
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Join thousands of people staying productive every day.
          </p>
          <button
            type="button"
            className="px-8 py-4 rounded-lg bg-Taupe text-white font-semibold shadow-md hover:bg-lightTaupe transition"
          >
            Sign Up Free
          </button>
        </div>
      </section>
      <div>
      <Footer />
      </div>
    </div>
  );
}
