<script>
  /** @type {{ points: [string, number, string, boolean?][] }} */
  let { points } = $props();
</script>

<div class="range">
  <div class="range__track">
    {#each points as [name, v, color, flip]}
      <div class="range__pt" style:left="{v}%" style:--c={color}>
        <i></i>
        <b style={flip ? 'bottom:auto;top:30px' : null}>{v}%</b>
        <span style={flip ? 'top:auto;bottom:34px' : null}>{name}</span>
      </div>
    {/each}
  </div>
  <div class="range__ticks"><span>0%</span><span>50%</span><span>100%</span></div>
</div>
