function initMap() {
  const loc = { lat: 47.918373, lng: 106.917677};

  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });

  const marker = new google.maps.Marker({position: loc, map:map});
}