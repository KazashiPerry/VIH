

document.addEventListener("DOMContentLoaded", function() {
  // Seleccionar el botón y el elemento
  const boton = document.querySelector('#boton-toggle');
  const elemento = document.querySelector('#elemento');

  // Agregar un evento click al botón
  boton.addEventListener('click', toggleElement);
});


// La función que hará aparecer y desaparecer el elemento
function toggleElement() {
    if (elemento.style.display === "none") {
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none";
    }
}



// ScrollMenu
document.addEventListener("DOMContentLoaded", function() {
  // Seleccionar el botón y el elemento
  const boton1 = document.querySelector('#Información');
  const destino1 = document.querySelector('#basica');

  // Agregar un evento click al botón
  boton1.addEventListener('click', function() {
      destino1.scrollIntoView();
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Seleccionar el botón y el elemento
  const boton2 = document.querySelector('#Acerca');
  const destino2 = document.querySelector('#acerca-vih');

  // Agregar un evento click al botón
  boton2.addEventListener('click', function() {
      destino2.scrollIntoView();
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Seleccionar el botón y el elemento
  const boton3 = document.querySelector('#Transmisión');
  const destino3 = document.querySelector('#trans-vih');

  // Agregar un evento click al botón
  boton3.addEventListener('click', function() {
      destino3.scrollIntoView();
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Seleccionar el botón y el elemento
  const boton4 = document.querySelector('#Prevención');
  const destino4 = document.querySelector('#preven');

  // Agregar un evento click al botón
  boton4.addEventListener('click', function() {
      destino4.scrollIntoView();
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Seleccionar el botón y el elemento
  const boton5 = document.querySelector('#Prueba');
  const destino5 = document.querySelector('#prueba-vih');

  // Agregar un evento click al botón
  boton5.addEventListener('click', function() {
      destino5.scrollIntoView();
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Seleccionar el botón y el elemento
  const boton6 = document.querySelector('#Vivir');
  const destino6 = document.querySelector('#vivir-vih');

  // Agregar un evento click al botón
  boton6.addEventListener('click', function() {
      destino6.scrollIntoView();
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Seleccionar el botón y el elemento
  const boton7 = document.querySelector('#Estigma');
  const destino7 = document.querySelector('#estigma');

  // Agregar un evento click al botón
  boton7.addEventListener('click', function() {
      destino7.scrollIntoView();
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Seleccionar el botón y el elemento
  const boton8 = document.querySelector('#Estadisticas');
  const destino8 = document.querySelector('#estadis');

  // Agregar un evento click al botón
  boton8.addEventListener('click', function() {
      destino8.scrollIntoView();
  });
});








// MAPA


// Dataviz


var lists = {
    paises: ["AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "DJ", "DZ", "EG", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "KE", "LR", "LS", "LY", "MA", "MU", "MG", "ML", "MR", "MW", "MZ", "NA", "NE", "NG", "RE", "RW", "SD", "SL", "SN", "SO", "SS", "SZ", "TD", "TG", "TN", "TZ", "UG", "ZA", "ZM", "ZW", "EH", "KM", "GO", "JU", "SH", "ST", "YT", "BV", "CV", "SC", "AE", "AF", "BD", "BN", "IO", "BT", "CN", "ID", "IL", "IN", "IQ", "IR", "JO", "JP", "KG", "KH", "KP", "KR", "KW", "KZ", "LA", "LB", "LK", "MO", "MM", "MN", "MY", "NP", "OM", "PH", "PK", "PS", "QA", "SA", "SY", "TH", "TJ", "TL", "TM", "TW", "UZ", "VN", "YE", "HK", "MV", "BH", "SG","AL", "AM", "AT", "AZ", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "JE", "FI", "FR", "GB", "GE", "GR", "HR", "HU", "IE", "IS", "IT", "LT", "LU", "LV", "MD", "ME", "MK", "NL", "NO", "PL", "PT", "RO", "RS", "SE", "SI", "SJ", "SK", "TR", "UA", "RU", "VA", "MT", "MC", "XK", "LI", "IM", "GI", "FO", "AD", "AX", "GG", "SM","BS", "BZ", "CA", "CR", "CU", "DO", "GL", "GT", "HN", "HT", "JM", "MX", "NI", "PA", "PR", "SV", "US", "AG", "AW", "BB", "BL", "GD", "KN", "LC", "MQ", "TC", "VG", "AI", "BM", "DM", "PM", "GP", "KY", "MF", "MS", "SX", "TT", "VC", "VI", "BQ", "CW","AR", "BO", "BR", "CL", "CO", "EC", "FK", "GF", "GY", "PE", "PY", "SR", "UY", "VE", "GS","AS", "AU", "UM-FQ", "CC", "CX", "FJ", "FM", "GU", "HM", "UM-HQ", "UM-DQ", "UM-JQ", "KI", "MH", "UM-MQ", "MP", "NC", "NF", "NR", "NU", "NZ", "PG", "PW", "SB", "TF", "TK", "TL", "TO", "TV", "VU", "UM-WQ", "WF", "WS", "CK", "PF", "PN"]
};

var nombres = {};

