import OrdersList from './components/OrdersList.svelte'
import { checkLogin } from './auth.mjs'

checkLogin();
new OrdersList({
    target: document.querySelector('.orders'),
})