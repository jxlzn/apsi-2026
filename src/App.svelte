<script>
  import { onMount } from 'svelte';
  import { initReveal } from './lib/reveal.js';
  import Header from './lib/components/Header.svelte';
  import Hero from './lib/components/Hero.svelte';
  import Foreword from './lib/sections/Foreword.svelte';
  import Summary from './lib/sections/Summary.svelte';
  import StateOfPlay from './lib/sections/StateOfPlay.svelte';
  import Boards from './lib/sections/Boards.svelte';
  import Climate from './lib/sections/Climate.svelte';
  import Scope3 from './lib/sections/Scope3.svelte';
  import Biodiversity from './lib/sections/Biodiversity.svelte';
  import Compliance from './lib/sections/Compliance.svelte';
  import Conclusion from './lib/sections/Conclusion.svelte';
  import Methodology from './lib/sections/Methodology.svelte';
  import Credits from './lib/sections/Credits.svelte';

  onMount(() => initReveal());
</script>

<Header />

<main id="top">
  <Hero />
  <Foreword />
  <Summary />
  <StateOfPlay />
  <Boards />
  <Climate />
  <Scope3 />
  <Biodiversity />
  <Compliance />
  <Conclusion />
  <Methodology />
  <Credits />
</main>
