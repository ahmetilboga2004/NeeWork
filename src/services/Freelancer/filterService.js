export default async (formDatas) => {
    try {
        console.log(JSON.stringify(formDatas.value))

        const response = await fetch('http://localhost:3000/service/filter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDatas.value),
            credentials: 'include'
        })
        const data = await response.json()
        if (response.ok) {
            console.log(data)
            return { success: true, data }
        } else {
            console.log(data)
            return { success: false, error: data.error }
        }
    } catch (error) {
        console.log(error)
        return { success: false, error }
    }
}
