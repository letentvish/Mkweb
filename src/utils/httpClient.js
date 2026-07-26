// src/utils/httpClient.js
import axios from "axios";

class HttpClient {
  constructor() {
    // Create axios instance with base configuration
    this.axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api",
      timeout: 10000, // 10 seconds
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    this.setupInterceptors();
  }

  setupInterceptors() {
    // Request Interceptor
    this.axiosInstance.interceptors.request.use(
      (config) => {
        // Add access token to Authorization header if needed
        const accessToken = localStorage.getItem("authToken");
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response Interceptor
    this.axiosInstance.interceptors.response.use(
      (response) => {
        // Return the actual response data instead of the full AxiosResponse
        return response.data;
      },
      (error) => {
        // Handle errors
        return this.handleError(error);
      }
    );
  }

  handleError(error) {
    let errorMessage = "An unexpected error occurred";

    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;
      const errorData = data;

      // Try to extract the specific error message from backend
      const backendMessage =
        errorData?.error?.message ||
        errorData?.error ||
        errorData?.message ||
        errorData?.details;

      if (backendMessage && typeof backendMessage === "string") {
        errorMessage = backendMessage;
      } else {
        // Fallback to generic messages based on status code
        switch (status) {
          case 400:
            errorMessage = backendMessage || "Bad Request - Please check your input";
            break;
          case 401:
            errorMessage = backendMessage || "Invalid credentials";
            break;
          case 403:
            errorMessage = backendMessage || "Forbidden - You do not have permission";
            break;
          case 404:
            errorMessage = backendMessage || "Resource not found";
            break;
          case 422:
            errorMessage = backendMessage || "Validation Error - Please check your data";
            break;
          case 500:
            errorMessage = backendMessage || "Server Error - Please try again later";
            break;
          default:
            errorMessage = backendMessage || `Server Error (${status})`;
        }
      }
    } else if (error.request) {
      // Request was made but no response received
      errorMessage = "Network error. Please check your connection.";
    } else {
      // Something else happened
      errorMessage = error.message || "An unexpected error occurred";
    }

    console.error("HTTP Client Error:", {
      message: errorMessage,
      status: error.response?.status,
      data: error.response?.data,
      config: error.config,
    });

    return Promise.reject(new Error(errorMessage));
  }

  // HTTP Methods
  async get(url, config) {
    return await this.axiosInstance.get(url, config);
  }

  async post(url, data, config) {
    return await this.axiosInstance.post(url, data, config);
  }

  async put(url, data, config) {
    return await this.axiosInstance.put(url, data, config);
  }

  async patch(url, data, config) {
    return await this.axiosInstance.patch(url, data, config);
  }

  async delete(url, config) {
    return await this.axiosInstance.delete(url, config);
  }

  // Utility methods
  setBaseURL(baseURL) {
    this.axiosInstance.defaults.baseURL = baseURL;
  }

  setDefaultHeader(key, value) {
    this.axiosInstance.defaults.headers.common[key] = value;
  }

  removeDefaultHeader(key) {
    delete this.axiosInstance.defaults.headers.common[key];
  }

  // Get the underlying axios instance for advanced usage
  getAxiosInstance() {
    return this.axiosInstance;
  }
}

// Create and export singleton instance
const httpClient = new HttpClient();
export default httpClient;
