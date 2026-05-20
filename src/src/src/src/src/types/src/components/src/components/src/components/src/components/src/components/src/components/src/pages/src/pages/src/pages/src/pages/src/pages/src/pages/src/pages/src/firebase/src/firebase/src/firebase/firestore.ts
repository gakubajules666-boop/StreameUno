import { db } from './config'
import { collection, addDoc, getDocs, deleteDoc, doc, query, where } from 'firebase/firestore'

export const addToMyList = async (userId: string, movieId: string) => {
  try {
    await addDoc(collection(db, 'myList'), {
      userId,
      movieId,
      addedAt: new Date()
    })
  } catch (error) {
    console.error('Error adding to my list:', error)
  }
}

export const getMyList = async (userId: string) => {
  try {
    const q = query(collection(db, 'myList'), where('userId', '==', userId))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error('Error getting my list:', error)
    return []
  }
}
