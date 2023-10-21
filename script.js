var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var sole = document.getElementById("solana");

var settings = {
  async: true,
  crossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=solana,bitcoin,ethereum&vs_currencies=usd",
  method: "GET",
  headers: {},
};
$.ajax(settings).done(function (response) {
  console.log(response);

  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  sole.innerHTML = response.solana.usd;
});
