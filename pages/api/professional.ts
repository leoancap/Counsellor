import { NowRequest, NowResponse } from '@now/node'
import { generateProfessionals } from 'utils/mockData'

export default (req: NowRequest, res: NowResponse) => {
  const { name, startDate, endDate } = req.query

  const professional = generateProfessionals(+startDate, +endDate).find(
    professional => professional.name === name,
  )

  res.json(professional || 'Not found')
}
