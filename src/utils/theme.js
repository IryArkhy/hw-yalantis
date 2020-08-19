import { primary, green, yellow, red, neutral } from './colors';
import typeScale from './typography';

const { h1, h2, h3, h4, h5, p, helperText, copyright } = typeScale;

const theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    primary: primary[500],
    secondary: primary[200],
    surface: primary[100],
    accent: primary[200],
    highlight: primary[400],
    background: primary[300],
    muted: neutral[300],
    text: neutral[600],
    textInverted: neutral[100],
    textOnMuted: neutral[400],
    status: {
      warningColor: yellow[100],
      warningColorHover: yellow[200],
      warningColorActive: yellow[300],
      errorColor: red[100],
      errorColorHover: red[200],
      errorColorActive: red[300],
      successColor: green[100],
      successColorHover: green[200],
      successColorActive: green[300],
    },
  },
  fonts: {
    body:
      '-apple-system, BlinkMacSystemFont, "Muli", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  // fontSizes: [11.2, 12.8, 16, 17.6, 19.2, 22.4, 25.6, 28.8, 32],
  fontSizes: [copyright, helperText, p, h5, h4, h3, h2, h1, 32],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      boxSizing: 'border-box',
      padding: '0',
      margin: '0',
      '::before, ::after': {
        boxSizing: 'inherit',
        margin: '0',
        padding: '0',
      },
    },
    h1: {
      variant: 'text.heading',
      textAlign: 'center',
      fontSize: 8,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 7,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 6,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 3,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    ul: {
      listStyleType: 'none',
    },
    a: {
      textDecoration: 'none',
    },
  },
};

export default theme;
