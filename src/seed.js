// NOTE: replace 'CrPBfLzlASf8isba1yKpDmT7Hxs1' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
  const users = [
    {
      userId: "0YLSjErMyFU9nptc5MuhoxUvu343",
      username: "teekey.jr",
      fullName: "Aswin T K",
      emailAddress: "aswinteekey@gmail.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "karlos",
      fullName: "Karlos finlay",
      emailAddress: "karlos@finlay.com",
      following: [],
      followers: ["0YLSjErMyFU9nptc5MuhoxUvu343"],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "daniel",
      fullName: "Daniel Salvador",
      emailAddress: "daniel@salvador.com",
      following: [],
      followers: ["0YLSjErMyFU9nptc5MuhoxUvu343"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "stefan",
      fullName: "Stefan George",
      emailAddress: "stefan@george.com",
      following: [],
      followers: ["0YLSjErMyFU9nptc5MuhoxUvu343"],
      dateCreated: Date.now(),
    },
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection("users").add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection("photos")
      .add({
        photoId: i,
        userId: "2",
        imageSrc: `/images/users/sameer/${i}.jpg`,
        caption: "Saint George and the Dragon",
        likes: [],
        comments: [
          {
            displayName: "daniel",
            comment: "Love this place, looks like my animal farm!",
          },
          {
            displayName: "stefan",
            comment: "Would you mind if I used this picture?",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
      });
  }
}
