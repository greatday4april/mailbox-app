import React from 'react';

const AccountContext = React.createContext(); //Used to store the Account Information

export const AccountProvider =  ({ children }) => {

    const [account, setAccount] = React.useState({
        name: '',
        email: '',
        accessToken: '',
        picture: ''
    });
    return (
        <AccountContext.Provider value={{ account, setAccount }}>
          {children}
        </AccountContext.Provider>
      );
}
export const AccountConsumer = AccountContext.Consumer;

export default AccountContext;