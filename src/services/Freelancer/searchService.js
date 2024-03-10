export default async (search) => {
    try {
        console.log(search)
        const response = await fetch('http://localhost:3000/service/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ search }),
            credentials: 'include'
        })
        const data = await response.json()
        if (response.ok) {
            console.log(data)
            return { success: true, data }
        } else {
            console.warn(data.error)
            return { success: false, error: data.error }
        }
    } catch (error) {
        console.error(error)
        return { success: false, error }
    }
}
