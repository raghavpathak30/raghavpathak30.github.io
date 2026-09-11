const b=[{slug:"dispute-desk",title:"Dispute Desk",tagline:"Autonomous multimodal chargeback representment agent with zero-hallucination citation gating.",state:"shipped",stack:["Python","Gemini API","Google AI Studio","FastAPI","Pydantic","Grounding Gate"],metric:"0 fabricated citations, < 4.2 s generation latency",studyGuide:null,desc:"Multimodal chargeback responder built for Razorpay AI Buildathon 2026. Ingests dispute PDFs and telemetry, synthesizes audit-proof representment packages with zero hallucinated citations. Shipped with video walkthrough."},{slug:"ppfdaas",title:"PPFDaaS",tagline:"Privacy-preserving payment-fraud inference using CKKS homomorphic encryption.",state:"in-progress",stack:["C++","Python","Microsoft SEAL","gRPC","Docker","CMake"],metric:"mean 7.54 ms (160-bit CKKS), 198.7 req/s throughput, AUC 0.9791",studyGuide:null,desc:"Linear fraud scoring over encrypted transaction ciphertexts with zero server secret keys. Employs 160-bit modulus chain with hoisted Galois rotations and fail-closed key provisioning."},{slug:"privadex",title:"PrivaDEX",tagline:"Confidential-computation matching engine evaluating trades over homomorphically encrypted records.",state:"concluded",stack:["C++","Python","Microsoft SEAL","gRPC","CMake","pytest"],metric:"mean 38.53 ms, p99 45.16 ms for 16-order batches",studyGuide:null,desc:"Dual-scheme homomorphic order matching engine coordinating BFV exact integer matching with degree-27 CKKS polynomial sign approximation at depth 4."},{slug:"reachability-triage",title:"reachability-triage",tagline:"Static dependency vulnerability reachability analysis and advisory triage.",state:"in-progress",stack:["Python","FastAPI","Pydantic","AST","pytest"],metric:"Phase 1 gate: 20 fixtures passing, 110 unit tests",studyGuide:"https://raghavpathak30.github.io/Books/reachability-triage/",desc:"AST-based static index of module call-edges to determine whether vulnerable symbols are reachable in production code vs test-only or uncalled."},{slug:"setuguard",title:"SetuGuard",tagline:"Static Android malware analysis and mule-account scoring for banking defense.",state:"concluded",stack:["Python","Androguard","FAISS","YARA","XGBoost","SHAP","Flask"],metric:"AUC 0.1444 on 51 Indian banking apps (empirical pivot point)",studyGuide:null,desc:"Reverse-engineering pipeline parsing Android APKs for malicious indicators, certificate hashing, and graph mule scoring."},{slug:"pwnbot",title:"PwnBot",tagline:"Python CLI penetration testing assistant with automated reconnaissance and tool parsing.",state:"concluded",stack:["Python","Groq","Rich","DuckDuckGo","nmap","pytest"],metric:"32 unit tests verifying shell isolation and nmap/ffuf parsing",studyGuide:null,desc:"Interactive lab penetration testing assistant combining Groq LLM streaming with safe non-interactive subprocess dispatch and TTY isolation."}];function v(){const l=document.getElementById("term-input"),p=document.getElementById("term-history"),o=document.getElementById("term-body"),y=document.getElementById("btn-clear"),h=document.getElementById("quick-chips");if(!l||!p||!o)return;let d=[],c=-1;o.addEventListener("click",e=>{const t=e.target;!t.closest("button")&&!t.closest("a")&&l.focus()}),h&&h.addEventListener("click",e=>{const t=e.target.closest("button");t&&t.dataset.cmd&&x(t.dataset.cmd)}),y&&y.addEventListener("click",()=>{p.innerHTML=""}),l.addEventListener("keydown",e=>{if(e.key==="Enter"){const t=l.value.trim();l.value="",t&&(d.push(t),c=d.length,x(t))}else e.key==="ArrowUp"?(e.preventDefault(),c>0&&(c--,l.value=d[c]||"")):e.key==="ArrowDown"?(e.preventDefault(),c<d.length-1?(c++,l.value=d[c]||""):(c=d.length,l.value="")):e.key==="Tab"?(e.preventDefault(),S(l)):e.ctrlKey&&e.key==="l"&&(e.preventDefault(),p.innerHTML="")});function S(e){const t=e.value.trim().toLowerCase(),r=["help","projects","ls","whoami","bio","skills","contact","ai","gemini","studio","resume","bench ppfdaas","bench privadex","scan triage","cat dispute-desk","cat ppfdaas","cat privadex","cat reachability-triage","cat setuguard","cat pwnbot","theme modern","theme matrix","theme amber","theme nord","gui","clear"].find(i=>i.startsWith(t));r&&(e.value=r)}async function x(e){const t=e.trim(),s=t.split(/\s+/),r=s[0].toLowerCase(),i=s.slice(1).join(" ").toLowerCase(),a=document.createElement("div");a.className="term-entry",a.innerHTML=`
        <div class="term-cmd-header">
          <span class="prompt-user">raghav@systems</span>:<span class="prompt-tilde">~</span><span class="prompt-symbol">$</span>
          <span class="text-bold">${m(t)}</span>
        </div>
        <div class="term-output" id="output-${Date.now()}"></div>
      `,p.appendChild(a),o.scrollTop=o.scrollHeight;const n=a.querySelector(".term-output");switch(r){case"help":A(n);break;case"ai":case"models":case"llm":k(n);break;case"gemini":case"studio":I(n);break;case"resume":case"cv":L(n);break;case"ls":case"projects":E(n);break;case"whoami":case"bio":T(n);break;case"cat":case"open":case"view":w(n,i);break;case"bench":await P(n,i);break;case"scan":case"triage":await C(n);break;case"skills":case"stack":M(n);break;case"contact":G(n);break;case"theme":R(n,i);break;case"gui":case"visual":typeof window.setPortfolioMode=="function"?window.setPortfolioMode("gui"):document.dispatchEvent(new CustomEvent("switch-to-visual")),n.innerHTML='<span class="text-emerald">✓ Switching to Visual GUI mode...</span>';break;case"clear":case"cls":p.innerHTML="";return;default:n.innerHTML=`
            <span class="text-amber">bash: command not found: ${m(r)}</span><br>
            <span class="text-quiet">Type <span class="text-cyan">help</span> or click one of the suggested chips above.</span>
          `}o.scrollTop=o.scrollHeight}function A(e){e.innerHTML=`
<pre>
<span class="text-cyan text-bold">AI ENGINEERING &amp; SECURITY COMMAND MANUAL:</span>

  <span class="text-emerald text-bold">ai</span>                   Overview of Applied AI, LLM Agents &amp; RAG Systems
  <span class="text-emerald text-bold">gemini / studio</span>      Gemini 1.5 Pro / Flash &amp; Google AI Studio Architecture
  <span class="text-emerald text-bold">resume</span>               Download PDF resume &amp; view engineering credentials
  <span class="text-cyan">projects / ls</span>        List all repositories (AI, Systems &amp; Cryptography)
  <span class="text-cyan">cat &lt;slug&gt;</span>           Inspect project architecture, stack, and empirical claims
  <span class="text-cyan">bench ppfdaas</span>        <span class="text-emerald">⚡ Live 160-bit CKKS confidential inference simulation</span>
  <span class="text-cyan">bench privadex</span>       <span class="text-emerald">⚡ Live 16-order homomorphic matching simulation</span>
  <span class="text-cyan">scan triage</span>          <span class="text-emerald">⚡ Live AST BFS reachability traversal run</span>
  <span class="text-cyan">whoami</span>               Background, dual AI/Crypto focus, LNMIIT, &amp; distinctions
  <span class="text-cyan">skills</span>               Technical arsenal (Gemini API, SEAL 4.1, FAISS, C++, Python)
  <span class="text-cyan">contact</span>              Email, GitHub, and LinkedIn profiles
  <span class="text-cyan">theme &lt;name&gt;</span>         Switch theme: <span class="text-emerald">modern</span> | <span class="text-emerald">matrix</span> | <span class="text-amber">amber</span> | <span class="text-cyan">nord</span>
  <span class="text-cyan">gui</span>                  Switch to visual layout
  <span class="text-cyan">clear</span>                Clear terminal screen (Ctrl+L)
</pre>
      `}function k(e){e.innerHTML=`
<pre>
<span class="text-cyan text-bold">APPLIED AI ENGINEERING &amp; LLM SYSTEMS:</span>

1. <span class="text-emerald text-bold">Dispute Desk</span> — LLM Chargeback-Evidence Responder (Solo Submission)
   • Built for <span class="text-cyan">Razorpay AI Buildathon 2026, Track 02 (AI Risk Manager)</span>
   • Automated dispute ingestion, multimodal evidence synthesis, and formal response drafting.
   • Prototyped in <span class="text-bold">Google AI Studio</span> using <span class="text-bold">Gemini API</span> structured outputs.
   • Implemented two-stage grounding gate: zero fabricated reason codes across 250 test letters.

2. <span class="text-emerald text-bold">SetuGuard</span> — Retrieval-Augmented Threat Analysis Pipeline
   • <span class="text-cyan">Grand Finalist, PSB CyberShield 2026</span> (IIT Hyderabad, Team of 4)
   • FAISS vector retrieval over curated banking security corpus; local Mistral 7B / Ollama.
   • Schema-constrained JSON report with MITRE technique mapping and YARA generation.
   • Grounding gate rejected all hallucinated citations; 11x faster scoring with precomputed artifacts.

3. <span class="text-emerald text-bold">PwnBot</span> — Tool-Calling LLM Agent
   • Natural language goal to verified tool dispatch pipeline (Groq &amp; LLM APIs).
   • Scope guard enforcing strict boundary containment (shell=False execution runner).

4. <span class="text-emerald text-bold">PPFDaaS</span> — Confidential AI &amp; Blind Machine Learning Inference
   • Neural scoring directly over encrypted ciphertext using Microsoft SEAL 4.1 (CKKS).
   • 0.9791 AUC on credit transaction dataset with zero server plaintext exposure.

<span class="text-quiet">Type <span class="text-cyan">gemini</span> for Google AI Studio &amp; Gemini 1.5 architecture details.</span>
</pre>
      `}function I(e){e.innerHTML=`
<pre>
<span class="text-cyan text-bold">GOOGLE AI STUDIO &amp; GEMINI API ARCHITECTURE:</span>

<span class="text-emerald text-bold">1. Google AI Studio Rapid Prototyping:</span>
   • System Directives: Enforced deterministic role boundaries and JSON schema modes.
   • Few-Shot Grounding: Curated negative examples to suppress speculative citations.
   • Prompt Caching: Leveraged long-context caching on evidence corpora to cut inference latency.

<span class="text-emerald text-bold">2. Gemini 1.5 Pro &amp; Flash Multimodal Pipelines:</span>
   • Ingested raw PDF invoices, customer messaging threads, and transaction timelines in one prompt.
   • Function Calling: Deterministic schema dispatch into dispute policy engines and risk calculators.
   • Strict JSON Schemas: Output constrained to verified enum of Visa, Mastercard &amp; Amex reason codes.

<span class="text-emerald text-bold">3. Zero-Hallucination Grounding Gate:</span>
   • Validated every emitted factual claim against ground-truth evidence chunks.
   • Rejected ungrounded assertions before letters reach bank operations or payment networks.

<span class="text-quiet">See the interactive visual workflow in GUI mode: type <span class="text-cyan">gui</span> or click ⊞ Visual GUI.</span>
</pre>
      `}function L(e){e.innerHTML=`
<pre>
<span class="text-cyan text-bold">RAGHAV PATHAK — RESUME (AI ENGINEERING &amp; SYSTEMS SECURITY)</span>
B.Tech CSE, LNMIIT Jaipur (2023–2027) · Grand Finalist, PSB CyberShield 2026

<span class="text-bold">Core Focus:</span> AI Engineering, LLM Applications, RAG Pipelines, Applied Cryptography
<span class="text-bold">Key Projects:</span> Dispute Desk (Razorpay AI), SetuGuard (IIT Hyderabad), PPFDaaS (SEAL 4.1)

<span class="text-emerald text-bold">Direct Actions:</span>
➔ <a href="/raghav_pathak_resume.pdf" download="Raghav_Pathak_Resume.pdf" class="text-cyan" style="text-decoration: underline;">Download PDF Resume (/raghav_pathak_resume.pdf)</a>
➔ <a href="/resume/" class="text-emerald" style="text-decoration: underline;">View Full Interactive Web Resume (/resume/)</a>
</pre>
      `}function T(e){e.innerHTML=`
<pre>
<span class="text-bold text-cyan">RAGHAV PATHAK</span> — AI Engineering &amp; Systems Security
Location: India · Affiliation: The LNM Institute of Information Technology (LNMIIT, 2027)

<span class="text-emerald text-bold">Dual Technical Focus:</span>
  • <span class="text-bold">Applied AI &amp; LLM Engineering:</span> Gemini API, Google AI Studio, Agentic Workflows,
    FAISS Retrieval-Augmented Generation, Schema Enforcement &amp; Grounding Gates.
  • <span class="text-bold">Cryptography &amp; Security Systems:</span> Homomorphic Encryption (Microsoft SEAL 4.1),
    Zero-Knowledge Trust Boundaries, AST Call-Graph Reachability Triage.

<span class="text-emerald text-bold">Key Honors &amp; Distinctions:</span>
  • <span class="text-bold">Grand Finalist, PSB CyberShield 2026</span> (National Finale at IIT Hyderabad)
  • Author of PPFDaaS: 160-bit CKKS confidential inference system
  • Designer of Dispute Desk: LLM chargeback responder (Razorpay AI Buildathon)

<span class="text-quiet">Design Philosophy: Empirical provenance as a hard requirement. Zero invented claims.</span>
</pre>
      `}function E(e){let t=b.map(s=>{const r=s.state==="concluded"?"text-emerald":"text-amber";return`  <span class="text-cyan text-bold">${s.slug.padEnd(20)}</span> <span class="${r}">[${s.state}]</span> ${s.tagline}`}).join(`
`);e.innerHTML=`
<pre>
<span class="text-bold text-cyan">PROJECT INVENTORY (5 Systems):</span>
${t}

<span class="text-quiet">Type <span class="text-cyan">cat &lt;slug&gt;</span> (e.g. <span class="text-cyan">cat ppfdaas</span>) to view full specs, or <span class="text-cyan">bench ppfdaas</span> to simulate live.</span>
</pre>
      `}function w(e,t){const s=b.find(a=>a.slug===t||a.title.toLowerCase()===t);if(!s){e.innerHTML=`
          <span class="text-amber">Error: Project '${m(t)}' not found.</span><br>
          <span class="text-quiet">Available projects: ppfdaas, privadex, reachability-triage, setuguard, pwnbot</span>
        `;return}const r=s.stack.map(a=>`<span class="badge-tag">${a}</span>`).join(" "),i=s.studyGuide?`<br><span class="text-cyan">📖 Study Guide:</span> <a href="${s.studyGuide}" target="_blank" class="text-emerald">${s.studyGuide}</a>`:"";e.innerHTML=`
<pre>
<span class="text-cyan text-bold">${s.title}</span> — ${s.tagline}
Status: <span class="${s.state==="concluded"?"text-emerald":"text-amber"}">${s.state}</span>

<span class="text-bold">Stack:</span> ${r}
<span class="text-bold">Key Metric:</span> <span class="text-emerald">${s.metric}</span>
<span class="text-bold">Summary:</span> ${s.desc}
${i}

<a href="/work/${s.slug}" class="text-cyan" style="text-decoration: underline;">➔ Open detailed project report & claim table (/work/${s.slug})</a>
</pre>
      `}function u(e,t=24){const s=Math.min(t,Math.max(0,Math.round(e/100*t))),r=t-s;return`[${"█".repeat(s)}${"░".repeat(r)}] ${e.toString().padStart(3," ")}%`}async function P(e,t){if(!t||t.includes("ppfdaas")){e.innerHTML=`
          <div class="text-cyan text-bold">[SEAL 4.1] Initializing 160-bit CKKS Inference Benchmark...</div>
          <div id="bench-progress" class="text-emerald text-bold" style="font-family: var(--font-mono); margin: 0.4rem 0;"></div>
          <div id="bench-stream" class="text-quiet"></div>
        `;const s=e.querySelector("#bench-progress"),r=e.querySelector("#bench-stream");for(let a=0;a<=100;a+=25)s&&(s.textContent=`  Execution: ${u(a)} · ${(a*.0754).toFixed(2)} ms`),await new Promise(n=>setTimeout(n,90));const i=[{text:"→ Generating CKKS Context (poly_degree=8192, coeff_modulus={60,40,60}, 128-bit security)",delay:180},{text:"→ Encrypting client transaction vector (4,096 feature slots) ... 9.84 ms",delay:280},{text:"→ Serializing ciphertext to wire (262,257 bytes, -33.3% bandwidth delta) ... OK",delay:240},{text:"→ gRPC upload to vendor_server_160 (eval-only, zero SecretKey) ... OK",delay:200},{text:"→ Server evaluating multiply_plain_inplace + rescale ... 1.88 ms",delay:300},{text:"→ Executing hoisted_tree_sum (8 Galois key rotations across slots) ... 5.48 ms",delay:350},{text:"→ Total Server Inference Latency: 7.54 ms mean (p99 7.79 ms) [PASS SLA < 15ms]",delay:250,style:"text-emerald text-bold"},{text:"→ Decrypting score at bank client: AUC 0.9791 (noise budget preserved: 27.4 bits)",delay:280,style:"text-cyan text-bold"},{text:"✓ Benchmark verified: 198.7 req/s closed-loop throughput under 4 concurrent clients.",delay:150,style:"text-emerald"}];for(const a of i){await new Promise(g=>setTimeout(g,a.delay));const n=document.createElement("div");a.style&&(n.className=a.style),n.textContent=a.text,r.appendChild(n),o.scrollTop=o.scrollHeight}}else if(t.includes("privadex")){e.innerHTML=`
          <div class="text-cyan text-bold">[PrivaDEX] Benchmarking 16-Order Homomorphic Match Engine...</div>
          <div id="bench-progress-priv" class="text-emerald text-bold" style="font-family: var(--font-mono); margin: 0.4rem 0;"></div>
          <div id="bench-stream-priv" class="text-quiet"></div>
        `;const s=e.querySelector("#bench-progress-priv"),r=e.querySelector("#bench-stream-priv");for(let a=0;a<=100;a+=25)s&&(s.textContent=`  Execution: ${u(a)} · ${(a*.3853).toFixed(2)} ms`),await new Promise(n=>setTimeout(n,90));const i=[{text:"→ SIMD slot layout: stride 512, degree 16,384, 16 order slots initialized",delay:180},{text:"→ BFV price equality test: evaluating modular difference ... 14.20 ms",delay:260},{text:"→ CKKS degree-27 continuous sign approximation (depth 4) ... 21.80 ms",delay:280},{text:"→ Slot blinding identity transformations applied ... OK",delay:200},{text:"→ Batch Latency: 38.53 ms mean, 45.16 ms p99 (100 iterations) [PASS]",delay:250,style:"text-emerald text-bold"},{text:"✓ 14 engine invariant tests passing with zero information leakage.",delay:150,style:"text-emerald"}];for(const a of i){await new Promise(g=>setTimeout(g,a.delay));const n=document.createElement("div");a.style&&(n.className=a.style),n.textContent=a.text,r.appendChild(n),o.scrollTop=o.scrollHeight}}else e.innerHTML=`<span class="text-amber">No automated benchmark script for '${m(t)}'. Try 'bench ppfdaas' or 'bench privadex'.</span>`}async function C(e){e.innerHTML=`
        <div class="text-cyan text-bold">[reachability-triage] Traversing AST call-graph BFS...</div>
        <div id="triage-progress" class="text-cyan text-bold" style="font-family: var(--font-mono); margin: 0.4rem 0;"></div>
        <div id="triage-stream" class="text-quiet"></div>
      `;const t=e.querySelector("#triage-progress"),s=e.querySelector("#triage-stream");for(let i=0;i<=100;i+=20)t&&(t.textContent=`  Call-Graph Traversal: ${u(i)} (L1-L4 layers)`),await new Promise(a=>setTimeout(a,70));const r=[{text:"→ Parsing L1 module discovery tree: 18 source files indexed",delay:180},{text:"→ Building L2 symbol tables and cross-file import graph ... OK",delay:240},{text:'→ Extracting L3 call-edges (filtering dynamic eval/getattr -> "unknown")',delay:260},{text:"→ Evaluating entrypoint reachability for 20 labeled test fixtures...",delay:280},{text:"  [FIXTURE-1] direct_import: REACHABLE (depth=2)",delay:120,style:"text-emerald"},{text:"  [FIXTURE-2] dead_code: NOT_REACHABLE (unreferenced)",delay:120,style:"text-quiet"},{text:"  [FIXTURE-3] pytest_only_fixture: REACHABLE_ONLY_FROM_TESTS",delay:120,style:"text-amber"},{text:"  [FIXTURE-4] dynamic_getattr: UNKNOWN (conservative fallback)",delay:120,style:"text-cyan"},{text:"✓ 20/20 test fixtures verified with 0 false not_reachable verdicts.",delay:200,style:"text-emerald text-bold"}];for(const i of r){await new Promise(n=>setTimeout(n,i.delay));const a=document.createElement("div");i.style&&(a.className=i.style),a.textContent=i.text,s.appendChild(a),o.scrollTop=o.scrollHeight}}function M(e){e.innerHTML=`
<pre>
<span class="text-cyan text-bold">TECHNICAL SKILLS &amp; ARSENAL:</span>

  <span class="text-bold text-emerald">AI Systems &amp; Applied LLMs:</span>
    • Google AI Studio, Gemini 1.5 Pro / Flash, Agent Tool Orchestration
    • Schema-Constrained Structured Outputs, Prompt Caching, Zero-Hallucination Grounding
    • Retrieval-Augmented Generation (FAISS), Local Model Serving (Ollama, Mistral 7B)
    • ML Evaluation: Stratified Repeated Holdout, AUCPR/AUROC, Data Leakage Auditing

  <span class="text-bold text-cyan">Cryptography &amp; Confidential Compute:</span>
    • Microsoft SEAL 4.1, RNS-CKKS, BFV, HHE (Transciphering, HERA-16, HalfBoot)
    • Noise-budget preservation, Galois key rotation hoisting, SIMD batching

  <span class="text-bold text-amber">Systems &amp; Program Analysis:</span>
    • C++17 (-O3, OpenMP), Python 3.12+, Go, CMake, gRPC / Protobuf, Docker
    • Static call-graph AST reachability analysis (FastAPI, Python AST)
    • Reverse engineering (Androguard, YARA, FAISS), OWASP Top 10, Nmap
</pre>
      `}function G(e){e.innerHTML=`
<pre>
<span class="text-cyan text-bold">CONTACT & PROFILES:</span>
  • Email:    <a href="mailto:raghav.pathak@example.com" class="text-emerald">raghav.pathak@example.com</a>
  • GitHub:   <a href="https://github.com/raghavpathak30" target="_blank" class="text-cyan">github.com/raghavpathak30</a>
  • LinkedIn: <a href="https://www.linkedin.com/in/raghav-pathak-b14b46282" target="_blank" class="text-cyan">linkedin.com/in/raghav-pathak-b14b46282</a>
</pre>
      `}function R(e,t){if(!["modern","matrix","amber","nord"].includes(t)){e.innerHTML=`<span class="text-amber">Invalid theme: '${m(t)}'. Options: modern, matrix, amber, nord</span>`;return}typeof window.setPortfolioTheme=="function"?window.setPortfolioTheme(t):(t==="modern"?document.documentElement.removeAttribute("data-theme"):document.documentElement.setAttribute("data-theme",t),localStorage.setItem("portfolio-theme",t)),e.innerHTML=`<span class="text-emerald">✓ Theme switched to <b>${t}</b></span>`}function m(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const f=document.getElementById("btn-toggle-visual");f&&f.addEventListener("click",()=>{typeof window.setPortfolioMode=="function"?window.setPortfolioMode("gui"):document.dispatchEvent(new CustomEvent("switch-to-visual"))})}document.addEventListener("DOMContentLoaded",v);v();
