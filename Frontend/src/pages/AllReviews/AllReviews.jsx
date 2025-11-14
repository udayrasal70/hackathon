import "./AllReviews.css"

function AllReviews() {
    return <>

        <div className="container mt-5">

            <h3>All Reviews</h3>

            <div class="card w-75 mb-5 mt-3">
                <div class="card-body">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h5 class="card-title custom-title">Titanic</h5>


                        <a href="" class="btn btn-primary ms-3 custom-btn-size ">9/10</a>
                    </div>
                    <p class="card-text custom-reviewed-by">Reviewed by:John Doe</p>
                    <p class="card-text custom-paragraph">An emotionally charged masterpiece.Beautiful cinematography!</p>
                    <p class="card-text custom-last-updated">Last updated by: 2023-05-15</p>


                </div>
            </div>

            <div class="card w-75 mb-5">
                <div class="card-body">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h5 class="card-title custom-title">Avatar</h5>

                        <a href="" class="btn btn-primary ms-3 custom-btn-size">8/10</a>
                    </div>
                    <p class="card-text custom-reviewed-by">Reviewed by:Jane Smith</p>
                    <p class="card-text">Groundbreaking visuals but the story is predictable.</p>
                    <p class="card-text custom-last-updated">Last updated by: 2023-04-22</p>
                </div>
            </div>
            <div class="card w-75 mb-5">
                <div class="card-body">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h5 class="card-title custom-title">Frozen</h5>

                        <a href="" class="btn btn-primary ms-3 custom-btn-size">7/10</a>
                    </div>
                    <p class="card-text custom-reviewed-by">Reviewed by:Mike Johnson</p>
                    <p class="card-text">Great animation and songs,but targeted more towards kids.</p>
                    <p class="card-text custom-last-updated">Last updated by: 2023-03-10</p>
                </div>
            </div>


        </div >
    </>
}

export default AllReviews
