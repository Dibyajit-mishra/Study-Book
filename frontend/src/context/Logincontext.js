import { createContext, useContext } from "react"
import {useNavigate} from "react-router-dom"

export const loginId = createContext("")

// import axios from 'axios';

// // Create instance configured to send cookies automatically via credentials
// const api = axios.create({
//   baseURL: 'http://localhost:5000/api',
//   withCredentials: true 
// });

// let accessToken = ''; // Keep in-memory (or application state) to stay safe from XSS

// export const setAccessToken = (token) => {
//   accessToken = token;
// };


// Response Interceptor: Catch 401 errors and handle refresh token logic
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // Check if error is 401 and we haven't already tried to refresh this request
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         // Hit refresh endpoint to get new access token using HttpOnly cookie
//         const response = await axios.post('http://localhost:5000/api/refresh', {}, { withCredentials: true });
//         const { accessToken: newAccessToken } = response.data;

//         setAccessToken(newAccessToken);
//         originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

//         // Retry the original failed network request with new token
//         return api(originalRequest);
//       } catch (refreshError) {
//         console.error('Refresh token expired or invalid. User must log in again.');
//         // Redirect to login or clear auth context state here
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export default api;
