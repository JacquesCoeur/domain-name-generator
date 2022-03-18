/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "one"];
  let adj = ["great", "big", "super"];
  let noun = ["jogger", "racoon", "idea"];
  let dotAlgo = [".com", ".io", ".net", ".us", ".es"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < dotAlgo.length; l++) {
          var domainList = pronoun[i] + adj[j] + noun[k] + dotAlgo[l];
          console.log(domainList);
        }
      }
    }
  }
  document.getElementById("domainList").innerHTML = domainList;
};
