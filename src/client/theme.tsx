import { theme as chakraTheme } from '@chakra-ui/react';

const theme: typeof chakraTheme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    black: '#16161D',
  },
};

export default theme;
