'use client'
import { useRouter } from "next/navigation"

const Aboutus =() =>{
    const router=useRouter()
    const handleBtn = () => {
    router.push("/")
    
    }
    return(
        <div>
           About  Us
            <div>
                <button onClick={()=> handleBtn()}>Back to Home</button>
            </div>
        </div>
    )

}
export default Aboutus