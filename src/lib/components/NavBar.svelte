<script lang="ts">
  import { fade } from 'svelte/transition';
  
  let isOpen = false;
  let scrollY = 0;

  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<svelte:window bind:scrollY />

<nav class:shadow-md={scrollY > 10} class="fixed top-0 z-50 w-full bg-white bg-opacity-95 transition-all duration-300">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
    <!-- Logo -->
    <a href="/" class="flex items-center space-x-2">
      <span class="text-2xl font-bold text-indigo-700">SprintEd</span>
    </a>

    <!-- Desktop Menu -->
    <div class="hidden space-x-8 md:flex">
      <a href="/" class="text-gray-700 hover:text-indigo-700">Home</a>
      <a href="#features" class="text-gray-700 hover:text-indigo-700">Features</a>
      <a href="#roadmap" class="text-gray-700 hover:text-indigo-700">Roadmap</a>
      <a href="/signup" class="rounded-lg bg-indigo-700 px-4 py-2 text-white hover:bg-indigo-800">Join Beta</a>
    </div>

    <!-- Mobile Menu Button -->
    <div class="md:hidden">
      <button on:click={toggleMenu} class="text-gray-500 hover:text-gray-700 focus:outline-none">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {#if isOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if isOpen}
    <div transition:fade={{ duration: 200 }} class="md:hidden">
      <div class="space-y-1 px-4 pb-3 pt-2">
        <a href="/" class="block py-2 text-gray-700 hover:text-indigo-700">Home</a>
        <a href="#features" class="block py-2 text-gray-700 hover:text-indigo-700">Features</a>
        <a href="#roadmap" class="block py-2 text-gray-700 hover:text-indigo-700">Roadmap</a>
        <a href="/signup" class="mt-2 block rounded-lg bg-indigo-700 px-4 py-2 text-center text-white hover:bg-indigo-800">Join Beta</a>
      </div>
    </div>
  {/if}
</nav>

<!-- Spacer to prevent content from hiding under the navbar -->
<div class="h-16"></div> 