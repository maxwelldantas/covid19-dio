import React, { memo, useCallback, useEffect, useState } from 'react';
import Api from '../../resources/api'

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
        <div>
            Teste
        </div>
    )
}

export default memo(Main);
