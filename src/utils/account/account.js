import { getWithExpiry, setWithExpiry } from '../localstorage/localstorage';

function ChangeAccountDetails(identifier) {
    let registerData = getWithExpiry('registerData');
    if (identifier == 'name') {
        registerData.name = 'Marko';
        setWithExpiry('registerData', registerData)
    }
}

export {
    ChangeAccountDetails
}