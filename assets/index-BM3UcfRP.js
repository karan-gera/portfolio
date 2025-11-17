(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();const c=[{title:"Color Palette Generator",description:"A modern, interactive color palette generator built with React and TypeScript. Create, edit, and save beautiful color palettes using advanced color theory relationships with a clean, monospace design aesthetic.",technologies:["React.js","TypeScript","Vite","CSS Modules","Color Theory","LocalStorage","State Management"],link:"https://github.com/karan-gera/color-palette",motivation:"I wanted a color palette tool that went beyond simple random generation. Most palette generators either lack control or don't understand color theory relationships. As an artist and graphic designer myself, I've seen how many design tools put essential features behind paywalls or premium tiers, creating barriers for independent artists and designers who are just starting out or working on personal projects. I set out to build something that combines the spontaneity of random generation with the structure of color harmony rules - completely free, no accounts, no subscriptions. Just a tool that works and democratizes access to proper color theory tools.",experience:"This project was an exercise in building intuitive UI for creative tools. The challenge was implementing proper color theory algorithms - converting between color spaces, calculating complementary and analogous relationships, and ensuring the math translated to visually pleasing palettes. I built a custom undo/redo system using React hooks to track palette history, and implemented a locking mechanism so users could preserve colors they liked while regenerating others. The monospace aesthetic and smooth transitions were deliberate choices to make the tool feel polished. Keeping it completely free and accessible was a core design principle - no authentication barriers, no usage limits, no premium features.",results:"The generator supports seven different color harmony relationships (complementary, analogous, triadic, tetradic, split-complementary, monochromatic, and random) with individual color controls for editing, rerolling, and locking. The undo/redo system tracks full palette history, and local storage persistence lets users save and reload palettes. The dark/light theme toggle and responsive design work seamlessly across devices. The completely free, no-barrier access model makes professional color theory tools available to anyone.",feedback:"Personal use has been great for quick palette generation in design work. The color locking feature turned out to be essential - being able to lock a few colors and regenerate the rest is exactly the workflow I needed. The monospace typography gives it a distinct, developer-focused aesthetic that I've gotten positive feedback on. The free, unrestricted access has been specifically appreciated - several designers have mentioned using it as their go-to tool instead of paid alternatives.",challenges:"Color theory math is deceptively complex - HSL to hex conversions, hue rotation, and maintaining proper saturation/lightness relationships required careful implementation. Building the undo/redo system to work smoothly with React's state management took several iterations. The biggest UX challenge was making individual color controls (edit, reroll, delete, lock) feel intuitive without cluttering the interface. Ensuring smooth animations and theme transitions across all components required careful CSS architecture. Balancing feature richness with the commitment to keeping everything free and client-side meant being thoughtful about what functionality to include."},{title:"Better GitHub",description:"A Chrome extension that declutters GitHub's landing page by removing distracting elements like feeds, promotional content, and sidebars. Provides a cleaner, more focused GitHub experience with instant toggle controls.",technologies:["TypeScript","Vite","Chrome Extension APIs","CSS Injection","Web Extensions"],motivation:"GitHub's landing page became increasingly cluttered with feeds, promotional banners, and sidebars that distracted from actual work. I wanted a way to strip away the noise and get straight to my repositories and notifications without the visual clutter.",experience:"Building a browser extension was a new challenge - understanding the Chrome Extension manifest system, content script injection, and managing state across different contexts. The key was making CSS injections work reliably across GitHub's dynamic page loads while keeping the toggle responsive. I built it with Vite for fast development iteration and TypeScript for type safety. The architecture needed to be extensible so adding new customizations would be straightforward. Kept the codebase Firefox-friendly from the start by using standard WebExtensions APIs, making an eventual cross-platform release straightforward.",results:"The extension successfully removes all the targeted clutter elements - feeds, changelog sections, Copilot prompts, and sidebars - while maintaining GitHub's core functionality. The toggle works instantly without page reloads, and the custom CSS injections persist across navigation. It's become my daily driver for GitHub. The Firefox-compatible architecture means porting will require minimal changes.",feedback:"Personal use has been great - the cleaner interface makes GitHub feel more like a tool and less like a social feed. The instant toggle is particularly useful when I need to quickly check the feed for team activity then switch back to focused mode. Planning to release on both Chrome Web Store and Firefox Add-ons once I add proper extension icons.",challenges:"GitHub's DOM structure changes frequently, so CSS selectors needed to be robust yet specific enough to avoid breaking other elements. Managing the extension's state across page navigations required careful use of Chrome's storage APIs. The biggest challenge was ensuring the CSS injections applied quickly enough to avoid visible flashing of unwanted content during page loads. Maintaining cross-browser compatibility required careful API selection to avoid Chrome-specific features that wouldn't work in Firefox."},{title:"Community-Sentiment Options Trading Agent",description:"An algorithmic trading system that analyzes Reddit community sentiment to guide options trading strategies. Uses covered calls and cash-secured puts for risk management while attempting to outperform market benchmarks.",technologies:["Python","PyTorch","Reddit API","Alpaca Paper Trading API","NLP","Sentiment Analysis","Financial Modeling","REST APIs"],link:"https://github.com/karan-gera/options-agent",motivation:"I was curious about whether community sentiment on platforms like Reddit could provide meaningful signals for investment decisions. Rather than just sentiment analysis, I wanted to build a system that could act on these insights using conservative options strategies that provide built-in safety nets.",experience:"This project combines natural language processing for sentiment analysis with financial market data and options trading logic. The challenge was building a system that could parse community discussions, extract actionable sentiment signals, and translate those into specific trading decisions. I focused on covered calls and cash-secured puts as they provide income generation while limiting downside risk.",results:"The current iteration has outperformed the S&P 500 by 13% over a one-month tracking period. The system successfully identifies sentiment trends from subreddit discussions and translates them into options positions with built-in risk management through the covered call and cash-secured put strategies.",feedback:"Still in active development and testing. The early performance results are encouraging, though I'm focused on longer-term validation and ensuring the strategy remains robust across different market conditions.",challenges:"Filtering signal from noise in community discussions is complex - not all sentiment is actionable or relevant to market movements. Building reliable sentiment analysis that can distinguish between genuine market insight and speculation or manipulation. The biggest challenge is ensuring the system remains conservative and doesn't expose excessive risk while still capturing upside potential. The active training set is based on r/ThetaGang, which, while focused on covered and cash-secured strategies, is not representative of the broader market."},{title:"MCP Git Orchestrator",description:"Local-first Model Context Protocol (MCP) server providing AI agents with safe, structured Git control. Built for Cursor IDE integration with comprehensive safety mechanisms and policy enforcement.",technologies:["TypeScript","Node.js","MCP","Git","GitHub API","JSON-RPC","CLI Tools","Process Management","File System APIs"],link:"https://github.com/karan-gera/mcp-git-orchestrator",motivation:"I wanted to explore how AI agents could safely interact with Git repositories. Most existing integrations seemed either too limited or potentially risky, so I set out to build something that balanced functionality with safety through structured policies and validation.",experience:"This was my deepest dive into building developer tooling and API design for AI systems. The challenge was creating a system that's powerful enough for complex Git workflows but safe enough to never corrupt a repository. I built allowlist-based command execution, worktree isolation for dry-runs, and a comprehensive policy system. The MCP integration required understanding how AI agents interact with external tools and designing intuitive interfaces.",results:"Built a working MCP server with safety features like dry-run capabilities and policy enforcement. The system includes GitHub integration for automated PR creation and has maintained repository safety throughout testing. The approach seems to work well for the intended use cases.",feedback:"Initial beta-testing with a small group of developers has been positive, with testers appreciating the safety features and policy controls. Based on this feedback, I'm planning to work on implementing the system at scale and gathering broader user input.",challenges:"Balancing safety with functionality was the core challenge - every Git operation needed safety nets without becoming restrictive. Building reliable Git output parsing across different Git versions and configurations was complex. The policy system needed to be flexible enough for different team workflows while maintaining simplicity. Worktree isolation for dry-runs required deep Git internals knowledge to implement correctly."},{title:"AI Email Prioritizer",description:"An AI-powered email prioritization system that helps filter important messages from routine ones. Shows promising accuracy improvements over basic rule-based filters.",technologies:["Python","FastAPI","Cohere","NLP","Email Protocols (IMAP/POP3)"],motivation:"I was struggling with email overload and found existing filters too simplistic. Most are rule-based and break when senders change their patterns. I wanted to experiment with building something that could understand context and urgency rather than just matching keywords.",experience:"This was my first deep dive into modern AI APIs. The trickiest part wasn't the ML, it was defining what 'priority' actually means across different users. I built a training pipeline using my own email history, then expanded it with synthetic scenarios. The API design went through 3 major iterations before landing on a simple fetch-analyze-respond pattern.",results:"The system can process several hundred emails daily and shows improvement over basic rule-based filters. Response time is typically under 200ms per email. I tested it with six users who reported generally positive results, though the impact varied.",feedback:"While not revolutionary, it does help with a common problem. The test users most frequently requested notification features, so I've been exploring mobile notification integrations that feel less overwhelming than traditional email alerts.",challenges:"Privacy was the biggest challenge. Users have to trust you (and by extension, any upstream dependencies) with their entire digital communication history. I implemented local processing where possible and built transparent data handling policies. With the release of smaller parameter open-source models, I'm also considering making this project local-first, or at least a fork that is local-only. Also learned that 'urgent' means different things to different people - had to make the AI highly configurable."},{title:"Album Artwork Search Engine",description:"A search engine for high-resolution album artwork that aggregates results from multiple music platforms. Helps find better quality artwork than typical image search results.",technologies:["React.js","Cloudflare Workers","REST APIs","LocalStorage"],link:"https://github.com/karan-gera/",motivation:"I was frustrated by how hard it is to find high-quality album artwork. Google Images usually returns low-resolution thumbnails, and manually checking multiple music platforms is time-consuming. I thought it would be useful to build something that could search across platforms automatically and find the best available quality.",experience:"This project is essentially a glorified but highly optimized API wrapper. The challenge was aggregating artwork from multiple music marketplaces and streaming platforms, then intelligently selecting the highest resolution version. Built automatic client-side caching to avoid repeated API calls and implemented fallback chains for rate limiting and API failures. The real complexity was in resolution detection and quality comparison algorithms.",results:"The tool has grown to several thousand daily users who use it for personal collections and design work. The caching system makes most searches fast, and it can find artwork for many releases that are hard to locate manually. Users have mentioned using it for vinyl printing and music library organization.",feedback:"Music collectors and designers seem to find it useful for getting better quality artwork than they'd find elsewhere. Users have mentioned appreciating the time saved and the print-quality results. There have been requests for batch processing features and integration with music library software.",challenges:"Each music platform serves artwork at different resolutions and formats. Had to reverse-engineer optimal resolution endpoints across services. Rate limiting required sophisticated queuing and user-based throttling. The biggest challenge was quality detection - algorithmically determining which version preserves the most detail and color accuracy without manual comparison."},{title:"Full-Service Single-Player Game (Capstone Project)",description:"A complete single-player game built from the ground up, featuring real-time gameplay, persistent world state, and a custom graph-driven dialogue engine. Placed 3rd at NJIT's capstone showcase.",technologies:["Godot","Neo4j","TypeScript","Node.js","Game Physics","Real-time Systems","Database Design","Custom Editors"],motivation:"I wanted to create a full-featured single-player game that moved beyond the typical gameplay loop of repetitive mechanics and fatigue. My goal was to design a world that starts with simple platforming puzzles and gradually expands into intricate physics-based challenges, dialogue-driven gameplay, and a world that meaningfully responds to player actions and roleplaying. I also wanted to experiment with stealth and first-person combat, blending these elements into a cohesive experience.",experience:"I led the backend and systems design, focusing on persistent player data, world state management, and a dynamic narrative system. I built a custom graph database-powered dialogue engine that enabled context-aware, branching conversations, allowing the world and its characters to react to player choices and history. To support writers and designers, I developed a node-based dialogue editor integrated with Neo4j, making it easy to iterate on narrative content and push live updates. My work also included building REST and WebSocket APIs for the Godot game client, integrating real-time world updates, and ensuring smooth UI/UX for both players and content creators.",results:"The finished game featured a persistent, evolving world with a unique dialogue system where NPCs could reference player actions and world events. The gameplay loop evolved from platforming to physics puzzles, stealth, and first-person combat, keeping the experience fresh and engaging. The custom dialogue editor was adopted by the narrative team, dramatically speeding up content creation. The project was recognized at the capstone showcase for its technical depth, narrative ambition, and polish.",feedback:"Players and judges praised the depth and variety of gameplay, especially the way the world and its characters responded to player choices. The narrative team found the dialogue tooling intuitive and powerful, and several faculty members highlighted the technical ambition of the backend and editor systems.",challenges:"Designing a world that meaningfully responds to player actions required careful state management and a flexible dialogue system. Integrating a graph database with the game engine for live dialogue updates and context-sensitive branching was non-trivial. The custom dialogue editor needed to be both powerful and user-friendly, which meant close collaboration with writers and designers. Balancing the different gameplay elements—platforming, physics puzzles, dialogue, stealth, and combat—while maintaining a cohesive experience was a major technical and design challenge."},{title:"Virtual Town Platform",description:"Contributed social features to an open-source virtual world platform, including Nintendo StreetPass-inspired proximity-based interactions and a full-scale persistent account management system. Deployed the entire stack on a single micro EC2 instance, demonstrating the minification and efficiency of the developed features.",technologies:["TypeScript","React.js","MySQL","AWS EC2"],motivation:"I noticed that many online social spaces can feel impersonal despite having many users. Inspired by Nintendo StreetPass, I wanted to experiment with proximity-based interactions to recreate the spontaneous, serendipitous connections that happen in physical spaces. I was also interested in building a robust account management system that could scale efficiently.",experience:"Working with an existing open-source codebase was humbling. Had to understand years of accumulated technical debt while adding major features. The proximity algorithm, modeled after Nintendo StreetPass, required careful tuning—how close is 'nearby' in a virtual world? I implemented spatial hashing for performance and added social context (friends appear 'closer' than strangers). I also architected and deployed a full-featured account management system, handling authentication, persistent user data, and privacy controls, all running on a single micro EC2 instance to prove the minification and efficiency of the implementation.",results:"After implementing the StreetPass-style proximity features and the new account system, user retention improved and average session times increased. Users began organizing informal events and forming connections, which suggested the proximity features were having the intended effect. The cloud deployment on a micro EC2 instance handled real-world traffic with minimal resource usage, validating the efficiency of the codebase.",feedback:"The community responded well to the proximity-based interactions, with users mentioning that it felt more natural and reminiscent of Nintendo StreetPass encounters. Some other virtual world projects have adopted similar features. Users have requested additional features like private group spaces and improved discovery.",challenges:"Scaling proximity calculations for hundreds of concurrent users was tough, especially when emulating StreetPass-like real-time detection. Social features needed careful moderation—proximity can enable harassment as easily as friendship. Built robust blocking and reporting systems. Privacy was another concern—users needed control over their discoverability. Ensuring the full account management system remained performant and secure on a single micro EC2 instance required aggressive minification and optimization."},{title:"Pascal-like Language Compiler",description:"A complete compiler implementation for a custom Pascal-inspired language, built in C++. Started as a class project covering parsing, tokenization, and interpretation, then extended with x86 assembly code generation.",technologies:["C++","x86 Assembly","Lexical Analysis","Parsing","Code Generation","x86 Architecture","Compiler Design"],motivation:"Initially built as part of coursework to understand compiler construction fundamentals. After gaining experience with Assembly programming, I revisited the project a year later to add x86 assembly code generation, wanting to see the complete pipeline from source code to executable machine code.",experience:"Building a compiler from scratch was an exercise in understanding how programming languages work under the hood. The initial phases - lexical analysis, parsing, and interpretation - taught me about language design and syntax trees. Adding x86 assembly generation later was a completely different challenge, requiring understanding of register allocation, instruction selection, and the calling conventions.",results:"Successfully implemented a working compiler that could handle basic Pascal-like syntax including unary and binary operations, multiple data types, and if-else control structures. The x86 assembly backend generated functional assembly code that could be assembled and executed.",feedback:"The project served as a solid foundation for understanding both high-level language design and low-level code generation. The experience of bridging the gap between source code and assembly gave me a deeper appreciation for the complexity hidden in modern compilers.",challenges:"Parsing and semantic analysis required careful attention to language grammar and error handling. The biggest challenge came with the x86 assembly generation - mapping high-level constructs to assembly instructions, managing the stack, and ensuring proper register usage. Debugging generated assembly code was particularly tricky since errors could stem from either the compiler logic or incorrect assembly generation."},{title:"Sleep vs Performance Analytics",description:"A data visualization project exploring the relationship between sleep patterns and academic performance. Built interactive dashboards to help students understand their sleep habits.",technologies:["React.js","D3.js","Statistical Analysis","Data Visualization","UX Design","Privacy Engineering"],motivation:"I was interested in exploring the relationship between sleep and academic performance beyond just hours of sleep. Factors like timing and consistency seemed important, so I wanted to build visualizations that could help students understand their own patterns.",experience:"This project was about storytelling with data. Raw sleep metrics are meaningless; the insight comes from correlations and patterns over time. Spent weeks designing visualizations that reveal non-obvious relationships. Learning D3.js was intense - it's incredibly powerful but has a steep learning curve.",results:"Students who used the dashboard showed improvements in sleep consistency and reported feeling more aware of their patterns. The visualizations helped reveal that timing was often more important than duration for academic performance.",feedback:"The university health center expressed interest in using it for wellness programs. Students liked seeing their data presented as insights rather than raw numbers. There have been requests for integration with fitness trackers and calendar apps.",challenges:"Privacy was paramount - sleep data is incredibly personal. Implemented local-only processing where possible. The biggest technical challenge was making complex statistical correlations understandable to non-technical users. Spent more time on UX than backend code."}],d=[{title:"AI/ML Engineer (Contract)",company:"EdTech Platform (Anonymized)",period:"Sep 2025 – Present",description:"Built an AI system using Azure OpenAI that generates educational content across multiple map types with 98.5% schema compliance. Developed ETL pipelines and automated testing that reduced API costs by 29% and improved the worst-performing content type from 49% to 99% success rate."},{title:"Software Development Intern",company:"Clearwater Analytics",period:"Jun 2024 – Aug 2024",description:"Developed a data migration tool for graph database transitions that simplified the process for the R&D team. Worked on storage optimization that helped reduce costs and improved system efficiency."},{title:"Software Engineer (Co-op)",company:"WJTB Radio, NJIT",period:"Mar 2023 – May 2025",description:"Helped improve system reliability for the radio station and worked on scaling our streaming infrastructure. Led a team of 5 developers and implemented CI/CD automation to reduce deployment issues. The streaming now handles 1,000+ concurrent listeners more consistently."}];let o=null;function m(a){const e=document.createElement("div");e.className="fixed inset-0 bg-terminal-bg/95 backdrop-blur-sm z-50 flex items-center justify-center p-4",e.innerHTML=`
    <div class="bg-terminal-gray border border-terminal-accent max-w-4xl max-h-[90vh] overflow-y-auto">
      <div class="p-6">
        <div class="flex justify-between items-start mb-6">
          <div>
            <h2 class="text-2xl font-bold text-terminal-accent mb-2">${a.title}</h2>
            <div class="flex flex-wrap gap-2">
              ${a.technologies.map(s=>`<span class="tech-tag">${s}</span>`).join("")}
            </div>
          </div>
          <button class="modal-close text-terminal-fg hover:text-terminal-accent text-2xl leading-none">&times;</button>
        </div>
        
        <div class="space-y-6 text-sm">
          <div>
            <h3 class="text-terminal-green font-semibold mb-2">$ cat motivation.md</h3>
            <p class="text-terminal-fg/90 leading-relaxed">${a.motivation}</p>
          </div>
          
          <div>
            <h3 class="text-terminal-green font-semibold mb-2">$ cat development_experience.log</h3>
            <p class="text-terminal-fg/90 leading-relaxed">${a.experience}</p>
          </div>
          
          <div>
            <h3 class="text-terminal-green font-semibold mb-2">$ cat results.json</h3>
            <p class="text-terminal-fg/90 leading-relaxed">${a.results}</p>
          </div>
          
          <div>
            <h3 class="text-terminal-green font-semibold mb-2">$ cat user_feedback.txt</h3>
            <p class="text-terminal-fg/90 leading-relaxed">${a.feedback}</p>
          </div>
          
  <div>
            <h3 class="text-terminal-green font-semibold mb-2">$ cat challenges_solved.md</h3>
            <p class="text-terminal-fg/90 leading-relaxed">${a.challenges}</p>
          </div>
          
          ${a.link?`
            <div class="pt-4 border-t border-terminal-accent/20">
              <div class="flex gap-4">
                <a href="${a.link}" target="_blank" class="link-button">
                  [view_source]
                </a>
                ${a.title==="Album Artwork Search Engine"?`
                  <a href="https://bigpictures.xyz" target="_blank" class="link-button">
                    [try_it_out!]
                  </a>
                `:""}
              </div>
            </div>
          `:""}
        </div>
      </div>
    </div>
  `,e.querySelector(".modal-close")?.addEventListener("click",l),e.addEventListener("click",s=>{s.target===e&&l()}),document.body.appendChild(e),o=e,document.body.style.overflow="hidden"}function l(){o&&(document.body.removeChild(o),o=null,document.body.style.overflow="auto")}function p(){const a=document.querySelector("#app");a.innerHTML=`
    <div class="min-h-screen bg-terminal-bg text-terminal-fg">
      <div class="max-w-4xl mx-auto px-4 py-8">
        <header class="mb-8">
          <div class="mb-6">
            <div class="text-sm mb-2">
              <span class="prompt">$</span> <span class="command">whoami</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold text-terminal-fg mb-2">KARAN GERA</h1>
            <p class="text-terminal-accent text-lg">Software Engineer</p>
            <p class="text-terminal-fg/70 text-sm">Fair Lawn, NJ • (201) 736-1259</p>
          </div>
          <div class="text-sm mb-4">
            <span class="prompt">$</span> <span class="command">ls -la contacts/</span>
          </div>
          <div class="flex flex-wrap gap-4 text-sm">
            <a href="https://www.linkedin.com/in/karan-gera-426a50241" target="_blank" class="link-button">
              linkedin
            </a>
            <a href="https://github.com/karan-gera/" target="_blank" class="link-button">
              github
            </a>
            <a href="mailto:karangera2003@gmail.com" class="link-button">
              email
            </a>
          </div>
        </header>

        <section class="terminal-section">
          <div class="text-sm mb-3">
            <span class="prompt">$</span> <span class="command">cat about.txt</span>
          </div>
          <div class="text-sm leading-relaxed text-terminal-fg/90">
            In my own time, I like to build software that brings access to people who can't afford paywalls and want cleaner, faster, more functional experiences. 
            As a working professional, I focus on integrating AI capabilities into existing products, building scalable pipelines, and helping teams unblock development 
            challenges through technical debt reduction and API development.
            <br><br>
            I'm drawn to projects that eliminate friction and make complex things feel simple. I believe the best software gets out of your way 
            and lets you focus on what matters. Whether it's democratizing access to design tools or streamlining developer workflows, 
            I'm always looking for ways to make interactions smoother and more intuitive.
            <br><br>
            <strong>Currently seeking full-time software engineering opportunities</strong> where I can apply my experience in AI/ML, 
            backend architecture, and full-stack development to solve challenging technical problems.
          </div>
        </section>

        <section class="terminal-section">
          <div class="text-sm mb-3">
            <span class="prompt">$</span> <span class="command">cat work_history.sh</span>
          </div>
          <div class="space-y-4 text-sm">
            ${d.map(e=>`
              <div class="border border-terminal-accent/20 p-3">
                <div class="text-terminal-accent font-semibold">${e.title}</div>
                <div class="text-terminal-fg/80">${e.company} | ${e.period}</div>
                <div class="text-terminal-fg/70 text-xs mt-2 leading-relaxed">${e.description}</div>
              </div>
            `).join("")}
          </div>
        </section>

        <section class="terminal-section">
          <div class="text-sm mb-3">
            <span class="prompt">$</span> <span class="command">ls -la ~/projects/</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            ${c.map((e,n)=>`
              <div class="project-card cursor-pointer hover:border-terminal-accent transition-colors" data-project="${n}">
                <div class="text-terminal-accent font-semibold mb-2">${e.title}</div>
                <div class="text-terminal-fg/80 text-xs mb-3 leading-relaxed">${e.description}</div>
                <div class="flex flex-wrap gap-1 mb-3">
                  ${e.technologies.map(s=>`<span class="tech-tag">${s}</span>`).join("")}
                </div>
                <div class="text-terminal-green text-xs">[click_for_details]</div>
              </div>
            `).join("")}
          </div>
        </section>

        <section class="terminal-section">
          <div class="text-sm mb-3">
            <span class="prompt">$</span> <span class="command">cat currently_learning.txt</span>
          </div>
          <div class="text-sm leading-relaxed text-terminal-fg/90 mb-6">
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag bg-terminal-accent/20">Rust Systems Programming</span>
              <span class="skill-tag bg-terminal-accent/20">LLM Fine-tuning</span>
              <span class="skill-tag bg-terminal-accent/20">GraphQL</span>
              <span class="skill-tag bg-terminal-accent/20">Stream Processing (Kafka)</span>
              <span class="skill-tag bg-terminal-accent/20">CDN & Edge Deployment</span>
              <span class="skill-tag bg-terminal-accent/20">gRPC</span>
              <span class="skill-tag bg-terminal-accent/20">Distributed Systems Design</span>
              <span class="skill-tag bg-terminal-accent/20">WebAssembly (WASM)</span>
            </div>
          </div>
        </section>

        <section class="terminal-section">
          <div class="text-sm mb-3">
            <span class="prompt">$</span> <span class="command">cat ~/.bashrc | grep export</span>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm">
            <div class="space-y-4">
              <div>
                <div class="text-terminal-green mb-2">export LANGUAGES=</div>
                <div class="flex flex-wrap gap-1">
                  <span class="skill-tag">Java</span>
                  <span class="skill-tag">Python</span>
                  <span class="skill-tag">JavaScript</span>
                  <span class="skill-tag">TypeScript</span>
                  <span class="skill-tag">C/C++</span>
                  <span class="skill-tag">C#</span>
                  <span class="skill-tag">PHP</span>
                  <span class="skill-tag">GDScript</span>
                </div>
              </div>
              <div>
                <div class="text-terminal-green mb-2">export FRAMEWORKS=</div>
                <div class="flex flex-wrap gap-1">
                  <span class="skill-tag">React.js</span>
                  <span class="skill-tag">.NET 8</span>
                  <span class="skill-tag">Flask</span>
                  <span class="skill-tag">FastAPI</span>
                  <span class="skill-tag">Spring Boot</span>
                  <span class="skill-tag">PyTorch</span>
                  <span class="skill-tag">Godot</span>
                </div>
              </div>
            </div>
            <div class="space-y-4">
              <div>
                <div class="text-terminal-green mb-2">export DATABASES=</div>
                <div class="flex flex-wrap gap-1">
                  <span class="skill-tag">MySQL</span>
                  <span class="skill-tag">MongoDB</span>
                  <span class="skill-tag">Oracle</span>
                  <span class="skill-tag">MS SQL Server</span>
                  <span class="skill-tag">Amazon Neptune</span>
                  <span class="skill-tag">Neo4j</span>
                  <span class="skill-tag">Snowflake</span>
                </div>
              </div>
              <div>
                <div class="text-terminal-green mb-2">export DEVOPS_TOOLS=</div>
                <div class="flex flex-wrap gap-1">
                  <span class="skill-tag">Git</span>
                  <span class="skill-tag">Jenkins</span>
                  <span class="skill-tag">Docker</span>
                  <span class="skill-tag">Kubernetes</span>
                  <span class="skill-tag">Ansible</span>
                  <span class="skill-tag">AWS</span>
                  <span class="skill-tag">Google Cloud</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="terminal-section">
          <div class="text-sm mb-3">
            <span class="prompt">$</span> <span class="command">cat education.log</span>
          </div>
          <div class="space-y-4 text-sm">
            <div class="border-l-2 border-terminal-accent pl-4">
              <div class="text-terminal-accent font-semibold">B.S. in Computer Science</div>
              <div class="text-terminal-fg/80">New Jersey Institute of Technology | Sep 2021 – May 2025</div>
              <div class="text-terminal-fg/70 text-xs mt-1">Dean's List (2023, 2024, 2025), Academic Excellence Scholarship</div>
              <div class="text-terminal-fg/60 text-xs mt-2">
                Beyond standard CS curriculum, specialized in: Neural Networks & Large Language Models, 
                Diffusion Models, Data Science, AI Ethics, and Linux Programming
              </div>
            </div>
            <div class="border-l-2 border-terminal-accent pl-4">
              <div class="text-terminal-accent font-semibold">DevOps Training Program</div>
              <div class="text-terminal-fg/80">Intellipaat | Jun 2023 – Aug 2023</div>
              <div class="text-terminal-fg/70 text-xs mt-1">3-month intensive: CI/CD, Docker, Kubernetes, Jenkins, cloud deployment</div>
            </div>
          </div>
        </section>

        <footer class="mt-8 pt-4 border-t border-terminal-accent/20">
          <div class="text-sm">
            <span class="prompt">$</span> <span class="command">echo "© 2025 Karan Gera. Built with Vite + TypeScript + Tailwind"</span>
          </div>
          <div class="text-terminal-fg/70 text-xs mt-2">© 2025 Karan Gera. Built with Vite + TypeScript + Tailwind</div>
        </footer>
      </div>
    </div>
  `}p();function g(){document.querySelectorAll("[data-project]").forEach(e=>{e.addEventListener("click",n=>{const s=parseInt(n.currentTarget.dataset.project||"0");m(c[s])})}),document.addEventListener("keydown",e=>{e.key==="Escape"&&o&&l()})}g();
