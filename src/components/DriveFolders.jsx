import { DataView } from "primereact/dataview";
import { Card } from "primereact/card";
import { Button } from 'primereact/button';
import data from '../data.json'
import { useNavigate } from "react-router-dom";

export default function DriveFolders() {
  const navigate = useNavigate()

  const listTemplate = (items) => {
    const list = items.map((item,index)=>{
      return (
        <Card key={index} title={item.name} subTitle={item.school} footer={(
          <div style={{display:"flex",justifyContent:"end",gap:"8px"}}>
            <Button label='Subscribe' onClick={(e)=>{navigate(`/subscribe/${index}`)}} />
          </div>
        )}></Card>
      )
    })
    return (
      <div>{list}</div>
    )
  }

  return (
    <div>
      <DataView value={data.drives} listTemplate={listTemplate} />
    </div>
  )
}