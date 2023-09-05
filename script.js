// Get references to HTML elements
const getLocationButton = document.getElementById('getLocationButton');
const locationResult = document.getElementById('locationResult');

// Add a click event listener to the button
getLocationButton.addEventListener('click', () => {
    // Check if geolocation is available in the user's browser
    if ("geolocation" in navigator) {
        // Request geolocation information
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                locationResult.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
            },
            (error) => {
                // Handle errors
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        locationResult.textContent = "User denied the request for geolocation.";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        locationResult.textContent = "Location information is unavailable.";
                        break;
                    case error.TIMEOUT:
                        locationResult.textContent = "The request to get location timed out.";
                        break;
                    default:
                        locationResult.textContent = "An unknown error occurred.";
                        break;
                }
            }
        );
    } else {
        locationResult.textContent = "Geolocation is not supported by your browser.";
    }
});
