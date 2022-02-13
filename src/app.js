/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dotAlgo = [".com", ".io", ".net", ".us"];

  //intentar hacer esta parte con una funcion cuando ya resulte todo bien
  let pronounRandom = pronoun[Math.floor(Math.random() * pronoun.length)];
  let adjRandom = adj[Math.floor(Math.random() * adj.length)];
  let nounRandom = noun[Math.floor(Math.random() * noun.length)];
  let dotAlgoRandom = dotAlgo[Math.floor(Math.random() * dotAlgo.length)];
  //
  let domain = pronounRandom + adjRandom + nounRandom + dotAlgoRandom;
  for (let domainN = 0; domainN < 10; domainN++) {
    console.log(domain);
  }
  document.getElementById("domainList").innerHTML = domain;
};
