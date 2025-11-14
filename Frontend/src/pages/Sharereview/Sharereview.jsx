
import './ShareReview.css'
import { Link, useNavigate } from "react-router-dom"
import NavBar from "../../components/NavBar/NavBar"

function ShareReview() {

    const navigate = useNavigate()

    const onShareReview = async () => {
        navigate("/allReviews")
    }
    return (




        <>
            <NavBar></NavBar>

            <div class="container">
                <h1>Share Review</h1>

                <div class="review-section">
                    <p>Review to Share: <i>Titanic</i> <span class="rating-badge">9/10</span></p>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="type your review" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">type your review</label>
                    </div>
                </div><br />
                <br />

                <div class="share-options">
                    <label for="user-select">Select Users to Share With</label><br />
                    <select id="user-select" multiple size="4">
                        <option selected>Jane Smith (jane@example.com)</option>
                        <option selected>Mike Johnson (mike@example.com)</option>
                        <option selected>Sarah Williams (sarah@example.com)</option>
                        <option>David Brown (david@example.com)</option>
                    </select>
                    <br />
                    <small>Hold Ctrl/Cmd to select multiple users</small>
                </div>

                <div class="actions">
                    <button class="btn-primary" onClick={onShareReview}>Share Review</button>
                    <button class="btn-secondary" >Cancel</button>
                </div>
            </div>
        </>




    )
}
export default ShareReview