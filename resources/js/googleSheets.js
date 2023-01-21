function setUpGoogleSheets() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbw6ktDZ07nzn0E-DiYyujaI0fH7vplwI2NTRhugJLnJIDyN0c5J8gNE0vKvTb1x9dZ5/exec";
  const form = document.querySelector("#scoutingForm");
  const btn = document.querySelector("#submit");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    btn.disabled = true;
    btn.innerHTML = "Sending...";

    let fd = getData(false);
    for (const [key, value] of fd) {
      console.log(`${key}: ${value}\n`);
    }

    fetch(scriptURL, { method: "POST", body: fd })
      .then((response) => {
        console.log("Success!", response);
        alert("Success!", response);
      })
      .catch((error) => {
        alert("Error!", error.message);
      });

    btn.disabled = false;
    btn.innerHTML = "Send to Google Sheets";
  });
}

function callGoogleSheets() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycby9PSKn9YddP-YrFFTMMbD5LV8O1hs6e84tgmfeaM4mkyM5T-Z6UT96lgQ6fZy8k24/exec";
  let fd = getData(false);
  for (const [key, value] of fd) {
    console.log(`${key}: ${value}\n`);
  }

  fetch(scriptURL, { method: "POST", mode: "no-cors", body: fd })
    .then((response) => {
      console.log("Success!", response);
      alert("Success!", response);
    })
    .catch((error) => {
      alert("Error!", error.message);
    });
}
