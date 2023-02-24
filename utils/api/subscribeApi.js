import firebase from "firebase"
import { toast } from "react-toastify";

export const addSubscriber = async(userEmail) => {
  await firebase.firestore().collection("EmailSubscribers").add({ 
    email: userEmail,
    subscribedAt: Date.now(),
  })
  toast.success("You have subscribed to our newsletter")
};
