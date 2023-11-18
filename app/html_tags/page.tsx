import React from "react"

export default function Tags() {
    return (
        <>
            <h1>Hello world</h1>
            <h2>Hello world</h2>
            <h3>Hello world</h3>
            <h4>Hello world</h4>
            <h5>Hello world</h5>
            <h6>Hello world</h6>
            {/* Semantic Tags */}
            <nav>Hello World</nav>
            <article>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque similique commodi ratione.</article>
            <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, modi non?</section>
            <aside>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, minus?</aside>
            <footer><p>copyright &copy; 2023 All Rights are reserved</p></footer>
            <figure>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid.</figure>
            <mark>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</mark>
            {/* Non-Semantic tags */}
            <div>Lorem ipsum dolor sit amet consectetur.</div>
            <span>Lorem ipsum dolor sit amet.</span>
            <br />
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, dolorem sunt. Totam, esse. Debitis nemo delectus dolorem.</p>
            <strong>Hello World</strong><br />
            <em>Hello World</em>
            <a href="">Used for navigation</a><br />
            <img src="/next.svg" alt="" width={500} /><br />
            <form action="">
    <label htmlFor="inputField">Input Field:</label>
    <input type="text" id="inputField" />
  </form>
        </>

    )
}
