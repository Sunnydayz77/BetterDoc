import React, { Component } from 'react'
import Axios from 'axios'
import ProviderMiniInfo from './ProviderMiniInfo'
import ProviderSearch from './ProviderSearch'
import ProviderDetails from './ProviderDetails'
import
{
  Route
} from 'react-router-dom'
const API_TOKEN = process.env.REACT_APP_API

export default class ProviderContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      docs: [],
      searchQuery: '',
      containers: [],
      loading:false
    }
  }

  componentDidMount() {
    this.fetchDocs()
  }


  fetchDocs = async () => {
    try {
        const docs = await Axios.get(
          `https://api.betterdoctor.com/2016-03-01/doctors?query=${this.state.searchQuery}&sort=best-match-desc&skip=0&limit=20&user_key=${API_TOKEN}`
        )
        const docData = docs.data.data
      
        this.setState({
          docs: docData
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
      await this.fetchDocs()
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
          <Route exact path={"/ProviderContainer"} render={(props) =>
        <>
          <h3>Provider Search</h3>
          <h4>~Search based on provider name, location, insurance accepted, and provider specialty~</h4>
            
          <ProviderSearch
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            value={this.state.searchQuery}
            name="searchQuery"
            />
            {this.state.loading  &&  <img src = 'https://media.giphy.com/media/VX7yEoXAFf8as/giphy.gif' alt = "loading spinner"/>}

          <ProviderMiniInfo className="miniInfo" docs={this.state.docs} />
        </>
        }/>
      
          <Route path={"/ProviderContainer/details/:uid"} render={(props) =>
          <ProviderDetails className="details"
              docs={this.state.docs}
              {...props}
          />
        }/>
        
        </div>
      </>
    )
  }
}


