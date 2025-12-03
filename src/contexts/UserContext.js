import { createContext } from "react";

export let UserContext = createContext({
    userName:"",
    userPhone: "",
    userImage: ""
});