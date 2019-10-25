import React, {useState} from 'react';
import api from '../../Services/api';

export default function Login( { history } ){
    const [email, setEmail] = useState('');

    async function handlerSubmit(event){
      event.preventDefault();
        //console.log(email);
        const response = await api.post('/sessions', { email });
        //console.log(response);
  
        const { _id } = response.data;
        //console.log(_id);
  
        localStorage.setItem('user', _id);
        history.push('/dashboard')
    }

    return (
        <>
        <p>
          Ofereço <strong>spots</strong>gfsdhbsdghgsdgs
        </p>
        <form onSubmit={handlerSubmit}>
          <label htmlFor="email">E-mail *</label>
          <input 
          id="email" 
          type="email" 
          placeholder="seu elhor email"
          value = {email}
          onChange={event => setEmail(event.target.value)}
          />
          <button className="btn" type="submit">Entrar</button>
        </form>
        </>
    )
}