import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import { useContext,useState } from "react";
import Validacion from "./Validacion";
import { CartContext } from "./CartContext";


const CartForm = ({setOrderInfo, purchaseOrder}) => {
    const {cartItems, total} = useContext(CartContext)

    const [values, setValues]= useState({
        name:'',
        phone:'',
        email:'',
        confirmEmail:''
     })

     

     const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
       };

       const handleSubmit = (e) => {
            e.preventDefault()

            const order = {
                buyer: {
                    name: values.name,
                    phone: values.phone,
                    email: values.email
                },
                items: cartItems.map(product => ({id: product.id, title: product.car, model:product.model, price: product.price, quantity: product.quantity})),
                date: serverTimestamp(),
                total: total()
            }   
            const db = getFirestore()
            const orderCollection = collection(db, 'orders')
            if(Validacion(values.name,values.phone,values.email,values.confirmEmail)){
                addDoc(orderCollection,order)
                .then((res) => {
                const orderId = res.id;
                setOrderInfo(orderId)
                purchaseOrder(orderId)
            } )
            }
        }
    

     return ( 
        <div className='cart-form'>
                        <h2 className='cart-form__title'>Identificación</h2>
                        <hr className='cart-form__separator' />
                        <p className='cart-form__text'>
                        Información esencial para la finalización de su compra
                        </p>
                        <form onSubmit={handleSubmit} className='cart-form-card'>
                            <label htmlFor='name'>Name: </label>
                                <input
                                    id='name'
                                    name='name'
                                    value={values.name}
                                    onChange={handleChange}
                                />
                            <label htmlFor='phone'>Phone: </label>
                                <input
                                    id='phone'
                                    name='phone'
                                    value={values.phone}
                                    onChange={handleChange}
                                />
                            <label htmlFor='email'>Email: </label>
                                <input
                                    id='email'
                                    type='email'
                                    name='email'
                                    value={values.email}
                                    onChange={handleChange}
                                />
                            <label htmlFor='email'>Confirm email: </label>
                                <input
                                    id='confirmEmail'
                                    type='confirmEmail'
                                    name='confirmEmail'
                                    value={values.confirmEmail}
                                    onChange={handleChange}
                                />
                            <button
                                className='cart-form-card__submit'
                                type='submit'
                                onSubmit={handleSubmit}
                                >
                                Enviar orden
                            </button>
                        </form>
                    </div>
    );
}
 
export default CartForm;