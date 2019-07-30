const fetch = require('node-fetch');

const GOOGLE_SHEETS_API_KEY = process.env.GOOGLE_SHEETS_API_KEY;
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const BASE_URL = 'https://sheets.googleapis.com/v4/spreadsheets/' + SPREADSHEET_ID;

const resolvers = {
    Query: {
        worksheet: (root, args, context, info) => {
            const author = args.author;

            // Modify the range as necessary
            const url = BASE_URL + '/values/A2:B20?key=' + GOOGLE_SHEETS_API_KEY;
            return fetch(url)
                .then(res => res.json())
                .then(body => {
                    const values = body.values;
                    const authorMap = values.map((v) => {
                        return {author: v[0], url: v[1]};
                    });
                    const finalData = authorMap.filter((f) => f.author === author).map((d) => d.url);
                    return { urls: finalData}
                });
        },
    },
};

module.exports = {
    resolvers,
};