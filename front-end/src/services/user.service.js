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
}

export default new UserDataService();