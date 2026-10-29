<script>
  import { C } from '../colors.js';

  let { value, extra = 0, color = 'blue', children } = $props();

  const stroke = $derived(color === 'red' ? C.red : C.blue);
</script>

<div class="ring">
  <div class="ring__wrap">
    <svg viewBox="0 0 42 42" aria-hidden="true">
      <circle class="bg" cx="21" cy="21" r="15.915" />
      {#if extra}
        <circle class="ex" cx="21" cy="21" r="15.915" stroke={C.red25} stroke-dashoffset={-value} data-dash="{extra} {100 - extra}" />
      {/if}
      <circle class="fg" cx="21" cy="21" r="15.915" {stroke} data-dash="{value} {100 - value}" />
    </svg>
    <span class="ring__num" style:color={color === 'red' ? C.red : C.deep}>{value}%</span>
  </div>
  <span>{@render children?.()}</span>
</div>
