export default class TweetService {  
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  // GetTweet   &&   GetTweets
  async getTweets(username) {
    const query = username ? `?username=${username}` : '';
    const response = await fetch(`${this.baseURL}/tweets${query}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    });

    const data = await response.json();    
    // 정상적으로 받아 오지 못 하면, Server에서 받아 온 메세지를 보여 준다. 
    if(response.status !== 200){
      throw new Error(data.message);
    }
    return data;
  }

  // JSON.stringify(); : 객체 형태를 json형태로 변환
  async postTweet(text) {    
    const response = await fetch(`${this.baseURL}/tweets`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(
        { 
          text,
          username: 'ellie',
          name: 'Ellie' 
        }
      ),
    });
    
    const data = await response.json();    
    // 정상적으로 받아 오지 못 하면, Server에서 받아 온 메세지를 보여 준다. 
    if(response.status !== 201){
      throw new Error(data.message);
    }
    return data;
  }

  async deleteTweet(tweetId) {    
    const response = await fetch(`${this.baseURL}/tweets/${tweetId}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    });
        
    // 정상적으로 받아 오지 못 하면, Server에서 받아 온 메세지를 보여 준다. 
    if(response.status !== 204){
      throw new Error("Something wrong to delete..!!");
    }
  }

  async updateTweet(tweetId, text) {
    const response = await fetch(`${this.baseURL}/tweets/${tweetId}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(
        { 
          text,         
        }
      ),
    });
    
    const data = await response.json();    
    // 정상적으로 받아 오지 못 하면, Server에서 받아 온 메세지를 보여 준다. 
    if(response.status !== 200){
      throw new Error(data.message);
    }
    return data;
  }
}
