import axios from 'axios';
import { useState, useEffect, startTransition } from 'react';
import styled from 'styled-components';
const kakao = window['kakao']; 

function KakaoMap() {
  const [info, setInfo] = useState()
  const [markers, setMarkers] = useState([])
  const [map, setMap] = useState()
  const new_script = src => { 
    return new Promise((resolve) => { 
      const script = document.createElement('script');
      script.src = src; 
      script.addEventListener('load', () => { 
        resolve(); 
      }); 
      document.head.appendChild(script); 
    }); 
  };
  
  useEffect(() => { 
    //카카오맵 스크립트 읽어오기
    const my_script = new_script('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f5dcd71bcdf478a4594fbcb3db6e3a70');
    //스크립트 읽기 완료 후 카카오맵 설정
    

    my_script.then(() => {
      
      const kakao = window['kakao']; 
      
      kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const mapOptions = { 
          center: new kakao.maps.LatLng(37.51239728704224, 127.10251005977642), //좌표설정
          level: 3 
        }; 
        const map = new kakao.maps.Map(mapContainer, mapOptions); //맵생성
        //마커설정
        const markerPosition = new kakao.maps.LatLng(37.51239728704224, 127.10251005977642); 
        const marker = new kakao.maps.Marker({ 
          position: markerPosition
        }); 
        marker.setMap(map); 
      });   
    }); 
  }, [map]);

  return (
    <MapWrap>
      <div id="map" className="map"/>
    </MapWrap>
  );
}

export default KakaoMap;

const MapWrap = styled.div`
  .map {
    width: 100%;
    height: 600px;
  }
`;