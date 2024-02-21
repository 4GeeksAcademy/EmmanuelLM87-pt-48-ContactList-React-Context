import React, {useContext} from 'react'; 
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const List = () => {
    const { store } = useContext(Context);
    

    return(<>
    <Link to="/create">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Add a new contact
				</span>
	</Link>
    {store.contactList.map(({id, name}) => <li key={id}>
        <span>{name}</span>
        <Link to= {`/contact/${id}`}>
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Editar
				</span>
	</Link>
    </li>)}
    </>)
}

export default List; 