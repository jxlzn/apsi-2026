<script>
  import SectionHead from '../components/SectionHead.svelte';
  import Funnel from '../charts/Funnel.svelte';
  import { funnel } from '../charts/data.js';
</script>

<section class="section" id="climate">
  <div class="wrap">
    <SectionHead num="05" title="The climate depth challenge" />
    <div class="prose">
      <p class="lead reveal">Climate disclosure is relatively well established among large companies across Asia Pacific, particularly in the areas of strategy and risk management.</p>
      <p class="reveal">Over 80 per cent of firms disclose climate-related risks and opportunities, and more than 70 per cent integrate them directly into their enterprise risk management frameworks.</p>
      <p class="reveal">However, reporting depth remains shallow. While 64 per cent of companies conduct climate scenario analysis, only 28 per cent provide quantitative assessments estimating financial or operational impact under different climate scenarios.</p>
    </div>

    <figure class="chart reveal">
      <Funnel rows={funnel} />
    </figure>

    <div class="prose">
      <p class="reveal">Quantitative scenario analysis is heavily concentrated in select markets, led by Taiwan at 72 per cent, Hong Kong at 52 per cent and South Korea at 50 per cent. Across most other regional jurisdictions, quantitative modelling remains rare.</p>
    </div>

    <div class="stat-row reveal">
      <div class="stat"><b data-count="72" data-suffix="%">72%</b><span>Taiwan</span></div>
      <div class="stat"><b data-count="52" data-suffix="%">52%</b><span>Hong Kong</span></div>
      <div class="stat"><b data-count="50" data-suffix="%">50%</b><span>South Korea</span></div>
    </div>
  </div>
</section>
