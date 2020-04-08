var map;
map = L.map('map').setView([22.9185024, 120.5786888], 7);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '<a href="https://www.openstreetmap.org/">OpenStreetMap</a> | <a href="https://noob.tw/openstreetmap/">Tutorial 教學</a>',
    maxZoom: 18,
}).addTo(map);
// var marker = L.marker([, ]);
// marker.addTo(map);

// var requestURL = 'https://www.gsp.gov.tw/iTaiwan/itw_tw.json';
var requestURL = 'https://raw.githubusercontent.com/0xdeciverAngel/itw-wifi-map/master/wifi_info.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
var wifi_json;
request.onload = function() {
    wifi_json = request.response;
    for(var i in wifi_json)
    {
        console.log(wifi_json[i]['NAME']);
        var marker = L.marker([wifi_json[i]['LATITUDE'], wifi_json[i]['LONGITUDE']]);
        marker.addTo(map);
    }
  }