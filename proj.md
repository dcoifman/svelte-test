— project_description.md —

SprintEd – Adaptive Sprint‑Based Learning Platform

SprintEd fuses athletic periodisation with AI‑driven personalisation to deliver short, intensive learning sprints (3–4 weeks) followed by deliberate deload/reflection weeks.
	•	Mission: Equip every learner with a rhythmic, data‑informed path to mastery that keeps motivation high and burnout low.
	•	Value Proposition: Continuous low‑stakes assessment and Gemini‑generated micro‑content enable micro‑schools, homeschoolers, and forward‑thinking classrooms to run highly individualised curricula without ballooning teacher workload.
	•	Target Users:
	•	Primary – middle‑ and high‑school learners in flexible schooling models.
	•	Secondary – educators seeking modular supplements; life‑long learners in later phases.
	•	Core Pillars: periodised cycles, adaptive micro‑lessons, actionable feedback, passion‑driven projects, and an intrinsic–extrinsic motivation blend (XP, badges, showcases).

— developer_instructions.md —

Developer Instructions

1. Tech Stack

Layer	Choice	Notes
Front‑end	SvelteKit (PWA)	Offline‑first via Service‑Worker (Workbox) & IndexedDB cache
Styling	TailwindCSS	DaisyUI component helpers optional
Back‑end	Node / Express (REST)	Migrates to serverless Cloud Run functions ≥ Phase 30
DB (initial)	Firebase Firestore	Move to Postgres + Prisma by Phase 30
AI	Google Gemini 1.5 Pro	All calls server‑side through proxy
Auth	Firebase Auth (email, OAuth)	SSO/SIS connectors Phase 34
CI/CD	GitHub Actions → Cloud Run	Canary deploy, Playwright e2e

2. Local Setup

pnpm i
cp .env.example .env  # add FIREBASE_*, GEMINI_KEY
pnpm run dev          # SvelteKit dev server

3. Branching & PR
	•	main – production, protected.
	•	dev  – integration.
	•	feat/*, fix/* – short‑lived feature branches.

PR requirements: lint (ESLint + Prettier + svelte‑plugin), unit tests ≥ 80 % coverage, linked ClickUp ticket.

4. Code Style & Conventions
	•	TypeScript strict mode.
	•	Svelte single‑file components; state handled with Svelte stores.
	•	API calls via fetch wrappers with typed response guards (zod).
	•	Tailwind utility classes; avoid inline styles.
	•	Accessibility first: ARIA labels, keyboard navigation, prefers‑reduced‑motion.

5. Security & Privacy
	•	Gemini proxy runs in VPC; service account key in Secret Manager.
	•	Encrypt PII at rest (AES‑256‑GCM) and in transit (TLS 1.3).
	•	COPPA & FERPA compliance audits begin Phase 22.

— project_outline.md —

Project Outline

Modules & Components
	1.	Auth & Profiles – role‑based (student/teacher/parent/admin).
	2.	Sprint Planner – create/edit sprint calendar, deload week auto‑insert.
	3.	Learning Engine
• Micro‑lesson player
• Gemini quiz generator
• Adaptive mastery model (IRT‑like)
	4.	Projects & Submissions – kanban view, file/link uploads.
	5.	Dashboards
• Student progress
• Teacher actionable alerts
• Parent digest
	6.	Gamification Layer – XP, badges, energy bar.
	7.	Community Space – demo‑day live rooms, sprint marketplace.

Data Model (high‑level)

User { id, role, settings }
Sprint { id, title, startDate, endDate, theme }
Lesson { id, sprintId, skillTags[], difficulty }
Assessment { id, lessonId, items[] }
Mastery { userId, skillTag, theta, lastUpdated }
Project { id, sprintId, ownerId, status }

— roadmap.md —

Roadmap – Detailed Timeline (Phases 0–39)

Phase	Title	Core Deliverables	KPI / Exit Criteria
0	Vision Alignment	North‑star metric, success definitions, governance	All founders sign off
1	Market Discovery	50 parent/teacher interviews; JTBD map	Interview notes ≥ 50
2	Competitive Teardown	Matrix vs OutSchool, Sora, Khan+	SWOT doc complete
3	Pedagogy Board	Recruit 5 experts; monthly cadence	MoU signed
4	Tech‑Stack Spike	PWA baseline, SvelteKit POC offline	Time‑to‑interactive < 1.2 s
5	UX Paper Proto	Sprint calendar paper demo	Positive feedback ≥ 70 %
6	Figma Click‑Demo	High‑fidelity clickable prototype	SUS > 80
7	Micro‑lesson Generator v0	Local JSON quiz seeds via Gemini	100 sample lessons
8	Static Mastery Model	Placeholder thresholds	Quiz accuracy logging
9	☆ Prototype Showcase	Present to design partners	2 letters of intent
10	Auth + Profiles	Email & OAuth login; role RBAC	First 20 user accounts
11	Sprint Scheduler CRUD	Calendar CRUD + deload insertion	End‑to‑end e2e test passing
12	Gemini Quiz Engine v1	Server‑side proxy; MCQ generation	Latency < 700 ms/item
13	Lesson Player v1	Markdown + video; progress track	Avg. completion 60 %
14	Dashboard v1	Progress bars, XP, badges MVP	Daily active / weekly active > 35 %
15	Gamification Layer v1	XP, badge schema, streak calc	50 % learners earn badge
16	Project Submission	Kanban board; Drive API link	90 % submission rate
17	Reflection Week Templates	Journals, goal sheets	Retention ≥ 85 % next sprint
18	Teacher Feedback Inbox	Inline comments & rubric	Avg. feedback response < 24 h
19	☆ Private Beta	2 micro‑schools, 60 learners	NPS ≥ 40
20	Adaptive Pathing v2	IRT‑like theta update, skill graph	Avg. mastery delta +15 %
21	Telemetry Pipeline	Mixpanel events, Sentry alerts	Crash‑free sessions ≥ 99 %
22	Compliance Sprint	COPPA, FERPA policy, DPA templates	Legal sign‑off
23	Offline PWA	IndexedDB sync, conflict merge	LMS‑offline parity 95 %
24	Parent Portal v1	Weekly digest emails, summary page	Open rate ≥ 55 %
25	Gamification v2	Energy bar, streak preservation	Avg. session length +20 %
26	Community Demo‑Day Rooms	WebRTC live showcase, chat mod	2 live events run
27	Sprint Marketplace v1	Upload/download sprint templates	100 public templates
28	Localization Framework	i18n (Vue‑i18n), RTL support	Arabic & Spanish beta
29	☆ Public MVP Launch	Homeschool / micro‑school market	1 000 MAU

Phases 30–39 – SCALE & DEPTH (Full Detail)

Phase	Goal	Detailed Tasks	Success Metric
30	AI Co‑Pilot for Teachers	• Prompt‑builder UI  • Gemini prompt library CRUD  • Real‑time lesson‑plan draft ↔ calendar	70 % of teachers create plan via co‑pilot
31	Passion‑Project Scaffolder	• Project idea generator  • Kanban subtasks & milestones  • Mentor matching algorithm (optional human tag)	80 % of active learners create project
32	Adaptive Text‑Difficulty Transformer	• /rewrite endpoint  • Lexile estimation service  • Toggle in lesson player	Reading‑level match ↑ comprehension 10 %
33	Rich Media Lesson Support	• Video & audio uploads (Mux)  • Automatic transcripts (Gemini speech‑to‑text)  • Caption editing UI	50 % lessons include media
34	Analytics v2	• Cohort dashboards (retention, mastery curve)  • Parent engagement stats  • Teacher performance heat‑map	Admin usage ≥ 75 % weekly
35	Skill‑Badge Credentialing	• Badge-to-skill mapping  • JSON‑LD export  • Optional blockchain notarisation (Polygon PoS)	1 partner org accepts badge
36	External LMS API	• CRUD REST for Sprints/Users  • Canvas & Google Classroom connectors  • OAuth scopes & SIS sync	First district integration pilot
37	Accessibility Overhaul	• WCAG 2.2 AA audit  • Color‑contrast tokens  • Keyboard trap tests  • Screen‑reader alt flows	WCAG audit pass ≥ 95 %
38	Auto‑Scaling & Cost Optimisation	• Migrate Node to Cloud Run container  • Horizontal autoscaler  • Rollout Redis cache for hot quiz items	P95 latency < 300 ms, infra cost‑per‑user ↓30 %
39	☆ SprintEd 2.0 Public Launch	Marketing push, onboarding wizard, referral program, SLA docs	10 k MAU, churn < 3 % MoM

Beyond Phase 39 the roadmap will be revisited alongside new user data; ecosystem/R&D tracks are deferred.

— gemini_api_description.md —

Gemini API Usage Guide

1. Purpose

Gemini provides dynamic generation & transformation of educational content, powering:
	•	Quiz / checkpoint creation
	•	Adaptive text difficulty
	•	Teacher co‑pilot lesson planning
	•	Learner curiosity nudges
	•	Reflection prompts

2. Core Proxy Endpoints

Endpoint	Method	Payload	Returns
/gemini/quiz	POST	{ skillTags[], bloom, difficulty }	{ items[] }
/gemini/rewrite	POST	{ text, gradeLevel }	{ revisedText }
/gemini/prompt-assist	POST	{ objective, constraints[] }	{ outline }
/gemini/curiosity	POST	{ userId, recentProjects[] }	{ nudge }

3. Prompt Design Guidelines
	1.	Few‑shot examples – supply 2–3 ideal Q&A pairs.
	2.	Explicit JSON schema – define keys & types in system prompt.
	3.	Temperature tuning – 0.2 for assessments, 0.7 for creative prompts.

4. Error Handling & Rate Limits
	•	429 → exponential back‑off (2ⁿ s, max 32 s).
	•	Log all non‑200 responses (no PII).
	•	Circuit‑break if failure rate > 5 % over 5 min.

5. Security
	•	API key stored in Secret Manager; calls originate only from server.
	•	Response filtering to redact disallowed content per policy.