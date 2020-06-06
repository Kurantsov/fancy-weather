async function map(coordinates) {
  let script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAQd43_QA0uYHpJCAZFvxrnG5kqyaVZtx4&callback=initMap';
  script.defer = true;
  script.async = true;

  window.initMap = function () {
    const lat = 53.893009;
    const lng = 27.567444;
    const element = document.getElementById('map');
    const options = {
      center: {lat, lng},
      zoom: 5,
    };
    const myMap = new google.maps.Map(element, options);
    const marker = new google.maps.Marker({
      position: {lat, lng},
      map: myMap,
    });
  };

  document.head.appendChild(script);
}

map()

export {map}