<script>
  import { C, fmt } from '../colors.js';

  let { rows, max, avg = null, unit = '', lab = null, axis = null } = $props();
</script>

<div class="chart-body" style:--lab={lab}>
  <div class="hbars">
    {#each rows as r}
      <div class="hbar">
        <span class="hbar__label">{r.label}</span>
        <div class="hbar__track">
          <div class="hbar__fill" style:background={r.color ?? C.blue} data-w="{(r.value / max) * 100}%"></div>
        </div>
        <span class="hbar__val">{r.display ?? fmt(r.value) + unit}</span>
      </div>
    {/each}
    {#if avg}
      <div class="hbars__avg" style:--a={avg.value / max}><b>{avg.label}</b></div>
    {/if}
  </div>
  {#if axis}
    <div class="hbars__axis">
      <span></span>
      <div>{#each axis as t}<span>{t}</span>{/each}</div>
      <span></span>
    </div>
  {/if}
</div>
