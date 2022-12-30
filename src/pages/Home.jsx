import React from 'react'
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../request';
const Home = () => {
  return (
    <div>
        <Main />
        <Row rowId='1' title='UpComing' fetchUrl={requests.requestUpcoming} />
        <Row rowId='2' title='Horror' fetchUrl={requests.requesthorror} />
        <Row rowId='3' title='Popular' fetchUrl={requests.requestPopular} />
        <Row rowId='4' title='Action' fetchUrl={requests.requestlatest} />
        <Row rowId='5' title='Toprated' fetchUrl={requests.requestToprated} />
        
    </div>
  )
}

export default Home;