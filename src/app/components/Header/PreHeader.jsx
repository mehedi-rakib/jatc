import Link from "next/link";

const Preheader = () => {
  return (
    // <div className="w-full bg-gray-100  overflow-hidden">
    //   <div className="text-red-500 whitespace-nowrap text-lg font-bold animate-marquee">
    //     Welcome to our Japan Ambition Training Center! Enjoy special offers
    //     today! 🎉
    //   </div>
    // </div>
    <div className="w-full bg-gray-200 overflow-hidden">
      <div className="flex flex-col space-y-2">
        <Link
          href="/"
          className="text-red-500 text-sm md:text-lg font-bold animate-marquee">
          {Array(5)
            .fill(
              "Welcome to our Japan Ambition Training Center! Enjoy special offers today! 🎉"
            )
            .join(" • ")}
        </Link>
      </div>
    </div>
  );
};

export default Preheader;
