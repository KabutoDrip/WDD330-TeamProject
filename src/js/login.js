import LoginForm from './components/LoginForm.svelte'
import { renderHeaderFooter } from './utils.mjs';
import { getParam } from './utils.mjs';
let redirect = getParam('redirect');
renderHeaderFooter();
new LoginForm({
    target: document.querySelector('.loginForm'),
    props: { redirect: redirect},

});

