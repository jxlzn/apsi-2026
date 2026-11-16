<script>
  import { C } from '../colors.js';

  let { segments, center = null, small = false, callouts = false } = $props();

  const R = 15.915;
  const CX = 21;
  const CY = 21;

  const arcs = $derived.by(() => {
    const total = segments.reduce((s, x) => s + x.value, 0);
    let acc = 0;
    return segments.map((s, i) => {
      const pct = (s.value / total) * 100;
      const mid = acc + pct / 2;
      const arc = { ...s, pct, offset: -acc, mid, i };
      acc += pct;
      return arc;
    });
  });

  /** Percent-along-ring → SVG point, starting at 12 o'clock. */
  function polar(pct, radius) {
    const angle = (pct / 100) * Math.PI * 2 - Math.PI / 2;
    return [CX + Math.cos(angle) * radius, CY + Math.sin(angle) * radius];
  }

  function wrapLabel(label, max = 14) {
    const words = String(label).split(/\s+/);
    const lines = [];
    let cur = '';
    for (const w of words) {
      const next = cur ? `${cur} ${w}` : w;
      if (next.length > max && cur) {
        lines.push(cur);
        cur = w;
      } else cur = next;
    }
    if (cur) lines.push(cur);
    return lines;
  }

  // Nudge callout Y so nearby slices on the same side don't collide.
  const calloutMeta = $derived.by(() => {
    const items = arcs.map((a) => {
      const side = ((a.mid % 100) + 100) % 100 < 50 ? 1 : -1;
      const [, y2] = polar(a.mid, 26);
      const lines = wrapLabel(a.label, 12);
      return { ...a, side, y: y2, lines };
    });

    for (const side of [1, -1]) {
      const group = items.filter((x) => x.side === side).sort((a, b) => a.y - b.y);
      for (let i = 1; i < group.length; i++) {
        const prevH = 2.8 + group[i - 1].lines.length * 2.8;
        const need = prevH + 1.2;
        const gap = group[i].y - group[i - 1].y;
        if (gap < need) group[i].y = group[i - 1].y + need;
      }
    }
    return items;
  });
</script>

<div class="donut-wrap" class:donut-wrap--sm={small} class:donut-wrap--callouts={callouts}>
  <div class="donut" class:donut--callouts={callouts}>
    {#if callouts}
      <!-- Desktop: labels around the pie with straight leader lines -->
      <svg class="donut__svg donut__svg--callouts donut__svg--desktop" viewBox="-24 -14 90 70" aria-hidden="true">
        <g transform="rotate(-90 21 21)">
          <circle cx={CX} cy={CY} r={R} stroke={C.blue5} stroke-width="7" fill="none" pathLength="100" />
          {#each arcs as a}
            <circle
              cx={CX} cy={CY} r={R}
              stroke={a.color}
              stroke-dasharray="{a.pct - 0.4} {100 - a.pct + 0.4}"
              data-dash="{a.pct - 0.4} {100 - a.pct + 0.4}"
              stroke-dashoffset={a.offset}
              fill="none"
              stroke-width="7"
              pathLength="100"
            />
          {/each}
        </g>
        {#each calloutMeta as a}
          {@const [x1, y1] = polar(a.mid, 19.6)}
          {@const x3 = a.side > 0 ? 54 : -12}
          {@const tx = a.side > 0 ? x3 + 1.2 : x3 - 1.2}
          {@const labelTop = a.y - (a.lines.length - 1) * 1.4 - 1.6}
          <!-- Orthogonal elbow: vertical from slice, then horizontal to label -->
          <path class="donut__leader" d="M{x1} {y1} L{x1} {a.y} L{x3} {a.y}" />
          <text
            class="donut__callout"
            text-anchor={a.side > 0 ? 'start' : 'end'}
          >
            {#each a.lines as line, li}
              <tspan x={tx} y={labelTop + li * 2.8}>{line}</tspan>
            {/each}
            <tspan class="donut__callout-val" x={tx} y={labelTop + a.lines.length * 2.8 + 0.4}>{a.value}%</tspan>
          </text>
        {/each}
      </svg>

      <!-- Mobile: pie only; labels stack below -->
      <svg class="donut__svg donut__svg--mobile" viewBox="0 0 42 42" aria-hidden="true">
        <circle cx={CX} cy={CY} r={R} stroke={C.blue5} stroke-width="7" fill="none" pathLength="100" />
        {#each arcs as a}
          <circle
            cx={CX} cy={CY} r={R}
            stroke={a.color}
            stroke-dasharray="{a.pct - 0.4} {100 - a.pct + 0.4}"
            data-dash="{a.pct - 0.4} {100 - a.pct + 0.4}"
            stroke-dashoffset={a.offset}
            fill="none"
            stroke-width="7"
            pathLength="100"
          />
        {/each}
      </svg>
      {#if center}
        <div class="donut__center">
          <div>
            <b>{center.value}</b>
            <span>{center.label}</span>
          </div>
        </div>
      {/if}
    {:else}
      <svg viewBox="0 0 42 42" aria-hidden="true">
        <circle cx={CX} cy={CY} r={R} stroke={C.blue5} stroke-width="7" fill="none" pathLength="100" />
        {#each arcs as a}
          <circle
            cx={CX} cy={CY} r={R}
            stroke={a.color}
            stroke-dasharray="{a.pct - 0.4} {100 - a.pct + 0.4}"
            data-dash="{a.pct - 0.4} {100 - a.pct + 0.4}"
            stroke-dashoffset={a.offset}
            fill="none"
            stroke-width="7"
            pathLength="100"
          />
        {/each}
      </svg>
      {#if center}
        <div class="donut__center"><div><b>{center.value}</b><span>{center.label}</span></div></div>
      {/if}
    {/if}
  </div>
  {#if callouts}
    <ul class="donut-callouts">
      {#each segments as s}
        <li>
          <i style:background={s.color}></i>
          <span>{s.label}</span>
          <b>{s.value}%</b>
        </li>
      {/each}
    </ul>
  {:else}
    <ul class="donut-legend">
      {#each segments as s}
        <li><i style:background={s.color}></i><span>{s.label}</span><b>{s.value}%</b></li>
      {/each}
    </ul>
  {/if}
</div>
