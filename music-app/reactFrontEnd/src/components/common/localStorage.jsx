import React from "react";

export default function setItemInLocalStorage(tokenName, data) {

  localStorage.setItem(tokenName, JSON.stringify(data[0] ) );
  window.location = '/';
}

export  function removeFromLocalStorage(tokenName) {
    localStorage.removeItem(tokenName);
    window.location = '/';
}

export function getItemFromLocalStorage(tokenName) {
    localStorage.getItem(tokenName);

}