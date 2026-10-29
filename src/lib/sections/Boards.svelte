<script>
  import SectionHead from '../components/SectionHead.svelte';
  import HBars from '../charts/HBars.svelte';
  import Range from '../charts/Range.svelte';
  import Ring from '../charts/Ring.svelte';
  import { board, boardRange } from '../charts/data.js';
</script>

<section class="section section--tint" id="boards">
  <div class="wrap">
    <SectionHead num="04" title="Are corporate boards equipped for sustainability?" />
    <div class="prose">
      <p class="lead reveal">Sustainability has firmly entered boardroom remits across Asia Pacific. Among assessed companies, 92 per cent disclose formal board responsibility for sustainability, 60 per cent report direct board involvement in determining material ESG factors, and 77 per cent maintain active board oversight of management's monitoring efforts.</p>
    </div>

    <figure class="chart reveal">
      <HBars {...board} />
    </figure>

    <div class="prose">
      <p class="reveal">Significant jurisdictional variation is observed in board involvement in determining material ESG factors, ranging from 10 per cent in New Zealand and 18 per cent in the Philippines to 90 per cent in Singapore, despite generally high disclosure of overall board responsibility for sustainability across the region.</p>
    </div>

    <figure class="chart reveal">
      <Range points={boardRange} />
    </figure>

    <div class="prose">
      <p class="reveal">However, disclosures on board capabilities remain considerably less prevalent. Only 41 per cent of companies disclose whether their directors possess specific sustainability-related competencies and just 37 per cent report that board members have undergone sustainability-related training in the past three years.</p>
      <p class="reveal">Executive compensation structures show a similar disconnect. While 55 per cent of firms tie executive remuneration to sustainability targets, only 21 per cent specify the exact weighting of these metrics in compensation packages.</p>
    </div>

    <div class="rings reveal">
      <Ring value={55}>tie executive remuneration to sustainability targets</Ring>
      <Ring value={21} color="red">specify the exact weighting of these metrics</Ring>
    </div>

    <div class="prose">
      <p class="reveal">Without clear visibility into metric weightings and director capabilities, stakeholders cannot determine whether sustainability commitments carry real board oversight and management accountability.</p>
    </div>
  </div>
</section>
