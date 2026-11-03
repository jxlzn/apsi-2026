<script>
  import { C } from '../colors.js';

  /** Grouped columns. `rows` are { label, values } and `colors` match each value. */
  let { rows, colors = [C.blue, C.red] } = $props();
</script>

<div class="cols" role="img" aria-label="Nature-related disclosures by jurisdiction">
  <div class="cols__groups">
    {#each rows as r}
      <div class="cols__group">
        <div class="cols__pair">
          {#each r.values as v, i}
            <div class="cols__track">
              <div class="cols__bar" style:background={colors[i]} data-h="{v}%">
                <span class="cols__num" style:color={colors[i]}>{v}%</span>
              </div>
            </div>
          {/each}
        </div>
        <span class="cols__label">{r.label}</span>
      </div>
    {/each}
  </div>
</div>
