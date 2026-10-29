<script>
  import { C } from '../colors.js';

  let { rows } = $props();
</script>

<div class="funnel">
  {#each rows as r}
    <div class="funnel__row">
      <div class="funnel__bar" style:background={r.color} data-w="{r.value}%">{r.label}</div>
      <span class="funnel__val" style:color={r.color === C.orange ? C.orange : C.deep}>{r.display}</span>
    </div>
  {/each}
</div>
