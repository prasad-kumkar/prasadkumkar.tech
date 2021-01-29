import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

createApp(App).mount('#app')
new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount("#app");