<script>
  import { jurisdictions } from './data.js';
  import { mapBox, project, contextPath, countryPaths } from './apacPaths.js';

  const items = jurisdictions.map((j) => {
    const pin = project(j.pin[0], j.pin[1]);
    const lab = project(j.labelAt[0], j.labelAt[1]);
    const dist = Math.hypot(lab[0] - pin[0], lab[1] - pin[1]);
    return { ...j, pin, lab, linked: dist > 32 };
  });

  let active = $state(null);

  function leader(pin, lab) {
    const dx = lab[0] - pin[0];
    const dy = lab[1] - pin[1];
    const len = Math.hypot(dx, dy) || 1;
    return {
      x1: pin[0] + (dx / len) * 7,
      y1: pin[1] + (dy / len) * 7,
      x2: lab[0] - (dx / len) * 2,
      y2: lab[1] - (dy / len) * 2
    };
  }
</script>

<div class="score-map">
  <svg viewBox="0 0 {mapBox.w} {mapBox.h}" role="img" aria-label="Map of base and contextualised sustainability reporting scores for 14 Asia Pacific jurisdictions">
    <rect class="score-map__sea" width={mapBox.w} height={mapBox.h} />
    <path class="score-map__context" d={contextPath} />
    {#each Object.entries(countryPaths) as [id, d]}
      <path
        class="score-map__land"
        class:is-on={active === id}
        {d}
        onmouseenter={() => (active = id)}
        onmouseleave={() => (active = null)}
      >
        <title>{jurisdictions.find((j) => j.id === id)?.label}</title>
      </path>
    {/each}
    {#each items as j}
      {#if j.linked}
        {@const line = leader(j.pin, j.lab)}
        <line class="score-map__leader" class:is-on={active === j.id} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} />
      {/if}
    {/each}
    {#each items as j}
      {#if j.linked}
        <circle class="score-map__pin" class:is-on={active === j.id} cx={j.pin[0]} cy={j.pin[1]} r="3.6" />
      {/if}
    {/each}
  </svg>

  {#each items as j}
    <div
      class="score-map__label"
      class:is-on={active === j.id}
      style:left="{(j.lab[0] / mapBox.w) * 100}%"
      style:top="{(j.lab[1] / mapBox.h) * 100}%"
      onmouseenter={() => (active = j.id)}
      onmouseleave={() => (active = null)}
    >
      <span class="score-map__nums">
        <span>{j.base.toFixed(1)}</span>
        <span>{j.final.toFixed(1)}</span>
      </span>
      <span class="score-map__name">{j.label}</span>
    </div>
  {/each}
</div>
