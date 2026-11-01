"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Menu,
  X,
  Gift,
  Coins,
  Droplets,
  Wallet,
  ShieldCheck,
  Sparkles,
  Users,
  ExternalLink,
  Snowflake,
} from "lucide-react";

const CA = "0xb2957Fcabd68d9a748A41D7cb4Dfe0D87af93654";
const TG = "https://t.me/SANTABNBRewards";
const TWITTER = "https://x.com/SantaCoinn";
const BSCSCAN = `https://bscscan.com/token/${CA}`;
const BUY = `https://pancakeswap.finance/swap?outputCurrency=${CA}`;

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const tokenomics = [
  { value: "100M", label: "Total Supply", icon: Coins },
  { value: "3%", label: "Max Wallet", icon: Wallet },
  { value: "6%", label: "Buy / Sell Tax", icon: ShieldCheck },
];

const allocations = [
  {
    value: "2%",
    title: "BNB Rewards",
    description:
      "A portion of the transaction tax is allocated to BNB rewards for eligible holders.",
    icon: Gift,
  },
  {
    value: "2%",
    title: "Automatic Liquidity",
    description:
      "Supports liquidity through the automatic liquidity allocation.",
    icon: Droplets,
  },
  {
    value: "2%",
    title: "Marketing Wallet",
    description:
      "Supports community growth, promotion and project development.",
    icon: Sparkles,
  },
];

const steps = [
  {
    number: "01",
    title: "Get a BNB wallet",
    description:
      "Set up a compatible wallet that supports BNB Smart Chain.",
  },
  {
    number: "02",
    title: "Get BNB",
    description:
      "Fund your wallet with BNB to prepare for your $SANTA purchase.",
  },
  {
    number: "03",
    title: "Swap for $SANTA",
    description:
      "Use PancakeSwap and confirm that you are using the official contract address.",
  },
];

const roadmap = [
  {
    phase: "PHASE 01",
    title: "The Christmas Arrival",
    items: [
      "Project launch",
      "Website and brand identity",
      "Community building",
      "Social media activation",
    ],
  },
  {
    phase: "PHASE 02",
    title: "Spread the Christmas Spirit",
    items: [
      "Community growth campaigns",
      "Marketing expansion",
      "Holder engagement",
      "BNB rewards ecosystem",
    ],
  },
  {
    phase: "PHASE 03",
    title: "A Bigger Celebration",
    items: [
      "Further ecosystem development",
      "Strategic partnerships",
      "More community initiatives",
      "Long-term project growth",
    ],
  },
];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(CA);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main>
      <div className="announcement">
        <span className="announcement-star">✦</span>
        THE CHRISTMAS REWARDS EXPERIENCE IS HERE
        <span className="announcement-star">✦</span>
      </div>

      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <Image
            src="/santa-logo.png"
            alt="Santa BNB Rewards logo"
            width={54}
            height={54}
            priority
          />
          <span>
            SANTA
            <small>BNB REWARDS</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#rewards" onClick={closeMenu}>Rewards</a>
          <a href="#tokenomics" onClick={closeMenu}>Tokenomics</a>
          <a href="#roadmap" onClick={closeMenu}>Roadmap</a>
          <a href="#community" onClick={closeMenu}>Community</a>
          <a
            href={BUY}
            target="_blank"
            rel="noreferrer"
            className="nav-buy"
            onClick={closeMenu}
          >
            Buy $SANTA <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      {/* Opening section: logo and About come before the banner. */}
      <section className="section opening-section" id="about">
        <motion.div
          className="opening-logo-column"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{ duration: 0.7 }}
        >
          <div className="opening-logo-frame">
            <Image
              src="/santa-logo.png"
              alt="Santa BNB Rewards mascot logo"
              width={800}
              height={800}
              priority
              className="opening-logo"
            />
          </div>
          <p className="image-caption">SANTA BNB REWARDS · $SANTA</p>
        </motion.div>

        <motion.div
          className="opening-copy"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          <span className="eyebrow">
            <Snowflake size={15} /> WELCOME TO SANTA BNB REWARDS
          </span>
          <h1>
            MORE THAN A TOKEN.
            <br />
            <span>A CHRISTMAS COMMUNITY.</span>
          </h1>
          <p>
            Welcome to <strong>SANTA BNB REWARDS</strong> — a community-powered
            project on BNB Smart Chain, bringing Christmas spirit, BNB rewards
            and a festive experience together.
          </p>
          <p>
            Built around a simple idea: bring people together, celebrate the
            season and create an ecosystem with rewards at its heart. The
            project combines its Christmas identity with a defined allocation
            for BNB rewards, liquidity and marketing.
          </p>
          <div className="opening-actions">
            <a
              href={BUY}
              target="_blank"
              rel="noreferrer"
              className="button button-gold"
            >
              Buy $SANTA <ArrowUpRight size={18} />
            </a>
            <a
              href={TG}
              target="_blank"
              rel="noreferrer"
              className="button button-outline"
            >
              Join Community <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* The banner is a standalone image with no text or overlays. */}
      <section
        className="banner-section"
        id="home"
        aria-label="Santa BNB Rewards banner"
      >
        <Image
          src="/santa-banner.jpg"
          alt="Santa BNB Rewards Christmas banner artwork"
          width={1500}
          height={500}
          priority
          className="main-banner-image"
        />
      </section>

      <section className="hero-copy-section">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        {/* Floating BNB coins animate behind the text, never over the artwork. */}
        <div className="bnb-coin-field" aria-hidden="true">
          <div className="bnb-coin bnb-coin-one">
            <span>BNB</span>
          </div>
          <div className="bnb-coin bnb-coin-two">
            <span>BNB</span>
          </div>
          <div className="bnb-coin bnb-coin-three">
            <span>BNB</span>
          </div>
        </div>

        <div className="hero-copy-inner">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">
              <Snowflake size={15} /> A NEW KIND OF CHRISTMAS CELEBRATION
            </span>
            <h2>
              MAKE THIS CHRISTMAS
              <br />
              <span>REWARDING.</span>
            </h2>
            <p className="hero-description">
              Discover a festive community experience on BNB Smart Chain,
              bringing people together through a shared Christmas spirit and
              a rewards-focused token model.
            </p>
            <div className="hero-actions">
              <a
                href={BUY}
                target="_blank"
                rel="noreferrer"
                className="button button-gold"
              >
                Buy $SANTA <ArrowUpRight size={18} />
              </a>
              <a
                href={TG}
                target="_blank"
                rel="noreferrer"
                className="button button-outline"
              >
                Join Community <ArrowUpRight size={18} />
              </a>
            </div>
            <a href="#rewards" className="explore-link">
              EXPLORE THE REWARDS <ArrowDown size={15} />
            </a>
          </motion.div>
        </div>

        <div className="hero-bottom-line">
          <span>BUILT ON BNB SMART CHAIN</span>
          <span className="hero-bottom-star">✦</span>
          <span>POWERED BY COMMUNITY</span>
          <span className="hero-bottom-star">✦</span>
          <span>MADE FOR THE SEASON</span>
        </div>
      </section>

      <section className="stats-strip">
        <div className="stats-inner">
          {tokenomics.map((item) => {
            const Icon = item.icon;
            return (
              <div className="stat-item" key={item.label}>
                <span className="stat-icon">
                  <Icon size={20} />
                </span>
                <div>
                  <strong>{item.value}</strong>
                  <small>{item.label}</small>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section rewards-section" id="rewards">
        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
        >
          <span className="eyebrow">
            <Gift size={15} /> THE REWARDS MODEL
          </span>
          <h2>
            THE GIFT OF <span>BNB REWARDS.</span>
          </h2>
          <p>
            A clear tax allocation designed around rewards, liquidity and
            continued project promotion.
          </p>
        </motion.div>

        <div className="reward-grid">
          {allocations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                className="reward-card"
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
                transition={{ duration: 0.55, delay: index * 0.1 }}
              >
                <div className="card-icon">
                  <Icon size={25} />
                </div>
                <strong className="reward-value">{item.value}</strong>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            );
          })}
        </div>
        <p className="disclaimer">
          Reward eligibility and distribution are subject to the deployed
          smart contract rules and applicable project mechanisms.
        </p>
      </section>

      <section className="section tokenomics-section" id="tokenomics">
        <div className="section-heading">
          <span className="eyebrow">SIMPLE AND TRANSPARENT</span>
          <h2>
            $SANTA <span>TOKENOMICS.</span>
          </h2>
          <p>The key numbers behind SANTA BNB REWARDS.</p>
        </div>

        <div className="tokenomics-layout">
          <div className="supply-panel">
            <span className="panel-label">TOTAL TOKEN SUPPLY</span>
            <strong>100,000,000</strong>
            <span className="supply-ticker">$SANTA</span>
            <div className="supply-divider" />
            <div className="supply-detail">
              <span>Maximum Wallet</span>
              <strong>3%</strong>
            </div>
            <div className="supply-detail">
              <span>Buy Tax</span>
              <strong>6%</strong>
            </div>
            <div className="supply-detail">
              <span>Sell Tax</span>
              <strong>6%</strong>
            </div>
          </div>

          <div className="tax-panel">
            <span className="panel-label">TRANSACTION TAX ALLOCATION</span>
            <h3>6% TOTAL TAX</h3>
            <div className="tax-bar">
              <span />
              <span />
              <span />
            </div>
            {allocations.map((item) => (
              <div className="tax-row" key={item.title}>
                <span className="tax-dot" />
                <span>{item.title}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
            <p className="tax-note">
              The stated tax allocation is 2% BNB rewards, 2% automatic
              liquidity and 2% marketing wallet.
            </p>
          </div>
        </div>
      </section>

      <section className="section how-section" id="how-to-buy">
        <div className="section-heading">
          <span className="eyebrow">YOUR JOURNEY STARTS HERE</span>
          <h2>
            HOW TO GET <span>$SANTA.</span>
          </h2>
          <p>
            Three simple steps to join the SANTA BNB REWARDS community.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="buy-center">
          <a
            href={BUY}
            target="_blank"
            rel="noreferrer"
            className="button button-gold"
          >
            Buy $SANTA on PancakeSwap <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <section className="section roadmap-section" id="roadmap">
        <div className="section-heading">
          <span className="eyebrow">THE JOURNEY AHEAD</span>
          <h2>
            OUR <span>ROADMAP.</span>
          </h2>
          <p>
            A direction for growth, community and the future of the project.
          </p>
        </div>

        <div className="roadmap-grid">
          {roadmap.map((phase) => (
            <article className="roadmap-card" key={phase.phase}>
              <span className="phase-label">{phase.phase}</span>
              <h3>{phase.title}</h3>
              <ul>
                {phase.items.map((item) => (
                  <li key={item}>
                    <Check size={15} /> {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="community-section" id="community">
        <div className="community-inner">
          <span className="eyebrow">
            <Users size={15} /> BE PART OF THE CELEBRATION
          </span>
          <h2>
            THE CHRISTMAS SPIRIT
            <br />
            <span>IS BETTER TOGETHER.</span>
          </h2>
          <p>
            Connect with the community, follow project updates and be part of
            the SANTA BNB REWARDS journey.
          </p>
          <div className="community-actions">
            <a
              href={TG}
              target="_blank"
              rel="noreferrer"
              className="button button-gold"
            >
              Join Telegram <ArrowUpRight size={17} />
            </a>
            <a
              href={TWITTER}
              target="_blank"
              rel="noreferrer"
              className="button button-outline"
            >
              Follow on X <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="section contract-section" id="contract">
        <div className="contract-card">
          <span className="eyebrow">ALWAYS VERIFY BEFORE YOU BUY</span>
          <h2>
            OFFICIAL <span>CONTRACT.</span>
          </h2>
          <p>
            Use the official contract address below to identify the SANTA BNB
            REWARDS token.
          </p>
          <div className="contract-address">
            <span>{CA}</span>
            <button onClick={copyAddress} aria-label="Copy contract address">
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? "COPIED" : "COPY"}
            </button>
          </div>
          <a
            href={BSCSCAN}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            VIEW ON BSCSCAN <ExternalLink size={16} />
          </a>
        </div>
      </section>

      <footer className="footer">
        <a href="#home" className="footer-brand">
          <Image
            src="/santa-logo.png"
            alt="Santa BNB Rewards"
            width={48}
            height={48}
          />
          <span>
            SANTA
            <small>BNB REWARDS</small>
          </span>
        </a>
        <p>Bringing Christmas spirit to BNB Smart Chain.</p>
        <div className="footer-links">
          <a href={TG} target="_blank" rel="noreferrer">
            Telegram <ArrowUpRight size={13} />
          </a>
          <a href={TWITTER} target="_blank" rel="noreferrer">
            X <ArrowUpRight size={13} />
          </a>
          <a href={BSCSCAN} target="_blank" rel="noreferrer">
            BscScan <ArrowUpRight size={13} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SANTA BNB REWARDS. ALL RIGHTS RESERVED.</span>
          <span>BUILT ON BNB SMART CHAIN</span>
        </div>
      </footer>

      <div className="ambient-decor decor-one" aria-hidden="true">✦</div>
      <div className="ambient-decor decor-two" aria-hidden="true">✧</div>
      <div className="ambient-decor decor-three" aria-hidden="true">✦</div>
    </main>
  );
}
