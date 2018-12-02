var smartgrid = require('smart-grid');

var settings = {
    outputStyle: 'sass',
    columns: 12, 
    offset: '30px', 
    mobileFirst: false, 
    container: {
        maxWidth: '1560px', 
        fields: '20px' 
    },
    breakPoints: {
        lg: {
            width: '1680px', 
            fields: '20px'
        },
        md: {
            width: '1366px',
            fields: '15px'

        },
        mdx: {
            width: '1200px',
            fields: '15px'

        },
        tablet: {
            width: '992px',
            fields: '15px'

        },
        tabletx: {
            width: '768px',
            fields: '15px'

        },
        phoneh: {
            width: '576px',
            fields: '15px'
        },
        phone: {
            width: '480px',
            fields: '15px'
        },
    }
};

smartgrid('./src/static/sass', settings);