const ItemListContainer = (props) => {
    return (
        <>
           <div className="alert alert-primary" role="alert">
              <p>{props.greeting}</p>
           </div>
        </>
    );
}

export default ItemListContainer;