import React, { Component } from 'react'
import Axios from 'axios'
import ProviderMiniInfo from './ProviderMiniInfo'
import ProviderSearch from './ProviderSearch'
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
      containers:[]
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
       // console.log(docs.data.data)
        //console.log(docs.data.data.npi)
        const docData=docs.data.data
        console.log(docData)
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


  handleSubmit = event => {
    event.preventDefault()
    if (!this.state.searchQuery) {
      alert('Nothing is being searched!')
    } else if (this.state.containers.includes(this.state.searchQuery)) {
      alert('Already Exists')
    } else {
      this.fetchDocs()
      this.setState(
        state => ({
          containers: [this.state.searchQuery, ...state.containers],
          searchQuery: ''
        }),
      )
    }
  }

render() {
  return (
          <>
              <div className="container">
                
              <ProviderMiniInfo docs={this.state.docs} />
              
              <ProviderSearch
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                value={this.state.searchQuery}
                name="searchQuery"
              />
            
{/* 
              <Route path={"ProviderDetails/:profile"} render={(props) =>
                <ProviderDetails
                  doc={this.state.docs}
                  {...props}
                />
              }>

                </Route> */}
              </div>
          </>
        )
  }
}
