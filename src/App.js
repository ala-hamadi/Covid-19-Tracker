import React,{Component} from 'react'
import styles from './App.module.css'
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import {fetchData} from './api'
import coronaImage from './images/image.png'
import {Sun,Moon} from 'react-feather'
class App extends Component {
        
        state = {
             data:{},
             country:'',
             toogle:true
        }
    
    
    async componentDidMount(){
        const fetchedData = await fetchData()
        this.setState({
            data:fetchedData
        })
    }

    handleCountryChange=async (country)=>{
        const fetchCountry = await fetchData(country)
        this.setState({
            data:fetchCountry,
            country:country
        })
    }

    handleToogle=()=>{
        this.setState({
            toogle:!this.state.toogle
        })
    }
    render() {
        const {data,country,toogle}=this.state 
        return (
            <div className={toogle ? styles.lighMode : styles.darkMode}>
                {toogle ? <Sun color={'#ffc107'} size={60} className={styles.fixed} onClick={this.handleToogle}/> : <Moon color={'#A9A9A9'} size={60} className={styles.fixed} onClick={this.handleToogle}/>}
                <div className={styles.container}>
                    <img className={styles.image} alt="COVID-19" src={coronaImage}/>
                    <Cards data={data} lighMode={toogle}/>
                    <CountryPicker handleCountryChange={this.handleCountryChange} lighMode={toogle}/>
                    <Chart data={data} country={country}/>  
                </div>
            </div>
        )
    }
}
 export default App
 
