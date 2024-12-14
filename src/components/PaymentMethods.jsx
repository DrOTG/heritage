import { Card } from "primereact/card";
import { DataView } from "primereact/dataview";
import { useLocalStorage } from "primereact/hooks";
import { useContext, useState } from "react";
import { UserContext } from "../context";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { Dropdown } from "primereact/dropdown";
import data from '../data.json';

export default function PaymentMethods() {
  const userData = useContext(UserContext)
  const [paymentMethods,setPaymentMethods] = useLocalStorage([],'paymentMethods')
  const [visible,setVisible] = useState(false)
  const [addPaymentMethodForm,setAddPaymentMethodForm] = useState({
    accountType:data.paymentMethods[0].id,
    accountName:"",
    accountNumber:""
  })

  function savePaymentMethod() {
    addPaymentMethodForm.email=userData.user.email
    paymentMethods.push(addPaymentMethodForm)
    setPaymentMethods(paymentMethods)
    setVisible(false)
  }

  function removePaymentMethod(paymentMethodIndex) {
    paymentMethods.splice(paymentMethodIndex,1)
    setPaymentMethods(paymentMethods)
  }

  return (
    <Card 
      title="Payment Methods"
      footer={(
        <div>
          <Button label="Add" icon="pi pi-plus" onClick={(e)=>{setVisible(true)}} />
          <Dialog header="Add Payment Method" visible={visible} onHide={() => {if (!visible) return; setVisible(false); }}>
            <div className="flex flex-column gap-2">
              <div className="flex flex-column gap-2">
                <label htmlFor="accountType">Account Type</label>
                <Dropdown 
                  id="accountType" 
                  aria-describedby="accountType-help"  
                  options={data.paymentMethods} 
                  optionLabel="name" 
                  optionValue="id"
                  value={addPaymentMethodForm.accountType}
                  onChange={(e)=>{setAddPaymentMethodForm({...paymentMethods,accountType:e.value})}}
                />
                <small id="accountType-help">
                  Select the account type
                </small>
              </div>
              <div className="flex flex-column gap-2">
                <label htmlFor="accountName">Account Name</label>
                <InputText 
                  id="accountName" 
                  aria-describedby="accountName-help" 
                  value={addPaymentMethodForm.accountName}
                  onChange={(e)=>{setAddPaymentMethodForm({...addPaymentMethodForm,accountName:e.target.value})}}/>
                <small id="accountName-help">
                  Enter the name that the account is registered under.
                </small>
              </div>
              <div className="flex flex-column gap-2">
                <label htmlFor="accountNumber">Account Number</label>
                <InputMask 
                  id="accountNumber" 
                  mask="(260) 999 999999" 
                  placeholder="(260) 999 999999" 
                  aria-describedby="accountNumber-help" 
                  value={addPaymentMethodForm.accountNumber}
                  onChange={(e)=>{setAddPaymentMethodForm({...addPaymentMethodForm,accountNumber:e.target.value})}}/>
                <small id="accountNumber-help">
                  Enter the account number.
                </small>
              </div>
              <Button label="Save" onClick={(e)=>{savePaymentMethod()}} />
            </div>
          </Dialog>
        </div>
      )}>
      <DataView value={paymentMethods} listTemplate={(items)=>{
        let list = items.map((item,index)=>{
          return (
            <div key={index} className="flex flex-row border-1 border-primary p-2">
              <div className="flex flex-column justify-content-center">
                <div>{item.accountType}</div>
                <div className="">{item.accountNumber}</div>
                <div className="">{item.accountName}</div>
              </div>
              <div className="flex flex-grow-1 flex-column">
                <div className="flex  justify-content-end"><Button severity="danger" icon="pi pi-trash" onClick={(e)=>{removePaymentMethod(index)}} /></div>
              </div>
            </div>
          )
        })
        return (
          <div className="flex flex-column gap-2">
            {list}
          </div>
        )
      }} />
    </Card>
  )
}