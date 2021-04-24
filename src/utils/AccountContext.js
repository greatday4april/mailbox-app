import React from 'react';
import { readGmailList } from '../apis/MessageApis'


const AccountContext = React.createContext(); //Used to store the Account Information

export const AccountProvider =  ({ children }) => {

    const [account, setAccount] = React.useState({
        name: '',
        email: '',
        accessToken: '',
        picture: '',
        authenticated: false,
        emailList: []
    });
    return (
        <AccountContext.Provider value={{ account, setAccount }}>
          {children}
        </AccountContext.Provider>
      );
}
export const AccountConsumer = AccountContext.Consumer;

export default AccountContext;