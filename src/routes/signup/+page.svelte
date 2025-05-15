<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { Motion } from '@motionone/svelte';
  import NavBar from '$lib/components/NavBar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  
  let email = '';
  let name = '';
  let reason = '';
  let submitted = false;

  function handleSubmit() {
    // In a real app, we would submit to a backend
    submitted = true;
  }
</script>

<NavBar />

<div class="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-700 to-fuchsia-700 p-6">
  <div class="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl sm:p-10">
    {#if submitted}
      <div in:fade class="flex flex-col items-center justify-center py-10 text-center">
        <div class="mb-6 text-5xl">🎉</div>
        <h1 class="mb-4 text-3xl font-bold text-indigo-700">Thanks, {name}!</h1>
        <p class="mb-6 text-lg text-gray-700">
          We've added you to our early access list. We'll be in touch soon with next steps!
        </p>
        <a href="/" class="text-indigo-600 underline hover:text-indigo-800">Return to home</a>
      </div>
    {:else}
      <div in:fade>
        <Motion.h1 transition={{ duration: 0.5 }} class="mb-6 text-center text-3xl font-bold text-indigo-700">
          Join the SprintEd Beta
        </Motion.h1>
        
        <p class="mb-8 text-center text-gray-600">
          Get early access to our innovative learning platform and help shape the future of education.
        </p>
        
        <form on:submit|preventDefault={handleSubmit} class="space-y-6">
          <div>
            <label for="name" class="mb-2 block text-sm font-medium text-gray-700">Full Name</label>
            <input
              bind:value={name}
              id="name"
              type="text"
              required
              class="block w-full rounded-lg border border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Jane Doe"
            />
          </div>
          
          <div>
            <label for="email" class="mb-2 block text-sm font-medium text-gray-700">Email Address</label>
            <input
              bind:value={email}
              id="email"
              type="email"
              required
              class="block w-full rounded-lg border border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="jane@example.com"
            />
          </div>
          
          <div>
            <label for="reason" class="mb-2 block text-sm font-medium text-gray-700">Why are you interested?</label>
            <textarea
              bind:value={reason}
              id="reason"
              rows="3"
              class="block w-full rounded-lg border border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="I'm interested because..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            class="w-full rounded-lg bg-indigo-700 py-3 font-medium text-white transition hover:bg-indigo-800"
          >
            Request Early Access
          </button>
        </form>
        
        <p class="mt-8 text-center text-sm text-gray-500">
          By signing up, you agree to our <a href="#" class="text-indigo-600 hover:underline">Terms</a> and 
          <a href="#" class="text-indigo-600 hover:underline">Privacy Policy</a>.
        </p>
      </div>
    {/if}
  </div>
</div>

<Footer /> 