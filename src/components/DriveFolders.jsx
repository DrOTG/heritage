import { DataView } from "primereact/dataview";
import { Card } from "primereact/card";
import { Button } from 'primereact/button';
import data from '../data.json'

export default function DriveFolders() {

  const listTemplate = (items) => {
    const list = items.map((item,index)=>{
      return (
        <Card key={index} title={item.name} subTitle={item.school} footer={(
          <div style={{display:"flex",justifyContent:"end",gap:"8px"}}>
            <Button label='Buy Access' />
            <Button label='View' />
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