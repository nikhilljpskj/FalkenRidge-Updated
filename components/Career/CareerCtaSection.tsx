import Link from "next/link";
import { Send } from "lucide-react";

const CareersCtaSection = () => {
    // Sample job data (you can replace this with dynamic API data later)
    const jobListings = [
        // {
        //     role: "Frontend Developer",
        //     location: "Remote",
        //     experience: "2+ years",
        //     description: "Work with React and Tailwind to build beautiful interfaces.",
        // },
        // {
        //     role: "Backend Engineer",
        //     location: "Bangalore, India",
        //     experience: "3+ years",
        //     description: "Build scalable APIs using Node.js and PostgreSQL.",
        // },
    ];

    const hasJobs = jobListings.length > 0;

    return (
        <section className="relative py-24 px-6">
            <div className="container mx-auto max-w-6xl">
                <section className="mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-black dark:text-white mb-12">
                        Open Roles at Falkenridge
                    </h2>
                    <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 backdrop-blur-md shadow-md">
                        <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700 text-sm md:text-base">
                            <thead className="bg-zinc-100 dark:bg-dark text-zinc-700 dark:text-zinc-300 text-left">
                                <tr>
                                    <th className="px-6 py-4 font-medium">Job Role</th>
                                    <th className="px-6 py-4 font-medium">Location</th>
                                    <th className="px-6 py-4 font-medium">Experience</th>
                                    <th className="px-6 py-4 font-medium">Description</th>
                                    <th className="px-6 py-4 font-medium">Apply</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700 text-zinc-800 dark:text-zinc-200 bg-white dark:bg-black/5">
                                {jobListings.length > 0 ? (
                                    jobListings.map((job, idx) => (
                                        <tr key={idx} className="hover:bg-white/5 transition">
                                            <td className="px-6 py-4">{job.role}</td>
                                            <td className="px-6 py-4">{job.location}</td>
                                            <td className="px-6 py-4">{job.experience}</td>
                                            <td className="px-6 py-4">{job.description}</td>
                                            <td className="px-6 py-4">
                                                <Link
                                                    href="#"
                                                    className="inline-flex items-center justify-center text-black dark:text-white hover:text-teal-700 dark:hover:text-teal-300 transition"
                                                >
                                                    <Send className="w-5 h-5" />
                                                    <span className="sr-only">Apply</span>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={5}
                                            className="px-6 py-10 text-center text-zinc-500 dark:text-zinc-400 italic"
                                        >
                                            No open positions at the moment.
                                        </td>
                                    </tr>
                                )}
                            </tbody>

                        </table>
                    </div>
                </section>

                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black dark:text-white">
                        Not seeing an open role?
                    </h2>
                    <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                        We’re always on the lookout for passionate problem-solvers, curious builders, and future teammates. If you think you’d be a great fit-even if there isn’t an open position-drop us a message.
                    </p>

                    <div className="mt-12 relative max-w-xl mx-auto overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 backdrop-blur-md">
                        <div className="px-8 py-10">
                            <p className="text-base text-zinc-800 dark:text-zinc-200 mb-2">
                                Send us your resume at
                            </p>
                            <a
                                href="mailto:info@falkenridge.com"
                                className="text-lg font-semibold hover:underline"
                            >
                                info@falkenridge.com
                            </a>
                        </div>
                    </div>

                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-6">
                        We’ll reach out when the right opportunity opens up.
                    </p>
                </div>
            </div>
            <div className="absolute right-0 top-5 z-[-1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-5 left-0 z-[-1]">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
            />
            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
            />
            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
            />
            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
        </section>
    );
};

export default CareersCtaSection;
