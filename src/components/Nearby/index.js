import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Map, Wrapper } from './styles';
import attractions from '../../data/attractionList.json';

/* eslint-disable react/prop-types */
const AttractionNearby = ({ attraction }) => {
    const { title, lat, lng } = attraction;
    // Distance in metres.
    const radius = 500;

    const loader = new Loader({
        apiKey: 'AIzaSyDgFXBBfNDxPPNKie2kVZpWrSmb4EyYM1I',
        version: '3',
        libraries: ['places'],
    });

    let map;
    let service;
    let infoWindow;

    function goMarker(name, latitude, longitude, url = 'assets/map-marker-1.svg') {
        const icon = {
            url, // url
            scaledSize: new window.google.maps.Size(35, 35), // size
        };
        const marker = new window.google.maps.Marker({
            map,
            position: { lat: Number(latitude), lng: Number(longitude) },
            title: name,
            icon,
        });

        infoWindow = new window.google.maps.InfoWindow({
            content: name,
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    }

    function createMarker(place) {
        const icon = {
            url: 'assets/burger.svg', // url
            scaledSize: new window.google.maps.Size(35, 35), // size
        };

        const marker = new window.google.maps.Marker({
            map,
            position: place.geometry.location,
            title: place.name,
            icon,
        });
        infoWindow = new window.google.maps.InfoWindow({
            content: place.name,
        });
        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    }

    function initialize() {
        infoWindow = new window.google.maps.InfoWindow();
        const location = { lat: Number(lat), lng: Number(lng) };
        map = new window.google.maps.Map(document.getElementById('map-nearby'), {
            center: location,
            zoom: 15,
        });
        goMarker(title, lat, lng);

        // const from = lat + ',' + lng;
        // const apiUrl = 'https://gocity.com/new-york/attractions/internal/exp';
        Object.keys(attractions).forEach(function (key) {
            const to = `${attractions[key].lat},${attractions[key].lat}`;
            // let distanceBetween = new window.google.maps.geometry.spherical.computeDistanceBetween(from, to);
            // if (distanceBetween && distanceBetween <= radius) {
            goMarker(attractions[key].name, attractions[key].lat, attractions[key].lng);
            // }
        });

        const request = {
            location,
            radius,
            type: 'restaurant',
        };

        service = new window.google.maps.places.PlacesService(map);
        // eslint-disable-next-line no-use-before-define
        service.nearbySearch(request, callback);
    }

    function callback(results, status) {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i += 1) {
                setTimeout(function () {
                    createMarker(results[i]);
                }, i * 200);
            }
        }
    }

    useEffect(() => {
        loader.loadCallback((error) => {
            if (error) {
                console.log(error);
            } else {
                initialize();
            }
        });
    });

    return (
        <div className="block-attraction-nearby container">
            <Wrapper>
                <h1>Great spots close by for solos</h1>
                <div className="attraction--wrapper">
                    <div className="attraction attraction--tile" key={attraction.id}>
                        <div className="attraction attraction--tile__image" />
                        <div className="attraction--tile__content">{attraction.name}</div>
                    </div>
                </div>
                <Map id="map-nearby" />
            </Wrapper>
        </div>
    );
};

export default AttractionNearby;
