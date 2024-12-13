export const FILTERS_ALL = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const

export const BUTTONS_FILTERS = {
  [FILTERS_ALL.ALL]:{
    literal: 'Todos',
    href: `/?filter=${FILTERS_ALL.ALL}`
  },
  [FILTERS_ALL.ACTIVE]:{
    literal: 'Activos',
    href: `/?filter=${FILTERS_ALL.ACTIVE}`
  },
  [FILTERS_ALL.COMPLETED]:{
    literal: 'Completados',
    href: `/?filter=${FILTERS_ALL.COMPLETED}`
  }
} as const