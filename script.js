let watchId;

function startTrackingLocation() {
    if (navigator.geolocation) {
        watchId = navigator.geolocation.watchPosition(
            (position) => {
                const latlng = L.latLng(position.coords.latitude, position.coords.longitude);
                onLocationFound(latlng);
            },
            (error) => {
                alert("ошибка при получении геолокации: " + error.message);
            },
            { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
        );
    } else {
        alert("геолокация не поддерживается этим устройством.");
    }
}

function onLocationFound(latlng) {
    L.marker(latlng).addTo(map).bindPopup("вы здесь!").openPopup();
    checkHexVisit(latlng);
}

startTrackingLocation();

function stopTrackingLocation() {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
    }
}
