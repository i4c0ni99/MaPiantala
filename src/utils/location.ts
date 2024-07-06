const location = { lat: 0, lng: 0 };


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            location.lat = position.coords.latitude,
                location.lng = position.coords.longitude
        },
        (error) => {
            error.message;
        }
    )
}
else console.log("not found")


export default location
