/* =========================================
   MANAS GHADGE — CYBERSECURITY PORTFOLIO
   ========================================= */


/*
    IMPORTANT:

    1. Replace repository placeholders with actual URLs.
    2. Replace evidence placeholders with real evidence.
    3. Do not invent findings, test results, or project metrics.
*/


// =========================================
// PROJECT CASE STUDY DATA
// =========================================

const projects = {

    openad: {

        number: "PROJECT / 01",

        title: "Open AD Defender",

        subtitle: "Active Directory Security Monitoring Platform",

        category: "Blue Team / Security Monitoring",

        summary:
            "A Blue Team-focused project exploring how Active Directory security events can be collected, analysed, and prioritised to support threat detection and security investigations.",

        why:
            "Active Directory plays a central role in identity and access management in many Windows environments. Suspicious authentication patterns, unexpected privilege changes, and compromised accounts can create significant security risks. I developed this project to explore how defenders can improve visibility into these activities and build a foundation for security monitoring.",

        objectives: [

            "Explore monitoring of Active Directory security events.",

            "Identify suspicious authentication attempts and account-management activity.",

            "Design detection rules for potentially risky behaviour.",

            "Consider risk-based alert prioritisation.",

            "Support investigation through centralised security event visibility."

        ],

        technologies: [

            "Python",
            "Windows Server",
            "Active Directory",
            "Flask / FastAPI",
            "React",
            "SQLite / PostgreSQL",
            "MITRE ATT&CK"

        ],

        work: [

            "Studied Active Directory security fundamentals and common attack techniques.",

            "Identified relevant authentication and account-management events for monitoring.",

            "Designed detection-rule concepts for suspicious activities.",

            "Planned risk-based alert prioritisation and event analysis.",

            "Designed a centralised dashboard concept for reviewing alerts and supporting investigations."

        ],

        skills: [

            "Active Directory security fundamentals",

            "Windows security event analysis",

            "Threat detection and investigation",

            "Blue Team and SOC workflows",

            "MITRE ATT&CK-based threat classification",

            "Security monitoring architecture"

        ],

        outcome:
            "The project established a framework for Active Directory security monitoring, including detection-rule concepts, centralised alert management, and investigation workflows. The implemented functionality and validation results should be documented separately from planned features.",

        relevance:
            "Active Directory monitoring is relevant to enterprise SOC operations because identity-related events can help analysts investigate suspicious logins, privilege changes, account misuse, and potential lateral movement. Effective detection depends on suitable event collection, validated rules, and the surrounding environment.",

        evidence: [

            {
                label: "GitHub repository",
                description: "Source code and implementation.",
                url: "",
                kind: "repository"
            },

            {
                label: "Architecture diagram",
                description: "Components, data flow, and detection workflow.",
                url: "",
                kind: "documentation"
            },

            {
                label: "Dashboard screenshots",
                description: "Actual screenshots of the monitoring interface.",
                url: "",
                kind: "screenshot"
            },

            {
                label: "Detection rule tests",
                description: "Test cases, expected results, and observed results.",
                url: "",
                kind: "report"
            },

            {
                label: "Technical documentation",
                description: "Implementation details and limitations.",
                url: "",
                kind: "documentation"
            },

            {
                label: "Demonstration video",
                description: "A walkthrough of verified project functionality.",
                url: "",
                kind: "demo"
            }

        ]

    },


    vulnstrike: {

        number: "PROJECT / 02",

        title: "VulnStrike",

        subtitle: "Modern Web Vulnerability Assessment Tool",

        category: "Application Security / VAPT",

        summary:
            "A Python-based desktop application designed to support authorised web vulnerability assessments, with detection logic for SQL injection and cross-site scripting, severity-based findings, live scan progress, and report generation.",

        why:
            "Manually reviewing web application security can require repetitive requests, careful response analysis, and organised reporting. I wanted to explore how common web vulnerability checks could be brought together in a single interface while gaining practical experience with HTTP requests, application security, and security-tool development.",

        objectives: [

            "Support security testing of authorised web applications.",

            "Explore SQL injection detection.",

            "Explore cross-site scripting detection.",

            "Display findings with severity classifications.",

            "Provide scanning progress and activity logs.",

            "Generate reports for documenting assessment results."

        ],

        technologies: [

            "Python",
            "Flask",
            "PySide6",
            "HTML / CSS",
            "HTTP Requests",
            "PDF Generation",
            "DOCX Generation"

        ],

        work: [

            "Developed a desktop-based vulnerability assessment tool.",

            "Implemented detection logic for SQL injection and cross-site scripting.",

            "Integrated the scanning engine with a graphical user interface.",

            "Designed severity-based presentation of vulnerability findings.",

            "Added scan progress and activity logging.",

            "Developed report-export functionality for assessment documentation."

        ],

        skills: [

            "Web application security",

            "SQL injection and XSS testing concepts",

            "HTTP request and response analysis",

            "Python application development",

            "GUI development with PySide6",

            "Backend and interface integration",

            "Vulnerability reporting"

        ],

        outcome:
            "VulnStrike provides a foundation for a desktop-based web vulnerability assessment workflow. Its practical effectiveness should be demonstrated using authorised test applications, reproducible test cases, and verified scan results.",

        relevance:
            "Security testers and developers need repeatable ways to identify and document application weaknesses. A tool of this kind can help organise initial checks and reporting, but its results require validation. It is not a replacement for a comprehensive security assessment or established tools such as Burp Suite and OWASP ZAP.",

        evidence: [

            {
                label: "GitHub repository",
                description: "Application source code and setup instructions.",
                url: "",
                kind: "repository"
            },

            {
                label: "Application screenshots",
                description: "Actual interface and scan-result screenshots.",
                url: "",
                kind: "screenshot"
            },

            {
                label: "Authorised test results",
                description: "Reproducible findings from a test application.",
                url: "",
                kind: "report"
            },

            {
                label: "Sample PDF / DOCX reports",
                description: "Generated vulnerability assessment reports.",
                url: "",
                kind: "report"
            },

            {
                label: "Demonstration video",
                description: "A walkthrough of the working scanning workflow.",
                url: "",
                kind: "demo"
            },

            {
                label: "Technical write-up",
                description: "Detection approach, limitations, and testing methodology.",
                url: "",
                kind: "documentation"
            }

        ]

    },


    hackmaster: {

        number: "PROJECT / 03",

        title: "HackMaster Academy",

        subtitle: "Gamified Cybersecurity Learning Platform",

        category: "Security Education / Application Development",

        summary:
            "A cybersecurity learning platform concept designed around interactive challenges, structured learning, progress tracking, and AI-assisted learning support.",

        why:
            "Cybersecurity education can become difficult to follow when learners have limited opportunities to apply concepts. I wanted to explore a more engaging learning experience that combines structured modules, hands-on challenges, and progression so learners can connect technical knowledge with practical problem-solving.",

        objectives: [

            "Organise interactive cybersecurity learning modules.",

            "Support hands-on challenges and exercises.",

            "Track learning progress and achievements.",

            "Encourage practical problem-solving.",

            "Explore AI-assisted learning support.",

            "Support an engaging learning experience across desktop-oriented interfaces."

        ],

        technologies: [

            "React",
            "Vite",
            "Tailwind CSS",
            "Zustand",
            "NestJS",
            "FastAPI",
            "SQLite",
            "TypeORM",
            "WebSockets",
            "Electron"

        ],

        work: [

            "Designed the platform concept and learner experience.",

            "Planned a gamified interface with challenges and progression.",

            "Structured the proposed frontend and backend architecture.",

            "Designed the integration approach for an AI learning service.",

            "Planned interactive learning features and progress tracking."

        ],

        skills: [

            "Frontend application architecture",

            "Backend API design",

            "Frontend and backend integration",

            "Database design concepts",

            "AI service integration",

            "Real-time application design",

            "Gamification and user experience"

        ],

        outcome:
            "The project established a foundation for a structured cybersecurity learning platform with a proposed architecture for challenges, progress tracking, and AI-assisted learning. Working features should be documented individually so that planned capabilities are not confused with implemented ones.",

        relevance:
            "Interactive security learning can help beginners practise concepts in a structured environment. A platform like this could support learning paths, challenge-based exercises, and progress tracking, provided that exercises are properly designed and potentially unsafe activities are confined to authorised environments.",

        evidence: [

            {
                label: "GitHub repository",
                description: "Frontend, backend, and project setup.",
                url: "",
                kind: "repository"
            },

            {
                label: "Application screenshots",
                description: "Actual application screens and user flows.",
                url: "",
                kind: "screenshot"
            },

            {
                label: "System architecture",
                description: "Frontend, backend, database, and AI service relationships.",
                url: "",
                kind: "documentation"
            },

            {
                label: "Working demonstration",
                description: "A demonstration of implemented learning features.",
                url: "",
                kind: "demo"
            },

            {
                label: "API test results",
                description: "Verified requests and responses from implemented APIs.",
                url: "",
                kind: "report"
            },

            {
                label: "Technical documentation",
                description: "Architecture decisions, setup, and known limitations.",
                url: "",
                kind: "documentation"
            }

        ]

    }

};


// =========================================
// ELEMENT REFERENCES
// =========================================

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

const projectModal = document.getElementById("projectModal");

const modalContent = document.getElementById("modalContent");

const modalClose = document.getElementById("modalClose");

const currentYear = document.getElementById("currentYear");

let previousFocusedElement = null;


// =========================================
// SAFE HTML ESCAPING
// =========================================

function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


// =========================================
// EVIDENCE LINKS
// =========================================

function renderEvidenceItem(item) {

    const label = escapeHTML(item.label);

    const description = escapeHTML(item.description);

    const validURL = isValidExternalURL(item.url);

    const action = validURL
        ? "Open evidence ↗"
        : "Evidence to be added";

    const tag = validURL ? "a" : "div";

    const href = validURL
        ? `href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer"`
        : "";

    return `
        <${tag} class="evidence-item" ${href}>

            <strong>${label}</strong>

            <span>${description}</span>

            <span class="evidence-action">${action}</span>

        </${tag}>
    `;

}


function isValidExternalURL(value) {

    if (!value || typeof value !== "string") {
        return false;
    }

    try {

        const url = new URL(value);

        return (
            url.protocol === "https:" ||
            url.protocol === "http:"
        );

    } catch {

        return false;

    }

}


// =========================================
// PROJECT CASE STUDY RENDERING
// =========================================

function renderList(items) {

    return `
        <ul>
            ${items.map(item => `
                <li>${escapeHTML(item)}</li>
            `).join("")}
        </ul>
    `;

}


function renderTags(items) {

    return `
        <div class="modal-tags">

            ${items.map(item => `
                <span>${escapeHTML(item)}</span>
            `).join("")}

        </div>
    `;

}


function renderProject(project) {

    return `

        <div class="modal-project-heading">

            <p class="eyebrow">
                ${escapeHTML(project.number)}
                / ${escapeHTML(project.category)}
            </p>

            <h2 id="modalTitle">
                ${escapeHTML(project.title)}
            </h2>

            <p>
                ${escapeHTML(project.subtitle)}
            </p>

        </div>


        <section class="modal-section">

            <h3>01 / Project overview</h3>

            <p>
                ${escapeHTML(project.summary)}
            </p>

        </section>


        <section class="modal-section">

            <h3>02 / Why I built it</h3>

            <p>
                ${escapeHTML(project.why)}
            </p>

        </section>


        <section class="modal-section">

            <h3>03 / Objectives</h3>

            ${renderList(project.objectives)}

        </section>


        <section class="modal-section">

            <h3>04 / Technologies used</h3>

            ${renderTags(project.technologies)}

        </section>


        <section class="modal-section">

            <h3>05 / What I worked on</h3>

            ${renderList(project.work)}

        </section>


        <section class="modal-section">

            <h3>06 / Skills developed</h3>

            ${renderList(project.skills)}

        </section>


        <section class="modal-section">

            <h3>07 / Outcome</h3>

            <p>
                ${escapeHTML(project.outcome)}
            </p>

        </section>


        <section class="modal-section">

            <h3>08 / Real-world relevance</h3>

            <p>
                ${escapeHTML(project.relevance)}
            </p>

        </section>


        <section class="modal-section">

            <h3>09 / Evidence & documentation</h3>

            <div class="evidence-grid">

                ${project.evidence
                    .map(renderEvidenceItem)
                    .join("")}

            </div>

        </section>


        <div class="modal-disclaimer">

            Evidence links marked as unavailable are placeholders.
            Replace them with genuine project repositories,
            screenshots, technical reports, or demonstrations.

            Describe planned features separately from verified,
            implemented functionality.

        </div>

    `;

}


// =========================================
// OPEN PROJECT
// =========================================

function openProject(projectID) {

    const project = projects[projectID];

    if (!project) {
        console.warn("Project not found:", projectID);
        return;
    }

    previousFocusedElement = document.activeElement;

    modalContent.innerHTML = renderProject(project);

    projectModal.classList.add("open");

    projectModal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    modalClose.focus();

}


// =========================================
// CLOSE PROJECT
// =========================================

function closeProject() {

    projectModal.classList.remove("open");

    projectModal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

    if (
        previousFocusedElement &&
        typeof previousFocusedElement.focus === "function"
    ) {

        previousFocusedElement.focus();

    }

}


// =========================================
// PROJECT CARD BUTTONS
// =========================================

document.querySelectorAll(".project-open").forEach(button => {

    button.addEventListener("click", () => {

        const projectID = button.dataset.project;

        openProject(projectID);

    });

});


// =========================================
// CLOSE MODAL EVENTS
// =========================================

modalClose.addEventListener("click", closeProject);


projectModal.addEventListener("click", event => {

    if (event.target === projectModal) {
        closeProject();
    }

});


document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        projectModal.classList.contains("open")
    ) {

        closeProject();

    }

});


// =========================================
// PROJECT FILTERS
// =========================================

const filterButtons = document.querySelectorAll(".filter-button");

const projectCards = document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedFilter = button.dataset.filter;

        filterButtons.forEach(filterButton => {

            filterButton.classList.remove("active");

            filterButton.setAttribute("aria-pressed", "false");

        });

        button.classList.add("active");

        button.setAttribute("aria-pressed", "true");


        projectCards.forEach(card => {

            const category = card.dataset.category;

            const matches =
                selectedFilter === "all" ||
                category === selectedFilter;

            card.classList.toggle("filtered-out", !matches);

        });

    });

});


// =========================================
// MOBILE NAVIGATION
// =========================================

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

});


document.querySelectorAll("#navLinks a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


document.addEventListener("click", event => {

    if (
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

    }

});


// =========================================
// SCROLL REVEAL ANIMATIONS
// =========================================

const revealElements = document.querySelectorAll(".reveal");

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


if (
    "IntersectionObserver" in window &&
    !prefersReducedMotion
) {

    const revealObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.08,
            rootMargin: "0px 0px -25px 0px"
        }

    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}


// =========================================
// EVIDENCE PLACEHOLDER HANDLING
// =========================================

document.querySelectorAll("[data-placeholder]").forEach(link => {

    link.addEventListener("click", event => {

        const placeholderName = link.dataset.placeholder;

        const isEmptyLink =
            link.getAttribute("href") === "#" ||
            !link.getAttribute("href");

        if (isEmptyLink) {

            event.preventDefault();

            alert(
                `"${placeholderName}" has not been linked yet.\n\n` +
                "Replace this placeholder with your actual " +
                "repository, profile, certificate, screenshot, " +
                "or documentation URL."
            );

        }

    });

});


// =========================================
// FOOTER YEAR
// =========================================

currentYear.textContent = new Date().getFullYear();


// =========================================
// CONSOLE MESSAGE
// =========================================

console.info(
    "%cManas Ghadge | Cybersecurity Portfolio",
    "color:#72f5a4;font-size:14px;font-weight:bold;"
);

console.info(
    "Interested in the projects? Explore the case studies and evidence links."
);