function age() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  
  if (!day || !month || !year) {
    alert("Fill all the fields")
  }

  const birthDate = new Date(year, month - 1, day); 
  const today = new Date();


  if (birthDate > today) {
    document.getElementById("age").innerText = "Birth date cannot be in the future.";
    return;
  }

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  
  let ageMonths = today.getMonth() - birthDate.getMonth();

  let ageDays = today.getDate() - birthDate.getDate();
  

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  document.getElementById("age").innerText =
    `You are ${ageYears} year(s), ${ageMonths} month(s), and ${ageDays} day(s) old.`;
}
