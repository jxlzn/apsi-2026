import { C } from '../colors.js';

export const top5 = {
  max: 110,
  series: [{ color: C.blue45 }, { color: C.blue }],
  rows: [
    { label: 'Taiwan', values: [90.3, 92.8] },
    { label: 'South Korea', values: [88.6, 96.3] },
    { label: 'Singapore', values: [84.9, 87.2] },
    { label: 'Malaysia', values: [84.8, 88.1] },
    { label: 'Hong Kong', values: [84.4, 86.9] }
  ]
};

export const magnet = {
  max: 100, unit: '%', lab: '260px', axis: ['0', '50', '100'],
  rows: [
    { label: 'Normative frameworks', value: 93.8, color: C.blue },
    { label: 'Materiality and stakeholder engagement', value: 76.5, color: C.blue65 },
    { label: 'Evaluation metrics and targets', value: 76.3, color: C.blue65 },
    { label: 'Governance and responsibility', value: 73.1, color: C.blue65 },
    { label: 'Thematic coverages: climate- and nature-related issues', value: 72.5, color: C.blue45 },
    { label: 'Assurance and scope', value: 70.8, color: C.orange }
  ]
};

export const base = {
  max: 100, avg: { value: 75.5, label: '75.5' }, axis: ['0', '50', '100'],
  rows: [
    ['Taiwan', 90.3], ['South Korea', 88.6], ['Singapore', 84.9], ['Malaysia', 84.8], ['Hong Kong', 84.4]
  ].map(([label, value]) => ({ label, value, color: C.blue })).concat(
    [['India', 72.2], ['New Zealand', 68.4], ['Indonesia', 66.1], ['The Philippines', 58.2], ['Vietnam', 39.8]]
      .map(([label, value]) => ({ label, value, color: C.orange }))
  )
};

export const context = {
  max: 40, avg: { value: 26, label: '26' }, axis: ['0', '20', '40'],
  rows: [
    ['Thailand', 33], ['The Philippines', 32], ['Australia', 31], ['Singapore', 31], ['Hong Kong', 30], ['Taiwan', 30]
  ].map(([label, value]) => ({ label, value, color: C.blue })).concat([{ label: 'South Korea', value: 9, color: C.red }])
};

export const board = {
  max: 100, unit: '%', lab: '300px',
  rows: [
    { label: 'Formal board responsibility for sustainability', value: 92, color: C.blue },
    { label: "Active board oversight of management's monitoring efforts", value: 77, color: C.blue },
    { label: 'Direct board involvement in determining material ESG factors', value: 60, color: C.blue65 },
    { label: 'Directors possess specific sustainability-related competencies', value: 41, color: C.orange },
    { label: 'Sustainability-related training in the past three years', value: 37, color: C.orange }
  ]
};

export const boardRange = [['New Zealand', 10, C.red], ['Philippines', 18, C.orange, true], ['Singapore', 90, C.blue]];

export const funnel = [
  { label: 'Disclose climate-related risks and opportunities', value: 80, display: '80%+', color: C.blue },
  { label: 'Integrate them into enterprise risk management', value: 70, display: '70%+', color: C.blue65 },
  { label: 'Conduct climate scenario analysis', value: 64, display: '64%', color: C.blue45 },
  { label: 'Provide quantitative assessments', value: 28, display: '28%', color: C.orange }
];

export const scope3donut = {
  center: { value: '76%', label: 'disclose 10 or fewer categories' },
  segments: [
    { label: 'One to five categories disclosed', value: 38, color: C.blue },
    { label: 'Six to 10 categories disclosed', value: 38, color: C.blue45 },
    { label: '11 to 15 categories disclosed', value: 19, color: C.green },
    { label: 'Categories not specified', value: 5, color: C.grey25 }
  ]
};

export const assurance = {
  max: 100, unit: '%', lab: '200px', axis: ['0', '50', '100'],
  rows: [
    { label: 'Internal reviews', value: 64, color: C.blue45 },
    { label: 'External assurance', value: 66, color: C.blue }
  ]
};

export const industry = {
  center: { value: '11', label: 'industries' },
  segments: [
    { label: 'Financials', value: 20, color: C.blue },
    { label: 'Industrials', value: 16, color: C.blue65 },
    { label: 'Consumer staples', value: 10, color: C.blue45 },
    { label: 'Real estate', value: 10, color: C.blue25 },
    { label: 'Consumer discretionary', value: 9, color: C.green },
    { label: 'Information technology', value: 9, color: C.green65 },
    { label: 'Materials', value: 8, color: C.orange },
    { label: 'Communication services', value: 6, color: C.orange65 },
    { label: 'Utilities', value: 5, color: C.red },
    { label: 'Healthcare', value: 4, color: C.red65 },
    { label: 'Energy', value: 3, color: C.grey45 }
  ]
};
