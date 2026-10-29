<script>
  import { onMount } from 'svelte';
  import { sections } from '../sections.js';

  let open = $state(false);
  let progress = $state(0);
  let isHero = $state(true);
  let active = $state(-1);
  let nav;
  const links = [];

  $effect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  });

  onMount(() => {
    const hero = document.querySelector('.hero');
    const secs = sections.map(s => document.getElementById(s.id));

    function onScroll() {
      const y = scrollY;
      const max = document.documentElement.scrollHeight - innerHeight;
      progress = (y / max) * 100;
      isHero = y < hero.offsetHeight - 80;
      let idx = -1;
      secs.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * 0.35) idx = i; });
      active = idx;
      if (idx >= 0) {
        const a = links[idx];
        const target = a.offsetLeft - nav.clientWidth / 2 + a.clientWidth / 2;
        if (Math.abs(nav.scrollLeft - target) > 40) nav.scrollTo({ left: target, behavior: 'smooth' });
      }
    }

    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => removeEventListener('scroll', onScroll);
  });
</script>

<div class="progress" aria-hidden="true"><span style:width="{progress}%"></span></div>

<header class="topbar" class:is-hero={isHero}>
  <div class="topbar__inner">
    <a class="brand" href="#top" aria-label="Back to top">
      <span class="brand__mark">BT</span>
      <span class="brand__text">Insights <b>APSI 2026</b></span>
    </a>
    <nav class="nav" aria-label="Report sections" bind:this={nav}>
      {#each sections as s, i}
        <a href="#{s.id}" class:is-active={i === active} bind:this={links[i]}>{s.nav}</a>
      {/each}
    </nav>
    <button class="menu-btn" aria-expanded={open} aria-controls="drawer" onclick={() => (open = !open)}>
      <span></span><span></span><span class="sr-only">Menu</span>
    </button>
  </div>
  <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
  <div class="drawer" id="drawer" hidden={!open} onclick={e => { if (e.target.closest('a')) open = false; }}>
    {#each sections as s, i}
      <a href="#{s.id}"><i>{String(i + 1).padStart(2, '0')}</i> {s.title}</a>
    {/each}
    <a href="#credits"><i>&mdash;</i> Credits</a>
  </div>
</header>
