import "./ChangePassword.css"

function ChangePassword() {
    return <>

        <div className="register-container">

            <div className="main">

                <form action="">

                    <label>
                        <h4><b>Change Password</b></h4>
                    </label>
                    <br />

                    <label htmlFor="password">Current Password:</label>
                    <input type="password" id="password" name="password" />

                    <label htmlFor="password">New Password:</label>
                    <input type="password" id="password" name="password" />

                    <label htmlFor="password">Confirm New Password:</label>
                    <input type="password" id="password" name="password" />
                    <br />

                    <label>

                        <button type="submit" className="small-submit-btn">Change Password</button>
                    </label>


                    <br />


                </form>
            </div>
        </div >
    </>
}

export default ChangePassword
