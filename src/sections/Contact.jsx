import React, { useRef,useState } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const formRef=useRef()
    const [form, setForm] = useState({
        name:'',
        email:'',
        message:''
    })
    const [loading, setloading] = useState(false)
    const handleChange=({target:{name,value}})=>{
        setForm({...form,[name]:value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        setloading(true)
        try {
            await emailjs.send('service_3yfojsb','template_uf082m7',{
                from_name:form.name,
                to_name:'Adithya',
                from_email:form.email,
                to_email:'adigaadithya70@gmail.com',
                message:form.message
            },'-5nRf2BoYkjRclNQe')
                setloading(false)
                alert('Your message has been sent!')
        } catch (error) {
            setloading(false)
            console.log(error);
            alert('something went wrong!')
        }
    }

  return (
    <section className='c-space my-20' id='contact'>
        <div className='relative min-h-screen flex items-center justify-center flex-col'>
            <div className='contact-container'>
                <h3 className='head-text'>Let's talk</h3>
                <p className='text-lg text-white-600 mt-3'>
                    Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.
                </p>


                <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                    <label className='space-y-3'>
                        <span className='field-label'>Full Name</span>
                        <input type="text" name='name' value={form.name} onChange={handleChange} required className='field-input' placeholder='John Doe' />
                    </label>
                    <label className='space-y-3'>
                        <span className='field-label'>Email</span>
                        <input type="email" name='email' value={form.email} onChange={handleChange} required className='field-input' placeholder='johndoe@gmail.com' />
                    </label>
                    <label className='space-y-3'>
                        <span className='field-label'></span>
                        <textarea name='message' value={form.message} onChange={handleChange} required rows={5} className='field-input' placeholder="Hi, i'm interested in....." />
                    </label>
                    <button className='field-btn' type='submit' disabled={loading}>
                        {loading?'Sending...':'Send Message'}
                        <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow' />
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
