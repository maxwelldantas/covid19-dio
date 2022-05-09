import React, { memo, useCallback, useEffect, useState } from 'react';
import Api from '../../resources/api'
import { ContainerStyled } from './style';
import Board from '../components/Board'

function Main() {

    const [data, setData] = useState({});
    const [country, setCountry] = useState('Brazil')

    const getCovidData = useCallback((country) => {
        Api.getCountry(country)
            .then(data => setData(data))
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    return (
        <ContainerStyled>
            <div className='mb-2'>

            </div>
            <Board data={data} />
        </ContainerStyled>
    )
}

export default memo(Main);
