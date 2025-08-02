export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "Minttix - NFT Ticketing Dapp",
    contibutionDescription:
      "NFT-based event ticketing platform on Solana blockchain with secure QR-based entry validation, NFT resale, on-chain minting, wallet-based payments, Redis cache, and Kafka for mint processing.",
    repoOwner: "Lokesh Jha",
    link: "https://minttix.in/",
  },
  {
    repo: "Sniff - Web-based Crypto Wallet",
    contibutionDescription:
      "Web-based crypto wallet like MetaMask, built for browser use to send and receive SOL and other tokens with secure wallet management.",
    repoOwner: "Lokesh Jha",
    link: "https://sniff-wallet.vercel.app/",
  },
  {
    repo: "Solmeet - Connect with Crypto Experts",
    contibutionDescription:
      "Platform for connecting with crypto experts, enabling users to find and connect with blockchain professionals and mentors.",
    repoOwner: "Lokesh Jha",
    link: "https://solmeet-rosy.vercel.app/",
  },
  {
    repo: "AI-Wakil - AI-Powered Legal Assistant",
    contibutionDescription:
      "Legal document analysis platform with React, Fastify, and AI/ML layer featuring multi-format document parsing and OpenAI API integration for summarization and case assessment.",
    repoOwner: "Lokesh Jha",
    link: "https://github.com/lokesh1jha/ai-wakil",
  },
  {
    repo: "Portfolio Website",
    contibutionDescription:
      "Modern, minimal portfolio built with Next.js and Tailwind CSS featuring responsive layout, dark mode, and smooth animations.",
    repoOwner: "Lokesh Jha",
    link: "https://github.com/lokesh1jha/lokeshjha_portfolio",
  },
  {
    repo: "E-commerce Platform",
    contibutionDescription:
      "Scalable e-commerce solution with secure payments and admin dashboard built with Node.js, Express, and React including product management, order tracking, and user authentication.",
    repoOwner: "Lokesh Jha",
    link: "https://github.com/lokesh1jha",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
