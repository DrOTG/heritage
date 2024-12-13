import { DataView } from 'primereact/dataview'
import { Card } from "primereact/card";
import { Button } from 'primereact/button';

export default function Home() {
  const drives = [
    {
      name:"DrOTG's Folder",
    }
  ]

  const listTemplate = (items) => {
    const list = items.map((item,index)=>{
      return (
        <Card key={index} title={item.name} footer={(
          <div>
            <Button label='Buy' />
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
      <DataView value={drives} listTemplate={listTemplate} />
    </div>
  )
}