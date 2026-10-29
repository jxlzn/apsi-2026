<script>
  import { onMount } from 'svelte';
  import { activate } from '../reveal.js';

  let hero;

  onMount(() => activate(hero));
</script>

<section class="hero" bind:this={hero}>
  <picture class="hero__media" aria-hidden="true">
    <source media="(min-width: 761px)" srcset="./images/hero-wide.gif" width="1100" height="471">
    <img src="./images/hero-a.gif" alt="" width="502" height="1004">
  </picture>
  <div class="wrap hero__inner">
    <p class="hero__eyebrow">The Business Times Insights</p>
    <h1 class="hero__title">Asia Pacific Sustainability Index<span>APSI 2026</span></h1>
    <p class="hero__partner">In partnership with the Centre for Governance and Sustainability at NUS Business School</p>
    <dl class="hero__stats">
      <div><dt>listed companies</dt><dd data-count="700">700</dd></div>
      <div><dt>jurisdictions</dt><dd data-count="14">14</dd></div>
      <div><dt>average base score <small>out of 100</small></dt><dd data-count="75.5" data-decimals="1">75.5</dd></div>
      <div><dt>APSI score <small>out of 110</small></dt><dd data-count="78.9" data-decimals="1">78.9</dd></div>
    </dl>
    <a class="hero__cta" href="#foreword">Read the report <span aria-hidden="true">&darr;</span></a>
  </div>
</section>
