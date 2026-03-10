import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'Learnlight Design System',
  brandImage: '/learnlight-logo-dark.svg',
  brandUrl:   '/',
});

addons.setConfig({ theme });
