import { API } from "../constants";

export const createUser = async (newUser) => {
    const res = await fetch(API.DIEGO_USUARIOS, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
    });
}