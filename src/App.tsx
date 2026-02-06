import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Intro } from './components/intro';
import { Projects } from './components/projects';
import { Tools } from './components/tools';
import { About } from './components/about';
import { Info } from './components/project_info';
import { pageList, replaceSpaces } from './utils/utils';
import { type Dispatch, useEffect, useLayoutEffect, useState, type RefObject } from 'react';
import { project_list } from './components/projects/pList';
const componentList : Record<string, React.ComponentType<ComponentProps>> = {
  "intro"   : Intro,
  "projects": Projects,
  "tools"   : Tools,
  "about"   : About,
}

export function useChangeDisplay(changers: any[], display : Element | null) {
  useEffect(()=>{
    if (! display) return
      display.classList.add("transition")
      display.classList.remove("in")
      setTimeout(()=>display.classList.add("transition","in"), 50)
    },changers)
}


export type PageProps = { setTheme: Dispatch<string> }
export type ComponentProps = { variant? : string, ref? : RefObject<Element | null> }

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

          pageList.map(({route, name}) => {
            const Component = componentList[name]
            const Page = function({ setTheme } : PageProps) {
            const root = document.getElementById("root")

            useChangeDisplay([],root)
              return (
                <>
                <Header page={name} setTheme={setTheme}/>
                <Component variant={name}/>
                <Footer/>
                </>
              )
            }
            return <Route path={route} element={<Page key={name} setTheme={setTheme}/>}/>
        })
      }
      {project_list.map(project => {

          let title = replaceSpaces(project.title)

          return (
              <Route path={`projects/${title}`} element={
                <>
                <Header page={"projects"} setTheme={setTheme}/>
                <Info key={title} project={project}/>
                <Footer/>
                </>
              }/>
          )
      })}
    </Routes>
  )
}

export default App
