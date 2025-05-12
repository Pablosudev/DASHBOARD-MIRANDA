export interface LogInInterface {
    email: string,
    password: string,
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    setAuthenticated: (isAuthenticated: boolean) => void;
}