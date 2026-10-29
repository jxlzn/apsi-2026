<script>
  import { fmt } from '../colors.js';

  let { rows, max, series } = $props();
</script>

<div class="chart-body">
  <div class="hbars hbars--group">
    {#each rows as r}
      <div class="hbar">
        <span class="hbar__label"><b>{r.label}</b></span>
        <div class="hbar__track">
          {#each r.values as v, i}
            <div class="hbar__fill" style:background={series[i].color} data-w="{(v / max) * 100}%"></div>
          {/each}
        </div>
        <div class="hbar__val">
          {#each r.values as v}<span>{fmt(v)}</span>{/each}
        </div>
      </div>
    {/each}
  </div>
</div>
