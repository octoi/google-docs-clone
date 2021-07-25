# Google Docs Clone 📝

A mini google docs clone powered by `Next Js` & `Firebase`.

Tutorial from <a href="https://youtu.be/1ZdFJ0701QI">Sonny Sangha</a> 🎥

## Setup 📐

Clone or download this repo

> Watch this <a href="https://youtu.be/1ZdFJ0701QI">youtube video</a> for setting up the project

Create a firebase project 🔥 

create a new file in `/firebase/firebaseConfig.js`  and throw it with your firebase config

```javascript
const firebaseConfig = {
    // your firebase config
}

export default firebaseConfig;
```

Enable `authentication` with `google auth provider` and enable `firestore`

Copy the web sdk id & stuff

> Watch the video to get more info [skip to the part]

create a file named `.env.local` in project `root`

```
NEXTAUTH_URL = http://localhost:3000
GOOGLE_CLIENT_ID = Client Id
GOOGLE_CLIENT_SECRET = Client Secret
```

 
