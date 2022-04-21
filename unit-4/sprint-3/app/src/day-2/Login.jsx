import React from 'react'

function Login() {
    return(
        <AuthContext.Consumer>
            {(context)=>{
                const {isAuth} = context;

                return(
                    <div>
                        {isAuth?"LOGGED IN":"LOGGED OUT"}
                    </div>
                )
            }}
        </AuthContext.Consumer>
    )
}

export default Login