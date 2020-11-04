import React from "react"

const Contact = () => (
  <section id="contact">
    <header>
      <div>
        <h2>Sed feugiat ipsum consequat</h2>
        <p>
          Gravida dis placerat lectus ante vel nunc euismod eget ornare varius
          gravida euismod lorem ipsum dolor sit amet consequat
          <br />
          feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare
          varius gravida euismod lorem ipsum dolor sit amet.
        </p>
      </div>
    </header>
    <div>
      <div>
        <form method="post" action="#">
          <div>
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="text" placeholder="Email" />
            </div>
            <div>
              <textarea name="message" placeholder="Message"></textarea>
            </div>
            <div>
              <ul>
                <li>
                  <input type="submit" />
                </li>
                <li>
                  <input type="reset" />
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
)

export default Contact
