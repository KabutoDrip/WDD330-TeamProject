<script>
    import { postCart } from "../externalServices.mjs";
    import { getSuperScript,getLocalStorage,formDataToJSON } from "../utils.mjs";
    import { total, removeAllAlerts } from "../utils.mjs";
    import Alert from "./Alert.svelte";

    let q = getSuperScript();
    let tax = 0;
    let orderTotal = 0;
    let shipping = 0;
    let list = getLocalStorage('so-cart');
    let subtotal = total(getLocalStorage('so-cart'));
    let messageObject = {};
    let messages = [];

    function calculateItemSummary(){
      tax = .06 * subtotal;
      shipping = (q * 2) + 8;
      orderTotal = subtotal + tax + shipping;
      return tax, shipping, orderTotal
    }
    async function handleSubmit(){
      //calculateItemSummary()
      const json = formDataToJSON(this);
      json.orderDate = new Date();
      json.orderTotal = orderTotal;
      json.tax = tax;
      json.shipping = shipping;
      json.items = packageItems(list);
      try {
        const res = await postCart(json);
        messages = ["Good job you did it :) :) :)"]
        console.log(res);
        console.log("finished")
        localStorage.clear();

      } catch(err) {
        // console.log("in catch :)")
        removeAllAlerts();
        messageObject = err.message;
        messages = Object.values(messageObject);
        // console.log(messages);
        // console.log(`messages in handleSubmit: ${JSON.stringify(messageObject)}`)
        // console.log(typeof messageObject)

      }
    }
    function packageItems(items) {
      const mappedCart = items.map((item) => {
        //console.log(item);
        return {
          id: item.Id,
          price: item.FinalPrice,
          name: item.Name,
          quantity: 1,
        };
      });
      return mappedCart;
    }
</script>

{#if messages.length > 0}
  <Alert {messages}/>
{/if}
<form on:submit|preventDefault={handleSubmit}>
    <h1>Review and Place your Order</h1>
    <section>
        <h2>Shipping</h2>
        <input type="text" name="fname" id="first_name" placeholder="First Name">
        <label for="first_name"></label>
        <input type="text" name="lname" id="last_name" placeholder="Last Name">
        <label for="last_name"></label>
        <input type="text" name="street" id="street" placeholder="Street">
        <label for="street"></label>
        <input type="text" name="city" id="city" placeholder="City">
        <label for="city"></label>
        <input type="text" name="state" id="state" placeholder="State">
        <label for="state"></label>
        <input type="text" name="zip" id="zip" placeholder="Zip Code" on:change={calculateItemSummary}>
        <label for="zip"></label>
    </section>
    <section>
        <h2>Payment</h2>
        <input type="text" name="cardNumber" id="card_number" placeholder="Card Number">
        <label for="card_number"></label>
        <input type="text" name="expiration" id="expiration" placeholder="Expiration Date">
        <label for="expiration"></label>
        <input type="text" name="code" id="cvv" placeholder="CVV">
        <label for="cvv"></label>
        
    </section>
    <fieldset class="checkout-summary">
        <legend>Order Summary</legend>
        <p>Item Subtotal({getSuperScript()})</p>
        <p>${subtotal}</p>
        <p>Shipping ${shipping.toFixed(2)}</p>
        <p>Tax ${tax.toFixed(2)}</p>
        <p>Order Total ${orderTotal.toFixed(2)}</p>
        <p></p>
      </fieldset>
    <button type="submit">Checkout</button>
</form>
