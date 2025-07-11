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
      token: (useCookie("token").value as string) || null,
      isAuthenticated: false,
      isLoading: true,
    };
  },
  actions: {
    async login(email: string, password: string) {
      await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }).then(async (response) => {
        try {
          if (response.ok) {
            return response.json().then((data) => {
              console.log(data.token);
              this.token = data.token;
              this.isAuthenticated = true;
            });
          }
        } catch (error) {
          throw new Error("Invalid email or password");
        }
      });
    },
    async checkAuth() {
      if (this.token) {
        try {
          const response = await fetch("/api/auth/checkAuth", {
            headers: { Authorization: `Bearer ${this.token}` },
          });
          if (response.ok) {
            const decodedToken = await response.json();
            this.user = decodedToken.user;
            this.isAuthenticated = true;
          }
        } catch (error) {
          this.logout();
          throw new Error("Unauthorized");
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
