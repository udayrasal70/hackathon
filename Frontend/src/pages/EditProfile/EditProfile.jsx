import "./EditProfile.css"
import NavBar from "../../components/NavBar/NavBar"

function EditProfile() {
    return <>

        <NavBar></NavBar>

        <div className="register-container">

            <div className="main">

                <form action="">

                    <label>
                        <h4><b>Edit Profile</b></h4>
                    </label>
                    <br />
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

                    <br />

                    <label>
                        
                        <button type="submit" className="small-submit-btn">Submit Changes</button>
                    </label>


                    <br />


                </form>
            </div>
        </div >
    </>
}

export default EditProfile
