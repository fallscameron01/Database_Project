var axios = require('axios');

class MusicDataService {
  addMusicToLibrary(data) {
    var config = {
      method: 'post',
      url: 'http://localhost:8080/api/music/library',
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

  addMusicToWishlist(data) {
    var config = {
      method: 'post',
      url: 'http://localhost:8080/api/music/wishlist',
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

  async getAllMusics(location) {
    var config = {
      method: 'get',
      url: `http://localhost:8080/api/music/${location}`,
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

  async getMusic(title) {
    var config = {
      method: 'get',
      url: `http://localhost:8080/api/music/${title}`,
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

  modifyMusic(title, data) {
    var config = {
      method: 'put',
      url: `http://localhost:8080/api/music/${title}`,
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

  async deleteMusic(title) {
    var config = {
      method: 'delete',
      url: `http://localhost:8080/api/music/${title}`,
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

export default new MusicDataService();