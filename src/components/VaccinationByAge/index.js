// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props
  console.log(vaccinationByAge)
  return (
    <div>
      <h1 className="age-heading">Vaccination By Age</h1>

      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="40%"
          data={vaccinationByAge}
          startAngle={0}
          endAngle={360}
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="45-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
        />
      </PieChart>
    </div>
  )
}
export default VaccinationByAge
