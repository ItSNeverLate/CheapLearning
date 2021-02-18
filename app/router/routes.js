/*
freeze() frevents the modification of existing property attributes and values, 
and prevents the addition of new properties.
*/

export default Object.freeze({
    // Auth Flow
    WELCOME: 'welcome',
    LOGIN: 'login',
    RESGITER: 'register',
    // Main Flow
    SEARCH: 'search',
    MESSAGES: 'messages',
    SCHEDULE: 'schedule',
    SETTING: 'setting',
    PROFILE: 'profile'
});