import React,{useState,useEffect} from 'react'
import styles from './Country.module.css'
import {fetchCountries} from '../../api'

//MUI imports
import {FormControl} from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


const CountryPicker = ({handleCountryChange,lighMode}) =>{

    const [fetchedCountries,setFetchedCountries]=useState([])
    useEffect(()=>{
        const fetchAPI=async()=>{
            setFetchedCountries(await fetchCountries())  
        }
        fetchAPI()
        
    },[setFetchedCountries])
    return(
        
        <FormControl className={styles.formControl}>
            <InputLabel id="demo-simple-select-outlined-label" className={!lighMode && styles.label}>Choose Country</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Choose Country"
                    inputProps={{ 'aria-label': 'Without label' }}
                    onChange={(e)=>handleCountryChange(e.target.value)}   
                    className={!lighMode && styles.menuItem}  
                >
                        {fetchedCountries.map((country)=><MenuItem value={country} key={country} >{country}</MenuItem>)}

                    </Select>
        </FormControl>
    )

}
export default CountryPicker