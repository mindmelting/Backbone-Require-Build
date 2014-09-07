define(function() {
    'use strict';

    return {
        REST_BASE_URL: 'https://staging.peerindex.com/',
        STATIC_BASE_URL: 'https://staging-static.peerindex.com/',
        IMAGE_PATH: '/images',
        APP_JS: {
            FREEMIUM: 'freemium.min',
            ENTERPRISE: 'enterprise.min',
            HOOTSUITE: 'hootsuite.min'
        },
        TUTORIAL: {
            ACCOUNT_DISABLED: ['PRO']
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