import {Bar, BarChart, XAxis, YAxis, Legend} from 'recharts'
import './index.css'

const VaccinationByCoverage = props => {
  const {last7DaysVaccination} = props

  const vaccinationCoverage = last7DaysVaccination.map(each => ({
    vaccinationDate: each.vaccine_date,
    dose1: each.dose_1,
    dose2: each.dose_2,
  }))
  console.log(vaccinationCoverage)

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div>
      <h1 className="coverage-heading">Vaccination Coverage</h1>

      <BarChart
        data={vaccinationCoverage}
        margin={{top: 5}}
        width={1000}
        height={300}
      >
        <XAxis
          dataKey="vaccinationDate"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar name="dose1" dataKey="dose1" fill="#5a8dee" barSize="20%" />
        <Bar name="dose2" dataKey="dose2" fill="#f54394" barSize="20%" />
      </BarChart>
    </div>
  )
}
export default VaccinationByCoverage
