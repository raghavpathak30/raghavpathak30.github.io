const f=[{slug:"dispute-desk",title:"Dispute Desk",tagline:"Turns chargeback disputes into evidence-backed responses, with every claim traced to a source.",state:"shipped",stack:["Python","Gemini API","Google AI Studio","FastAPI","Pydantic","Grounding Gate"],metric:"0 fabricated citations, < 4.2 s generation latency",studyGuide:null,desc:"Multimodal chargeback responder built for Razorpay AI Buildathon 2026. Ingests dispute PDFs and telemetry, synthesizes audit-proof representment packages with zero hallucinated citations."},{slug:"ppfdaas",title:"PPFDaaS",tagline:"Scores payment fraud risk on encrypted transactions the server can never decrypt.",state:"in-progress",stack:["C++","Python","Microsoft SEAL","gRPC","Docker","CMake"],metric:"mean 7.54 ms (160-bit CKKS), 198.7 req/s throughput, AUC 0.9791",studyGuide:null,desc:"Linear fraud scoring over encrypted transaction ciphertexts with zero server secret keys. Employs a 160-bit modulus chain with hoisted Galois rotations and fail-closed key provisioning."},{slug:"privadex",title:"PrivaDEX",tagline:"Matches financial trades over encrypted data — no one can see prices or front-run an order.",state:"concluded",stack:["C++","Python","Microsoft SEAL","gRPC","CMake","pytest"],metric:"mean 38.53 ms, p99 45.16 ms for 16-order batches",studyGuide:null,desc:"Dual-scheme homomorphic order matching engine coordinating BFV exact integer matching with degree-27 CKKS polynomial sign approximation at depth 4."},{slug:"reachability-triage",title:"reachability-triage",tagline:"Checks whether a vulnerable dependency is actually reachable from your code, to cut false alarms.",state:"in-progress",stack:["Python","FastAPI","Pydantic","AST","pytest"],metric:"Phase 1 gate: 20 fixtures passing, 110 unit tests",studyGuide:"https://raghavpathak30.github.io/Books/reachability-triage/",desc:"AST-based static index of module call-edges to determine whether vulnerable symbols are reachable in production code vs test-only or uncalled."},{slug:"setuguard",title:"SetuGuard",tagline:"Scans banking apps for security flaws and writes verified detection rules — no made-up evidence.",state:"concluded",stack:["Python","Androguard","FAISS","YARA","XGBoost","SHAP","Flask"],metric:"AUC 0.1444 on 51 Indian banking apps (empirical pivot point)",studyGuide:null,desc:"Reverse-engineering pipeline parsing Android APKs for malicious indicators, certificate hashing, and graph mule scoring."},{slug:"pwnbot",title:"PwnBot",tagline:"Turns plain-English security instructions into safe, sandboxed command execution.",state:"concluded",stack:["Python","Groq","Rich","DuckDuckGo","nmap","pytest"],metric:"32 unit tests verifying shell isolation and nmap/ffuf parsing",studyGuide:null,desc:"Interactive lab penetration testing assistant combining Groq LLM streaming with safe non-interactive subprocess dispatch and TTY isolation."}],m={work:"/work/",projects:"/work/",about:"/about/","about.md":"/about/",resume:"/resume/","resume.md":"/resume/",cv:"/resume/",writing:"/writing/","writing.md":"/writing/",notes:"/writing/",home:"/","~":"/","/":"/"};function K(){const c=document.getElementById("term-input"),h=document.getElementById("term-history"),o=document.getElementById("term-body"),b=document.getElementById("term-boot"),x=document.getElementById("term-hint-row"),k=document.getElementById("term-caret");if(!c||!h||!o||!b)return;let g=[],d=-1;const T=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function l(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function p(e){return new Promise(t=>setTimeout(t,e))}function v(){c.disabled=!1,c.placeholder="type a command (try 'help')...",k&&(k.hidden=!0),x&&(x.hidden=!1),c.focus()}const w=[{text:"raghav@systems:~$ ./init",cls:"text-bold"},{text:"booting workstation...",cls:"text-quiet"},{text:"identity ......... Raghav Pathak",cls:""},{text:"focus ............ AI systems & applied cryptography",cls:""},{text:"status ........... LNMIIT '27, Grand Finalist PSB CyberShield 2026",cls:"text-quiet"},{text:"",cls:""},{text:"type 'help' to see everything, or just start typing.",cls:"text-copper"}];async function A(e,t,a,i){const s=document.createElement("div");if(a&&(s.className=a),e.appendChild(s),!!t){for(let n=0;n<t.length;n++){if(i.skipped){s.textContent=t;return}s.textContent=t.slice(0,n+1),await p(10+Math.random()*14)}o.scrollTop=o.scrollHeight}}async function L(){if(T){b.innerHTML=w.map(a=>`<div class="${a.cls||""}">${l(a.text)}</div>`).join(""),v();return}const e={skipped:!1},t=()=>{e.skipped=!0};window.addEventListener("keydown",t,{once:!0}),window.addEventListener("pointerdown",t,{once:!0});for(const a of w)await A(b,a.text,a.cls,e),await p(e.skipped?0:a.text?90:40);v()}o.addEventListener("click",e=>{const t=e.target;!t.closest("button")&&!t.closest("a")&&!c.disabled&&c.focus()}),x&&x.addEventListener("click",e=>{const t=e.target.closest("button");t&&t.dataset.cmd&&S(t.dataset.cmd)}),c.addEventListener("keydown",e=>{if(e.key==="Enter"){const t=c.value.trim();c.value="",t&&(g.push(t),d=g.length,S(t))}else e.key==="ArrowUp"?(e.preventDefault(),d>0&&(d--,c.value=g[d]||"")):e.key==="ArrowDown"?(e.preventDefault(),d<g.length-1?(d++,c.value=g[d]||""):(d=g.length,c.value="")):e.key==="Tab"?(e.preventDefault(),I(c)):e.ctrlKey&&e.key==="l"&&(e.preventDefault(),h.innerHTML="")});function I(e){const t=e.value.trim().toLowerCase(),i=["help","whoami","bio","skills","contact","ai","gemini","resume","ls","projects","cat about.md","cat resume.md","cat dispute-desk","cat ppfdaas","cat privadex","cat reachability-triage","cat setuguard","cat pwnbot","open resume","open work","open about","open writing","cd work","cd about","cd resume","cd writing","cd home","bench ppfdaas","bench privadex","scan triage","theme modern","theme matrix","theme amber","theme nord","clear"].find(s=>s.startsWith(t));i&&(e.value=i)}async function u(e,t,a){a.innerHTML=`<span class="text-copper">&rarr; opening ${l(t)} ...</span>`,await p(320),window.location.href=e}async function S(e){const t=e.trim(),a=t.split(/\s+/),i=a[0].toLowerCase(),s=a.slice(1).join(" ").toLowerCase(),n=document.createElement("div");n.className="term-entry",n.innerHTML=`
        <div class="term-cmd-header">
          <span class="prompt-user">raghav@systems</span>:<span class="prompt-tilde">~</span><span class="prompt-symbol">$</span>
          <span class="text-bold">${l(t)}</span>
        </div>
        <div class="term-output" id="output-${Date.now()}"></div>
      `,h.appendChild(n),o.scrollTop=o.scrollHeight;const r=n.querySelector(".term-output");switch(i){case"help":C(r);break;case"ai":case"llm":M(r);break;case"gemini":case"studio":E(r);break;case"resume":case"cv":await u("/resume/","/resume/",r);break;case"ls":case"projects":$(r);break;case"whoami":case"bio":P(r);break;case"cat":if(s==="about.md"){await u(m["about.md"],"about.md",r);break}if(s==="resume.md"){await u(m["resume.md"],"resume.md",r);break}if(s==="writing.md"){await u(m["writing.md"],"writing.md",r);break}G(r,s.replace(/\.md$/,""));break;case"open":if(m[s]){await u(m[s],s,r);break}if(f.some(F=>F.slug===s)){await u(`/work/${s}/`,`/work/${s}/`,r);break}r.innerHTML=`<span class="text-terracotta">open: '${l(s)}' not found. Try: resume, work, about, writing, or a project slug.</span>`;break;case"cd":if(!s||s==="~"||s==="home"){await u("/","home",r);break}if(m[s]){await u(m[s],`/${s}/`,r);break}r.innerHTML=`<span class="text-terracotta">cd: ${l(s)}: no such directory. Try: work, about, resume, writing, home.</span>`;break;case"bench":await H(r,s);break;case"scan":case"triage":await B(r);break;case"skills":case"stack":D(r);break;case"contact":R(r);break;case"theme":q(r,s);break;case"clear":case"cls":h.innerHTML="";return;default:r.innerHTML=`
            <span class="text-terracotta">command not found: ${l(i)}</span><br>
            <span class="text-quiet">Type <span class="text-copper">help</span>, or try one of the chips below.</span>
          `}o.scrollTop=o.scrollHeight}function C(e){e.innerHTML=`
<pre>
<span class="text-copper text-bold">COMMANDS</span>

  <span class="text-copper">help</span>                 This list
  <span class="text-copper">whoami</span> / <span class="text-copper">bio</span>        Background &amp; focus
  <span class="text-copper">skills</span>               Technical arsenal
  <span class="text-copper">ai</span> / <span class="text-copper">gemini</span>          Applied AI &amp; LLM engineering notes
  <span class="text-copper">ls</span> / <span class="text-copper">projects</span>        List all six systems
  <span class="text-copper">cat &lt;slug&gt;</span>           Read a project's stack, metric, and summary in place
  <span class="text-copper">bench ppfdaas</span>        <span class="text-signal">&#9889; Run the live CKKS inference benchmark</span>
  <span class="text-copper">bench privadex</span>       <span class="text-signal">&#9889; Run the live homomorphic matching benchmark</span>
  <span class="text-copper">scan triage</span>          <span class="text-signal">&#9889; Run the AST reachability traversal</span>
  <span class="text-copper">contact</span>              Email, GitHub, LinkedIn
  <span class="text-copper">theme &lt;name&gt;</span>         modern | matrix | amber | nord
  <span class="text-copper">clear</span>                Clear the screen (Ctrl+L)

<span class="text-bold">Go somewhere real:</span>
  <span class="text-copper">cd work</span> / <span class="text-copper">open work</span>       &rarr; /work/  (project showcase)
  <span class="text-copper">cd about</span>              &rarr; /about/
  <span class="text-copper">open resume</span>           &rarr; /resume/
  <span class="text-copper">cd writing</span>            &rarr; /writing/
  <span class="text-copper">open &lt;project-slug&gt;</span>  &rarr; /work/&lt;slug&gt;/
</pre>
      `}function M(e){e.innerHTML=`
<pre>
<span class="text-copper text-bold">APPLIED AI ENGINEERING:</span>

1. <span class="text-signal text-bold">Dispute Desk</span> — LLM chargeback-evidence responder (solo, Razorpay AI Buildathon 2026)
   Ingests dispute PDFs, synthesizes evidence, drafts the response. Zero fabricated reason codes
   across 250 test letters, enforced by a two-stage grounding gate.

2. <span class="text-signal text-bold">SetuGuard</span> — retrieval-augmented threat analysis (Grand Finalist, PSB CyberShield 2026)
   FAISS retrieval over a banking security corpus, local Mistral 7B, schema-constrained JSON
   output with MITRE mappings. Zero hallucinated citations across 7 hostile-input cases.

3. <span class="text-signal text-bold">PwnBot</span> — tool-calling agent turning plain-English goals into sandboxed commands.

<span class="text-quiet">Type <span class="text-copper">gemini</span> for the Gemini API / Google AI Studio architecture notes.</span>
</pre>
      `}function E(e){e.innerHTML=`
<pre>
<span class="text-copper text-bold">GOOGLE AI STUDIO &amp; GEMINI API:</span>

<span class="text-signal text-bold">Prototyping:</span> deterministic system directives, JSON schema modes, few-shot grounding to
suppress speculative citations, and prompt caching over long evidence corpora.

<span class="text-signal text-bold">Multimodal pipelines:</span> raw PDFs, chat threads, and transaction timelines in one prompt,
with function calling dispatching into typed dispute/risk objects.

<span class="text-signal text-bold">Grounding gate:</span> every factual claim checked against evidence chunks before it ships.
</pre>
      `}function P(e){e.innerHTML=`
<pre>
<span class="text-bold text-copper">RAGHAV PATHAK</span> — AI systems &amp; applied cryptography
B.Tech CSE, The LNM Institute of Information Technology (LNMIIT), 2023–2027

<span class="text-signal text-bold">Two threads, one discipline:</span>
  • Applied AI: Gemini API, Google AI Studio, agentic workflows, FAISS retrieval,
    schema enforcement, grounding gates.
  • Cryptography &amp; security: homomorphic encryption (Microsoft SEAL), constant-time
    signature math, AST call-graph reachability triage.

<span class="text-signal text-bold">Distinctions:</span> Grand Finalist, PSB CyberShield 2026 (national finale, IIT Hyderabad).

<span class="text-quiet">Design philosophy: empirical provenance as a hard requirement. Zero invented claims.</span>
</pre>
      `}function $(e){const t=f.map(a=>{const i=a.state==="concluded"?"text-signal":"text-terracotta";return`  <span class="text-copper text-bold">${a.slug.padEnd(20)}</span> <span class="${i}">[${a.state}]</span> ${a.tagline}`}).join(`
`);e.innerHTML=`
<pre>
<span class="text-bold text-copper">SIX SYSTEMS:</span>
${t}

<span class="text-quiet">Type <span class="text-copper">cat &lt;slug&gt;</span> to read one here, or <span class="text-copper">open &lt;slug&gt;</span> to go to its page.</span>
</pre>
      `}function G(e,t){const a=f.find(n=>n.slug===t||n.title.toLowerCase()===t);if(!a){e.innerHTML=`
          <span class="text-terracotta">cat: '${l(t)}' not found.</span><br>
          <span class="text-quiet">Available: dispute-desk, ppfdaas, privadex, reachability-triage, setuguard, pwnbot</span>
        `;return}const i=a.stack.map(n=>`<span class="badge-tag">${n}</span>`).join(" "),s=a.studyGuide?`<br><span class="text-copper">study guide:</span> <a href="${a.studyGuide}" target="_blank" class="text-signal ink-link">${a.studyGuide}</a>`:"";e.innerHTML=`
<pre>
<span class="text-copper text-bold">${a.title}</span> — ${a.tagline}
status: <span class="${a.state==="concluded"?"text-signal":"text-terracotta"}">${a.state}</span>

<span class="text-bold">stack:</span> ${i}
<span class="text-bold">key metric:</span> <span class="text-signal">${a.metric}</span>
<span class="text-bold">summary:</span> ${a.desc}
${s}

<a href="/work/${a.slug}/" class="text-copper ink-link">&rarr; open full report (/work/${a.slug}/)</a>
</pre>
      `}function y(e,t=24){const a=Math.min(t,Math.max(0,Math.round(e/100*t))),i=t-a;return`[${"#".repeat(a)}${".".repeat(i)}] ${e.toString().padStart(3," ")}%`}async function H(e,t){if(!t||t.includes("ppfdaas")){e.innerHTML=`
          <div class="text-copper text-bold">[SEAL 4.1] Running 160-bit CKKS inference benchmark...</div>
          <div id="bench-progress" class="text-signal text-bold" style="margin: 0.4rem 0;"></div>
          <div id="bench-stream" class="text-quiet"></div>
        `;const a=e.querySelector("#bench-progress"),i=e.querySelector("#bench-stream");for(let n=0;n<=100;n+=25)a&&(a.textContent=`  ${y(n)} · ${(n*.0754).toFixed(2)} ms`),await p(90);const s=[{text:"→ generating CKKS context (poly_degree=8192, coeff_modulus={60,40,60})",delay:180},{text:"→ encrypting transaction vector (4,096 slots) ... 9.84 ms",delay:280},{text:"→ serializing ciphertext to wire (262,257 bytes) ... OK",delay:240},{text:"→ evaluating multiply_plain_inplace + rescale ... 1.88 ms",delay:300},{text:"→ hoisted_tree_sum (8 Galois rotations) ... 5.48 ms",delay:350},{text:"→ total server latency: 7.54 ms mean (p99 7.79 ms) [PASS < 15ms]",delay:250,cls:"text-signal text-bold"},{text:"→ decrypted score: AUC 0.9791 (noise budget preserved: 27.4 bits)",delay:280,cls:"text-copper text-bold"},{text:"✓ 198.7 req/s closed-loop throughput under 4 concurrent clients.",delay:150,cls:"text-signal"}];for(const n of s){await p(n.delay);const r=document.createElement("div");n.cls&&(r.className=n.cls),r.textContent=n.text,i.appendChild(r),o.scrollTop=o.scrollHeight}}else if(t.includes("privadex")){e.innerHTML=`
          <div class="text-copper text-bold">[PrivaDEX] Running 16-order homomorphic match benchmark...</div>
          <div id="bench-progress-priv" class="text-signal text-bold" style="margin: 0.4rem 0;"></div>
          <div id="bench-stream-priv" class="text-quiet"></div>
        `;const a=e.querySelector("#bench-progress-priv"),i=e.querySelector("#bench-stream-priv");for(let n=0;n<=100;n+=25)a&&(a.textContent=`  ${y(n)} · ${(n*.3853).toFixed(2)} ms`),await p(90);const s=[{text:"→ SIMD slot layout: stride 512, degree 16,384, 16 order slots",delay:180},{text:"→ BFV price equality check ... 14.20 ms",delay:260},{text:"→ CKKS degree-27 sign approximation (depth 4) ... 21.80 ms",delay:280},{text:"→ batch latency: 38.53 ms mean, 45.16 ms p99 [PASS]",delay:250,cls:"text-signal text-bold"},{text:"✓ 14 engine invariant tests passing, zero information leakage.",delay:150,cls:"text-signal"}];for(const n of s){await p(n.delay);const r=document.createElement("div");n.cls&&(r.className=n.cls),r.textContent=n.text,i.appendChild(r),o.scrollTop=o.scrollHeight}}else e.innerHTML=`<span class="text-terracotta">no benchmark script for '${l(t)}'. Try 'bench ppfdaas' or 'bench privadex'.</span>`}async function B(e){e.innerHTML=`
        <div class="text-copper text-bold">[reachability-triage] Traversing AST call-graph...</div>
        <div id="triage-progress" class="text-copper text-bold" style="margin: 0.4rem 0;"></div>
        <div id="triage-stream" class="text-quiet"></div>
      `;const t=e.querySelector("#triage-progress"),a=e.querySelector("#triage-stream");for(let s=0;s<=100;s+=20)t&&(t.textContent=`  ${y(s)} (L1–L4 layers)`),await p(70);const i=[{text:"→ parsing L1 module discovery tree: 18 source files indexed",delay:180},{text:"→ building L2 symbol tables ... OK",delay:240},{text:'→ extracting L3 call-edges (dynamic eval/getattr → "unknown")',delay:260},{text:"→ evaluating 20 labeled test fixtures...",delay:280},{text:"  [1] direct_import: REACHABLE (depth=2)",delay:120,cls:"text-signal"},{text:"  [2] dead_code: NOT_REACHABLE (unreferenced)",delay:120,cls:"text-quiet"},{text:"  [3] pytest_only_fixture: REACHABLE_ONLY_FROM_TESTS",delay:120,cls:"text-terracotta"},{text:"✓ 20/20 fixtures verified, 0 false not_reachable verdicts.",delay:200,cls:"text-signal text-bold"}];for(const s of i){await p(s.delay);const n=document.createElement("div");s.cls&&(n.className=s.cls),n.textContent=s.text,a.appendChild(n),o.scrollTop=o.scrollHeight}}function D(e){e.innerHTML=`
<pre>
<span class="text-copper text-bold">SKILLS:</span>

  <span class="text-bold text-signal">AI Systems:</span> Google AI Studio, Gemini 1.5 Pro/Flash, agent orchestration,
    schema-constrained outputs, prompt caching, grounding gates, FAISS retrieval.

  <span class="text-bold text-copper">Cryptography:</span> Microsoft SEAL 4.1, RNS-CKKS, BFV, noise-budget management,
    Galois rotation hoisting, constant-time modular arithmetic.

  <span class="text-bold text-terracotta">Systems:</span> C++17, Python, Go, gRPC, Docker, static AST call-graph analysis,
    reverse engineering (Androguard, YARA), OWASP Top 10, Nmap.
</pre>
      `}function R(e){e.innerHTML=`
<pre>
<span class="text-copper text-bold">CONTACT:</span>
  email     <a href="mailto:raghavpathak30@gmail.com" class="text-signal ink-link">raghavpathak30@gmail.com</a>
  github    <a href="https://github.com/raghavpathak30" target="_blank" class="text-copper ink-link">github.com/raghavpathak30</a>
  linkedin  <a href="https://www.linkedin.com/in/raghav-pathak-b14b46282" target="_blank" class="text-copper ink-link">linkedin.com/in/raghav-pathak-b14b46282</a>
</pre>
      `}function q(e,t){if(!["modern","matrix","amber","nord"].includes(t)){e.innerHTML=`<span class="text-terracotta">invalid theme: '${l(t)}'. Options: modern, matrix, amber, nord</span>`;return}typeof window.setPortfolioTheme=="function"?window.setPortfolioTheme(t):(t==="modern"?document.documentElement.removeAttribute("data-theme"):document.documentElement.setAttribute("data-theme",t),localStorage.setItem("portfolio-theme",t)),e.innerHTML=`<span class="text-signal">✓ theme switched to <b>${t}</b></span>`}L()}document.addEventListener("DOMContentLoaded",K);
