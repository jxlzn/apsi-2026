<script>
  import { C } from '../colors.js';

  let { rows } = $props();

  const accent = C.green;
</script>

<div class="funnel">
  {#each rows as r}
    {@const isAccent = r.color === accent || r.color === C.orange}
    <div class="funnel__row">
      <div class="funnel__bar" class:is-short={isAccent} style:background={r.color} style:color={isAccent ? C.ink : '#fff'} data-w="{r.value}%">
        <span>
          {#if isAccent}
            Provide quantitative<br>assessments
          {:else}
            {r.label}
          {/if}
        </span>
      </div>
      <span class="funnel__val" style:color={isAccent ? r.color : C.deep}>{r.display}</span>
    </div>
  {/each}
</div>
