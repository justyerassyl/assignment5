function det() {
  
  a1 = document.getElementById("s11").value;
  a2 = document.getElementById("s12").value;
  a3 = document.getElementById("s13").value;
  a4 = document.getElementById("s21").value;
  a5 = document.getElementById("s22").value;
  a6 = document.getElementById("s23").value;
  a7 = document.getElementById("s31").value;
  a8 = document.getElementById("s32").value;
  a9 = document.getElementById("s33").value;

  var determinant = a1*(a5*a9-a8*a6)-a2*(a4*a9-a6*a7)+a3*(a4*a8-a7*a5);
  document.getElementById("result").innerHTML = determinant;
  //console.log(determinant);
}

document.getElementById("determinant").addEventListener("click", det);
