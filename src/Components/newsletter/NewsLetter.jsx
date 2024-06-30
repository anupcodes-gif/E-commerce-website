import '../newsletter/newsletter.css'
function NewsLetter() {
  return (
    <div className='news-letter'>
      <h1>Get exclusive offer on your email</h1>
      <p>subscribe to our newsletter and stay updated</p>
      <div>
        <input type='text' placeholder='Type your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
