<script>
  let { on } = $props();
</script>

<div class="waffle" role="img" aria-label="{on} per cent">
  {#each { length: 100 } as _, i}
    <span data-on={i < on ? 1 : 0} style:transition-delay="{i * 12}ms"></span>
  {/each}
</div>
