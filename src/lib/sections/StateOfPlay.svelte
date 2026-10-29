<script>
  import SectionHead from '../components/SectionHead.svelte';
  import ReportLinks from '../components/ReportLinks.svelte';
  import GroupBars from '../charts/GroupBars.svelte';
  import HBars from '../charts/HBars.svelte';
  import { top5, magnet, base, context } from '../charts/data.js';
</script>

<section class="section" id="state-of-play">
  <div class="wrap">
    <SectionHead num="03" title="State of play: High adoption, uneven depth" />
    <div class="prose">
      <p class="lead reveal">Corporate sustainability reporting across Asia Pacific has achieved widespread institutional adoption but data credibility, maturity and depth varies widely.</p>
      <p class="reveal">To provide benchmarking assessment of corporate sustainability, contextualised across the region, <i>The Business Times</i> partnered the Centre for Governance and Sustainability, NUS Business School to launch the Asia Pacific Sustainability Index (APSI).</p>
      <p class="reveal">To reflect market realities, the index delivers two numbers: an unadjusted “base score” measuring company-level sustainability reporting performance out of 100, and a “contextualised” score out of 110 that rewards companies reporting under less developed regulatory mandates.</p>
      <p class="reveal">Based on the evaluation of 700 listed companies across 14 jurisdictions and 16 stock exchanges, the regional average base score stands at 75.5 out of 100 while the context-adjusted APSI score stands at 78.9 out of 110.</p>
      <p class="reveal">Leading the regional hierarchy are Taiwan (90.3 base score / 92.8 contextualised), South Korea (88.6 base score / 96.3 contextualised), Singapore (84.9 base score / 87.2 contextualised), Malaysia (84.8 base score / 88.1 contextualised), and Hong Kong (84.4 base score / 86.9 contextualised).</p>
    </div>

    <figure class="chart reveal">
      <div class="legend">
        <span><i style="background:var(--blue-45)"></i>Base score</span>
        <span><i style="background:var(--blue)"></i>Contextualised</span>
      </div>
      <GroupBars {...top5} />
    </figure>

    <aside class="explainer reveal">
      <h3>What is APSI?</h3>
      <p>The Asia Pacific Sustainability Index (APSI) is a regional benchmark that evaluates sustainability reporting performance across the top 50 listed entities by market capitalisation in 14 jurisdictions (i.e. 700 listed companies).</p>
      <p>The index is comprises two components:</p>
      <div class="explainer__parts">
        <div><b>Company-level base score:</b> Each company's reporting performance is evaluated using the MAGNET framework, producing a base score of up to 100 points.</div>
        <span class="plus" aria-hidden="true">+</span>
        <div><b>Context bonus:</b> A regulatory context factor adds up to 10 bonus points to recognise strong reporting achieved under less developed local regulatory requirements.</div>
      </div>
      <p>The MAGNET framework assesses reporting across six components: materiality and stakeholder engagement; assurance and scope; governance and responsibility; normative frameworks; evaluation metrics and targets; and thematic coverages.</p>
    </aside>

    <div class="prose">
      <p class="reveal">Of the six MAGNET components, normative frameworks is the strongest component at 93.8 per cent, indicating near-universal disclosure of adopted standards. In contrast, assurance and scope is the weakest component at 70.8 per cent, closely followed by thematic coverages: climate- and nature-related issues at 72.5 per cent. Materiality and stakeholder engagement (76.5 per cent), governance and responsibility (73.1per cent), and evaluation metrics and targets (76.3 per cent) occupy the middle tier.</p>
    </div>

    <figure class="chart reveal">
      <HBars {...magnet} />
    </figure>

    <div class="prose">
      <p class="reveal">The gap between the near-universal adoption of reporting frameworks and the lower scores across substantive disclosure areas suggests that adopting a recognised framework does not necessarily translate into comprehensive disclosure across all reporting dimensions.</p>
      <p class="reveal">Looking specifically at the base score, a significant majority of assessed companies (72 per cent) scored above 70 points. The single largest cohort (29 per cent) fell in the 80 to 90 score range. Conversely, only 2 per cent scored below 20 points.</p>
    </div>

    <div class="stat-row reveal">
      <div class="stat"><b data-count="72" data-suffix="%">72%</b><span>scored above 70 points</span></div>
      <div class="stat"><b data-count="29" data-suffix="%">29%</b><span>80 to 90 score range</span></div>
      <div class="stat stat--muted"><b data-count="2" data-suffix="%">2%</b><span>scored below 20 points</span></div>
    </div>

    <div class="prose">
      <p class="reveal">The top five countries were Taiwan (90.3); South Korea (88.6); Singapore (84.9), Malaysia (84.8 and Hong Kong (84.4). All of the countries scored above the overall average of 75.5 except for India (72.2), New Zealand (68.4), Indonesia (66.1), The Philippines (58.2) and Vietnam (39.8).</p>
      <p class="reveal">The average base score across Asia Pacific is 75.5 out of 100.</p>
    </div>

    <figure class="chart reveal">
      <div class="legend">
        <span><i style="background:var(--blue)"></i>Top five</span>
        <span><i style="background:var(--orange)"></i>Below the overall average</span>
        <span><i class="dash"></i>Average 75.5</span>
      </div>
      <HBars {...base} />
    </figure>

    <div class="prose">
      <h3 class="reveal">Accounting for regulatory context</h3>
      <p class="reveal">To ensure fair comparison across divergent markets, the study assesses the regulatory context in each of the 14 jurisdictions through a context factor.</p>
      <p class="reveal">This is assessed across four dimensions:</p>
    </div>
    <ol class="dims reveal">
      <li>Is sustainability reporting required?</li>
      <li>Are local requirements aligned with internationally recognised standards and frameworks?</li>
      <li>Is there regulatory oversight?</li>
      <li>How much sustainability information are companies required to disclose?</li>
    </ol>
    <div class="prose">
      <p class="reveal">The average context factor across the 14 jurisdictions is 26 out of 40:</p>
      <ul class="reveal">
        <li>Thailand records the highest context factor score at 33 out of 40. This is because its sustainability disclosures are integrated into the annual mandatory Form 56-1 One Report, a unified annual report and registration statement required for all companies listed on the Stock Exchange of Thailand. This is also subject to formal filing requirements and regulatory oversight, including penalties for late submission.</li>
        <li>The Philippines (32), Australia (31), Singapore (31), Hong Kong (30), and Taiwan (30) also reflect rigorous compliance requirements.</li>
        <li>South Korea scores the lowest (9 out of 40) as sustainability reporting was voluntary during the reporting period covered by this assessment.</li>
        <li>Apart from South Korea, scores range from 23 to 33, suggesting that sustainability reporting requirements are relatively established across most of the jurisdictions assessed, although the extent and nature of these requirements vary.</li>
      </ul>
    </div>

    <figure class="chart reveal">
      <div class="legend">
        <span><i style="background:var(--blue)"></i>Context factor score (out of 40)</span>
        <span><i style="background:var(--red)"></i>Lowest</span>
        <span><i class="dash"></i>Average 26</span>
      </div>
      <HBars {...context} />
    </figure>

    <div class="prose">
      <p class="reveal">Raw regulatory context scores are converted into bonus adjustments of up to 10 points (ranging from 1.8 to 7.8 points). This is done to recognise companies that achieve high disclosure standards without the push of mandates.</p>
      <p class="reveal">This mechanism drives South Korea’s adjusted score to 96.3, placing it first in the contextualised ranking. Conversely, the Philippines combines a high regulatory context score (32) with a comparatively low company base score (58.2), proving that regulatory pressure alone does not explain differences in sustainability reporting performance across jurisdictions.</p>
    </div>

    <ReportLinks />
  </div>
</section>
