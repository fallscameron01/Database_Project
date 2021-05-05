var axios = require('axios');

class UserDataService {
  create(data) {
    var config = {
      method: 'post',
      url: 'http://localhost:8080/api/user',
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

  async getUser(username) {
    var config = {
      method: 'get',
      url: `http://localhost:8080/api/user/${username}`,
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

  delete(username) {
    var config = {
      method: 'delete',
      url: `http://localhost:8080/api/user/${username}`,
      headers: { 
        'Content-Type': 'application/json'
      },
      username : username
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

export default new UserDataService();