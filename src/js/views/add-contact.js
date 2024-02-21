import React, {useState, useContext} from 'react'; 
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const AddContact = () => {

    const [inputValue, setInputValue] = useState('');
    const { store, actions } = useContext(Context);

    const addContact = () => {
        actions.addContact({id: Date.now(), name: inputValue});
        setInputValue('');
    }

    return(<>
    <Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					See list
				</span>
	</Link>
    <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
    <button onClick={addContact}>add contact</button>
    </>)
}

export default AddContact; 