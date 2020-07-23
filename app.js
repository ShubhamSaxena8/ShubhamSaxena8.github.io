var i = 0;
var Hellotxt = 'Hello !';
var intoNametxt = 'My name is Shubham Saxena.'
var intoProftxt = 'I am a Software Developer.'
var hellotxtspeed = 100;
var introtxtspeed = 50;

function typeHello() {
    if (i < Hellotxt.length) {
      document.getElementById("mainhello").innerHTML += Hellotxt.charAt(i);
      i++;
      setTimeout(typeHello, hellotxtspeed);
    } else{
      i=0;
      typeName();
    }
  }
  function typeName(){
    if (i < intoNametxt.length) {
      document.getElementById("introName").innerHTML += intoNametxt.charAt(i);
      i++;
      setTimeout(typeName, introtxtspeed);
    }else{
      i=0;
      typeProfession()
    }
  }

  function typeProfession(){
    if (i < intoProftxt.length) {
      document.getElementById("professiontxt").innerHTML += intoProftxt.charAt(i);
      i++;
      setTimeout(typeProfession, introtxtspeed);
    }else{

    }
  }