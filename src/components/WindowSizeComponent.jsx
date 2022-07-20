import useWindowSize from "../hooks/useWindowSize";

export default function WindowSizeComponent(){
    const {width, height} = useWindowSize()

    return(
        <div>
            <h3>useWindowSize Hook</h3>
            <div>{width} x {height}</div>
        </div>
    )
}