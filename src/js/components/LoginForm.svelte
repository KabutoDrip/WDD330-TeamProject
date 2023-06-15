<script>
import { loginRequest } from "../externalServices.mjs";
export let redirect;

async function handleLogin() {
    let body = { email: this.email.value , password: this.password.value};
    let token =  await loginRequest(body);
    localStorage.setItem('so-token', token);
    window.location = redirect;
}
console.log(redirect);
</script>

<form action="" on:submit|preventDefault={handleLogin}>
    <label for="email">Email: </label>
    <input type="email" name="email" id="email">
    <label for="password">Password</label>
    <input type="password" name="password" id="password">
    <button type="submit">Login</button>
</form>