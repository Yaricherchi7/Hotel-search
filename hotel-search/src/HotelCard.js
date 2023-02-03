

const HotelCard = ()=> {


    return(
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Hotel" /></figure>
        <div className="card-body">
            <h2 className="card-title">NomeHotel</h2>
            <p>descrizione hotel</p>
            <div className=" flex justify-between">
                <span>Stanze: 1</span>
                <span>letti: 2</span>
                <span>Bagni: 2</span>
            </div>
            <div className=" py-5 card-actions  flex justify-between">
                <h3 className="align-">Prezzo: 100€</h3>
            <button className="btn btn-primary">visita ora</button>
            </div>
        </div>
        </div>
    )
}



export default HotelCard