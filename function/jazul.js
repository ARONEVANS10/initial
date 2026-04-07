function openEmployee(){
  document.getElementById("employeeModal").style.display="flex";
}

function openEmployer(){
  document.getElementById("employerModal").style.display="flex";
}

function closeModal(){
  document.getElementById("employeeModal").style.display="none";
  document.getElementById("employerModal").style.display="none";
}

/* EMPLOYEE LOGIN */
function employeeLogin(){

  let name=document.getElementById("empName").value;
  let pass=document.getElementById("empPass").value;

  if(name==="employee" && pass==="1234"){
      alert("Welcome Employee!");
      window.location.href="../index.html";
  }else{
      alert("Invalid Employee Login");
  }
}

/* EMPLOYER LOGIN */
function employerLogin(){

  let role=document.getElementById("role").value;
  let name=document.getElementById("bossName").value;
  let pass=document.getElementById("bossPass").value;

  if(name==="admin" && pass==="admin123"){
      alert("Welcome "+role+"!");
      window.location.href="../index.html";
  }else{
      alert("Invalid Employer Login");
  }
}