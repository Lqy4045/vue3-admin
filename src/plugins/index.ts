import type { App } from 'vue'

import VxeUITable from './vxe-table'

export default {
  install(app: App) {
    app.use(VxeUITable)
  },
}
