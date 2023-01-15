// Obtener todos los botones del menú
const buttons = document.querySelectorAll('.sidebar-button');


// MAPA

var map = AmCharts.makeChart("mapdiv",{
    type: "map",
    theme: "Animated",
    projection: "mercator",
    panEventsEnabled : true,
    backgroundColor : "#535364",
    backgroundAlpha : 1,
    zoomControl: {
    zoomControlEnabled : true
    },
    dataProvider : {
    map : "worldHigh",
    getAreasFromMap : true,
    areas :
    []
    },
    areasSettings : {
    autoZoom : true,
    color : "#B4B4B7",
    colorSolid : "#84ADE9",
    selectedColor : "#84ADE9",
    outlineColor : "#666666",
    rollOverColor : "#9EC2F7",
    rollOverOutlineColor : "#000000"
    }
    });


console.log(am5geodata_data_countries);

console.log(AmCharts);

console.log(AmCharts.maps);

console.log(AmCharts.maps.worldHigh.svg.g.path);

// Dataviz


var lists = {
    paises: ["AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "DJ", "DZ", "EG", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "KE", "LR", "LS", "LY", "MA", "MU", "MG", "ML", "MR", "MW", "MZ", "NA", "NE", "NG", "RE", "RW", "SD", "SL", "SN", "SO", "SS", "SZ", "TD", "TG", "TN", "TZ", "UG", "ZA", "ZM", "ZW", "EH", "KM", "GO", "JU", "SH", "ST", "YT", "BV", "CV", "SC", "AE", "AF", "BD", "BN", "IO", "BT", "CN", "ID", "IL", "IN", "IQ", "IR", "JO", "JP", "KG", "KH", "KP", "KR", "KW", "KZ", "LA", "LB", "LK", "MO", "MM", "MN", "MY", "NP", "OM", "PH", "PK", "PS", "QA", "SA", "SY", "TH", "TJ", "TL", "TM", "TW", "UZ", "VN", "YE", "HK", "MV", "BH", "SG","AL", "AM", "AT", "AZ", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "JE", "FI", "FR", "GB", "GE", "GR", "HR", "HU", "IE", "IS", "IT", "LT", "LU", "LV", "MD", "ME", "MK", "NL", "NO", "PL", "PT", "RO", "RS", "SE", "SI", "SJ", "SK", "TR", "UA", "RU", "VA", "MT", "MC", "XK", "LI", "IM", "GI", "FO", "AD", "AX", "GG", "SM","BS", "BZ", "CA", "CR", "CU", "DO", "GL", "GT", "HN", "HT", "JM", "MX", "NI", "PA", "PR", "SV", "US", "AG", "AW", "BB", "BL", "GD", "KN", "LC", "MQ", "TC", "VG", "AI", "BM", "DM", "PM", "GP", "KY", "MF", "MS", "SX", "TT", "VC", "VI", "BQ", "CW","AR", "BO", "BR", "CL", "CO", "EC", "FK", "GF", "GY", "PE", "PY", "SR", "UY", "VE", "GS","AS", "AU", "UM-FQ", "CC", "CX", "FJ", "FM", "GU", "HM", "UM-HQ", "UM-DQ", "UM-JQ", "KI", "MH", "UM-MQ", "MP", "NC", "NF", "NR", "NU", "NZ", "PG", "PW", "SB", "TF", "TK", "TL", "TO", "TV", "VU", "UM-WQ", "WF", "WS", "CK", "PF", "PN"]
};

var nombres = {};