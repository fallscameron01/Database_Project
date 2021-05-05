var axios = require('axios');

class VideoGameDataService {
  addVideoGameToLibrary(data) {
    var config = {
      method: 'post',
      url: 'http://localhost:8080/api/book/library',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  addVideoGameToWishlist(data) {
    var config = {
      method: 'post',
      url: 'http://localhost:8080/api/book/wishlist',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  async getAllVideoGames(location) {
    var config = {
      method: 'get',
      url: `http://localhost:8080/api/book/${location}`,
      headers: { 
        'Content-Type': 'application/json'
      }
    };
    
    const res = await axios(config)
    .then(function (response) {
      return (JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

    return await res;
  }

  async getVideoGame(title) {
    var config = {
      method: 'get',
      url: `http://localhost:8080/api/book/${title}`,
      headers: { 
        'Content-Type': 'application/json'
      }
    };
    
    const res = await axios(config)
    .then(function (response) {
      return (JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

    return await res;
  }
}

export default new VideoGameDataService();