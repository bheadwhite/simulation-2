import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

import {addHouse} from './../../ducks/user'

class Wizard extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    async handleSubmit(e){
        e.preventDefault()
        await this.props.addHouse(this.state).then().catch(e => console.log(e))
        this.props.history.push('/')

    }
    render(){
        return (
            <Switch>
                <Route exact path="/wizard" render={(props) => <StepOne {...props}  /> } />
                <Route path="/wizard/step2" render={(props) => <StepTwo {...props}  /> } />
                <Route path="/wizard/step3" render={(props) => <StepThree {...props}  /> } />
            </Switch>
        )
    }
}
const mapDispatchToProps = () => {
    return {
        addHouse
    }
}
export default connect(null, mapDispatchToProps())(Wizard)