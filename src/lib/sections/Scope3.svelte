<script>
  import SectionHead from '../components/SectionHead.svelte';
  import Waffle from '../charts/Waffle.svelte';
  import Donut from '../charts/Donut.svelte';
  import { scope3donut } from '../charts/data.js';
</script>

<section class="section section--tint" id="scope3">
  <div class="wrap">
    <SectionHead num="06" title="Beyond Scope 3 compliance" />

    <div class="split">
      <div class="prose">
        <p class="lead reveal">Scope 3 reporting has gone mainstream across Asia Pacific. A substantial 76 per cent of assessed companies (533 of 700) disclose Scope 3 emissions.</p>
      </div>
      <figure class="waffle-fig reveal">
        <Waffle on={76} />
        <figcaption><b data-count="533">533</b> of 700</figcaption>
      </figure>
    </div>

    <div class="prose">
      <p class="reveal">But headline adoption obscures a lack of granularity. An evaluation of disclosures against the 15 standard Scope 3 categories defined by the Greenhouse Gas Protocol demonstrates that breadth does not equal depth:</p>
    </div>

    <figure class="chart reveal">
      <Donut {...scope3donut} />
    </figure>

    <div class="prose">
      <p class="reveal">In total, more than three-quarters (76 per cent) of reporting firms disclose 10 or fewer categories, leaving massive blind spots across upstream procurement and downstream product usage.</p>
    </div>

    <aside class="explainer reveal">
      <h3>What are Scope 3 emissions?</h3>
      <p>The Greenhouse Gas Protocol, which provides the most widely recognised accounting standards for greenhouse gas emissions, categorises GHG emissions into three scopes.</p>
      <div class="scopes">
        <div><span class="scope-tag">1</span>Scope 1 emission sources are direct emissions from sources that are owned or controlled by a company</div>
        <div><span class="scope-tag">2</span>Scope 2 emissions are indirect emissions as a result of a company’s energy purchases</div>
        <div><span class="scope-tag">3</span>Scope 3 emissions are all other indirect emissions that result from a company’s activities</div>
      </div>
    </aside>

    <div class="prose">
      <h3 class="reveal">Where transparency concentrates</h3>
      <p class="reveal">Japan emerges as a regional leader in supply-chain reporting, with 49 per cent of its assessed companies disclosing across 11 to 15 Scope 3 categories. Taiwan follows at 45 per cent, and South Korea at 38 per cent. For most other markets, collecting primary data from tier-1 suppliers and downstream partners remains a key operational hurdle.</p>
    </div>

    <div class="stat-row reveal">
      <div class="stat"><b data-count="49" data-suffix="%">49%</b><span>Japan</span></div>
      <div class="stat"><b data-count="45" data-suffix="%">45%</b><span>Taiwan</span></div>
      <div class="stat"><b data-count="38" data-suffix="%">38%</b><span>South Korea</span></div>
    </div>
  </div>
</section>
