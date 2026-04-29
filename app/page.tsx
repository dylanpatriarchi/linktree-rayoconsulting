"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Globe,
  Mail,
  Phone,
  Share2,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

/* ───────── Brand icons ───────── */

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5.5" ry="5.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ───────── Animations ───────── */

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

/* ───────── Data ───────── */

const socials = [
  { icon: InstagramIcon, href: "https://www.instagram.com/rayo.consulting", label: "Instagram" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/company/rayoconsulting", label: "LinkedIn" },
  { icon: Globe, href: "https://www.rayo.consulting", label: "Sito Web" },
  { icon: BookOpen, href: "https://www.rayo.consulting/newsletter", label: "Newsletter" },
  { icon: Mail, href: "mailto:info@rayo.consulting", label: "Email" },
];

/* ───────── Page ───────── */

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* ── Hero image ── */}
      <div className="relative w-full h-[48vh] max-h-[480px]">
        <Image
          src="/hero.png"
          alt="Rayo Consulting"
          fill
          priority
          className="object-cover rounded-b-[2.5rem]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-[#0a0a0a] rounded-b-[2.5rem]" />
      </div>

      {/* ── Content ── */}
      <motion.main
        className="relative z-10 max-w-md mx-auto px-5 pb-12 -mt-10 flex flex-col items-center gap-5"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Logo avatar — no background */}
        <motion.div variants={item}>
          <Image
            src="/logo.png"
            alt="Rayo Consulting"
            width={88}
            height={88}
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Name & bio */}
        <motion.div variants={item} className="text-center -mt-1">
          <h1 className="text-[1.65rem] font-bold tracking-tight">
            Rayo Consulting
          </h1>
          <p className="mt-0.5 text-sm font-medium text-white/50">
            Trasformiamo caos operativo in sistemi chiari con l&apos;AI.
          </p>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={item} className="flex items-center gap-3">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="w-12 h-12 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white transition-all duration-200 hover:bg-white/[0.14] hover:border-white/20 hover:-translate-y-0.5"
              >
                <Icon className="w-[18px] h-[18px]" />
              </a>
            );
          })}
        </motion.div>

        {/* Big buttons — Apple style */}
        <motion.nav
          variants={container}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col gap-3 mt-1"
          aria-label="Collegamenti"
        >
          {/* Newsletter */}
          <motion.a
            href="https://www.rayo.consulting/newsletter"
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            className="group flex items-center justify-between w-full px-6 py-5 rounded-[1.25rem] bg-[#1c1c1e] text-white transition-all duration-300 hover:bg-[#262628] hover:-translate-y-[1px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
          >
            <span className="text-base font-semibold tracking-tight">Newsletter</span>
            <ArrowUpRight className="w-[18px] h-[18px] text-white/30 transition-all duration-300 group-hover:text-white/80 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
          </motion.a>

          {/* Call */}
          <motion.a
            href="https://call.rayo.consulting/"
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            className="group flex items-center justify-between w-full px-6 py-5 rounded-[1.25rem] bg-white text-[#0a0a0a] transition-all duration-300 hover:bg-white/90 hover:-translate-y-[1px] hover:shadow-[0_12px_40px_rgba(255,255,255,0.06)]"
          >
            <span className="text-base font-semibold tracking-tight">Prenota una call gratuita</span>
            <ArrowUpRight className="w-[18px] h-[18px] text-black/30 transition-all duration-300 group-hover:text-black/70 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
          </motion.a>
        </motion.nav>

        {/* Footer */}
        <motion.footer variants={item} className="text-center pt-1">
          <p className="text-[11px] font-medium text-white/25 tracking-wide">
            © {new Date().getFullYear()} Rayo Consulting
          </p>
        </motion.footer>
      </motion.main>
    </div>
  );
}
