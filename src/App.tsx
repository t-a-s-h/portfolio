import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Intro } from './components/intro';
import { Projects } from './components/projects';
import { Tools } from './components/tools';
import { About } from './components/about';
import { pageList } from './utils/pages';
import { type Dispatch, useEffect, useLayoutEffect, useState, type ComponentType } from 'react';
import { Info, type InfoProps } from './components/project_info';
import { project_list } from './components/projects/pList';
import { useChangeDisplay } from './utils/hooks';

const ProjectList : Record<string,ComponentType<any>> = 
  {...project_list.reduce((acc,project)=> {
    const Component : ComponentType<InfoProps> = Info
    return {...acc, [project.title] : Component }
  },{})}

const componentRecord : Record<string,ComponentType<any>> = {
  "intro"   : Intro,
  "projects": Projects,
  "tools"   : Tools,
  "about"   : About,
  ...ProjectList
}

export type PageProps = { setTheme: Dispatch<string> }

function App() {

  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "")

  useEffect(()=> {
      onstorage = (e) => {
        const t = e.newValue
        if (e.key !== "theme" || !t) return
        setTheme(t)
      }
  },[])

  useLayoutEffect(()=> {
    localStorage.setItem("theme", theme)
    document.documentElement.setAttribute("data-theme", theme)
  },[theme])

  return (
      <Routes>
        {
          pageList.map(({route, name, project_number}) => {
            const Component = componentRecord[name]
            const Page = function({ setTheme } : PageProps) {
            const root = document.getElementById("root")
            useChangeDisplay([],root)

            // because otherwise browser router will try to scroll to the same height
            // also scrolls to correct hash
            useEffect(()=> {
                let location = window.location.href
                let re = new RegExp("(?<=#)\\w*$")
                let result = re.exec(location)?.[0] as string
                let top = document.getElementById(result) || document.documentElement
                const { offsetLeft : x, offsetTop : y } = top
                scrollTo(x,y)
            },[])
            // ****************

              return (
                project_number ? (
                <>
                <Header page={"projects"} setTheme={setTheme}/>
                <Component project={project_list[project_number - 1]} variant={name}/>
                <Footer/>
                </>) : (
                <>
                <Header page={name} setTheme={setTheme}/>
                <Component variant={name}/>
                <Footer/>
                </>)
              )
            }
            return <Route path={route} element={<Page key={name} setTheme={setTheme}/>}/>
        })
      }
    </Routes>
  )
}

export default App
