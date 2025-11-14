import "./AllMovies.css"

function AllMovies() {
    return <>

        <div className="container mt-5">

            <h3>All Movies</h3>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div class="card w-75 mb-5 mt-3 me-3">
                    <div class="card-body">
                        <h5 class="card-title custom-title">Titanic</h5>
                        <p class="card-text custom-released-date"><b class='bold'>Release date : </b>2023-05-15</p>
                        <a href="#" class="btn btn-primary me-2 custom-btn-div1">Review this Movie</a>
                    </div>
                </div>
                <div class="card w-75 mb-5 mt-3 me-3">
                    <div class="card-body">
                        <h5 class="card-title custom-title">Avatar</h5>
                        <p class="card-text custom-released-date"><b class='bold'>Release date : </b>2023-05-15</p>
                        <a href="#" class="btn btn-primary me-2 custom-btn-div1">Review this Movie</a>
                    </div>
                </div>
                <div class="card w-75 mb-5 mt-3 me-3">
                    <div class="card-body">
                        <h5 class="card-title custom-title">The Dark Knight</h5>
                        <p class="card-text custom-released-date"><b class='bold'>Release date : </b>2023-05-15</p>
                        <a href="#" class="btn btn-primary me-2 custom-btn-div1">Review this Movie</a>
                    </div>
                </div>
            </div>






        </div >
    </>
}

export default AllMovies
