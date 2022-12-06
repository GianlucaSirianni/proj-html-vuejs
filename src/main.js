import Vue from 'vue'
import App from './App.vue'

// import the fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core';

// import font awesome icon component /
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// import specific icons /
import {faCartShopping, faDollarSign, faFolder, faMagnifyingGlass,} from '@fortawesome/free-solid-svg-icons';

import {faSquareInstagram, faInstagram, faTwitter, faFacebook, faPinterest} from '@fortawesome/free-brands-svg-icons'

// Import icone regular /
import {} from '@fortawesome/free-regular-svg-icons';

// add icons to the library /
library.add(faMagnifyingGlass);
library.add(faCartShopping);
library.add(faFolder);
library.add(faDollarSign);
library.add(faSquareInstagram);
library.add(faInstagram);
library.add(faTwitter);
library.add(faFacebook);
library.add(faPinterest);


// add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
