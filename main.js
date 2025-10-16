const button = document.getElementById("infoButton");
  const icon = document.getElementById("icon");

  button.addEventListener("click", (e) => {
    e.preventDefault(); 

   
    button.classList.add("bg-amber-800");

    
    icon.classList.remove("opacity-0");
    icon.classList.add("opacity-100");
  });