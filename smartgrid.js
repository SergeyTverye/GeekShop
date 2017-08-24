const smartgrid = require('smart-grid');

const settings = {
    columns: 12,
    outputStyle: 'scss',
    offset: '30px',
    container: {
        maxWidth: '1140px',
        fields: '30px'
    },
    breakPoints: {
        md: {
            width: '960px',
            fields: '20px'
        },
        sm: {
            width: '780px',
            fields: '15px'
        },
        xs: {
            width: '576px',
            fields: '10px'
        },
        xxs: {
            width: '420px',
            fields: '10px'
        }
    },
    properties: [],
    oldSizeStyle: false
};

smartgrid('./src/sass', settings);