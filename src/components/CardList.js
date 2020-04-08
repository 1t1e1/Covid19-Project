import React from 'react';
import styled from 'styled-components';
import CountryCard from './CountryCard';

const CardListLayout = styled.div`
    width: 88vw;
    margin: 1.2rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(13rem, 1fr));
    grid-gap: 1.2rem;
`

const CardList = ({ filteredCountries, loading }) => {

    return (
        <CardListLayout>
            {loading ? "LOADING" : filteredCountries?.map((country) =>
                <CountryCard key={country.id} loading={loading} dataOfCountry={country} />)
            }
        </CardListLayout>
    )
}

export default CardList;