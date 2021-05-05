var axios = require('axios');

class MovieDataService {
  addMovieToLibrary(data) {
    var config = {
      method: 'post',
      url: 'http://localhost:8080/api/movie/library',
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

  addMovieToWishlist(data) {
    var config = {
      method: 'post',
      url: 'http://localhost:8080/api/movie/wishlist',
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

  async getAllMovies(location) {
    var config = {
      method: 'get',
      url: `http://localhost:8080/api/movie/${location}`,
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

  async getMovie(title) {
    var config = {
      method: 'get',
      url: `http://localhost:8080/api/movie/${title}`,
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

  modifyMovie(title, data) {
    var config = {
      method: 'put',
      url: `http://localhost:8080/api/movie/${title}`,
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
}

export default new MovieDataService();