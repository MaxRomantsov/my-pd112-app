const BASE_URL: string = import.meta.env.VITE_API_URL as string;

//console.log("ENV", import.meta.env.BASE_URL);
const APP_ENV = {
    BASE_URL: BASE_URL
};

export { APP_ENV };