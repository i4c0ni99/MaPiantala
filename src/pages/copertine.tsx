import { Link } from "react-router-dom"
export function Copertine() {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://media.istockphoto.com/id/543212762/it/foto/trattore-coltivare-campo-di-primavera.jpg?s=612x612&w=0&k=20&c=0HmiBneKFWf63O5J6en1EZ1Jif1MxgTvd_dkUN4ut5o=)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <Link rel="stylesheet" to={'/registration'}>
                    <button className="btn btn-accent">SignUp</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}