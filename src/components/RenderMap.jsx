import React,{useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import Marker from '@googlemaps/react-wrapper'
function RenderMap() {

    const ref = useRef(null); //지도 참조값 선언
    const [map, setMap] = useState(); //지도 state 선언

    const latlng = { lat: 37.6211, lng: 127.0868}; //마커 위치 정의 

    useEffect(() => {
        //지도 생성 
        const newMap = new window.google.maps.Map(ref.current, {
            center : latlng, //중심 위치 설정
            zoom : 16, //줌 레벨 설정 
        });     
        //마커 생성 
        const marker = new window.google.maps.Marker({
            position: latlng, //마커 위치 설정
            map: newMap // 마커를 지도에 추가
        });

       marker.setMap(newMap); //마커를 지도에 설정 
    }, [ref]);

    
  return (

    <div ref={ref} id="map" 
        style={{width: '100%', height: "250px", margin: '0.5rem 0'}}>
    </div>

  )
}

export default RenderMap;



