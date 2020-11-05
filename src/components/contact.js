import React from "react"

const Contact = () => (
  <section id="contact">
    <div className="container">
      <header>
        <div>
          <h2>Sed feugiat ipsum consequat</h2>
          <p>
            Gravida dis placerat lectus ante vel nunc euismod eget ornare varius
            gravida euismod lorem ipsum dolor sit amet consequat
            <br />
            feugiat. Gravida dis placerat lectus ante vel nunc euismod eget
            ornare varius gravida euismod lorem ipsum dolor sit amet.
          </p>
        </div>
      </header>
      <div className="contact">
        <form method="post" action="#">
          <div>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="text" placeholder="Email" />
          </div>
          <div className="textarea">
            <textarea name="message" placeholder="Message"></textarea>
          </div>
          <div className="buttons">
            <input type="submit" value="Send Message" />
            <input type="reset" value="Clear Form" />
          </div>
        </form>
      </div>
    </div>
  </section>
)

export default Contact
