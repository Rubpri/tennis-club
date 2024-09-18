export const environment = {
    production: true,
    firebase: {
        projectId: import.meta.env.NG_APP_PROJECT_ID,
        appId: import.meta.env.NG_APP_APP_ID,
        storageBucket: import.meta.env.NG_APP_STORAGE_BUCKET,
        apiKey: import.meta.env.NG_APP_API_KEY,
        authDomain: import.meta.env.NG_APP_AUTH_DOMAIN,
        messagingSenderId: import.meta.env.NG_APP_MESSAGING_SENDER_ID
    }
}
