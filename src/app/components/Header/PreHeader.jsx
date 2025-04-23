import Link from "next/link";

const Preheader = () => {
  return (
    <div className="hidden w-full bg-gradient-to-r from-red-500 to-red-600 overflow-hidden relative h-10">
      <div className="absolute inset-0 flex items-center">
        <div className="flex space-x-8 animate-marquee whitespace-nowrap">
          {Array(5).fill(
            <Link
              href="/"
              className=" flex items-center space-x-2 text-white text-sm md:text-lg font-bold hover:text-yellow-200 transition-colors"
            >
              <span>🎉</span>
              <span>
                ঈদ মোবারক! | জাপান অ্যাম্বিশন ট্রেনিং সেন্টারের পক্ষ থেকে আপনাকে ও
                আপনার পরিবারকে জানাই পবিত্র ঈদুল ফিতরের শুভেচ্ছা। সুখ, শান্তি ও
                সমৃদ্ধিতে কাটুক আপনার ঈদ! 🌙
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Preheader;
