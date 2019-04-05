import axios from "axios";

export default {
  // Gets all offers
  getOffers: function() {
    return axios.get("/api/offers");
  },
  // Gets the offer with the given id
  getOffer: function(id) {
    return axios.get("/api/offers/" + id);
  },
  // Deletes the offer with the given id
  deleteOffers: function(id) {
    return axios.delete("/api/offers/" + id);
  },
  // Saves an offer to the database
  saveOffers: function(offerData) {
    return axios.post("/api/offers", offerData);
  },
  getBands: function() {
    return axios.get("/api/bands")
  },
  getBand: function(id) {
    return axios.get("/api/bands/" + id);
  },
  addUser: function(userData){
      return axios.post("api/user", userData)
  }
}