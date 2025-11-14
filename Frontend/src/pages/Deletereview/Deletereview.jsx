import './Deletereview.css'

function Deletereview(){
    return(
     <div className='container'>
        <div className='deleteheader'><h1 className='h1'>Delete review</h1></div><br />
        <div className='review-header'><p><b>Review for Titanic</b><span class="rating-badge">9/10</span><br />
        <br />
        An Emotionally charger master piece great work by director
        </p></div>
        <div className='deletewarning'><p><h4 className='redtext'>   Are you sure you want to delete this review?</h4><br />
        <br />
        <h6 className='btline'>       This action cannot be done once deleted.Any share of this review will also be undone.</h6>
        </p></div>

          <div class="actions">
             <button class="btn-secondary " >Cancel</button>
            <button class="btn-primary ">Confirm Delete</button>
           
        </div>

     </div>
    )
}

export default Deletereview