import client  from "./client";

export const login_with_password = async (email, password) => {
    await client.collection('users').authWithPassword(
        email,
        password,
    ).then((response) => {
        setLoading(false);
        console.log(response);
    }).catch((error) => {
        console.log(error);
    })
}