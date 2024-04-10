import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllTransactions, initiateCheckout } from "../services/api/user/apiMethods";
import { Spinner } from "flowbite-react";
import { toast } from "sonner";
import { differenceInDays, parseISO } from "date-fns"; 

interface Transaction {
  _id: string;
  userId: string;
  amount: string;
  transactionId: string;
  startDate: string;
  expiryDate: string;
}


function Premium() {
  const[latestTransactions,setLatestTransaction]=useState<Transaction|{}>({})
  const [daysRemaining, setDaysRemaining] = useState<number | null>(null);
  const selectUser = (state: any) => state.auth.user || "";
    const user = useSelector(selectUser) || "";
    const userId = user._id || "";
    const [loading, setLoading] = useState(false);
  const makePayment=async()=>{
    const stripe =await loadStripe("pk_test_51P3Dg0SFbrlOtlupbjDBjbsHVbn0vYOtlfS4pKJI97UozSzmYMHsmYHRKcB97ByY9OpJPOUW1UY0eVyPFRIz5FTE00YNpoUgSo")
       
    try {
        setLoading(true);



        initiateCheckout({userId}).then((response: any) => {
        
          if(response.data.success===true){
            const stripeId = response.data.id;
            localStorage.setItem('sessionId', stripeId);
          
              stripe?.redirectToCheckout({
              sessionId:stripeId
            })
            

          }else{
            toast.error(response.data.message)
          }
          setLoading(false);

        
        })

        .catch((error) => {
          console.log(error?.message);
        });
      } catch (error) {
        console.log(error);
      }

}


useEffect(() => {
         
  getAllTransactions({userId:userId}) .then((response: any) => {

      
      if(response.data.success===true){

          const latestTransactionData= response.data.latestPremiumUser

          if(latestTransactionData){
            setLatestTransaction(latestTransactionData)
            const expiryDate = parseISO(latestTransactionData.expiryDate);
            const today = new Date();
            const remainingDays = differenceInDays(expiryDate, today);
            setDaysRemaining(remainingDays);

          }

        
       
      }else{
          toast.error(response.data.message);
      }

    })
    .catch((error:any) => {
      toast.error(error.message);
      localStorage.removeItem('sessionId');
      console.log(error);
    });


},[]); 
  return (
<>


 
 {user.isVerified===false&&(
      <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
      <div className="mx-auto max-w-xs px-8">
        <p className="text-base font-semibold text-gray-600">Pay once, Get Verified for a year</p>
        <p className="mt-6 flex items-baseline justify-center gap-x-2 ">
          <span className="text-5xl font-bold tracking-tight text-gray-900">₹ 499</span>
          <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">/Year</span>
        </p>
        <a onClick={makePayment} className=" mt-10 cursor-pointer block w-full rounded-md bg-purple-600 px-3 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        {loading&&(
         <Spinner className="me-2" color="success" aria-label="Medium sized spinner example" size="md" />
        )} Get access</a>
        <p className="mt-6 text-xs leading-5 text-gray-600">Invoices and receipts available for easy company reimbursement</p>
      </div>
    </div>
   
  
 )}

 {user.isVerified===true&&(
     <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
     <div className="mx-auto max-w-xs px-8">
       <p className="text-base font-semibold text-gray-600"> Premium membership is <span className="text-purple-600">Active</span> </p>
       <p className="mt-6 items-baseline justify-center gap-x-2 p-7">
            <span className="text-5xl font-bold tracking-tight text-gray-900">{daysRemaining}</span>
            <p className="text-sm font-semibold leading-6 tracking-wide text-gray-600">Days Remaining</p>
          </p>
    
       <p className="mt-6 text-xs leading-5 text-gray-600">Invoices and receipts available for easy company reimbursement</p>
     </div>
   </div>
  
 )}

       

    


 
</>




  )
}

export default Premium