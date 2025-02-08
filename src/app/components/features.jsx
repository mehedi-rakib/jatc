export default function Features() {
  return (
    <div className="container mx-auto px-4 -mt-24 relative z-10">
      <div className="grid mx-auto lg:px-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
        {/* NEWS*/}
        <div className="relative pt-12 group">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center z-20">
            <svg
              className="w-12 h-12 text-[#41C5E5]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H15C16.1046 3 17 3.89543 17 5V7M19 21C17.8954 21 17 20.1046 17 19V7M19 21C20.1046 21 21 20.1046 21 19V9C21 7.89543 20.1046 7 19 7H17M9 7H13M9 11H13M9 15H13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="bg-[#FFC107] rounded-xl px-6 pt-14 pb-6 text-center shadow-md">
            <h3 className="text-white text-xl font-bold mb-3">News</h3>
            <p className="text-white/90 text-sm">
              Learn the easiest method of learning Japanese language
              successfully.
            </p>
          </div>
        </div>

        {/* shedule  */}
        <div className="relative pt-12 group">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center z-20">
            <svg
              className="w-12 h-12 text-[#003B6D]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 8V12L14 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="bg-[#FF1943] rounded-xl px-6 pt-14 pb-6 text-center shadow-md">
            <h3 className="text-white text-xl font-bold mb-3">Schedule</h3>
            <p className="text-white/90 text-sm">
              We have morning-day-evening shift for the convenient of our
              students.
            </p>
          </div>
        </div>

        {/* Notice*/}
        <div className="relative  pt-12 group">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center z-20">
            <svg
              className="w-12 h-12 text-[#FF1943]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 6.25V19.25M12 6.25C10.832 5.47703 9.24602 5 7.5 5C5.75398 5 4.16797 5.47703 3 6.25V19.25C4.16797 18.477 5.75398 18 7.5 18C9.24602 18 10.832 18.477 12 19.25M12 6.25C13.168 5.47703 14.754 5 16.5 5C18.246 5 19.832 5.47703 21 6.25V19.25C19.832 18.477 18.246 18 16.5 18C14.754 18 13.168 18.477 12 19.25"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="bg-[#003B6D] rounded-xl px-6 pt-14 pb-6 text-center shadow-md">
            <h3 className="text-white text-xl font-bold mb-3">Notice Board</h3>
            <p className="text-white/90 text-sm">
              Admission going on. Please contact with our program coordinator to
              apply.
            </p>
          </div>
        </div>

        {/* Result */}
        <div className="relative pt-12 group">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center z-20">
            <svg
              className="w-12 h-12 text-[#FFC107]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="bg-[#41C5E5] rounded-xl px-6 pt-14 pb-6 text-center shadow-md">
            <h3 className="text-white text-xl font-bold mb-3">Achieve</h3>
            <p className="text-white/90 text-sm">
              The results of finished courses have been published. You can check
              it now.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
