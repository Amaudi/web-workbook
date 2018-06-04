'use strict';

document.addEventListener("DOMContentLoaded", function(event) {

  //will alert user how many list items are on the page
  function shoppingcartcount(){
    let countli= document.querySelectorAll('li').length;
    //alert('You have ' + countli + ' list items on the page');
    return countli;
  }

  var count2 = shoppingcartcount();
  createh2();

  //will create an h2 under the h1
  function createh2(){
    var tag= document.createElement('H2');
    var message = document.createTextNode('You have ' +(count2) + ' items in your shopping cart');
    tag.appendChild(message);
    document.getElementById('top').appendChild(tag);
  }

    //finds the button and the H2 tag
    var btn = document.getElementById("btn");
    var cart_sentence = document.getElementsByTagName("H2")[0];

      //updates the shopping cart counter and updates the H2 tag
    btn.onclick = function(){
      let node = document.createElement("Li");
      let text = document.getElementById("more").value;
      let textnode=document.createTextNode(text);
      node.appendChild(textnode);
      document.getElementById("items").appendChild(node);
      count2=shoppingcartcount();
      cart_sentence.innerHTML = ('You have ' +(count2) + ' items in your shopping cart')
    }


});
