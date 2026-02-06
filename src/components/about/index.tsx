import "./style.css"

export function About() {
    return (
        <div id="about" className="elements">
            <div className="bio element">
                <div className="blurb">
                    <header>
                        <h1>About ● <span className="name">Bio</span></h1>
                        <h4 className="tag">A short section about me</h4>
                    </header>
                    <section>
                    <p>Hello again,</p>

                    <p>I enjoy building attractive applications and sites that are pleasant to use. I built this site with React and TypeScript to show some of my work.</p>

                    <h4 className="sub">Building + Design</h4>

                    <p>I learned HTML and CSS early on, and I still prefer using CSS as the primary method for layout, styling, and lightweight animations.</p>

                    <p>I also completed a six-month intensive development program, where I strengthened my foundation in modern web development and where I added some more tools, such as React and MySQL. Recently I have been enjoying TypeScript as well.</p>

                    <h4 className="sub">Background</h4>

                    <p>I am a bachelor of mathematics graduate with a computing background. I completed a Math Studies major, which allowed me to focus on pure math, computer science, and psychology — an area I still think about and draw from often. Through my studies, I've learned to abstract while keeping only necessary components.</p>

                    <h4 className="sub">More</h4>

                    <p>I’m quite imaginative and tend to generate a lot of project ideas, some more fanciful than others. I’m gradually working through the more realistic ones, and I plan to keep adding to this site as they develop.</p>

                    <p>If anything catches your interest, feel free to explore the projects — or check back as the site continues to evolve.</p>
                    <footer>
                        <address>— Natasha</address>
                    </footer>
                    </section>
                </div>
                <div className="image"></div>
            </div>
        </div>
    )
}