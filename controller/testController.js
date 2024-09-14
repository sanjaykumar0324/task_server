export const testController = async (req,res)=>{
    res.status(200).send({
        success :  true,
        message : "test api is working fine"
    })
}