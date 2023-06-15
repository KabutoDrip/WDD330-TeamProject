import CheckoutForm from './components/CheckoutForm.svelte';
import { checkLogin } from './auth.mjs'

checkLogin();
new CheckoutForm({
    target: document.querySelector('.ch-form')
});

