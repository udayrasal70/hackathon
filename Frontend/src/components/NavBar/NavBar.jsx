import "./NavBar.css"

function NavBar() {

    // const navigate = useNavigate()

    // const onAllMovies = async () => {
    //     navigate("/allMovies")
    // }

    // const onMyReviews = async () => {
    //     navigate("/myReview")
    // }

    // const onShareReview = async () => {
    //     navigate("/shareReview")
    // }

    // const onAllReviews = async () => {
    //     navigate("/allReview")
    // }

    // const onEditProfile = async () => {
    //     navigate("/editProfile")
    // }

    // const onChangePassword = async () => {
    //     navigate("/changePassword")
    // }

    // const onLogout = async () => {
    //     navigate("/login")
    // }

    return <>
        <div>
            {/* Changed from navbar-light/bg-light to navbar-dark/bg-dark as seen in the image */}
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    {/* Updated the brand name */}
                    <a class="navbar-brand" href="#">Movie Reviews</a>

                    {/* Toggler button for mobile view (kept for responsiveness) */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarScroll">
                        {/* Left-aligned navigation links */}
                        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                            <li class="nav-item">
                                <a class="nav-link" href="/allMovies">All Movies</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/myReview">My Reviews</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/shareReview">Shared With Me</a>
                            </li>
                            <li class="nav-item">
                                {/* Made "All Reviews" active as it appears to be the current page in the image */}
                                <a class="nav-link active" aria-current="page" href="/allReview">All Reviews</a>
                            </li>
                        </ul>

                        {/* Right-aligned utility links (Edit Profile, Logout, etc.) */}
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/editProfile">Edit Profile</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/changePassword">Change Password</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link logout-link" href="/login">Logout</a>
                            </li>
                        </ul>

                        {/* Removed the search form shown in the original boilerplate code */}

                    </div>
                </div>
            </nav>
        </div>
    </>
}

export default NavBar
