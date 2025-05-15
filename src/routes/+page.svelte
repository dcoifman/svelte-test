<script lang="ts">
  import { Motion } from '@motionone/svelte';
  import { fly, scale, fade } from 'svelte/transition';
  import { Brain, Flame, Rocket } from 'lucide-svelte';
  import NavBar from '$lib/components/NavBar.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<NavBar />

<!-- Hero Section -->
<section class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-700 to-fuchsia-700 p-8 text-center text-white">
  <div class="absolute inset-0 -z-10 animate-[spin_20s_linear_infinite] bg-[url('https://images.unsplash.com/photo-1559027615-3cf83cedf387?auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center mix-blend-overlay opacity-30"></div>

  <Motion.div transition={{ duration: 0.8 }} class="mb-6 text-5xl font-extrabold sm:text-7xl">
    Train Your <span class="text-yellow-300">Mind</span> Like an <span class="text-pink-300">Athlete</span>
  </Motion.div>
  <p class="mx-auto max-w-xl text-lg sm:text-2xl">
    Sprint‑based learning cycles, adaptive AI, and projects that matter. Powered by SvelteKit, Tailwind, and Google Gemini.
  </p>
  <a href="/signup" class="mt-10 inline-block rounded-2xl bg-white px-8 py-4 text-lg font-bold text-indigo-700 shadow-xl transition hover:scale-105 hover:shadow-2xl">Join the Beta →</a>

  <!-- Tech Stack Badges -->
  <div class="mt-16 flex flex-wrap items-center justify-center gap-6">
    <img src="https://cdn.simpleicons.org/svelte/FFFFFF" alt="Svelte" class="h-10 opacity-80" />
    <img src="https://cdn.simpleicons.org/tailwindcss/FFFFFF" alt="Tailwind" class="h-10 opacity-80" />
    <img src="https://cdn.simpleicons.org/node.js/FFFFFF" alt="Node" class="h-10 opacity-80" />
    <img src="https://cdn.simpleicons.org/googlecloud/FFFFFF" alt="Gemini" class="h-10 opacity-80" />
  </div>
</section>

<!-- Features Section -->
<section id="features" class="mx-auto max-w-6xl space-y-24 px-6 py-24">
  <h2 class="text-center text-4xl font-bold">Why SprintEd?</h2>
  <div class="grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
    <!-- Card 1 -->
    <Motion.div class="rounded-2xl bg-white p-8 shadow-lg" transition={{ type: 'spring', mass: 0.5 }}>
      <h3 class="mb-4 flex items-center gap-2 text-2xl font-semibold">
        <Brain class="h-7 w-7" />
        Adaptive Mastery
      </h3>
      <p>Gemini analyses every quiz and instantly tailors the next lesson—no two paths are the same.</p>
    </Motion.div>
    <!-- Card 2 -->
    <Motion.div class="rounded-2xl bg-white p-8 shadow-lg" transition={{ type: 'spring', mass: 0.5 }}>
      <h3 class="mb-4 flex items-center gap-2 text-2xl font-semibold">
        <Flame class="h-7 w-7" />
        Sprint + Deload
      </h3>
      <p>3‑week intensity blocks followed by reflection weeks reinforce retention and crush burnout.</p>
    </Motion.div>
    <!-- Card 3 -->
    <Motion.div class="rounded-2xl bg-white p-8 shadow-lg" transition={{ type: 'spring', mass: 0.5 }}>
      <h3 class="mb-4 flex items-center gap-2 text-2xl font-semibold">
        <Rocket class="h-7 w-7" />
        Passion Projects
      </h3>
      <p>Students showcase real‑world builds in live Demo Days—turning curiosity into portfolio power.</p>
    </Motion.div>
  </div>
</section>

<!-- Roadmap Snapshot (30‑39) -->
<section id="roadmap" class="bg-gray-50 py-24">
  <div class="mx-auto max-w-5xl px-6">
    <h2 class="mb-12 text-center text-4xl font-bold">Coming This Year</h2>
    <div class="relative border-l-4 border-indigo-600 pl-8">
      {#each [
        {phase:30,title:'AI Teacher Co‑Pilot'},
        {phase:31,title:'Passion‑Project Scaffolder'},
        {phase:32,title:'Adaptive Text Transformer'},
        {phase:33,title:'Rich Media Lessons'},
        {phase:34,title:'Analytics v2'},
        {phase:35,title:'Skill‑Badge Credentialing'},
        {phase:36,title:'LMS API Integration'},
        {phase:37,title:'Accessibility Overhaul'},
        {phase:38,title:'Auto‑Scaling Infra'},
        {phase:39,title:'SprintEd 2.0 Launch'}
      ] as item (item.phase)}
        <div class="mb-10">
          <span class="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">{item.phase}</span>
          <h3 class="mb-1 text-xl font-semibold">{item.title}</h3>
          <p class="ml-1 text-sm text-gray-600">Phase {item.phase}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<Footer />

<style>
  /* Tailwind handled via postcss; extra styles here if needed */
</style> 