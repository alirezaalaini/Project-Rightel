const button = document.getElementById("infoButton");
  const icon = document.getElementById("icon");

  button.addEventListener("click", (e) => {
    e.preventDefault(); 

   
    button.classList.add("bg-amber-800");

    
    icon.classList.remove("opacity-0");
    icon.classList.add("opacity-100");
  });

   function showPage(id, btn) {
  
  document.getElementById('demo1').classList.add('hidden');
  document.getElementById('demo2').classList.add('hidden');

  
  document.getElementById(id).classList.remove('hidden');

  document.querySelectorAll('.active-tab').forEach(el => el.classList.remove('active-tab', 'bg-[#E9E1E8]'));

  btn.classList.add('active-tab', 'bg-[#E9E1E8]');
}