import './404.css'

export function NotFound() {
    return <div className="content">
        <svg viewBox="0 0 960 300">
            <symbol id="s-text">
                <text text-anchor="middle" x="50%" y="50%">404</text>
            </symbol>

            <g className="g-ants">
                <use xlinkHref="#s-text" className="text"></use>
                <use xlinkHref="#s-text" className="text"></use>
                <use xlinkHref="#s-text" className="text"></use>
                <use xlinkHref="#s-text" className="text"></use>
                <use xlinkHref="#s-text" className="text"></use>
            </g>
        </svg>

        <h1>Page Not Found</h1>
        <a href="#">Back to Home</a>
    </div>
};