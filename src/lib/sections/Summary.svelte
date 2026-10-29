<script>
  import SectionHead from '../components/SectionHead.svelte';

  const takeaways = [
    {
      href: '#state-of-play', num: '03', color: 'var(--blue)',
      head: 'State of play: High adoption, uneven depth',
      points: [
        'The regional average base score stands at 75.5 out of 100 while the context-adjusted APSI score stands at 78.9 out of 110.',
        'Leading the regional hierarchy are Taiwan (90.3 base score / 92.8 contextualised), South Korea (88.6 base score / 96.3 contextualised), Singapore (84.9 base score / 87.2 contextualised), Malaysia (84.8 base score / 88.1 contextualised), and Hong Kong (84.4 base score / 86.9 contextualised).'
      ]
    },
    {
      href: '#boards', num: '04', color: 'var(--blue-65)',
      head: 'Are corporate boards equipped for sustainability?',
      points: [
        '92 per cent of companies report formal board oversight for sustainability but only 41 per cent disclose specific director skills/competencies and 37 per cent report recent sustainability training.',
        'Opaque incentive structures: 55 per cent of firms link executive compensation to sustainability performance but only 21 per cent disclose the specific weighting assigned to these metrics.'
      ]
    },
    {
      href: '#climate', num: '05', color: 'var(--orange)',
      head: 'The climate depth challenge',
      points: [
        'Over 80 per cent of firms disclose climate risks and 70 per cent integrate them into their enterprise risk management frameworks but actual depth remains uneven.',
        '64 per cent of companies run climate scenario analyses but only 28 per cent actually share quantitative financial or operational impact assessments.'
      ]
    },
    {
      href: '#scope3', num: '06', color: 'var(--grey)',
      head: 'Beyond Scope 3 compliance',
      points: [
        'Scope 3 reporting has gone mainstream, with 76 per cent of assessed companies now disclosing supply-chain emissions.',
        "Breadth doesn't equal depth: the vast majority of reporting firms (76 per cent) stop at disclosing 10 or fewer out of the 15 standard categories."
      ]
    },
    {
      href: '#biodiversity', num: '07', color: 'var(--green)',
      head: 'Biodiversity steps into the spotlight',
      points: [
        "Biodiversity is finally stepping out of carbon's shadow, with 61 per cent of companies now disclosing nature- or biodiversity-related data.",
        'Actual adoption of the Taskforce on Nature-related Financial Disclosures (TNFD) remains in its infancy at just 24 per cent'
      ]
    },
    {
      href: '#compliance', num: '08', color: 'var(--red)',
      head: 'From compliance to competitive advantage',
      points: [
        'Regulation across the region is steadily tightening and converging around ISSB standards, value-chain emissions, and external assurance requirements.',
        'While roughly two-thirds of firms already use internal reviews (64 per cent) or external assurance (66 per cent), reporting credibility and assurance practices still have plenty of room to mature.'
      ]
    }
  ];
</script>

<section class="section section--tint" id="summary">
  <div class="wrap">
    <SectionHead num="02" title="Executive Summary" />
    <div class="prose">
      <p class="lead reveal">The Asia Pacific Sustainability Index (APSI) establishes a regional benchmark of sustainability reporting performance, evaluating the top 50 listed companies by market capitalisation across 14 jurisdictions (700 companies total).</p>
      <p class="reveal">To reflect market realities, the index delivers two numbers: an unadjusted “base score” measuring company-level sustainability reporting performance out of 100, and a “contextualised” score out of 110 that rewards companies reporting under less developed regulatory mandates.</p>
    </div>

    <div class="score-pair reveal">
      <div class="score-card">
        <span class="score-card__label">“base score”</span>
        <span class="score-card__num"><b data-count="75.5" data-decimals="1">75.5</b><small>/100</small></span>
        <span class="meter"><span style="--p:75.5%"></span></span>
      </div>
      <div class="score-card score-card--solid">
        <span class="score-card__label">“contextualised” score</span>
        <span class="score-card__num"><b data-count="78.9" data-decimals="1">78.9</b><small>/110</small></span>
        <span class="meter"><span style="--p:71.7%"></span></span>
      </div>
    </div>

    <h3 class="kt-title reveal">Key takeaways</h3>
    <div class="takeaways">
      {#each takeaways as kt}
        <a class="kt reveal" href={kt.href} style:--c={kt.color}>
          <span class="kt__num">{kt.num}</span>
          <span class="kt__head">{kt.head}</span>
          <ul>
            {#each kt.points as point}<li>{point}</li>{/each}
          </ul>
          <span class="kt__go" aria-hidden="true">&rarr;</span>
        </a>
      {/each}
    </div>
  </div>
</section>
