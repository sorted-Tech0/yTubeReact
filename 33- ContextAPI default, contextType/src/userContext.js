import React from "react";

const UserContext = React.createContext("Soted_Tech0");
//given default value to context

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
