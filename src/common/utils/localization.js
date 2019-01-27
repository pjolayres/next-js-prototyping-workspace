const NextI18Next = require('next-i18next');

const options = {
    localeSubpaths: true,
    defaultLanguage: 'en',
    otherLanguages: ['ar']
};

module.exports = new NextI18Next(options);