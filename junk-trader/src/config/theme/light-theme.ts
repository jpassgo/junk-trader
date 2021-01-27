import createMuiTheme, { Theme } from '@material-ui/core/styles/createMuiTheme';
import { indigo, blue } from '@material-ui/core/colors';

export function getLightTheme(): Theme {
  // todo: website for playing around with different color theme's
  // https://material-ui.com/customization/color/#color
  return createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: indigo[500],
      },
      secondary: {
        main: blue[500],
      },
    },
  });
}
