import { useParams } from "react-router-dom"
import { Card } from "primereact/card"
import data from "../data.json"

export default function Subscribe() {
  const {id} = useParams()
  return (
    <div>
      <Card title="Subscribe" subTitle={data.drives[id].name}>
        <p>{data.drives[id].description}</p>
        <div></div>
      </Card>
    </div>
  )
}