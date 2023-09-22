import { useEffect } from 'react';
import { ACCESS_TOKEN, REFRESH_TOKEN } from './constants';
import { useNavigate, useLocation } from 'react-router-dom';

export default function OAuth2RedirectHandler() {
    const location = useLocation();
    const navigate = useNavigate();

    const getUrlParameter = (name) => {
        name = name.replace(/[\\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
    useEffect(()  =>{
    const token = getUrlParameter('token');
    const error = getUrlParameter('error');
        console.log(token)

    if (token) {
        localStorage.setItem(ACCESS_TOKEN, token);
        localStorage.setItem(REFRESH_TOKEN, null); 
        console.log('토큰 로컬스토리지에들어감')
        navigate('/');     
    }else{
        navigate('/main');
    }
        
    },
    []);


}

