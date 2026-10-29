<script>
  import SectionHead from '../components/SectionHead.svelte';
  import HBars from '../charts/HBars.svelte';
  import SgBars from '../charts/SgBars.svelte';
  import { assurance } from '../charts/data.js';
</script>

<section class="section section--tint" id="compliance">
  <div class="wrap">
    <SectionHead num="08" title="From compliance to competitive advantage" />
    <div class="prose">
      <p class="lead reveal">Regulatory frameworks across Asia Pacific are converging towards around three structural pillars: alignment with the ISSB Standards, expanding expectations for Scope 3 emissions reporting, and the gradual introduction of external assurance requirements.</p>
    </div>
    <div class="pillars">
      <div class="pillar reveal"><span>I</span><p><b>Standardised reporting (IFRS S1 and IFRS S2 alignment):</b> Jurisdictions across the region are progressively aligning their reporting frameworks with ISSB baselines. Implementation timelines and requirements vary, with regulators generally allowing companies time to strengthen the governance processes, data systems and reporting capabilities needed to meet evolving expectations.</p></div>
      <div class="pillar reveal"><span>II</span><p><b>Comprehensive value-chain accounting</b>: While transitional reliefs and safe-harbour provisions are common, regulators are steadily narrowing exemptions for Scope 3 emissions, requiring businesses to systematically expand coverage across all material categories.</p></div>
      <div class="pillar reveal"><span>III</span><p><b>Towards more credible disclosures:</b> External assurance is also gaining prominence as regulators increasingly introduce or plan assurance requirements, particularly for Scope 1 and Scope 2 emissions.</p></div>
    </div>

    <div class="prose">
      <h3 class="reveal">The reality of regional verification</h3>
      <p class="reveal">The APSI findings suggest that assurance practices are still developing. Currently, 64 per cent of assessed companies conduct internal reviews of their sustainability reports, while 66 per cent obtain external assurance.</p>
    </div>

    <figure class="chart reveal">
      <HBars {...assurance} />
    </figure>

    <div class="prose">
      <p class="reveal">Crucially, the majority of external assurance remains confined to limited-assurance scopes covering basic operational emissions, leaving scenario models, strategy metrics and Scope 3 data largely unverified.</p>
    </div>

    <div class="feature reveal">
      <div class="feature__text">
        <h3>The Singapore benchmark</h3>
        <p>Singapore highlights how regulatory clarity elevates corporate disclosure. Achieving an average company base score of 84.9 out of 100—comfortably exceeding the 75.5 regional average—Singaporean listed companies demonstrate strong baseline compliance. Backed by SGX’s phased mandate requiring climate reporting aligned with ISSB standards and mandatory Scope 1 and 2 assurance, local issuers have built institutional muscle that positions them well ahead of regional peers as value-chain transparency tightens.</p>
      </div>
      <div class="feature__viz">
        <SgBars />
      </div>
    </div>
  </div>
</section>
