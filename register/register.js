 let participantCount = 1
 
document.getElementById("add").addEventListener("click", function () {
    participantCount++;
    const firstParticipant = document.querySelector(".participant1");
    const newParticipant = firstParticipant.cloneNode(true);
    newParticipant.className = `participant${participantCount}`;
    const title = newParticipant.querySelector("p");
    title.textContent = `Participant ${participantCount}`;

    const inputs = newParticipant.querySelectorAll("input, select");
    inputs.forEach((input) => {
        if (input.type !== "radio") {
            input.value = "";
        }
        if (input.id) {
            const baseId = input.id.replace(/\d*$/, "");
            input.id = baseId + participantCount;
        }
        if (input.name) {
            const baseName = input.name.replace(/\d*$/, "");
            input.name = baseName + participantCount;
        }
        const label = newParticipant.querySelector(`label[for="${input.id}"]`);
        if (label) {
            label.setAttribute("for", input.id);
        }
    });
    const participantFieldset = document.querySelector(".participants");
    const addButton = document.getElementById("add");
    participantFieldset.insertBefore(newParticipant, addButton);
});

document.getElementById("submitButton").addEventListener("click", function (event) {
  event.preventDefault();

  let totalFee = 0;

  for (let i = 1; i <= participantCount; i++) {
    const feeInput = document.querySelector(`.participant${i} input[name="fee${i}"]`);
    if (feeInput && feeInput.value) {
      const fee = parseFloat(feeInput.value);
      if (!isNaN(fee)) {
        totalFee += fee;
      }
    }
  }

  const form = document.querySelector("form");
  form.style.display = "none";
  const summary = document.getElementById("summary");
  const adultName = document.getElementById("adult_name");
  summary.innerHTML = `<h2>Thank you ${adultName.value} for registering. You have registered
  ${participantCount} participants and owe $${totalFee.toFixed(2)} in Fees.</h2>`;
});