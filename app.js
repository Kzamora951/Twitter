const { TwitterClient } = require('twitter-api-client');

const twitterClient = new TwitterClient({
  apiKey: 'F05nx7kVnZJSNgzipVvTX3sg1',
  apiSecret: 'dYssYE2ZdENNTdlSShsx1Di6MB1EmJSNmacSUpm5yQ4CrjjjtL',
  accessToken: '1657032453838499841-4BdfbWZD3VRpXmemvAJaT47wAiytZa',
  accessTokenSecret: '1657032453838499841-4BdfbWZD3VRpXmemvAJaT47wAiytZa',
  ttl: 120, // seconds. Defaults to 360
  disableCache: true, // Disables the caching behavior. Defaults to 'false'
  maxByteSize: 32000000, // Maximum (approximated) memory size for cache store. Defaults to 16000000.
});

async function searchUser() {
  // Search for a user
  try {
    const data = await twitterClient.accountsAndUsers.usersSearch({ q: 'midudev' });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  
}

searchUser();



// Get message event by Id
// const data = await twitterClient.directMessages.eventsShow({ id: '1234' });

// Get most recent 25 retweets of a tweet
// const data = await twitterClient.tweets.statusesRetweetsById({ id: '12345', count: 25 });

// // Get local trends
// const data = await twitterClient.trends.trendsAvailable();