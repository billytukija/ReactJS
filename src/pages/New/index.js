import React, {useState, useMemo}  from 'react';
import api from '../../Services/api';

import camera from '../../assets/camera.svg';
import './styles.css';

export default function New({history}){
    const [thumbnail, setThumbnail] = useState(null);
    const [company, setComany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail]
    )

    async function handleSubmit( event ){

        event.preventDefault();

        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);

        await api.post('/spots', data, {
            headers: { user_id }
        })
        
        history.push('/dashboard');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label 
            id="thumbnail" 
            style={{ backgroundImage: `url(${preview})` }}
            className={thumbnail ? 'has-thumbnail' : ''
            }>  
            <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
            <img src={camera} alt="select img" />
</label>

            <label htmlFor="company">EMPRESA *</label>
            <input 
            id="company"
            placeholder="Sua empresa incível"
            value={company}
            onChange={event => setComany(event.target.value)}
            />

<label htmlFor="company">TECNOLOGIA * <span></span></label>
            <input 
            id="techs"
            placeholder="Quais technologias usam"
            value={techs}
            onChange={event => setTechs(event.target.value)}
            />

<label htmlFor="company">VALOR DA DIÁRIA * <span>Em branco gratuito</span></label>
            <input 
            id="price"
            placeholder="valor comprado por dia"
            value={price}
            onChange={event => setPrice(event.target.value)}
            />
            <button type="submit" className="btn">Cadastrar</button>
        </form>
    )
}