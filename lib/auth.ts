import Cookies from "js-cookie";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "";
const AUTH_COOKIE_NAME = "admin_auth";

export interface AdminUser {
    email: string;
    isAuthenticated: boolean;
}

// Simple authentication - in production, use a proper auth solution
export function validateAdminCredentials(
    email: string,
    password: string
): boolean {
    return email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
}

export function setAuthCookie() {
    Cookies.set(AUTH_COOKIE_NAME, "authenticated", {
        expires: 7, // 7 days
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
    });
}

export function removeAuthCookie() {
    Cookies.remove(AUTH_COOKIE_NAME);
}

export function isAuthenticated(): boolean {
    if (typeof window === "undefined") return false;
    return Cookies.get(AUTH_COOKIE_NAME) === "authenticated";
}

// Server-side auth check
export function checkServerAuth(cookieHeader?: string): boolean {
    if (!cookieHeader) return false;
    return cookieHeader.includes(`${AUTH_COOKIE_NAME}=authenticated`);
}
