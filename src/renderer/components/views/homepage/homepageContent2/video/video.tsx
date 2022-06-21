import "./index.scss"
export default function Video(): JSX.Element {
    return (
        <div id="video">
            <video width="700" height="500" id="videoSize">
                <source src="./mov_bbb.mp4" type="video/mp4" />
            </video>
        </div>                                                                                                                                                                                         
    )
}