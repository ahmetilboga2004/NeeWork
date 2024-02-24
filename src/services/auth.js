export const login = async (formDatas) => {
  try {
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDatas),
      credentials: 'include'
    })
    const data = await response.json()
    if (response.ok) {
      return { success: true, data }
    } else {
      return { success: false, error: data }
    }
  } catch (error) {
    console.error(error)
  }
}

export const register = async (formDatas) => {
  try {
    const response = await fetch('http://localhost:3000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDatas)
    })
    const data = await response.json()
    if (response.ok) {
      return { success: true, data }
    } else {
      return { success: false, error: data }
    }
  } catch (error) {
    console.error(error)
  }
}

export const logout = async () => {
  try {
    const response = await fetch('http://localhost:3000/auth/logout')
    const data = await response.json()
    if (response.ok) {
      console.log('Çıkış işlemi başarılı bir şkeilde gerçekleşti', data)
      return { success: true, data }
    } else {
      console.log('Çıkış işlemi başarısız oldu', data)
      return { success: false, error: data }
    }
  } catch (error) {
    console.error(error)
  }
}
