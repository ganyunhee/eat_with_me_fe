import React from 'react';
import { WebView } from 'react-native-webview';
import { View, Platform } from 'react-native';
//import { StyledView } from '@/components/StyledComponents';
//import { ViewStyle } from 'react-native';

const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>지도 생성하기</title>
    
</head>
<body>
<!-- 지도를 표시할 div 입니다 -->
<div id="map" style="width:100%;height:350px;"></div>

<script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=8cca17be8a53180771b9d97e346b2db6"></script>
<script>
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption); 
</script>
</body>
</html>   
`;

export default function KakaoMap() {
  if (Platform.OS === "web") {
    return (
      <iframe 
        srcDoc={html}
        style={{width: '100%', height: '400px', border: 'none'}}
        sandbox="allow-scripts"
      />
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