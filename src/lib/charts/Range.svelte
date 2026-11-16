<script>
  /** @type {{ points: [string, number, string, boolean?][] }} */
  let { points } = $props();

  // Stagger labels when two points sit close together to avoid overlap on narrow screens.
  const placed = $derived.by(() => {
    const sorted = points
      .map((p, i) => ({ name: p[0], v: p[1], color: p[2], flip: !!p[3], i }))
      .sort((a, b) => a.v - b.v);

    return sorted.map((p, idx) => {
      const prev = sorted[idx - 1];
      const close = prev && p.v - prev.v < 14;
      return {
        ...p,
        // Alternate above/below when close; honour explicit flip otherwise.
        above: close ? idx % 2 === 0 : !p.flip
      };
    });
  });
</script>

<div class="range">
  <div class="range__track">
    {#each placed as p}
      <div class="range__pt" class:is-above={p.above} class:is-below={!p.above} style:left="{p.v}%" style:--c={p.color}>
        <i></i>
        <b>{p.v}%</b>
        <span>{p.name}</span>
      </div>
    {/each}
  </div>
  <div class="range__ticks"><span>0%</span><span>50%</span><span>100%</span></div>
</div>
