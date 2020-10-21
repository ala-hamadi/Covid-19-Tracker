import React from 'react'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

//MUI imports
import {Card, CardContent, Typography, Grid} from '@material-ui/core'

const Cards = ({data,lighMode}) =>{
    
    const dateBuilder=(d)=>{
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let nd=new Date(d)
        let day=days[nd.getDay()]  
        let date =nd.getDate()
        let month=months[nd.getMonth()]
        let year= nd.getFullYear()
        return `${day} ${date} ${month} ${year}`
    }

    if(!data.confirmed){
        return "loading"   
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                
                <Grid item component={Card}  xs={12} md={3} className={lighMode ? cx(styles.card, styles.infected) :cx(styles.card, styles.infected, styles.darkMode)}>
                    <CardContent className={styles.cardcontent}>
                        <Typography color="textSecondary" gutterBottom className={!lighMode && styles.titleDarkInfected}>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={data.confirmed.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                         <Typography color="textSecondary" className={!lighMode && styles.dateDark}>{dateBuilder(data.lastUpdate)}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                
                <Grid item component={Card}  xs={12} md={3} className={lighMode ? cx(styles.card, styles.recovered) :cx(styles.card, styles.recovered, styles.darkMode)}>
                    <CardContent className={styles.cardcontent}>
                        <Typography color="textSecondary" gutterBottom className={!lighMode && styles.titleDarkiRecovered}>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp 
                            start={0}
                            end={data.recovered.value}
                            duration={2.5}
                            separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary" className={!lighMode && styles.dateDark}>{dateBuilder(data.lastUpdate)}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}  xs={12} md={3} className={lighMode ? cx(styles.card, styles.deaths) :cx(styles.card, styles.deaths, styles.darkMode)}>
                    <CardContent className={styles.cardcontent}>
                        <Typography color="textSecondary" gutterBottom className={!lighMode && styles.titleDarkDeaths}>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp 
                            start={0}
                            end={data.deaths.value}
                            duration={2.5}
                            separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary" className={!lighMode && styles.dateDark}>{dateBuilder(data.lastUpdate)}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>   
        </div>
    )

}
export default Cards