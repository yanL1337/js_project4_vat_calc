const calculate = () => {
  const was = document.querySelector("input[name=auswahl]:checked").value;
  const wieViel = Number(
    document.querySelector("input[name=auswahlSatz]:checked").value
  );

  const zahl = Number(document.querySelector("#zahl").value);

  let aufschlag = was === "brutto" ? false : true;

  document.querySelector("#mwBetrag").innerHTML = `${
    berechnung(zahl, wieViel, aufschlag)[1]
  }€`;
  document.querySelector("#brBetrag").innerHTML = `${
    berechnung(zahl, wieViel, aufschlag)[0]
  }€`;
};

const berechnung = (betrag, steuersatz, auf) => {
  let ergebnis;
  let mwstBetrag;

  if (auf) {
    mwstBetrag = (betrag * steuersatz) / 100;
    ergebnis = betrag + mwstBetrag;
  } else {
    ergebnis = betrag / ((100 + steuersatz) / 100);
    mwstBetrag = betrag - ergebnis;
  }

  return [ergebnis.toFixed(2), mwstBetrag.toFixed(2)];
};

function changes(wert) {
  if (wert === "brutto") {
    document.querySelector("#eingabeText").innerHTML =
      "Bruttobetrag (Preis inkl. Mehrwersteuer) in Euro";
    document.querySelector("#ausgabeText").innerHTML = "Nettobetrag";
  } else {
    document.querySelector("#eingabeText").innerHTML =
      "Nettobetrag (Preis ohne Mehrwersteuer) in Euro*";
    document.querySelector("#ausgabeText").innerHTML =
      "Bruttobetrag (Endpreis)";
  }
}
