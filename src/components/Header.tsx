import { MountainIcon } from "lucide-react";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <a className="flex items-center justify-center" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="ml-2 font-semibold">mo-freelancer.ch</span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#about"
        >
          About
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#services"
        >
          Services
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#contact"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}