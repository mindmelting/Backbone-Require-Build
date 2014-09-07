define(function() {
    'use strict';

    return {
        REST_BASE_URL: 'http://localhost:8080',
        STATIC_BASE_URL: 'http://localhost:8081',
        IMAGE_PATH: '/images',
        APP_JS: {
            FREEMIUM: 'freemium.min',
            ENTERPRISE: 'enterprise.min'
        },
        LOGGING: true,
        TRACKING: {
            ENABLED: true,
            EXCLUSIONS: [
                /.*\.internal@peerindex.com/
            ]
        },
        MIXPANEL_KEY: 'efb693e9f7afc9fc3ccb6525aafda608'
    };
    
});