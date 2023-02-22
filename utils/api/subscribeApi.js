import firebase from "firebase"

export const addSubscriber = async(userEmail) => {
  await firebase.firestore().collection("EmailSubscribers").add({ 
    email: userEmail,
    subscribedAt: Date.now(),
  })
};
