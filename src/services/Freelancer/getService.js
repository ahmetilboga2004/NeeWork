export default async (id) => {
  try {
    const response = await fetch('http://localhost:3000/service/' + id, {
      credentials: 'include'
    })
    const data = await response.json()
    if (response.ok) {
      console.log(data)
      return { success: true, data }
    } else {
      console.error(data.error)
      return { success: false, error: data.error }
    }
  } catch (error) {
    console.log(error)
    return { success: false, error }
  }
}
