export type IndexData = {
  url: string
  label: string
  device: string
  /** Lighthouse-weighted accessibility score, 0–100 */
  score: number
  violations: number
  date: string
}
