<script>
  import SectionHead from '../components/SectionHead.svelte';
  import Funnel from '../charts/Funnel.svelte';
  import Donut from '../charts/Donut.svelte';
  import Waffle from '../charts/Waffle.svelte';
  import { funnel, scope3donut } from '../charts/data.js';
</script>

<section class="section" id="climate">
  <div class="wrap">
    <SectionHead num="05" title="The climate depth challenge" />

    <div class="prose">
      <h3 class="reveal">Climate-related strategy</h3>
      <p class="reveal">Climate disclosure is relatively well established among large companies across Asia Pacific, particularly in the areas of strategy and risk management:</p>
      <ul class="reveal">
        <li>84 per cent disclose identified climate-related risks and opportunities</li>
        <li>84 per cent explain their impact on the business, strategy and financial planning</li>
        <li>82 per cent describe how these issues affect issuers’ strategies</li>
      </ul>
      <p class="reveal">Across Asia Pacific, the most frequently identified physical risks are floods (59 per cent), followed by sustained higher temperatures or droughts (57 per cent). These risks are particularly relevant given their potential impacts on business operations, supply chains and physical assets.</p>
      <p class="reveal">On transition risks, policy and legal risk is the most commonly identified (75 per cent), reflecting companies’ increasing exposure to evolving climate-related regulations and disclosure requirements. Market risk is also widely identified (71 per cent), indicating growing awareness of shifts in customer demand, market conditions and the transition towards a lower-carbon economy.</p>
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

    <div class="prose">
      <h3 class="reveal">Climate-related risk management</h3>
      <p class="reveal">Of the 700 assessed companies, 79 per cent disclose how they identify and assess climate-related risks, while 86 per cent explain how these risks are managed. While this shows that climate-related risk management disclosure is relatively well established across APAC, integration into overall risk management is relatively less prevalent at 74 per cent.</p>
      <h3 class="reveal">Climate-related metrics and targets</h3>
      <p class="reveal">Climate-related metrics translate risks, opportunities and actions into measurable performance, enabling stakeholders to assess a company’s climate exposure and track progress over time.</p>
    </div>

    <aside class="explainer reveal">
      <h3>What are GHG emissions?</h3>
      <p>The Greenhouse Gas Protocol, which provides the most widely recognised accounting standards for greenhouse gas emissions, categorises GHG emissions into three scopes.</p>
      <div class="scopes">
        <div><span class="scope-tag">1</span>Scope 1 emission sources are direct emissions from sources that are owned or controlled by a company</div>
        <div><span class="scope-tag">2</span>Scope 2 emissions are indirect emissions as a result of a company’s energy purchases</div>
        <div><span class="scope-tag">3</span>Scope 3 emissions are all other indirect emissions that result from a company’s activities</div>
      </div>
    </aside>

    <div class="prose">
      <p class="reveal">Scope 1 and Scope 2 emissions disclosure is nearly universal, at 94 per cent and 95 per cent respectively. Most jurisdictions record disclosure rates above 90 per cent for both emission scopes.</p>
    </div>

    <div class="split">
      <div class="prose">
        <p class="reveal">Scope 3 reporting has gone mainstream across Asia Pacific. A substantial 76 per cent of assessed companies disclose Scope 3 emissions.</p>
      </div>
      <figure class="waffle-fig reveal">
        <Waffle on={76} />
      </figure>
    </div>

    <div class="prose">
      <p class="reveal">Tracked against the 15 standard Scope 3 categories as defined by the Greenhouse Gas Protocol, less than 1 in 5 disclose between 11 and 15 categories:</p>
      <ul class="reveal">
        <li>One to five categories disclosed: 38 per cent of assessed companies</li>
        <li>Six to 10 categories disclosed: 38 per cent of assessed companies</li>
        <li>11 to 15 categories disclosed: 19 per cent of assessed companies</li>
        <li>Categories not specified: 5 per cent of assessed companies</li>
      </ul>
    </div>

    <figure class="chart reveal">
      <Donut {...scope3donut} />
    </figure>

    <div class="prose">
      <p class="reveal">In total, more than three-quarters (76 per cent) of reporting firms disclose 10 or fewer categories, leaving massive blind spots across upstream procurement and downstream product usage.</p>
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
