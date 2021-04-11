import { createApp, defineAsyncComponent } from 'vue'

import Calc from './Calc.vue'

const calc = createApp(Calc)
calc.mount('#calc')
