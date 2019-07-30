# google-sheets-remote-schema

[Google Sheets API](https://developers.google.com/sheets/api/) is a service to read, write and format data in sheets programatically.

## Adding Google Sheets as Remote Schema

To be able to query Google Sheets data via Hasura, it needs to be added as a Remote Schema using the Hasura Console.

- Get the Google Sheets API Key by visting the [Authorize Requests Sheets API](https://developers.google.com/sheets/api/guides/authorizing#APIKey) page.
- Set the API key as `GOOGLE_SHEETS_API_KEY` environment variable.
- We need to input the spreadsheet id from where we are going to fetch data. Set that as `SPREADSHEET_ID` environment variable. We can find the sheet ID in the url.
- This custom resolver is used to accept a user's email and will return a filtered list of data pertaining to that user.

## Google Sheets API Documentation

[API Documentation](https://developers.google.com/sheets/api/).

## Deploy with Glitch

1. Click the following button to edit on glitch

   [![glitch-deploy-button](https://raw.githubusercontent.com/hasura/graphql-engine/master/community/boilerplates/auth-webhooks/nodejs-express/assets/deploy-glitch.png)](http://glitch.com/edit/#!/import/github/praveenweb/google-sheets-remote-schema)

2. Add the following environment variables in the `.env` file on glitch.

   ```env
   GOOGLE_SHEETS_API_KEY=xxx
   SPREADSHEET_ID=xxx
   PORT=3000
   ```

## Running Locally

```bash
npm install
PORT=3000 GOOGLE_SHEETS_API_KEY=xxx SPREADSHEET_ID=xxx npm start
```
