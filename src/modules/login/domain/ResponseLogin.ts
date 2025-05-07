export interface ResponseLogin {
    status?: number;
    message?: string;
    data?: {
        token: string;
        user: {
            username: string;
        };
    };
    error?: string[] | string |null| undefined;
}