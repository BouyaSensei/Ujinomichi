import { defineStore } from "pinia";

interface AuthState {
  user: null | object;
  token: null | string;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const useAuthStore = defineStore("auth", {
  state(): AuthState {
    return {
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: true,
    };
  },
  actions: {
    async checkAuth() {
      const token = useCookie("token").value;
      if (token) {
        try {
          const response = await fetch("/api/auth/checkAuth", {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (response.ok) {
            const decodedToken = await response.json();

            this.user = decodedToken;
            //console.log(this.user);
            this.isAuthenticated = true;
          } else {
            throw new Error("Unauthorized");
          }
        } catch (error) {
          this.logout();
        }
      } else {
        this.logout();
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      this.isAuthenticated = false;
      useCookie("token").value = null;
    },
  },
});
