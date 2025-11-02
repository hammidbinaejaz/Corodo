import Link from "next/link";

export default function FooterMain() {
  return (
    <div className="border-t border-white/[0.1] px-6 sm:px-8 py-10 sm:py-20 bg-brand">
      <div className="max-w-7xl mx-auto text-sm text-white/60 flex sm:flex-row flex-col justify-between items-start">
        <div>
          <div className="mr-4 md:flex mb-4">
            <Link href="/" passHref>
              <div className="flex items-center justify-center space-x-2 text-2xl font-bold text-center text-gray-100 selection:bg-emerald-500 mr-10 py-0 cursor-pointer">
                <div className="flex flex-col">
                  <h1 className="text-white font-chillax">CORODO</h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="mt-4 text-base">
            Built with ❤️ by <span className="text-[#1e40af] font-semibold">Hammid</span> and <span className="text-[#1e40af] font-semibold">Bupesh</span>
          </div>
          <div className="mt-2 text-sm text-white/40">
            An AI-based career guidance platform built by Hammid Bin Aejaz
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 items-start mt-10 md:mt-0">
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <a className="transition-colors hover:text-white/80 text-white/60" href="#career-advisor">
              AI Career Advisor
            </a>
            <a className="transition-colors hover:text-white/80 text-white/60" href="#roadmap">
              Roadmap for Success
            </a>
          </div>
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <a
              target="__blank"
              className="transition-colors hover:text-white/80 text-white/60"
              href="https://www.linkedin.com/in/hammid-bin-aejaz-7b7b392a2/"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              target="__blank"
              className="transition-colors hover:text-white/80 text-white/60"
              href="https://wa.me/9622016330"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              target="__blank"
              className="transition-colors hover:text-white/80 text-white/60"
              href="https://github.com/hammidbinaejaz"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="transition-colors hover:text-white/80 text-white/60"
              href="tel:9622016339"
            >
              Call: 9622016339
            </a>
            <a
              className="transition-colors hover:text-white/80 text-white/60"
              href="mailto:hamidbinaejaz@gmail.com"
            >
              Email: hamidbinaejaz@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
