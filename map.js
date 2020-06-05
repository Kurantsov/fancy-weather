function initMap() {
  const lat = 53.893009;
  const lng = 27.567444;
  const element = document.getElementById('map');
  const options = {
    center: { lat, lng },
    zoom: 5,
  };
  // eslint-disable-next-line no-unused-vars,no-undef
  const myMap = new google.maps.Map(element, options);
  // eslint-disable-next-line no-unused-vars,no-undef
  const marker = new google.maps.Marker({
    position: { lat, lng },
    map: myMap,
  });
}
