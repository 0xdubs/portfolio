
import { DEVTO_API_URL } from 'data/constants'

export const getDevtoPosts = async () => {
  const res = await fetch(
    `${DEVTO_API_URL}/articles?username=${process.env.DEVTO_USERNAME}`
  )

  if (res.status < 200 || res.status >= 300) {
    throw new Error(
      `Error fetching... Status code: ${res.status}, ${res.statusText}`
    )
  }
  const dev_posts = await res.json()
  return dev_posts
}
