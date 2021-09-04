import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Backcomponent from '../components/Backcomponent'

export default class Editcontainer extends Component {
    render() {
        return (
           <Container>
               <Backcomponent/>
               <h1>edit</h1>
           </Container>
        )
    }
}
