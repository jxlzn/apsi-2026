import { C } from '../colors.js';

// pin: dot on the jurisdiction. labelAt: bottom-centre of the score label.
// Coordinates are longitude, latitude.
export const jurisdictions = [
  { id: 'AUS', label: 'Australia', base: 82.6, final: 84.8, pin: [133.8, -25.0], labelAt: [133.8, -22.8] },
  { id: 'CHN', label: 'Chinese Mainland', base: 78.6, final: 82.8, pin: [103.2, 34.2], labelAt: [103.2, 36.6] },
  { id: 'HKG', label: 'Hong Kong', base: 84.4, final: 86.9, pin: [113.9, 22.4], labelAt: [118.4, 20.4] },
  { id: 'IND', label: 'India', base: 72.2, final: 76.4, pin: [79.0, 20.2], labelAt: [79.0, 18.8] },
  { id: 'IDN', label: 'Indonesia', base: 66.1, final: 70.3, pin: [120.8, -2.2], labelAt: [131.6, 4.2] },
  { id: 'JPN', label: 'Japan', base: 80.5, final: 83.7, pin: [143.1, 43.9], labelAt: [145.6, 47.4] },
  { id: 'MYS', label: 'Malaysia', base: 84.8, final: 88.1, pin: [102.0, 4.2], labelAt: [93.4, 7.6] },
  { id: 'NZL', label: 'New Zealand', base: 68.4, final: 72.4, pin: [175.5, -37.3], labelAt: [174.2, -31.0] },
  { id: 'PHL', label: 'Philippines', base: 58.2, final: 60.2, pin: [121.5, 17.0], labelAt: [138.4, 14.2] },
  { id: 'SGP', label: 'Singapore', base: 84.9, final: 87.2, pin: [103.84, 1.34], labelAt: [105.4, 2.2] },
  { id: 'KOR', label: 'South Korea', base: 88.6, final: 96.3, pin: [127.9, 36.3], labelAt: [130.2, 41.2] },
  { id: 'TWN', label: 'Taiwan', base: 90.3, final: 92.8, pin: [120.95, 23.7], labelAt: [127.4, 29.2] },
  { id: 'THA', label: 'Thailand', base: 77.5, final: 79.2, pin: [100.8, 14.2], labelAt: [100.8, 17.2] },
  { id: 'VNM', label: 'Vietnam', base: 39.8, final: 43.0, pin: [107.6, 16.2], labelAt: [115.4, 11.4] }
];

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
  { label: 'Disclose identified climate-related risks and opportunities', value: 84, display: '84%', color: C.blue },
  { label: 'Integrate them into overall risk management', value: 74, display: '74%', color: C.blue65 },
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

export const nature = [
  ['Australia', 70, 40],
  ['Chinese Mainland', 86, 12],
  ['Hong Kong SAR', 80, 24],
  ['India', 52, 16],
  ['Indonesia', 78, 2],
  ['Japan', 82, 56],
  ['Malaysia', 64, 14],
  ['New Zealand', 16, 0],
  ['Philippines', 46, 6],
  ['Singapore', 62, 26],
  ['South Korea', 84, 60],
  ['Taiwan', 66, 50],
  ['Thailand', 52, 26],
  ['Vietnam', 12, 0]
].map(([label, disclose, tnfd]) => ({ label, values: [disclose, tnfd] }));
