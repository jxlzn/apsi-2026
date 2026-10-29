export const C = {
  blue: '#0083B5', blue65: '#1DA4CC', blue45: '#70BADA', blue25: '#ACD5E9', blue15: '#CAE4F1', blue5: '#E9F3F9', deep: '#00577A',
  orange: '#F48245', orange65: '#F8A475', orange45: '#FABD96',
  green: '#00B38C', green65: '#79C8AF', green45: '#A2D7C4',
  red: '#EC1846', red65: '#F27B76', red45: '#F6A097', red25: '#FBC9C0',
  ink: '#231F20', grey: '#6D6E70', grey45: '#9C9EA1', grey25: '#C7C8CA', grey15: '#DCDDDE'
};

export const fmt = (v, d = 1) => (Number.isInteger(v) ? String(v) : v.toFixed(d));
