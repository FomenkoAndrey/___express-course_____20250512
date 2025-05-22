import { use, Suspense } from 'react'

interface PersonInterface {
  id: number
  name: string
  age: number
  skills: string[]
}

const API_URL = 'http://localhost:3000/api/users'

// Створюємо функцію для отримання даних
async function fetchUsers(): Promise<PersonInterface[]> {
  const res = await fetch(API_URL)
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  const data = (await res.json()) as PersonInterface[]
  return data
}

// Створюємо Promise поза компонентом, щоб він створювався лише один раз
const usersPromise = fetchUsers()

// Створюємо окремий компонент для рендерингу користувачів
const UsersList = () => {
  // Використовуємо use() для отримання даних
  const users = use(usersPromise) as PersonInterface[]

  return (
    <div>
      {users.map(({ id, name, age, skills }) => (
        <div key={id}>
          <h2>{name}</h2>
          <div>{age}</div>
          <div>{skills.join(', ')}</div>
          <hr />
        </div>
      ))}
    </div>
  )
}

const App = () => {
  return (
    <Suspense fallback={<div>Завантаження...</div>}>
      <UsersList />
    </Suspense>
  )
}

export default App
