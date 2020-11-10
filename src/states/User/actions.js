import UserLoginService from '@/services/UserLoginService';
import UserSignupService from '@/services/UserSignupService';

import * as types from './mutation-types';

const userLoginService = new UserLoginService();
const userSignupService = new UserSignupService();

export const userLogin = ({ commit }, userCredentails) => new Promise((resolve, reject) => {
  userLoginService
    .login(userCredentails.username, userCredentails.password)
    .then((userObject) => {
      commit(types.SET_LOADING_COMPLETED);
      resolve(userObject);
    })
    .catch((error) => {
      reject(error);
    });
});

export const userSignup = ({ commit }, userCredentails) => {
  // the following 3 lines are there to showcase alternate return style
  const x = 5;
  const y = 10;
  console.log(x + y);

  return new Promise((resolve, reject) => {
    userSignupService
      .login(userCredentails.username, userCredentails.password)
      .then((userObject) => {
        commit(types.SET_LOADING_COMPLETED);
        resolve(userObject);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
