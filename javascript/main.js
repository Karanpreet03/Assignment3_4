function currencyExchange() {
  const usd = 0.8;
  const cad = 1.26;
  let cadAmount;
  let usdAmount;
  let cadInput = null;
  let usdInput = null;
  cadInput = document.getElementById("canTextBox").value;
  usdInput = document.getElementById("usdTextBox").value;
  if (cadInput && usdInput) {
    alert("One must be empty!!!");
  } else {
    debugger
    if (cadInput) {
        console.log(cadInput)
      cadAmount = parseFloat(cadInput);
      usdAmount = cadAmount * usd;
      document.getElementById("usdTextBox").setAttribute('value',usdAmount);
    } else {
      usdAmount = parseFloat(usdInput);
      cadAmount = usdAmount * cad;
      document.getElementById("canTextBox").setAttribute('value',cadAmount);
    }
  }
}
