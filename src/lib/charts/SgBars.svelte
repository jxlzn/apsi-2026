<script>
  import { C, fmt } from '../colors.js';

  const rows = [
    ['Singapore', 84.9, C.blue45, C.ink],
    ['Regional average', 75.5, C.grey, '#fff']
  ];
</script>

<div class="sg">
  {#each rows as [label, v, bg, color]}
    <div class="sg__row">
      <span>{label}</span>
      <div class="sg__bar" style:background={bg} style:color data-w="{v}%">{fmt(v)}</div>
    </div>
  {/each}
</div>
