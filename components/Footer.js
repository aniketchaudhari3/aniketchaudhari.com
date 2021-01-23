export default function Footer() {
  return (
    <div className="content-section footer-section bg-black">
      <h1 className="fw-bold">Want to work with me or just <br /> say Hi? — Ping me!</h1>
      <a href="mailto:aniket@aniketchaudhari.com?subject=Let's work together"><h3>aniket@aniketchaudhari.com</h3></a>
      <div className="footer-links row">
        <div className="col-md-4">
          <h5>Social Links —</h5>
          <p><a target="_blank" href="https://github.com/aniketchaudhari3">Github</a></p>
          <p><a target="_blank" href="https://linkedin.com/in/aniketchaudhari">LinkedIn</a></p>
          <p><a target="_blank" href="https://instagr.am/aniket.chaudhari3">Instagram</a></p>
          <p><a target="_blank" href="https://twitter.com/aniket_c333">Twitter</a></p>
          <p><a href="#">Youtube</a></p>
        </div>
        <div className="col-md-4">
          <h5>Based in —</h5>
          <p>Maharashtra, India 🇮🇳 </p>
        </div>
        <div id="contact" className="col-md-4">
          <h5>Contact —</h5>
          <a href="mailto:aniket@aniketchaudhari.com?subject=Let's work together">aniket@aniketchaudhari.com</a>
        </div>
        <p className="mt-4">&copy; Aniket Chaudhari {new Date().getFullYear()}. All rights reserved</p>
      </div>
    </div>
  )
}