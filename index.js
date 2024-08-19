const onClickLogin = () => {
  const email = document.getElementById("input-email").value;
  if (email.length < 5 || !email.includes("@")) {
    alert("email inválido");
    return;
  }

  localStorage.setItem("@WalletApp:userEmail", email);
  window.open("./src/pages/home/index.html", "_self");
};
