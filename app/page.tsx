"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Mail, Newspaper } from "lucide-react";
import Image from "next/image";

/* ───────── Brand icons (outline style, matching Lucide) ───────── */

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
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" rx="0.5" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/* ───────── Animation variants ───────── */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

/* ───────── Data ───────── */

const links = [
  {
    name: "Instagram",
    handle: "@rayo.consulting",
    href: "https://www.instagram.com/rayo.consulting",
    icon: InstagramIcon,
    iconBg: "rgba(225,48,108,0.10)",
    iconColor: "#f472b6",
  },
  {
    name: "LinkedIn",
    handle: "Rayo Consulting",
    href: "https://www.linkedin.com/company/rayoconsulting",
    icon: LinkedInIcon,
    iconBg: "rgba(10,102,194,0.10)",
    iconColor: "#60a5fa",
  },
  {
    name: "Sito Web",
    handle: "rayo.consulting",
    href: "https://www.rayo.consulting",
    icon: Globe,
    iconBg: "rgba(37,99,235,0.10)",
    iconColor: "#93c5fd",
  },
  {
    name: "Newsletter",
    handle: "rayo.consulting/newsletter",
    href: "https://www.rayo.consulting/newsletter",
    icon: Newspaper,
    iconBg: "rgba(139,92,246,0.10)",
    iconColor: "#c4b5fd",
  },
  {
    name: "Email",
    handle: "info@rayo.consulting",
    href: "mailto:info@rayo.consulting",
    icon: Mail,
    iconBg: "rgba(148,163,184,0.10)",
    iconColor: "#cbd5e1",
  },
];

/* ───────── Page ───────── */

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 py-12">
      {/* ── Animated mesh background ── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-blue-600/[0.12] blur-[120px] animate-mesh-move" />
        <div className="absolute top-[40%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-indigo-600/[0.08] blur-[100px] animate-mesh-move [animation-delay:-7s]" />
        <div className="absolute -bottom-[10%] right-[20%] w-[50vw] h-[50vw] rounded-full bg-sky-500/[0.06] blur-[90px] animate-mesh-move [animation-delay:-14s]" />
      </div>

      {/* ── Noise texture ── */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Mountains ── */}
      <div className="fixed bottom-0 left-0 w-full z-[2] pointer-events-none leading-none opacity-90">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-auto">
          <defs>
            <linearGradient id="m1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#080a12" />
              <stop offset="100%" stopColor="#030305" />
            </linearGradient>
          </defs>
          <path fill="url(#m1)" fillOpacity="0.9" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          <path fill="#06070d" fillOpacity="0.5" d="M0,288L60,272C120,256,240,224,360,213.3C480,203,600,213,720,234.7C840,256,960,288,1080,277.3C1200,267,1320,213,1380,186.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
      </div>

      {/* ── Content ── */}
      <motion.main
        className="relative z-10 w-full max-w-[420px] flex flex-col items-center gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div variants={itemVariants} className="relative group">
          <div className="absolute inset-0 rounded-[2rem] bg-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative w-[96px] h-[96px] rounded-[2rem] glass flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]">
            <Image
              src="/logo.png"
              alt="Rayo Consulting"
              width={52}
              height={52}
              className="object-contain drop-shadow-lg"
            />
          </div>
        </motion.div>

        {/* Brand text */}
        <motion.div variants={itemVariants} className="text-center space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-text-primary">
            Rayo Consulting
          </h1>
          <p className="text-sm font-medium text-text-secondary leading-relaxed max-w-[280px]">
            Trasformiamo caos operativo in sistemi chiari con l&apos;AI.
          </p>
        </motion.div>

        {/* Links */}
        <motion.nav
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col gap-3 mt-1"
          aria-label="Collegamenti"
        >
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                variants={itemVariants}
                className="group relative flex items-center gap-4 w-full px-2 py-2 pr-4 rounded-2xl glass transition-all duration-300 hover:glass-hover hover:-translate-y-[2px]"
              >
                {/* Icon pill */}
                <span
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border border-white/[0.06] transition-colors duration-300"
                  style={{ background: link.iconBg }}
                >
                  <Icon
                    className="w-5 h-5 transition-colors duration-300"
                    style={{ color: link.iconColor }}
                  />
                </span>

                {/* Text */}
                <span className="flex-1 min-w-0 flex flex-col">
                  <span className="text-[0.95rem] font-semibold text-text-primary tracking-tight">
                    {link.name}
                  </span>
                  <span className="text-xs font-medium text-text-tertiary truncate">
                    {link.handle}
                  </span>
                </span>

                {/* Arrow */}
                <ArrowUpRight className="w-[18px] h-[18px] text-text-tertiary shrink-0 transition-all duration-300 group-hover:text-text-primary group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </motion.a>
            );
          })}
        </motion.nav>

        {/* CTA */}
        <motion.div variants={itemVariants} className="w-full mt-1">
          <a
            href="https://call.rayo.consulting/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-accent text-white font-bold text-sm tracking-[0.06em] uppercase overflow-hidden transition-all duration-300 hover:bg-accent-hover hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(37,99,235,0.35)]"
          >
            {/* subtle shine */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="relative">Prenota una call gratuita</span>
            <ArrowUpRight className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
          </a>
        </motion.div>

        {/* Footer */}
        <motion.footer variants={itemVariants} className="pt-4 text-center">
          <p className="text-[11px] font-medium text-text-tertiary/70 tracking-wide">
            © {new Date().getFullYear()} Rayo Consulting
          </p>
        </motion.footer>
      </motion.main>
    </div>
  );
}
