import React, { Component } from 'react'
import Axios from 'axios'
import SpecialtyMoreInfo from './SpecialtyMoreInfo'
import SpecialtySearch from './SpecialtySearch'
import
{
  Route
} from 'react-router-dom'
const API_TOKEN = process.env.REACT_APP_API

export default class SpecialtyContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      specialties: [],
      searchQuery: '',
      containers: [],
      loading: false
    }
  }

  componentDidMount() {
    this.fetchSpecialties()
  }


  fetchSpecialties = async () => {
    try {
        const specialties = await Axios.get(
          `https://api.betterdoctor.com/2016-03-01/specialties?fields=${this.state.searchQuery}&user_key=${API_TOKEN}`
        )
        const specialtyData=specialties.data.data
        
        this.setState({
          specialties: specialtyData
        })
    } catch (error) {
      console.error(error)
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit = async event => {
    event.preventDefault()
    if (!this.state.searchQuery) {
      alert('Nothing is being searched!')
    } else if (this.state.containers.includes(this.state.searchQuery)) {
      alert('Already Exists')
    } else {
      this.setState({
        loading:true
      })
      await this.fetchSpecialties()
      this.setState(
        prevState => ({
          containers: [prevState.searchQuery, ...prevState.containers],
          searchQuery: '',
          loading:false
        }),
      )
    }
  }

render() {
  return (
      <>
          <div className="container">
          <Route exact path={"/SpecialtyContainer"} render={(props) =>
        <>
          <h3>Specialty Definitions</h3>
          <h4>~Search for a provider specialty to retrieve a definition or to gain ideas for the provider search~</h4>
            
          <SpecialtySearch
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            value={this.state.searchQuery}
            name="searchQuery"
            />
            {this.state.loading  &&  <img src = 'https://media.giphy.com/media/VX7yEoXAFf8as/giphy.gif' alt = "loading spinner"/>}

          <SpecialtyMoreInfo className="specialtyInfo" specialties={this.state.specialties} />
        </>
        }/>
        
        </div>
      </>
    )
  }
}


