import ButtonsCounters from "./ButtonsCounters";


const Card = () => {
    return (
        <div className="card">
            <img src="#" className="card-img-top" alt="imagen producto" />
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <ButtonsCounters />
            </div>
        </div>
    );
}

export default Card;
