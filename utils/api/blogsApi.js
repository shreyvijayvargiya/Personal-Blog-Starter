import firebase from "firebase";
import { toast } from "react-toastify";

export const fetchAllBlogs = async() => {
  const blogs = [];
  const firestore = firebase.firestore();
  const data = await firestore.collection("/blogs").get();
  data.docs.map(item => {
    blogs.push({
      ...item.data(),
      id: item.id
    })
  });
  return blogs;
};

export const fetchSingleBlog = async(id) => {
  const data = await firebase.firestore().collection("blogs").doc(id).get();
  return data.data()
};

export const removeBlog = async(id) => {
  await firebase.firestore().collection("blogs").doc(id).delete();
  toast.success("Blog deleted")
};

export const updateBlog = async(id, values) => {
  await firebase.firestore().collection("blogs").doc(id).update(values, { editedAt: Date.now()})
  toast.success("Blog updated successfully")
}

export const postBlog = async(values) => {
  const firestore = firebase.firestore();
  await firestore.collection("/blogs").add(values);
  toast.success("Blog posted successfully")
}