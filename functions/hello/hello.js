exports.handle = async (e, ctx, cb) => {
    const fetch = require('node-fetch').default;
    const response = await fetch('https://www.naver.com');

    cb(null, { t: await response.text() });
}