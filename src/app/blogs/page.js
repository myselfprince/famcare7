import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Health Tips to Make You Smile | Wellness App',
  description: 'Explore expert insights, wellness tips, and empowering stories to support your health journey.',
};

export default function Blogs() {
  return (
    <div className="min-h-screen bg-light-blue flex flex-col items-center py-8 px-4">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-dark-blue mb-2 text-[#103C63]">
          Health Tips to Make You Smile!
        </h1>
        <p className="text-[#103C63] text-sm md:text-base max-w-2xl mx-auto">
        Explore expert insights, wellness tips, and empowering stories to support your health journey. From period hacks to yoga flows, we’ve got something for every woman!
        </p>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-md mb-12">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for wellness tips (e.g., period relief, yoga)"
            className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dark-blue text-gray-700"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {/* Card 1: Yoga for PCOS */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="/blogs/1.png" // Replace with actual image URL
            alt="Yoga for PCOS"
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-dark-blue mb-2">
              Yoga for PCOS
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Poses to Balance Your Hormones. These gentle yoga poses—like Childs Pose—manage PCOS symptoms and boost your well-being.
            </p>
            <Link href="/yoga-for-pcos">
              <button className="text-dark-blue font-semibold border border-dark-blue rounded-full px-4 py-1 cursor-pointer hover:bg-[#103C63] hover:text-white transition">
                READ MORE
              </button>
            </Link>
          </div>
        </div>

        {/* Card 2: Nutrition */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="/blogs/2.png" // Replace with actual image URL
            alt="Nutrition"
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-dark-blue mb-2">
              Nutrition
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Tips for Energy During Your Period. Boost your energy with iron-rich foods and hydration—perfect for your menstrual cycle!
            </p>
            <Link href="/nutrition">
              <button className="text-dark-blue font-semibold border border-dark-blue rounded-full px-4 py-1 cursor-pointer hover:bg-[#103C63] hover:text-white transition">
                READ MORE
              </button>
            </Link>
          </div>
        </div>

        {/* Card 3: Mental Wellness */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src="/blogs/3.png" // Replace with actual image URL
            alt="Mental Wellness"
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-dark-blue mb-2">
              Mental Wellness
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Strategies for Stress. Feeling overwhelmed? These mindfulness techniques can help you find calm in just 5 minutes a day.
            </p>
            <Link href="/mental-wellness">
              <button className="text-dark-blue font-semibold border border-dark-blue rounded-full px-4 py-1 cursor-pointer hover:bg-[#103C63] hover:text-white transition">
                READ MORE
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Load More Button */}
      <button className="mt-8 bg-[#103C63] cursor-pointer hover:bg-blue-900 text-white font-semibold rounded-full px-6 py-2 hover:bg-opacity-80 transition">
        LOAD MORE
      </button>
    </div>
  );
}