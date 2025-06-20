import Link from "next/link";

const Preheader = () => {
  return (
    <div className=" w-full bg-gradient-to-r from-red-500 to-red-600 overflow-hidden relative h-10">
      <div className="absolute inset-0 flex items-center">
        <div className="flex space-x-8 animate-marquee whitespace-nowrap">
          {Array(5).fill(
            <Link
              href="/"
              className=" flex items-center space-x-2 text-white text-sm md:text-lg font-bold hover:text-yellow-200 transition-colors"
            >
              <span>🎓</span>
              <span>
                  ভর্তি চলিতেছে! জাপান এম্বিশন ট্রেনিং সেন্টারে ৬ মাস মেয়াদী N4 ও N5 কোর্সে ভর্তি চলমান। আগ্রহীদের দ্রুত যোগাযোগ করার জন্য অনুরোধ করা হচ্ছে।
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Preheader;
