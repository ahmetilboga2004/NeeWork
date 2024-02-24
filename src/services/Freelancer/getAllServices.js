export default async () => {
  try {
    const response = await fetch('http://localhost:3000/service/', {
      credentials: 'include'
    })
    const data = await response.json()
    if (response.ok) {
      console.log('All Services Data', data)
      return { success: true, data }
    } else {
      console.log('Failed get all services', data)
      return { success: false, error: data.error }
    }
  } catch (error) {
    console.error(error)
    return { success: false, error: error }
  }
}
