import { storage } from './config'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export const uploadImage = async (file: File, path: string) => {
  try {
    const storageRef = ref(storage, path)
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
  } catch (error) {
    console.error('Error uploading image:', error)
    return null
  }
}
