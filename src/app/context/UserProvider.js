import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Here we would typically load the user from somewhere
        const userData = { name: 'John Doe' }; // Example data

        setUser(userData);
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
