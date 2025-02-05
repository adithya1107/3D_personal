import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2'>
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>
        <div className='flex gap-3'>
            <div>
                <a className='social-icon' href="https://github.com/adithya1107" target='_blank'><img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2' /></a>
            </div>
            <div>
                <a className='social-icon' href="https://x.com/AdithyaAdiga9" target='_blank'><img src="/assets/twitter.svg" alt="twitter" className='w-1/2 h-1/2' /></a>
            </div>
            <div>
                <a href="https://www.instagram.com/_adithya_.011/" className='social-icon' target='_blank'><img src="/assets/instagram.svg" alt="instagram" className='w-1/2 h-1/2' /></a>
            </div>
        </div>

        <p className='text-white-500'>
            © 2025 Adithya. All Rights Reserved
        </p>
    </section>
  )
}

export default Footer
