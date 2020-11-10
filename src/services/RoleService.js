const axios = require('axios');

export default class RoleService {
  getAccountInfo(userId) {
    return new Promise((resolve, reject) => {
      const apiEndpoint = `${this.baseUrl}user/detail/${userId}/`;
      axios.post(apiEndpoint, {
        firstName: 'Fred',
        lastName: 'Flintstone',
      })
        .then((response) => resolve(response), (e) => reject(e));
    });
  }

  getAboutUs() {
    return new Promise((resolve, reject) => {
      const apiEndpoint = `${this.baseUrl}settings/details/`;
      axios({
        method: 'post',
        url: apiEndpoint,
        data: {
          firstName: 'Fred',
          lastName: 'Flintstone',
        },
        headers: this.getHeaders(),
      })
        .then((response) => resolve(response), (e) => reject(e));
    });
  }

  static getHeaders(toAppend = {}) {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...toAppend,
    };
  }
}
