<script>
  import { C } from '../colors.js';

  let { rows } = $props();
</script>

<div class="funnel">
  {#each rows as r}
    <div class="funnel__row">
      <div class="funnel__bar" class:is-short={r.color === C.orange} style:background={r.color} style:color={r.color === C.orange ? '#000' : '#fff'} data-w="{r.value}%">
        <span>
          {#if r.color === C.orange}
            Provide quantitative<br>assessments
          {:else}
            {r.label}
          {/if}
        </span>
      </div>
      <span class="funnel__val" style:color={r.color === C.orange ? C.orange : C.deep}>{r.display}</span>
    </div>
  {/each}
</div>
