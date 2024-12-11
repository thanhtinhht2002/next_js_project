
const Aboutus =() =>{
    const router=useRouter()
    const handleBtn = () => {
    router.push("/")
    
    }
    return(
        <div>
            Link contact
            <div>
                <button onClick={()=> handleBtn()}>Back to Home</button>
            </div>
        </div>
    )

}
export default Aboutus