import "./SignUp.css"

function SignUp() {
    return <>

        <div className="register-container">

            <div className="main">
                <h2>Sign-Up</h2>
                <form action="">


                    <div className="name-fields">
                        <div className="field-group">
                            <label htmlFor="first">First Name:</label>
                            <input type="text" id="first" name="first" required />
                        </div>
                        <div className="field-group">
                            <label htmlFor="last">Last Name:</label>
                            <input type="text" id="last" name="last" required />
                        </div>
                    </div>

                    <label htmlFor="email">Email address:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="mobile">Mobile no:</label>
                    <input type="password" id="password" name="password" />

                    <label htmlFor="calendar">Calendar:</label>
                    <input type="datetime-local" id="Test_DatetimeLocal" name="calendar" />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />

                    <label htmlFor="password">Confirm Password:</label>
                    <input type="password" id="password" name="password" />

                    <button type="submit">
                        SignUp
                    </button>


                    <br />
                    <div className="signin-p">
                        <p>Already signed up? <a href="/signin">Sign In</a></p>
                    </div>

                </form>
            </div>
        </div >
    </>
}

export default SignUp
