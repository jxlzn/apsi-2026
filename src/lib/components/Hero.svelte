<script>
  import { onMount } from 'svelte';
  import { activate } from '../reveal.js';

  let hero;

  onMount(() => activate(hero));
</script>

<section class="hero" bind:this={hero}>
  <picture class="hero__media" aria-hidden="true">
    <img src="./images/hero_highres.gif" alt="" width="2880" height="1234">
  </picture>
  <div class="wrap hero__inner">
    <p class="hero__eyebrow">The Business Times Insights</p>
    <h1 class="hero__title">Asia Pacific Sustainability Index<span>APSI 2026</span></h1>
    <dl class="hero__stats">
      <div><dt>listed companies</dt><dd data-count="700">700</dd></div>
      <div><dt>jurisdictions</dt><dd data-count="14">14</dd></div>
      <div><dt>regional average base score <small>out of 100</small></dt><dd data-count="75.5" data-decimals="1">75.5</dd></div>
      <div><dt>contextualised regional final APSI score <small>out of 110</small></dt><dd data-count="78.9" data-decimals="1">78.9</dd></div>
    </dl>
    <p class="hero__partner">In partnership with the Centre for Governance and Sustainability at NUS Business School</p>
  </div>
</section>
