import './style.css'

// Portfolio data
interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  motivation: string;
  experience: string;
  results: string;
  feedback: string;
  challenges: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "MCP Git Orchestrator",
    description: "Local-first Model Context Protocol (MCP) server providing AI agents with safe, structured Git control. Built for Cursor IDE integration with comprehensive safety mechanisms and policy enforcement.",
    technologies: ["TypeScript", "Node.js", "MCP", "Git", "GitHub API"],
    link: "https://github.com/karan-gera/mcp-git-orchestrator",
    motivation: "I wanted to explore how AI agents could safely interact with Git repositories. Most existing integrations seemed either too limited or potentially risky, so I set out to build something that balanced functionality with safety through structured policies and validation.",
    experience: "This was my deepest dive into building developer tooling and API design for AI systems. The challenge was creating a system that's powerful enough for complex Git workflows but safe enough to never corrupt a repository. I built allowlist-based command execution, worktree isolation for dry-runs, and a comprehensive policy system. The MCP integration required understanding how AI agents interact with external tools and designing intuitive interfaces.",
    results: "Built a working MCP server with safety features like dry-run capabilities and policy enforcement. The system includes GitHub integration for automated PR creation and has maintained repository safety throughout testing. The approach seems to work well for the intended use cases.",
    feedback: "Initial beta-testing with a small group of developers has been positive, with testers appreciating the safety features and policy controls. Based on this feedback, I'm planning to work on implementing the system at scale and gathering broader user input.",
    challenges: "Balancing safety with functionality was the core challenge - every Git operation needed safety nets without becoming restrictive. Building reliable Git output parsing across different Git versions and configurations was complex. The policy system needed to be flexible enough for different team workflows while maintaining simplicity. Worktree isolation for dry-runs required deep Git internals knowledge to implement correctly."
  },
  {
    title: "AI Email Prioritizer",
    description: "An AI-powered email prioritization system that helps filter important messages from routine ones. Shows promising accuracy improvements over basic rule-based filters.",
    technologies: ["Python", "FastAPI", "Cohere"],
    link: "https://github.com/karan-gera/",
    motivation: "I was struggling with email overload and found existing filters too simplistic. Most are rule-based and break when senders change their patterns. I wanted to experiment with building something that could understand context and urgency rather than just matching keywords.",
    experience: "This was my first deep dive into modern AI APIs. The trickiest part wasn't the ML, it was defining what 'priority' actually means across different users. I built a training pipeline using my own email history, then expanded it with synthetic scenarios. The API design went through 3 major iterations before landing on a simple fetch-analyze-respond pattern.",
    results: "The system can process several hundred emails daily and shows improvement over basic rule-based filters. Response time is typically under 200ms per email. I tested it with six users who reported generally positive results, though the impact varied.",
    feedback: "While not revolutionary, it does help with a common problem. The test users most frequently requested notification features, so I've been exploring mobile notification integrations that feel less overwhelming than traditional email alerts.",
    challenges: "Privacy was the biggest challenge. Users have to trust you (and by extension, any upstream dependencies) with their entire digital communication history. I implemented local processing where possible and built transparent data handling policies. With the release of smaller parameter open-source models, I'm also considering making this project local-first, or at least a fork that is local-only. Also learned that 'urgent' means different things to different people - had to make the AI highly configurable."
  },
  {
    title: "Album Artwork Search Engine", 
    description: "A search engine for high-resolution album artwork that aggregates results from multiple music platforms. Helps find better quality artwork than typical image search results.",
    technologies: ["React.js", "Cloudflare Workers", "APIs"],
    link: "https://github.com/karan-gera/",
    motivation: "I was frustrated by how hard it is to find high-quality album artwork. Google Images usually returns low-resolution thumbnails, and manually checking multiple music platforms is time-consuming. I thought it would be useful to build something that could search across platforms automatically and find the best available quality.",
    experience: "This project is essentially a glorified but highly optimized API wrapper. The challenge was aggregating artwork from multiple music marketplaces and streaming platforms, then intelligently selecting the highest resolution version. Built automatic client-side caching to avoid repeated API calls and implemented fallback chains for rate limiting and API failures. The real complexity was in resolution detection and quality comparison algorithms.",
    results: "The tool has grown to several thousand daily users who use it for personal collections and design work. The caching system makes most searches fast, and it can find artwork for many releases that are hard to locate manually. Users have mentioned using it for vinyl printing and music library organization.",
    feedback: "Music collectors and designers seem to find it useful for getting better quality artwork than they'd find elsewhere. Users have mentioned appreciating the time saved and the print-quality results. There have been requests for batch processing features and integration with music library software.",
    challenges: "Each music platform serves artwork at different resolutions and formats. Had to reverse-engineer optimal resolution endpoints across services. Rate limiting required sophisticated queuing and user-based throttling. The biggest challenge was quality detection - algorithmically determining which version preserves the most detail and color accuracy without manual comparison."
  },
  {
    title: "Full-Service Single-Player Game (Capstone Project)",
    description: "A complete single-player game built from the ground up, featuring real-time gameplay, persistent world state, and a custom graph-driven dialogue engine. Placed 3rd at NJIT's capstone showcase.",
    technologies: ["Godot", "Neo4j", "TypeScript", "Node.js", "WebSockets"],
    link: "https://github.com/karan-gera/",
    motivation: "I wanted to create a full-featured single-player game that moved beyond the typical gameplay loop of repetitive mechanics and fatigue. My goal was to design a world that starts with simple platforming puzzles and gradually expands into intricate physics-based challenges, dialogue-driven gameplay, and a world that meaningfully responds to player actions and roleplaying. I also wanted to experiment with stealth and first-person combat, blending these elements into a cohesive experience.",
    experience: "I led the backend and systems design, focusing on persistent player data, world state management, and a dynamic narrative system. I built a custom graph database-powered dialogue engine that enabled context-aware, branching conversations, allowing the world and its characters to react to player choices and history. To support writers and designers, I developed a node-based dialogue editor integrated with Neo4j, making it easy to iterate on narrative content and push live updates. My work also included building REST and WebSocket APIs for the Godot game client, integrating real-time world updates, and ensuring smooth UI/UX for both players and content creators.",
    results: "The finished game featured a persistent, evolving world with a unique dialogue system where NPCs could reference player actions and world events. The gameplay loop evolved from platforming to physics puzzles, stealth, and first-person combat, keeping the experience fresh and engaging. The custom dialogue editor was adopted by the narrative team, dramatically speeding up content creation. The project was recognized at the capstone showcase for its technical depth, narrative ambition, and polish.",
    feedback: "Players and judges praised the depth and variety of gameplay, especially the way the world and its characters responded to player choices. The narrative team found the dialogue tooling intuitive and powerful, and several faculty members highlighted the technical ambition of the backend and editor systems.",
    challenges: "Designing a world that meaningfully responds to player actions required careful state management and a flexible dialogue system. Integrating a graph database with the game engine for live dialogue updates and context-sensitive branching was non-trivial. The custom dialogue editor needed to be both powerful and user-friendly, which meant close collaboration with writers and designers. Balancing the different gameplay elements—platforming, physics puzzles, dialogue, stealth, and combat—while maintaining a cohesive experience was a major technical and design challenge."
  },
  {
    title: "Virtual Town Platform",
    description: "Contributed social features to an open-source virtual world platform, including Nintendo StreetPass-inspired proximity-based interactions and a full-scale persistent account management system. Deployed the entire stack on a single micro EC2 instance, demonstrating the minification and efficiency of the developed features.",
    technologies: ["TypeScript", "React.js", "MySQL", "AWS EC2"],
    link: "https://github.com/karan-gera/",
    motivation: "I noticed that many online social spaces can feel impersonal despite having many users. Inspired by Nintendo StreetPass, I wanted to experiment with proximity-based interactions to recreate the spontaneous, serendipitous connections that happen in physical spaces. I was also interested in building a robust account management system that could scale efficiently.",
    experience: "Working with an existing open-source codebase was humbling. Had to understand years of accumulated technical debt while adding major features. The proximity algorithm, modeled after Nintendo StreetPass, required careful tuning—how close is 'nearby' in a virtual world? I implemented spatial hashing for performance and added social context (friends appear 'closer' than strangers). I also architected and deployed a full-featured account management system, handling authentication, persistent user data, and privacy controls, all running on a single micro EC2 instance to prove the minification and efficiency of the implementation.",
    results: "After implementing the StreetPass-style proximity features and the new account system, user retention improved and average session times increased. Users began organizing informal events and forming connections, which suggested the proximity features were having the intended effect. The cloud deployment on a micro EC2 instance handled real-world traffic with minimal resource usage, validating the efficiency of the codebase.",
    feedback: "The community responded well to the proximity-based interactions, with users mentioning that it felt more natural and reminiscent of Nintendo StreetPass encounters. Some other virtual world projects have adopted similar features. Users have requested additional features like private group spaces and improved discovery.",
    challenges: "Scaling proximity calculations for hundreds of concurrent users was tough, especially when emulating StreetPass-like real-time detection. Social features needed careful moderation—proximity can enable harassment as easily as friendship. Built robust blocking and reporting systems. Privacy was another concern—users needed control over their discoverability. Ensuring the full account management system remained performant and secure on a single micro EC2 instance required aggressive minification and optimization."
  },
  {
    title: "Pascal-like Language Compiler",
    description: "A complete compiler implementation for a custom Pascal-inspired language, built in C++. Started as a class project covering parsing, tokenization, and interpretation, then extended with x86 assembly code generation.",
    technologies: ["C++", "Assembly", "Compiler Design"],
    motivation: "Initially built as part of coursework to understand compiler construction fundamentals. After gaining experience with Assembly programming, I revisited the project a year later to add x86 assembly code generation, wanting to see the complete pipeline from source code to executable machine code.",
    experience: "Building a compiler from scratch was an exercise in understanding how programming languages work under the hood. The initial phases - lexical analysis, parsing, and interpretation - taught me about language design and syntax trees. Adding x86 assembly generation later was a completely different challenge, requiring understanding of register allocation, instruction selection, and the calling conventions.",
    results: "Successfully implemented a working compiler that could handle basic Pascal-like syntax including unary and binary operations, multiple data types, and if-else control structures. The x86 assembly backend generated functional assembly code that could be assembled and executed.",
    feedback: "The project served as a solid foundation for understanding both high-level language design and low-level code generation. The experience of bridging the gap between source code and assembly gave me a deeper appreciation for the complexity hidden in modern compilers.",
    challenges: "Parsing and semantic analysis required careful attention to language grammar and error handling. The biggest challenge came with the x86 assembly generation - mapping high-level constructs to assembly instructions, managing the stack, and ensuring proper register usage. Debugging generated assembly code was particularly tricky since errors could stem from either the compiler logic or incorrect assembly generation."
  },
  {
    title: "Sleep vs Performance Analytics",
    description: "A data visualization project exploring the relationship between sleep patterns and academic performance. Built interactive dashboards to help students understand their sleep habits.",
    technologies: ["React.js", "D3.js"],
    link: "https://github.com/karan-gera/",
    motivation: "I was interested in exploring the relationship between sleep and academic performance beyond just hours of sleep. Factors like timing and consistency seemed important, so I wanted to build visualizations that could help students understand their own patterns.",
    experience: "This project was about storytelling with data. Raw sleep metrics are meaningless; the insight comes from correlations and patterns over time. Spent weeks designing visualizations that reveal non-obvious relationships. Learning D3.js was intense - it's incredibly powerful but has a steep learning curve.",
    results: "Students who used the dashboard showed improvements in sleep consistency and reported feeling more aware of their patterns. The visualizations helped reveal that timing was often more important than duration for academic performance.",
    feedback: "The university health center expressed interest in using it for wellness programs. Students liked seeing their data presented as insights rather than raw numbers. There have been requests for integration with fitness trackers and calendar apps.",
    challenges: "Privacy was paramount - sleep data is incredibly personal. Implemented local-only processing where possible. The biggest technical challenge was making complex statistical correlations understandable to non-technical users. Spent more time on UX than backend code."
  }
];

const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Kaydigit",
    period: "Aug 2025 – Present",
    description: "Deployed to client development teams through Kaydigit's engineering services model. Focus on integrating AI capabilities into existing products, clearing technical debt, and building APIs and integrations for new feature development. Help teams unblock development challenges while building scalable AI pipelines and workflows."
  },
  {
    title: "Software Development Intern",
    company: "Clearwater Analytics",
    period: "Jun 2024 – Aug 2024",
    description: "Developed a data migration tool for graph database transitions that simplified the process for the R&D team. Worked on storage optimization that helped reduce costs and improved system efficiency."
  },
  {
    title: "Software Engineer (Co-op)",
    company: "WJTB Radio, NJIT",
    period: "Mar 2023 – May 2025", 
    description: "Helped improve system reliability for the radio station and worked on scaling our streaming infrastructure. Led a team of 5 developers and implemented CI/CD automation to reduce deployment issues. The streaming now handles 1,000+ concurrent listeners more consistently."
  }
];

// Modal functionality
let currentModal: HTMLElement | null = null;

function openModal(project: Project) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-terminal-bg/95 backdrop-blur-sm z-50 flex items-center justify-center p-4';
  
  modal.innerHTML = `
    <div class="bg-terminal-gray border border-terminal-accent max-w-4xl max-h-[90vh] overflow-y-auto">
      <div class="p-6">
        <div class="flex justify-between items-start mb-6">
          <div>
            <h2 class="text-2xl font-bold text-terminal-accent mb-2">${project.title}</h2>
            <div class="flex flex-wrap gap-2">
              ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
          </div>
          <button class="modal-close text-terminal-fg hover:text-terminal-accent text-2xl leading-none">&times;</button>
        </div>
        
        <div class="space-y-6 text-sm">
          <div>
            <h3 class="text-terminal-green font-semibold mb-2">$ cat motivation.md</h3>
            <p class="text-terminal-fg/90 leading-relaxed">${project.motivation}</p>
          </div>
          
          <div>
            <h3 class="text-terminal-green font-semibold mb-2">$ cat development_experience.log</h3>
            <p class="text-terminal-fg/90 leading-relaxed">${project.experience}</p>
          </div>
          
          <div>
            <h3 class="text-terminal-green font-semibold mb-2">$ cat results.json</h3>
            <p class="text-terminal-fg/90 leading-relaxed">${project.results}</p>
          </div>
          
          <div>
            <h3 class="text-terminal-green font-semibold mb-2">$ cat user_feedback.txt</h3>
            <p class="text-terminal-fg/90 leading-relaxed">${project.feedback}</p>
          </div>
          
  <div>
            <h3 class="text-terminal-green font-semibold mb-2">$ cat challenges_solved.md</h3>
            <p class="text-terminal-fg/90 leading-relaxed">${project.challenges}</p>
          </div>
          
          ${project.link ? `
            <div class="pt-4 border-t border-terminal-accent/20">
              <div class="flex gap-4">
                <a href="${project.link}" target="_blank" class="link-button">
                  [view_source]
                </a>
                ${project.title === "Album Artwork Search Engine" ? `
                  <a href="https://bigpictures.xyz" target="_blank" class="link-button">
                    [try_it_out!]
                  </a>
                ` : ''}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;
  
  // Close modal handlers
  const closeBtn = modal.querySelector('.modal-close');
  closeBtn?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  
  document.body.appendChild(modal);
  currentModal = modal;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (currentModal) {
    document.body.removeChild(currentModal);
    currentModal = null;
    document.body.style.overflow = 'auto';
  }
}

// Render portfolio
function renderPortfolio() {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  
  app.innerHTML = `
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
            I enjoy building software that solves real problems. I have experience modernizing legacy systems and working on scalability challenges.
            <br><br>
            I'm drawn to projects that eliminate friction and make complex things feel simple. I believe the best software gets out of your way 
            and lets you focus on what matters. I'm always looking for ways to make interactions smoother and more intuitive.
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

        <section class="terminal-section">
          <div class="text-sm mb-3">
            <span class="prompt">$</span> <span class="command">cat work_history.sh</span>
          </div>
          <div class="space-y-4 text-sm">
            ${experiences.map(exp => `
              <div class="border border-terminal-accent/20 p-3">
                <div class="text-terminal-accent font-semibold">${exp.title}</div>
                <div class="text-terminal-fg/80">${exp.company} | ${exp.period}</div>
                <div class="text-terminal-fg/70 text-xs mt-2 leading-relaxed">${exp.description}</div>
              </div>
            `).join('')}
          </div>
        </section>

        <section class="terminal-section">
          <div class="text-sm mb-3">
            <span class="prompt">$</span> <span class="command">ls -la ~/projects/</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            ${projects.map((project, index) => `
              <div class="project-card cursor-pointer hover:border-terminal-accent transition-colors" data-project="${index}">
                <div class="text-terminal-accent font-semibold mb-2">${project.title}</div>
                <div class="text-terminal-fg/80 text-xs mb-3 leading-relaxed">${project.description}</div>
                <div class="flex flex-wrap gap-1 mb-3">
                  ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="text-terminal-green text-xs">[click_for_details]</div>
              </div>
            `).join('')}
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

        <footer class="mt-8 pt-4 border-t border-terminal-accent/20">
          <div class="text-sm">
            <span class="prompt">$</span> <span class="command">echo "© 2025 Karan Gera. Built with Vite + TypeScript + Tailwind"</span>
          </div>
          <div class="text-terminal-fg/70 text-xs mt-2">© 2025 Karan Gera. Built with Vite + TypeScript + Tailwind</div>
        </footer>
      </div>
    </div>
  `;
}

// Initialize portfolio
renderPortfolio();

// Add event listeners after rendering
function addEventListeners() {
  // Project card clicks
  const projectCards = document.querySelectorAll('[data-project]');
  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      const projectIndex = parseInt((e.currentTarget as HTMLElement).dataset.project || '0');
      openModal(projects[projectIndex]);
    });
  });
  
  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && currentModal) {
      closeModal();
    }
  });
}

addEventListeners();
