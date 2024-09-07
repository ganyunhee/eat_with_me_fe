import React from 'react';
import { WebView } from 'react-native-webview';
import { View, Platform } from 'react-native';
//import { StyledView } from '@/components/StyledComponents';
//import { ViewStyle } from 'react-native';

const html = `
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=e66ac44b0a3ae1a499911f4b45bafaaa"></script> 
    </head>
    <body>
        <div id="map" style="width:100%;height:100%;"></div>
        <script type="text/javascript">
            (function () {
                const container = document.getElementById('map'); 
                const options = { 
                    center: new kakao.maps.LatLng(33.450701, 126.570667), 
                    level: 3 
                };
                
                const map = new kakao.maps.Map(container, options); 
                
                const geocoder = new kakao.maps.services.Geocoder();
            })();
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