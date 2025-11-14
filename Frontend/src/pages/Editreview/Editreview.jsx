
import './Editreview.css'
import NavBar from "../../components/NavBar/NavBar"

function Editreview() {

    return (
        <>
            <NavBAr></NavBAr>
            <div class="container">
                <h1>Edit Review for : Titanic</h1>

                <div class="review-section">

                    <div className='form-floating'>Rating  (1-10)</div>
                    <input type="text" /><br />
                    <br />
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="type your review" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">type your review</label>
                    </div>
                </div>
                <br />



                <div class="actions">
                    <button class="btn-primary">Update Review</button>
                    <button class="btn-secondary" >Cancel</button>
                </div>
            </div>
        </>




    )

}

export default Editreview