<script>
  import { C } from '../colors.js';

  let { segments, center = null, small = false } = $props();

  const arcs = $derived.by(() => {
    const total = segments.reduce((s, x) => s + x.value, 0);
    let acc = 0;
    return segments.map(s => {
      const pct = (s.value / total) * 100;
      const arc = { ...s, pct, offset: -acc };
      acc += pct;
      return arc;
    });
  });
</script>

<div class="donut-wrap" class:donut-wrap--sm={small}>
  <div class="donut">
    <svg viewBox="0 0 42 42" aria-hidden="true">
      <circle cx="21" cy="21" r="15.915" stroke={C.blue5} stroke-width="7" fill="none" />
      {#each arcs as a}
        <circle
          cx="21" cy="21" r="15.915"
          stroke={a.color}
          stroke-dasharray="0 100"
          data-dash="{a.pct - 0.4} {100 - a.pct + 0.4}"
          stroke-dashoffset={a.offset}
        />
      {/each}
    </svg>
    {#if center}
      <div class="donut__center"><div><b>{center.value}</b><span>{center.label}</span></div></div>
    {/if}
  </div>
  <ul class="donut-legend">
    {#each segments as s}
      <li><i style:background={s.color}></i><span>{s.label}</span><b>{s.value}%</b></li>
    {/each}
  </ul>
</div>
