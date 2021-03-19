import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Map, Wrapper } from './styles';
import attractions from '../../data/attractionList.json';

/* eslint-disable react/prop-types */
const AttractionNearby = ({ attraction }) => {
    const { title, latitude, longitude } = attraction;
    // Distance in metres.
    const radius = 500;
    console.log(attraction);

    const MapLoader = new Loader({
        apiKey: 'AIzaSyDgFXBBfNDxPPNKie2kVZpWrSmb4EyYM1I',
        version: '3',
        libraries: ['places', 'geometry'],
    });

    let map;
    let service;
    let infoWindow;

    /**
     * Uses google geometry API to calculate distance.
     *
     * @param from
     * @param to
     */
    function calculateDistance(from, to) {
        const distanceBetween = window.google.maps.geometry.spherical.computeDistanceBetween(from, to);
        console.log(distanceBetween);
        if (distanceBetween < radius) {
            return true;
        }
        return false;
    }

    function goMarker(name, lat, lng, url = '/img/map-marker-1.svg') {
        const icon = {
            url, // url
            scaledSize: new window.google.maps.Size(35, 35), // size
        };
        const marker = new window.google.maps.Marker({
            map,
            position: { lat: Number(lat), lng: Number(lng) },
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
            url: '/img/burger.svg', // url
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

    function initialize(lat, lng) {
        infoWindow = new window.google.maps.InfoWindow();
        const location = { lat: Number(lat), lng: Number(lng) };
        map = new window.google.maps.Map(document.getElementById('map-nearby'), {
            center: location,
            zoom: 15,
        });

        goMarker(title, lat, lng);

        const from = new window.google.maps.LatLng(lat, lng);
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < attractions.length; i++) {
            // @TODO: filter GO attraction data here.
            const to = new window.maps.LatLng(attractions[i].lat, attractions[i].lat);

            if (calculateDistance(from, to)) {
                setTimeout(function () {
                    goMarker(attractions[i].name, attractions[i].lat, attractions[i].lng);
                }, i * 200);
            }
        }

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
        MapLoader.loadCallback((error) => {
            if (error) {
                console.log(error);
            } else {
                initialize(latitude, longitude);
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
