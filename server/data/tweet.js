let tweets = [
  {
    id: '1',
    text: '드림코딩 화이팅!',
    createdAt: Date.now().toString(),
    name: 'Bob',
    username: 'bob',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png'
  },
  {
    id: '2',
    text: 'Daniel 화이팅!',
    createdAt: Date.now().toString(),
    name: 'Daniel',
    username: 'daniel',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png'
  },
];

export async function getAll() {
  return await tweets;
}

export async function getAllByUsername(username){
  return await tweets.filter((tweet)=> tweet.username === username)
}

export async function getById(id) {
  return await tweets.find((tweet) => tweet.id === id);
}

export async function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  // 현재 만들어진 정보를 먼저 보여 줘야하기 때문에 기존의 정보를 뒤에서 넣는다.
  tweets = [tweet, ...tweets];
  return tweet;
}

export async function update(id, text) {
  const tweet = await tweets.find((tweet) => tweet.id === id);
  if(tweet){
    tweet.text = text;
  }
  return tweet;
}

export async function remove(id) {
  return await tweets.filter((tweet) => tweet.id !== id);
}