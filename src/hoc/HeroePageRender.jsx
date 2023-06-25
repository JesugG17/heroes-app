import { Navbar } from "../ui"



export const HeroePageRender = ({ children }) => {
  return (
    <>
        <Navbar />
        <div className="container">
            { children }
        </div>
    </>
  )
}
