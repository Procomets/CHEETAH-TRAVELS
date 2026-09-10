/**
 * Placeholder API client abstraction.
 * Easily swappable with backend endpoints (REST or GraphQL) in future development.
 */
export const apiClient = {
  get: async (endpoint) => {
    console.log(`[API Mock GET] Request to: ${endpoint}`);
    return { success: true, data: null };
  },

  post: async (endpoint, payload) => {
    console.log(`[API Mock POST] Request to: ${endpoint}`, payload);
    return { success: true, data: payload };
  }
};
