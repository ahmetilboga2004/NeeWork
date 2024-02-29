export default async () => {
  try {
    const response = await fetch('http://localhost:3000/subcategory/', {
      credentials: 'include'
    })
    const data = await response.json()
    if (response.ok) {
      console.log(data)
      return { success: true, data }
    } else {
      console.warn(data)
      return { success: false, error: data.error }
    }
  } catch (error) {
    console.error(error)
    return { success: false, error }
  }
}
