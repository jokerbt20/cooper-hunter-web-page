import React from "react"
import{useState} from 'react'
const Form=()=>{
    const[data,setData]=useState({name:"",email:"",phone:"",message:""});
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value; 
        setData({...data,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
    }

return(
    <div className="contact" id="contact">
        <form method='post' onSubmit={handleSubmit} className="form">
        <h1>Контакт <span>овде</span></h1>
        <br></br>
        <div className="contact-wrap" id="contact-wrap">
        <input type="text" name="name" id="" onChange={
        handleChange} value={data.name} placeholder="Име:"/>
    <input type="email" name="email" id="" onChange={
        handleChange} value={data.email} placeholder="Е-маил:"/>
    <input type="phone" name="phone" id="" onChange={
        handleChange} value={data.phone} placeholder="Телефонски број:"/>
    <textarea type="message" name="message" id="" onChange={
        handleChange} value={data.message} placeholder="Остави порака..." cols={30} rows={10}/>
    <button type='submit'>Прати</button>
    <p>{data.name},{data.email},{data.phone},{data.message}</p>
</div>
    </form>
    </div>
    
    
)
}
export default Form;