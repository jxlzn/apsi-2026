<script>
  import SectionHead from '../components/SectionHead.svelte';
  import Ring from '../charts/Ring.svelte';
</script>

<section class="section" id="biodiversity">
  <div class="wrap">
    <SectionHead num="07" title="Biodiversity steps into the spotlight" />

    <div class="split">
      <div class="prose">
        <p class="lead reveal">For years, carbon dominated the ESG agenda while biodiversity remained secondary. This dynamic is beginning to shift. Across Asia Pacific, 61 per cent of companies now disclose nature- or biodiversity-related data, indicating growing attention to nature-related issues.</p>
        <p class="reveal">However, alignment with the Taskforce on Nature-related Financial Disclosures (TNFD) recommendations remains in its infancy:</p>
        <ul class="reveal">
          <li>Only 24 per cent of companies align their disclosures with TNFD recommendations</li>
          <li>A further 3 per cent have plans for future alignment.</li>
        </ul>
      </div>
      <div class="rings rings--stack reveal">
        <Ring value={61}>disclose nature- or biodiversity-related data</Ring>
        <Ring value={24} extra={3} color="red">align with TNFD recommendations <em>+3% plan to</em></Ring>
      </div>
    </div>

    <div class="prose">
      <h3 class="reveal">Regional polarisation</h3>
      <p class="reveal">South Korea (60 per cent) and Japan (56 per cent) record the highest shares of TNFD alignment, while markets like New Zealand and Vietnam do not report alignment.</p>
    </div>

    <figure class="reveal">
      <figcaption class="fig-title"><i>Figure 7: Nature-related disclosures (by jurisdiction)</i></figcaption>
    </figure>

    <div class="prose prose--callout reveal">
      <p>With the International Sustainability Standards Board (ISSB) advancing its nature-related disclosures project from research to standard-setting and is developing proposed requirements that will supplement IFRS S1 and IFRS S2, drawing on the TNFD framework, companies should begin strengthening their capabilities to <b>identify and assess nature-related dependencies, impacts, risks and opportunities</b> across their operations and value chains.</p>
      <p>This could include evaluating their reliance on natural resources and ecosystem services, such as water availability, and assessing potential exposure to biodiversity loss, water stress, and ecosystem degradation. Taking these steps can help businesses better understand their nature-related risks, inform strategic decisions, and prepare for evolving disclosure expectations.</p>
    </div>
  </div>
</section>
