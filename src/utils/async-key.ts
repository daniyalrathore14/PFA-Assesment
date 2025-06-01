export const ASYNC_KEYS = {
    AUTH_TOKEN: '@auth_token',
    USER_DATA: '@user_data',
    APP_SETTINGS: '@app_settings',
    ONBOARDING_COMPLETE: '@onboarding_complete',
    THEME_PREFERENCE: '@theme_preference',
    LANGUAGE_PREFERENCE: '@language_preference',
} as const;

export type AsyncKeys = typeof ASYNC_KEYS[keyof typeof ASYNC_KEYS]; 