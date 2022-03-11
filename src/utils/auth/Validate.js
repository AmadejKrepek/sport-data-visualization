import { getWithExpiry, setWithExpiry } from "../localstorage/localstorage"

function Validate(registerData) {
    if (!(registerData.age >= 1 && registerData.age <= 120)) {
        return false;
    }
    else if (!(registerData.weight >= 1 && registerData.weight <= 1000)) {
        return false;
    }
    else if(registerData.name != '' && registerData.surname != '' && registerData.username != '' && registerData.password != '') {
        setWithExpiry('registerData', registerData, 1000*60*60*24)
        return true;
    }
    else {
        return false;
    }
}

function ValidateSignIn(loginData) {
  let registerData = getWithExpiry("registerData");
  if (registerData != null) {
    if (
      registerData.username == loginData.username &&
      registerData.password == loginData.password
    ) {
      setWithExpiry("loginData", loginData, 1000*60*60*24);
      return true;
    } else {
      return false;
    }
  }
}

export {
    Validate,
    ValidateSignIn
}