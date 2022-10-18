import NotoSansRegularWoff from './woff/NotoSansKR-Regular.woff';
import NotoSansMediumWoff from './woff/NotoSansKR-Medium.woff';
import NotoSansBoldWoff from './woff/NotoSansKR-Bold.woff';
import NotoSansRegularWoff2 from './woff2/NotoSansKR-Regular.woff2';
import NotoSansMediumWoff2 from './woff2/NotoSansKR-Medium.woff2';
import NotoSansBoldWoff2 from './woff2/NotoSansKR-Bold.woff2';

const FONTFACE = `
  @font-face {
    font-family: 'Noto Sans';
    font-weight: 700;
    font-display: swap;
    src: local('Noto Sans KR Bold'),
        url(${NotoSansBoldWoff}) format('woff'),
        url(${NotoSansBoldWoff2}) format('woff2');
  }

  @font-face {
    font-family: 'Noto Sans';
    font-weight: 500;
    font-display: swap;
    src: local('Noto Sans KR Medium'),
        url(${NotoSansMediumWoff}) format('woff'),
        url(${NotoSansMediumWoff2}) format('woff2');
  }

  @font-face {
    font-family: 'Noto Sans';
    font-weight: 400;
    font-display: swap;
    src: local('Noto Sans KR Regular'),
        url(${NotoSansRegularWoff}) format('woff'),
        url(${NotoSansRegularWoff2}) format('woff2');
  }
`;

export default FONTFACE;
