import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'
import { createVuesticEssential } from "vuestic-ui";
import "vuestic-ui/css";
import App from './App.vue'

const app = createApp(App)

app.use(VueFire, {
    firebaseApp,
    modules: [
      VueFireAuth(),
    ],
  },
  createVuesticEssential({
    config: {
      colors: {
        variables: {
          primary: "#23e066",
          secondary: "#002c85",
          success: "#40e583",
          info: "#2c82e0",
          danger: "#e34b4a",
          warning: "#ffc200",
          gray: "#babfc2",
          dark: "#34495e",
          yourCustomColor: "#d0f55d",
        },
      },
    },
  }))

app.mount('#app')
