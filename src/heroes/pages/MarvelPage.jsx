import { HeroesList } from "../components"

export const MarvelPage = () => {
  return (
    <div className="container">
      <h1>Marvel</h1>
      <hr />

      <HeroesList publisher={'Marvel Comics'}/>
    </div>
  )
}
