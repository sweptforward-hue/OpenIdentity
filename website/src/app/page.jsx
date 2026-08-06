'use client'

import React, { useState } from 'react';
import { 
  Shield, 
  UserCheck, 
  EyeOff, 
  Fingerprint, 
  Server, 
  GitBranch, 
  AlertTriangle,
  Lock,
  Menu,
  X,
  CheckCircle2,
  XCircle,
  Clock
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-900 selection:text-cyan-50">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-cyan-400" />
              <span className="font-bold text-xl tracking-tight text-white">ZK-ID <span className="text-cyan-400">V3.1</span></span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              <a href="#goals" className="text-sm font-medium hover:text-cyan-400 transition-colors">Core Goals</a>
              <a href="#architecture" className="text-sm font-medium hover:text-cyan-400 transition-colors">Architecture</a>
              <a href="#tradeoffs" className="text-sm font-medium hover:text-cyan-400 transition-colors">Trade-offs</a>
              <a href="#assessment" className="text-sm font-medium hover:text-cyan-400 transition-colors">Assessment</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#goals" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium hover:bg-slate-800 rounded-md">Core Goals</a>
              <a href="#architecture" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium hover:bg-slate-800 rounded-md">Architecture</a>
              <a href="#tradeoffs" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium hover:bg-slate-800 rounded-md">Trade-offs</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-300 text-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Architecture Spec V3.1 Released
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
            Privacy-Preserving <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Personhood Identity
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-400 mx-auto mb-10">
            A workable, honest architecture for zero-knowledge digital identity. Prove who you are, without surveillance. Built for high-assurance services, designed with explicit cryptographic limits.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#architecture" className="px-8 py-3 rounded-lg bg-cyan-600 text-white font-medium hover:bg-cyan-500 transition-colors">
              Explore the Architecture
            </a>
            <a href="#tradeoffs" className="px-8 py-3 rounded-lg bg-slate-800 text-white font-medium hover:bg-slate-700 border border-slate-700 transition-colors">
              Read the Trade-offs
            </a>
          </div>
        </div>
      </section>

      {/* Core Goals Section */}
      <section id="goals" className="py-20 bg-slate-900/50 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Core Design Goals</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">What a citizen should be able to prove to any relying party, without revealing their underlying legal identity.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: UserCheck, title: "Unique Human", desc: "Prove 'I am a unique verified human' without revealing who." },
              { icon: Shield, title: "Attribute Predicates", desc: "Prove properties like 'over 18' or 'resident' without showing date of birth." },
              { icon: CheckCircle2, title: "Not Revoked", desc: "Prove active status via ZK Sparse Merkle Trees without exposing the credential slot." },
              { icon: Fingerprint, title: "Sybil Resistance", desc: "Prove 'I have not already created an account here' using stable per-service nullifiers." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-cyan-900/50 transition-colors group">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-cyan-400 h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Highlights */}
      <section id="architecture" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">V3.1 Design Corrections</h2>
                <p className="text-slate-400 text-lg">Previous iterations were too optimistic. V3.1 fixes major architectural regressions to prevent surveillance and ensure scalability.</p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-cyan-950/50 p-2 rounded-lg border border-cyan-900/50 h-fit">
                    <Server className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">No Mandatory Central Bridge</h4>
                    <p className="text-slate-400 text-sm mt-1">A central OIDC bridge sees every login, recreating surveillance. V3.1 advocates for self-hosted verifiers at the Relying Party.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-1 bg-emerald-950/50 p-2 rounded-lg border border-emerald-900/50 h-fit">
                    <Lock className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Stable Nullifiers</h4>
                    <p className="text-slate-400 text-sm mt-1">Required for one-human-one-account tracking. Trades perfect forward secrecy for essential Sybil resistance.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 bg-purple-950/50 p-2 rounded-lg border border-purple-900/50 h-fit">
                    <GitBranch className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">ZK Sparse Merkle Tree Revocation</h4>
                    <p className="text-slate-400 text-sm mt-1">Flat lists don't scale in ZK. Using an SMT allows efficient non-revocation proofs without public disclosure.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-emerald-500"></div>
                <h3 className="text-white font-mono text-sm mb-4 flex items-center gap-2">
                  <TerminalIcon className="w-4 h-4" /> presentation_workflow.sh
                </h3>
                <div className="space-y-3 font-mono text-xs sm:text-sm text-slate-300">
                  <p className="text-slate-500"># 1. Device computes commitment</p>
                  <p><span className="text-pink-400">C_person</span> = Hash(<span className="text-cyan-300">K_null</span>, <span className="text-cyan-300">K_attr</span>)</p>
                  
                  <p className="text-slate-500 mt-4"># 2. Service sends challenge</p>
                  <p>Challenge: {'{'} nonce, req_age{'>'}18, req_unique {'}'}</p>

                  <p className="text-slate-500 mt-4"># 3. ZK Proof Generation</p>
                  <p className="text-emerald-400">✓ Knows K_null, K_attr</p>
                  <p className="text-emerald-400">✓ C_person is in public Tree</p>
                  <p className="text-emerald-400">✓ Credential proves age ≥ 18</p>
                  <p className="text-emerald-400">✓ Not in Revocation Tree</p>

                  <p className="text-slate-500 mt-4"># 4. Service output derivation</p>
                  <p><span className="text-pink-400">service_nullifier</span> = PRF(<span className="text-cyan-300">K_null</span>, canonical_id)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade-offs Section (The "Honest" part) */}
      <section id="tradeoffs" className="py-24 bg-slate-950 border-t border-slate-900 relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-red-950/30 rounded-full mb-4">
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Rigorous Failure Analysis</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">V3.1 is honest about what cryptography cannot solve. No system is perfectly secure. These are the acknowledged residual risks.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <TradeoffCard 
              title="Issuer Trust is Unavoidable"
              problem="The agency can still create fake people."
              mitigation="Public issuance counts, independent auditors, threshold approvals, and hardware logs."
              risk="Cryptography cannot remove the need to trust the issuer's real-world verification process."
            />
            <TradeoffCard 
              title="Device Compromise"
              problem="If K_null is extracted, past service nullifiers can be recomputed."
              mitigation="Secure Enclaves, biometric unlock, short credential expiry, remote wipe."
              risk="Cannot be fully solved while preserving stable per-service uniqueness."
            />
            <TradeoffCard 
              title="Metadata Leakage"
              problem="ZK doesn't hide IP addresses, timing, or browser fingerprints."
              mitigation="Tor/Nym routing, strict logging guidance, privacy-preserving defaults."
              risk="Cryptography does not hide ordinary web metadata by itself."
            />
            <TradeoffCard 
              title="Recovery vs. Duplicates"
              problem="Losing a device and getting a new K_null changes service nullifiers."
              mitigation="Service-level recovery flows, optional migration proofs."
              risk="Fully unlinkable recovery and perfect duplicate prevention are in tension."
            />
          </div>
        </div>
      </section>

      {/* Go / No-Go Assessment */}
      <section id="assessment" className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-800 bg-slate-950/50">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                  <h3 className="text-2xl font-bold text-white">GO</h3>
                </div>
                <p className="text-slate-400 mb-6 font-medium">Proceed with V3.1 if the goal is:</p>
                <ul className="space-y-3">
                  {['A serious pilot.', 'A national digital identity research project.', 'Privacy-preserving login for high-assurance services.', 'Long-term replacement for weak age/person checks.'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="h-8 w-8 text-red-500" />
                  <h3 className="text-2xl font-bold text-white">NO-GO</h3>
                </div>
                <p className="text-slate-400 mb-6 font-medium">Do not proceed if the goal is:</p>
                <ul className="space-y-3">
                  {['Fast consumer login.', 'A cheap MVP (Timeline is 18-36 months).', 'Perfect anonymity or coercion resistance.', 'Zero trust in the issuer whatsoever.'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center flex flex-col items-center justify-center space-y-4">
             <div className="flex items-center gap-2 text-slate-400 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full text-sm">
                <Clock className="w-4 h-4 text-cyan-500" />
                Realistic Production Timeline: 18–36 months
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-slate-600" />
            <span className="font-bold text-lg text-slate-500">ZK-ID Architecture</span>
          </div>
          <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
            Government verifies identity once. Device creates private holder secrets. Agency never sees usage.
          </p>
          <div className="text-xs text-slate-700">
            Based on the Zero Knowledge Security System V3.1 Specification.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Sub-components

function TradeoffCard({ title, problem, mitigation, risk }) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <div className="space-y-4 text-sm">
        <div>
          <span className="text-slate-500 uppercase tracking-wider text-xs font-bold block mb-1">The Flaw</span>
          <p className="text-slate-300">{problem}</p>
        </div>
        <div>
          <span className="text-emerald-700 uppercase tracking-wider text-xs font-bold block mb-1">Mitigation</span>
          <p className="text-slate-400">{mitigation}</p>
        </div>
        <div className="bg-red-950/20 border border-red-900/30 p-3 rounded-lg mt-4">
          <span className="text-red-500 uppercase tracking-wider text-xs font-bold block mb-1">Residual Risk</span>
          <p className="text-red-200/80">{risk}</p>
        </div>
      </div>
    </div>
  );
}

function TerminalIcon(props) {
  return (
    <svg 
      {...props} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}
