import { useGame } from "../context/GameProvider"

export const Fetch = () => {
    const { data } = useGame()

    return (
        <div>
            {data.map(x => (
              <div key={x.id} >
                <img src={x.imagen} alt={x.nombre} width={'100'} height={'100'}/>
                <h2> {x.nombre} </h2>
                <h3> {x.stock} </h3>  
              </div>
            ))}
          </div>
    )
}   