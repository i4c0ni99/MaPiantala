import axios from 'axios';
const API_KEY = "AIzaSyDmRC46vKa33hycgqlvbMMzZifuvohGgj4";

const GeocodingService = {
  getCoordinates: async (address: string) => {
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}` );
      
      if (response.data.results.length > 0) {
        return response.data.results[0].geometry;
      } else {
        throw new Error('No results found');
      }
    } catch (error) {
      console.error('Error fetching geocoding data:', error);
      throw error;
    }
  },
};

export default GeocodingService;