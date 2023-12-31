export const API_BASE_URL = 'http://192.168.0.189:8080';
export const ACCESS_TOKEN = 'accessToken';
export const REFRESH_TOKEN = 'refreshToken';

export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const KAKAO_AUTH_URL = API_BASE_URL + '/oauth2/authorize/kakao?redirect_uri=' + OAUTH2_REDIRECT_URI;