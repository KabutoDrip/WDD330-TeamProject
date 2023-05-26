import MainHeader from './components/MainHeader.svelte';
import MainFooter from './components/MainFooter.svelte';

//
export function renderHeaderFooter() {
  new MainHeader({
    target: document.querySelector('#header'),
  });
  new MainFooter({
    target: document.querySelector('#footer'),
  })
}

// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  let list = JSON.parse(localStorage.getItem(key))
  if (!list) {
    list = [];
  }
  return list;
}
// save data to local storage
export function setLocalStorage(key, data) {
  let list = getLocalStorage(key);
  if (!list) {
    list = [];
  }
  list.push(data);
  localStorage.setItem(key, JSON.stringify(list));
}
// save list data to local storage
export function setListToLocalStorage(key, list) {
  localStorage.setItem(key, JSON.stringify(list));
  
// get the superscript for the backpack icon
export function getSuperScript() {
  const cartItems = getLocalStorage('so-cart');
  let number = cartItems.length;
  return number;
}

// set the superescipt number
export function setSuperScript() {
  const letter = document.querySelector('.superscript');
  letter.textContent = getSuperScript();
  if(getSuperScript() > 9) {
    letter.setAttribute('x', '25');
    letter.setAttribute('y', '10');
    letter.style.fontSize = '60px';
  }
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener('touchend', (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener('click', callback);
}

export function getParam(param) {
  console.log(param)
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  // console.log(`Product: ${product}`);
  return product;
}
