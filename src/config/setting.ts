import type { LayoutSetting } from '~@/stores/app'

export default {
  title: 'Antdv Pro',
  theme: 'light',
  logo: '/logo.svg',
  collapsed: false,
  drawerVisible: false,
  colorPrimary: '#1677FF',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixedSider: true,
  splitMenus: false,
  header: true,
  menu: true,
  watermark: true,
  menuHeader: true,
  footer: false,
  colorWeak: false,
  colorGray: false,
  multiTab: true,
  multiTabFixed: false,
  keepAlive: true,
  accordionMode: false,
  leftCollapsed: true,
  compactAlgorithm: false,
  headerHeight: 48,
  copyright: 'Antdv Pro Team 2023',
  animationName: 'slide-fadein-right',
} as LayoutSetting
