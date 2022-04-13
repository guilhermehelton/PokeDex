import React, { useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import './SearchBar.css'

export default function SearchBar({ value, onChange }) {
    const [displayValue, setDisplayValue] = useState(value)
    const debouncedChange = useDebounce(onChange, 500)

    const handleChande = (event) => {
        setDisplayValue(event.target.value)
        debouncedChange(event.target.value)
    }

    return (
        <nav className="search-bar">
            <h1>PokeDex by Guilherme Helton</h1>
            <input type="text"
                placeholder='Buscar'
                value={displayValue}
                onChange={handleChande}/>
        </nav>
    )
}