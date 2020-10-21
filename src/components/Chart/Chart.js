import React, {useState,useEffect} from 'react'
import {fetchDailyData} from '../../api'
import {Line , Bar } from 'react-chartjs-2'
import styles from './Chart.module.css'
const Chart = ({data,country}) =>{
    const [dailyData,SetDailyData]=useState([])

    useEffect(()=>{
        const fetchAPI =async () =>{
            SetDailyData(await fetchDailyData())
        }
        fetchAPI()
    },[dailyData])


    const lineChart =(
        dailyData.length ?
        (<Line 
            data={{
                labels:dailyData.map(({date})=>date),
                datasets:[{
                    data:dailyData.map(({confirmed})=>confirmed),
                    label:"Infected",
                    borderColor:'blue',
                    backgroundColor:'rgb(0,0,255)',
                    fill:false
                },{
                    data:dailyData.map(({deaths})=>deaths),
                    label:"deaths",
                    borderColor:'red',
                    backgroundColor:'rgb(255,0,0)',
                    fill:false
                }]
            }}
        />):
        null
    )
    const barChart=(
        data.confirmed ?
        (
            <Bar
                data={{
                    labels:['Infected','Recovered','Deaths'],
                    datasets:[{
                        label:'People',
                        backgroundColor:[
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)'
                        ],
                        data:[data.confirmed.value,data.recovered.value,data.deaths.value]
                    }]
                }}
                options={{
                    legend:{display:false},
                    title:{display:true, text:`Current state in ${country}`},
                }}
            />
        ):null
    )
    
    return(
        <div className={styles.container}>
            {country && country!=="Global" ? barChart : lineChart}
        </div>
    )

}
export default Chart