import React from 'react'
import { Icon } from 'semantic-ui-react'

export default function Header (){
    const styles = {

    }
    return (
        <header>
            <div className='container'>
        <div className="title">
            <Icon size="big" name='home' style={styles.home}/>
            <h1>
            Houser
            </h1>
            </div></div>
        </header>
    )
}