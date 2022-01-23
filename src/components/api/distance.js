import { getDistance } from "geolib";

export const MeasureDistanceFromUser = (card_location, customer_location) => {
  let distance;

  if (card_location && card_location.geometry) {
    let from_location = card_location && card_location.geometry.location;
    let to_location = customer_location;

    if (from_location && to_location) {
      from_location = {
        latitude: from_location.lat,
        longitude: from_location.lng,
      };
      // to_location = { latitude: to_location.lat, longitude: to_location.lng };

      distance = getDistance(from_location, to_location);
      distance = distance / 1609.34;
      distance = Math.floor(distance);
    }
  }

  return distance;
};
