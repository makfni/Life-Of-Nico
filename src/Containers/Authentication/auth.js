import React from 'react'
import { Register } from './index'
import { Login } from './login'
import './auth.css'


class Auth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
        }
    }

    componentDidMount() {
        //Add .right by default
        this.RightTab.classList.add("right");
    }

    changeState = () => {
        const { isLoggedIn } = this.state;
        if (isLoggedIn) {
            this.RightTab.classList.remove("right");
            this.RightTab.classList.add("left");
        } else {
            this.RightTab.classList.remove("left");
            this.RightTab.classList.add("right");
        }
        this.setState(prevState => ({ isLoggedIn: !prevState.isLoggedIn }));
    }

    render() {

        const { isLoggedIn } = this.state;
        const current = isLoggedIn ? "Register" : "Login";
        const currentActive = isLoggedIn ? "login" : "register";
        return (
            <div>
                <div className="auth-app" >
                    <div className="login">
                        <div className="container">
                            {isLoggedIn && <Login containerRef={(ref) => this.current = ref} />}
                            {!isLoggedIn && <Register containerRef={(ref) => this.current = ref} />}
                        </div>
                        <RightTab
                            current={current}
                            currentActive={currentActive}
                            containerRef={ref => this.RightTab = ref}
                            onClick={this.changeState.bind(this)} />

                    </div>
                </div>
            </div>
        )
    }
}

const RightTab = props => {
    return (
        <div className="right-tab" ref={props.containerRef} onClick={props.onClick}>
            <div className="inner-container">
                <div className="text">
                    {props.current}
                </div>
            </div>
        </div>
    )


}

export default Auth