<script>
  import SectionHead from '../components/SectionHead.svelte';

  const takeaways = [
    {
      href: '#state-of-play', color: 'var(--blue)',
      head: 'State of play: High adoption, uneven depth',
      points: [
        'The regional average base score stands at 75.5 out of 100 while the context-adjusted APSI score stands at 78.9 out of 110.',
        'Leading the regional hierarchy are Taiwan (90.3 base score / 92.8 contextualised), South Korea (88.6 base score / 96.3 contextualised), Singapore (84.9 base score / 87.2 contextualised), Malaysia (84.8 base score / 88.1 contextualised) and Hong Kong (84.4 base score / 86.9 contextualised).'
      ]
    },
    {
      href: '#boards', color: 'var(--blue-65)',
      head: 'Are corporate boards equipped for sustainability?',
      points: [
        "Among the companies evaluated, 92 per cent report formal board oversight for sustainability, 60 per cent report direct board involvement in determining material ESG factors, and 77 per cent maintain active board oversight of management's monitoring efforts.",
        'But only 41 per cent disclose specific director skills/competencies and 37 per cent report recent sustainability training.',
        'Opaque incentive structures are also an issue: 55 per cent of firms link executive compensation to sustainability performance, but only 21 per cent disclose the specific weighting assigned to these metrics.'
      ]
    },
    {
      href: '#climate', color: 'var(--orange)',
      head: 'The climate depth challenge',
      points: [
        'More than 80 per cent of firms disclose climate risks and 70 per cent integrate them into their enterprise risk management frameworks, but actual depth remains uneven:',
        '84 per cent disclose identified climate-related risks and opportunities;',
        '84 per cent explain their impact on the business, strategy and financial planning; and',
        '82 per cent describe how these issues affect issuers’ strategies.',
        'While 64 per cent of companies run climate scenario analyses, only 28 per cent actually share quantitative financial or operational impact assessments.',
        'Quantitative scenario analysis is heavily concentrated in select markets, led by Taiwan at 72 per cent, Hong Kong at 52 per cent and South Korea at 50 per cent. Across most other regional jurisdictions, quantitative modelling remains rare.',
        'Scope 1 and Scope 2 emissions disclosure is nearly universal, at 94 per cent and 95 per cent, respectively.',
        'Scope 3 reporting has gone mainstream, with 76 per cent of assessed companies now disclosing supply-chain emissions.',
        'Breadth doesn’t equal depth: The vast majority of reporting firms (76 per cent) stop at disclosing 10 or fewer out of the 15 standard categories.'
      ]
    },
    {
      href: '#biodiversity', color: 'var(--green)',
      head: 'Biodiversity steps into the spotlight',
      points: [
        'Biodiversity is finally stepping out of climate’s shadow, with 61 per cent of companies now disclosing nature or biodiversity-related data.',
        'Actual adoption of the Taskforce on Nature-related Financial Disclosures (TNFD) remains in its infancy, at just 24 per cent.'
      ]
    },
    {
      href: '#compliance', color: 'var(--green)',
      head: 'From compliance to competitive advantage',
      points: [
        'Regulation across the region is steadily tightening and converging around ISSB standards (the global baseline of sustainability-related financial disclosure standards), value-chain emissions and external assurance requirements.',
        'While roughly two-thirds of firms already use internal reviews (64 per cent) or external assurance (66 per cent), reporting credibility and assurance practices still have plenty of room to mature.'
      ]
    }
  ];
</script>

<section class="section section--tint" id="summary">
  <div class="wrap">
    <SectionHead num="02" title="Executive Summary" />
    <div class="prose">
      <p class="reveal">The APSI establishes a regional benchmark of sustainability reporting performance, evaluating the top 50 listed companies by market capitalisation in 14 jurisdictions.</p>
      <p class="reveal">To reflect market realities, the index delivers two numbers: an unadjusted “base score” measuring company-level sustainability reporting, and a “contextualised” score that rewards companies reporting under less developed regulatory mandates.</p>
    </div>

    <div class="score-pair reveal">
      <div class="score-card">
        <span class="score-card__label">Regional average base score</span>
        <span class="score-card__num"><b data-count="75.5" data-decimals="1">75.5</b><small>/100</small></span>
        <span class="meter"><span style="--p:75.5%"></span></span>
      </div>
      <div class="score-card score-card--solid">
        <span class="score-card__label">Contextualised regional final APSI score</span>
        <span class="score-card__num"><b data-count="78.9" data-decimals="1">78.9</b><small>/110</small></span>
        <span class="meter"><span style="--p:71.7%"></span></span>
      </div>
    </div>

    <h3 class="kt-title reveal">Key takeaways</h3>
    <div class="takeaways">
      {#each takeaways as kt}
        <a class="kt reveal" href={kt.href} style:--c={kt.color}>
          <span class="kt__head">{kt.head}</span>
          <ul>
            {#each kt.points as point}<li>{point}</li>{/each}
          </ul>
          <span class="kt__go" aria-hidden="true">&rarr;</span>
        </a>
      {/each}
    </div>

    <figure class="pullquote reveal">
      <blockquote>
        <p>It is encouraging to see physical risks and their direct impacts on business operations, supply chains, and physical assets being more readily reported, alongside biodiversity stepping into the spotlight. To navigate these complex, real-world exposures, institutional investors want to see strong and effective board oversight that will give investors the confidence to allocate capital into companies ready for the transition.</p>
      </blockquote>
      <figcaption>
        <b>Valerie Kwan</b>
        <span>Director of Stewardship, Asia Investor Group on Climate Change (AIGCC)</span>
      </figcaption>
    </figure>
  </div>
</section>
