const URL = process.env.APP_URI || "http://localhost:5002";

// TODO make proxy later
export const getLogInResponseURI = `${URL}/api/logIn`;
export const verifyAccessTokenURI = `${URL}/api/verify`;
export const searchResponseURI = `${URL}/search`;
