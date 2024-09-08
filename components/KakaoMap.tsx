import React from 'react';
import { WebView } from 'react-native-webview';
import { View, Platform } from 'react-native';

const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>단일 마커 표시하기</title>
</head>
<body>
    <div id="map" style="width:100%;height:100vh;"></div>

    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=e66ac44b0a3ae1a499911f4b45bafaaa"></script>
    <script>
    var mapContainer = document.getElementById('map'), 
        mapOption = { 
            center: new kakao.maps.LatLng(37.498004414546934, 127.02770621963765), 
            level: 3 
        }; 

    var map = new kakao.maps.Map(mapContainer, mapOption);

    var positions = [ 
        new kakao.maps.LatLng(37.499590490909185, 127.0263723554437),
        new kakao.maps.LatLng(37.499427948430814, 127.02794423197847),
        new kakao.maps.LatLng(37.498553760499505, 127.02882598822454),
        new kakao.maps.LatLng(37.497625593121384, 127.02935713582038),
        new kakao.maps.LatLng(37.49646391248451, 127.02675574250912),
        new kakao.maps.LatLng(37.49629291770947, 127.02587362608637),
        new kakao.maps.LatLng(37.49754540521486, 127.02546694890695)                
    ];

    var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', 
        imageSize = new kakao.maps.Size(64, 69), 
        imageOption = {offset: new kakao.maps.Point(27, 69)}; 
    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

    for (var i = 0; i < positions.length; i ++) {
        var marker = new kakao.maps.Marker({
            map: map,
            position: positions[i],
            image: markerImage 
        });
    }
    </script>
</body>
</html>
`;

export default function KakaoMap() {
  if (Platform.OS === "web") {
    return (
      <div style={{ width:'100%', height:'100%' }}>
      <iframe 
        srcDoc={html}
        style={{width: '100%', height: '100%', border: 'none'}}
        sandbox="allow-scripts"
      />
      </div>
    );
  } else {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{ html: html }}
          style={{flex: 1}}
        />
      </View>
    );
  }
}