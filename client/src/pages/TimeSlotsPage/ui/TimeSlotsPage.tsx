import { useParams } from 'react-router-dom'

const TimeSlotsPage = () => {
  const { workDayId } = useParams()

  return <div>{workDayId}</div>
}

export default TimeSlotsPage
