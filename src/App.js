import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import News from './components/News';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


export class App extends Component {

  state={
    progress:0
  }

  //apikey=process.env.REACT_APP_NEWS_API
  apikey = '88e4fbad73534132a922989dd2014afe'
  
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <>
      <BrowserRouter>
      <Navbar></Navbar>
      <LoadingBar
      height={3}
          color='red'
          progress={this.state.progress}
          
        />
      <Routes>
        <Route exact path="/" key="general" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={6} country="us" category="general"></News>}></Route>
        <Route exact path="/business" key="business" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={6} country="us" category="business"></News>}></Route>
        <Route exact path="/entertainment" key="entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={6} country="us" category="entertainment"></News>}></Route>
        <Route exact path="/health" key="health" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={6} country="us" category="health"></News>}></Route>
        <Route exact path="/science" key="science" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={6} country="us" category="science"></News>}></Route>
        <Route exact path="/sports" key="sports" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={6} country="us" category="sports"></News>}></Route>
        <Route exact path="/technology" key="technology" element={<News setProgress={this.setProgress} apikey={this.apikey} pageSize={6} country="us" category="technology"></News>}></Route>
      </Routes>
      </BrowserRouter>
      </>
    )
  }
}

export default App
