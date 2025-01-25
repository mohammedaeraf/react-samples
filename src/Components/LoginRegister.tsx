function LoginRegister() {
    const isLoogedIn: boolean = false;
    let content = null;
    if(isLoogedIn) {
        content = <button className="btn btn-primary">Login</button>
    } else {
        content = <button className="btn btn-primary">Register</button>
    }
    return (
        <div>
            {content}
        </div>
    );
    
}
export default LoginRegister;