export default async (formData, userId) => {
  try {
    console.log(formData, userId)
    const response = await fetch('http://localhost:3000/service/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ formData, userId })
    })
    console.log(JSON.stringify({ formData, userId }))
    const data = await response.json()
    if (response.ok) {
      console.log(data)
      return { success: true, data }
    } else {
      console.error(data)
      return { success: false, error: data.error }
    }
  } catch (error) {
    console.error(error)
    return { success: false, error }
  }
}
