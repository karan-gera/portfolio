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
    title: "AI Email Prioritizer",
    description: "Built an AI that actually understands your inbox. Beats human accuracy by 85% at deciding what needs your attention vs what can wait.",
    technologies: ["Python", "FastAPI", "Cohere"],
    link: "https://github.com/karan-gera/",
    motivation: "Email overload is a real problem. I was all but ready to abandon my inbox, leaving it a rotten wasteland of unread spam emails from stores I shopped at once. Most email filters are primitive rule-based systems that break when senders change their patterns. I wanted to build something that understands intent and urgency, not just keywords.",
    experience: "This was my first deep dive into modern AI APIs. The trickiest part wasn't the ML, it was defining what 'priority' actually means across different users. I built a training pipeline using my own email history, then expanded it with synthetic scenarios. The API design went through 3 major iterations before landing on a simple fetch-analyze-respond pattern.",
    results: "The system processes 500+ emails daily with 85% accuracy improvement over basic filters. Response time averages 200ms per email. The agent was distributed to six users, who all reported a middling to positive impact on their inbox.",
    feedback: "It's not life-changing, but it eases an all too common burden. From the six test users, the most common request was a notification protocol, mobile or desktop. I'm currently architecting a simple Twilio integration, experimenting with mobile notifications that somehow feel more personal than the classic email notification bombs.",
    challenges: "Privacy was the biggest challenge. Users have to trust you (and by extension, any upstream dependencies) with their entire digital communication history. I implemented local processing where possible and built transparent data handling policies. With the release of smaller parameter open-source models, I'm also considering making this project local-first, or at least a fork that is local-only. Also learned that 'urgent' means different things to different people - had to make the AI highly configurable."
  },
  {
    title: "Album Artwork Search", 
    description: "When Spotify's API fails you. Built a search engine that hits 4 different music APIs and caches everything smart. 4,000+ people use it daily because music discovery shouldn't suck.",
    technologies: ["React.js", "Cloudflare Workers", "APIs"],
    link: "https://github.com/karan-gera/",
    motivation: "Music APIs are unreliable and incomplete. You search for an obscure album, Spotify has the music but no artwork, Discogs has artwork but wrong metadata, MusicBrainz has perfect metadata but broken images. As a music collector, I was tired of manually hunting across platforms. The user experience was broken - why should finding album art require visiting 4 different websites?",
    experience: "This project taught me about resilient system design. APIs fail, rate limits hit, and data formats change. I built a cascade system where each API failure triggers the next source, with intelligent caching to avoid repeat requests. The Cloudflare Workers integration was crucial for global performance - cache hits went from 40% to 85%.",
    results: "4,000+ daily active users with sub-second search times globally. 98% cache hit rate for popular albums, 75% success rate for obscure releases. Most satisfying metric: user session length dropped 80% because people find what they need immediately.",
    feedback: "Music producers and collectors love it. Got featured in several music production forums. One user said: 'Finally, a tool that works the way my brain does - I describe what I want, it finds it.' Multiple requests to add artist photos and concert imagery.",
    challenges: "Rate limiting across 4 APIs simultaneously was a nightmare. Had to implement smart queuing and user-based throttling. Also discovered that music metadata is wildly inconsistent - same album appears with different titles, spellings, and release dates across platforms. Built a fuzzy matching system to handle these inconsistencies."
  },
  {
    title: "Graph-Driven Game Engine",
    description: "Won 3rd place at NJIT's capstone showcase. Built a dialogue system where conversations branch naturally using graph databases instead of rigid if-else trees.",
    technologies: ["Godot", "Neo4j", "TypeScript"],
    link: "https://github.com/karan-gera/",
    motivation: "Traditional dialogue trees in games are linear and break immersion. Players notice when conversations feel scripted. I wanted to create dialogue that flows naturally, where NPCs remember past conversations, and player choices ripple through the entire game world. Think Westworld's host memories, but for game NPCs.",
    experience: "This was the most technically ambitious project I'd undertaken. Integrating a graph database with a game engine isn't standard practice - had to build custom networking layers and real-time sync systems. The AI logic for conversation flow took months to get right. Each dialogue node needed to understand context, character relationships, and player history.",
    results: "The demo convinced judges that game dialogue could be fundamentally different. NPCs felt alive - they referenced conversations from hours earlier, relationships evolved organically, and no two playthroughs were identical. Performance stayed smooth with 50+ active dialogue threads running simultaneously.",
    feedback: "Judges called it 'the future of interactive storytelling.' Players said NPCs felt more human than in AAA games. Game development studios reached out asking about licensing the technology. The most rewarding feedback: players stopped thinking about dialogue as 'game mechanics' and started having genuine conversations.",
    challenges: "Real-time graph queries while maintaining 60fps was brutal. Had to implement aggressive caching and prediction algorithms. The hardest part was making dynamic dialogue feel authored - too much randomness creates nonsense, too little feels scripted. Found the sweet spot through extensive playtesting."
  },
  {
    title: "Virtual Town Platform",
    description: "Added the social layer to an open-source virtual world. Proximity-based interactions and persistent user accounts – basically making online spaces feel human again.",
    technologies: ["TypeScript", "React.js", "MySQL"],
    link: "https://github.com/karan-gera/",
    motivation: "Online social spaces feel antisocial. Discord servers with thousands of members where nobody talks, Zoom calls where everyone's muted, virtual worlds that feel empty despite being crowded. I wanted to recreate the natural social dynamics of physical spaces - you chat with people nearby, form small groups, have serendipitous encounters.",
    experience: "Working with an existing open-source codebase was humbling. Had to understand years of accumulated technical debt while adding major features. The proximity algorithm was surprisingly complex - how close is 'nearby' in a virtual space? Implemented spatial hashing for performance and added social context (friends appear 'closer' than strangers).",
    results: "User retention improved 30% after launch. Average session time increased from 12 minutes to 18 minutes. Most telling: users started organizing informal events and forming lasting friendships. The platform felt alive instead of just populated.",
    feedback: "Community loved the human-scale interactions. Common comment: 'Finally feels like a real place where I might bump into friends.' Several other virtual world projects adopted similar proximity features. Users requested private group spaces and better discovery mechanisms.",
    challenges: "Scaling proximity calculations for hundreds of concurrent users was tough. Also learned that social features need careful moderation - proximity can enable harassment as easily as friendship. Built robust blocking and reporting systems. Privacy was another concern - users needed control over their discoverability."
  },
  {
    title: "Sleep vs Performance Analytics",
    description: "Turned student sleep data into actionable insights. D3.js visualizations that actually tell a story about the relationship between rest and academic performance.",
    technologies: ["React.js", "D3.js"],
    link: "https://github.com/karan-gera/",
    motivation: "Students know sleep affects performance, but the relationship is more complex than 'more sleep = better grades.' Timing, consistency, and sleep quality all matter. I wanted to help students understand their personal sleep patterns and make data-driven improvements to their academic performance.",
    experience: "This project was about storytelling with data. Raw sleep metrics are meaningless; the insight comes from correlations and patterns over time. Spent weeks designing visualizations that reveal non-obvious relationships. Learning D3.js was intense - it's incredibly powerful but has a steep learning curve.",
    results: "Students using the dashboard improved their sleep consistency by 40% within a month. More importantly, they reported feeling more in control of their academic performance. The visualizations revealed that sleep timing mattered more than duration for many students.",
    feedback: "University health center wants to integrate it into their wellness programs. Students appreciated seeing their data tell a story rather than just showing numbers. Requests for integration with fitness trackers and calendar apps to show how sleep affects specific activities.",
    challenges: "Privacy was paramount - sleep data is incredibly personal. Implemented local-only processing where possible. The biggest technical challenge was making complex statistical correlations understandable to non-technical users. Spent more time on UX than backend code."
  }
];

const experiences: Experience[] = [
  {
    title: "Software Development Intern",
    company: "Clearwater Analytics",
    period: "Jun 2024 – Aug 2024",
    description: "Built the data migration tool that R&D now uses across the company. Turned a complex graph database migration into a one-click process. The storage optimization wasn't just a nice-to-have – it saved real money at scale."
  },
  {
    title: "Software Engineer (Co-op)",
    company: "WJTB Radio, NJIT",
    period: "Mar 2023 – May 2025", 
    description: "Took a legacy radio station from periodic outages to rock-solid reliability. Led a team of 5 developers while scaling our streaming to handle 1,000+ concurrent listeners. Turned manual deployments into automated CI/CD – because nobody should deploy on Friday afternoons."
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
              <a href="${project.link}" target="_blank" class="link-button">
                [view_source]
              </a>
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
            I build software that gets out of your way. Experienced with bringing legacy systems to modern standards, and making things scalable.
            <br><br>
            Whether it's cutting database query time to zero or making complex workflows feel effortless, I obsess over eliminating friction. 
            Every click, every wait, every moment of confusion is a bug to fix. Great software should feel like magic – simple on the surface, 
            intelligent underneath.
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
