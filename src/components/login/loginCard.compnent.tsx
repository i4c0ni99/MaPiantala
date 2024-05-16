import { ChangeEvent, FormEvent, useState } from "react"
import md5 from "md5";



export interface IHeroLogin {
    onSubmission?: (data: string) => void;
}

export const HeroLogin: React.FC<IHeroLogin> = function ({
    onSubmission
}: IHeroLogin) {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        email
        password

        if (onSubmission) {
            onSubmission(email)

            onSubmission(md5(password).toString())
        }




    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, type } = e.target;
        type == 'password' ? setPassword(value) : setEmail(value)
    };
    return (
        <div className="hero  bg-base-300 size-full ">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Accedi ora!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit} >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" value={email} className="input input-bordered" onChange={handleChange} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text" >Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" value={password} onChange={handleChange} required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


