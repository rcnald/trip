export interface Article {
  id: number
  title: string
  description: string
  published_at: string
  url: string
  cover_image: string
  user: {
    name: string
    profile_image: string
  }
  reading_time_minutes: number
  tag_list: string[]
}