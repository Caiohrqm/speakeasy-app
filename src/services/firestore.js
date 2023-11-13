import { Alert } from "react-native";
import { db } from "../config/firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

export async function saveMeeting(meeting) {
  Alert.alert("Sucesso", "Reunião cadastrada com sucesso!");
  await addDoc(collection(db, "meetings"), meeting);
}

export async function editMeeting(meetingId, data) {
  Alert.alert("Sucesso", "Reunião editada com sucesso!");
  const meetingRef = doc(db, "meetings", meetingId);
  await updateDoc(meetingRef, data);
}

export async function deleteMeeting(meetingId) {
  Alert.alert("Sucesso", "Reunião excluída com sucesso!");
  const meetingRef = doc(db, "meetings", meetingId);
  await deleteDoc(meetingRef);
}

export async function getMeetings(setMettings) {
  const ref = query(collection(db, "meetings"), orderBy("category"));
  onSnapshot(ref, (querySnapshot) => {
    const meetings = [];
    querySnapshot.forEach((doc) => {
      meetings.push({ id: doc.id, ...doc.data() });
    });
    setMettings(meetings);
  });
}
