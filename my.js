var map;
map = L.map('map').setView([24.140437, 120.909862], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '<a href="https://www.openstreetmap.org/">OpenStreetMap</a> | <a href="https://github.com/0xdeciverAngel/itw-wifi-map">github source code</a>',
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
        // console.log(wifi_json[i]['NAME']);
        var str=wifi_json[i]['NAME'];
        var res=str.search(/^[台臺]中.*/);
        var res1=str.search(/嘉義/);
        var res2=str.search(/分院/);

        if(res!=-1 && res1==-1 &&res2==-1 )
        {
            
            console.log(str);
            var marker = L.marker([wifi_json[i]['LATITUDE'], wifi_json[i]['LONGITUDE']]);
            marker.addTo(map);
            marker.bindPopup('<b>'+wifi_json[i]['NAME']+'</b><br>'+wifi_json[i]['ADDR']);
        }
        
    }
  }