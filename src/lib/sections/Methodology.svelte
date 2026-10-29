<script>
  import SectionHead from '../components/SectionHead.svelte';
  import ReportLinks from '../components/ReportLinks.svelte';
  import Donut from '../charts/Donut.svelte';
  import { industry } from '../charts/data.js';

  const magnetRows = [
    ['M', 'Materiality and stakeholder engagement:', 'Evaluates identified material sustainability topics and engagement approaches.', 15],
    ['A', 'Assurance and scope:', 'Reviews external assurance, internal reviews, and reporting boundary transparency.', 15],
    ['G', 'Governance and responsibility:', 'Examines board-level oversight, sustainability skills, competencies, and training.', 20],
    ['N', 'Normative frameworks:', 'Assesses the adoption of established reporting standards.', 10],
    ['E', 'Evaluation metrics and targets:', 'Measures short-, medium-, and long-term targets across sustainability metrics.', 10],
    ['T', 'Thematic coverages:', 'Analyses performance on climate-related disclosures (such as Scope 1, 2, and 3 greenhouse gas emissions) and emerging nature- or biodiversity-related issues.', 30]
  ];

  const ctxCards = [
    ['Disclosure mandate (max 10 points):', 'Extent to which sustainability reporting is mandated by local laws or listing rules.'],
    ['Framework alignment (max 10 points) :', 'Alignment of local requirements with international reporting standards.'],
    ['Regulatory oversight (max 10 points):', 'Supervisory mechanisms and compliance monitoring enforcement.'],
    ['Required disclosure scope (max 10 points):', 'Granularity and specificity of mandated sustainability disclosures.']
  ];
</script>

<section class="section" id="methodology">
  <div class="wrap">
    <SectionHead num="10" title="Research methodology" />
    <div class="prose">
      <p class="lead reveal"><i>The Business Times</i> partnered with the Centre for Governance and Sustainability, NUS Business School to launch the Asia Pacific Sustainability Index (APSI), which is designed to provide a benchmark for the sustainability reporting performance of listed companies across Asia Pacific. This is done by evaluating corporate sustainability reporting performance across the region while accounting for structural differences in local regulatory environments.</p>
      <h3 class="reveal">Research scope</h3>
    </div>

    <div class="scope-cards">
      <div class="scope-card reveal">
        <h4>Geographic Coverage</h4>
        <p>Top 50 listed companies by market capitalisation as of 31 December 2025 across 14 Asia Pacific jurisdictions - Australia, Chinese Mainland, Hong Kong, India, Indonesia, Japan, Malaysia, New Zealand, Philippines, Singapore, South Korea, Taiwan, Thailand, and Vietnam.</p>
      </div>
      <div class="scope-card scope-card--wide reveal">
        <h4>Industry Breakdown</h4>
        <p>A total of 700 companies listed across 16 stock exchanges were studied. These companies span 11 industries: communication services (6 per cent), consumer discretionary (9 per cent), consumer staples (10 per cent), energy (3 per cent), financials (20 per cent), healthcare (4 per cent), industrials (16 per cent), information technology (9 per cent), materials (8 per cent), real estate (10 per cent) and utilities (5 per cent).</p>
        <Donut {...industry} small />
      </div>
      <div class="scope-card reveal">
        <h4>Data Sources &amp; Cut-off</h4>
        <p>Evaluation is based on the latest sustainability reports, annual reports, integrated reports, or climate reports published in English and publicly available as of 31 May 2026.</p>
      </div>
    </div>

    <div class="prose">
      <h3 class="reveal">Assessment framework</h3>
      <p class="reveal">The methodology is structured around two components:<br>
      1. A base score (max 100 points): Measures company-level sustainability reporting for comprehensiveness and transparency.</p>
      <p class="reveal">2. A context bonus (max 10 points): Accounts for variations in local sustainability reporting requirements across jurisdictions.</p>
      <p class="reveal">The combination of these two components results in a context-adjusted company final score. At the jurisdiction level, the score represents the average final score of the 50 companies assessed in each jurisdiction. At the regional level, the overall APSI score represents the average final score of all 700 companies assessed.</p>
      <h3 class="reveal">Base score assessment (MAGNET framework)</h3>
      <p class="reveal">The base score evaluates the comprehensiveness and transparency of companies’ sustainability disclosures and is benchmarked against internationally recognised reporting standards, including IFRS S1 General Requirements for Disclosure of Sustainability-related Financial Information, IFRS S2 Climate-related Disclosures and Global Reporting Initiative (GRI) Standards.</p>
      <p class="reveal">The base score is calculated across six components under the MAGNET framework:</p>
    </div>

    <div class="magnet reveal" role="table" aria-label="MAGNET framework">
      <div class="magnet__head" role="row">
        <span role="columnheader">Component</span>
        <span role="columnheader">Maximum weighted score</span>
      </div>
      {#each magnetRows as [letter, name, desc, score]}
        <div class="magnet__row" role="row">
          <span class="magnet__letter">{letter}</span>
          <div role="cell"><p><b>{name}</b> {desc}</p></div>
          <span class="magnet__score" role="cell" style:--w={score}><i></i>{score}</span>
        </div>
      {/each}
    </div>

    <div class="prose">
      <h3 class="reveal">Context bonus</h3>
      <p class="reveal">The context factor assesses the regulatory environment in each jurisdiction to contextualise company-level reporting performance. A higher score represents a stronger sustainability reporting environment.</p>
    </div>
    <div class="ctx-cards">
      {#each ctxCards as [title, desc]}
        <div class="ctx-card reveal"><h4>{title}</h4><p>{desc}</p></div>
      {/each}
    </div>

    <div class="prose">
      <p class="reveal">The raw context score is converted into a context bonus of up to 10 points.</p>
    </div>
    <p class="formula reveal">Context bonus = (40 - Context score) × 25%</p>
    <div class="prose">
      <p class="reveal">Under this approach, a jurisdiction with a context score of 40 receives no context bonus, while a jurisdiction with a context score of 0 receives the maximum bonus of 10 points.</p>
      <p class="reveal">The adjustment is designed to provide additional recognition to companies that demonstrate strong sustainability reporting performance while operating under comparatively less developed regulatory requirements.</p>
      <p class="reveal">For each company, the context bonus applicable to its jurisdiction is added to its base score to derive a context-adjusted company final score.</p>
    </div>

    <ReportLinks />
  </div>
</section>
