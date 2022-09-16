import React, { useEffect, useState } from 'react'
import Urbit from '@urbit/http-api'
import './App.css'

const App = () => {
  const [status, setStatus] = useState("")
  const [potentialPlace, setPotentialPlace] = useState({})
  const [places, setPlaces] = useState([])

  const [description, setDescription] = useState("")
  const [error, setError] = useState("")
  const [isHovering, setIsHovering] = useState(false);



  // if served directly by ship, unnecessary. for dev purposes 
  const connect = async () => {
    window.urbit = await Urbit.authenticate({
      ship: "zod",
      url: "localhost:8080",
      code: "lidlut-tabwed-pillex-ridrup",
      verbose: true
    })
  }
  
  const getLexicon = async () => {
    const path = '/definitions/all'
    const res = await window.urbit.scry({
      app: "lexicon",
      path: path,
    })
    console.log(res)
  }
  
  const getDefinitions = async (ship, group) => {
    const path = `/definitions/${ship}/${group}`
    const res = await window.urbit.scry({
      app: "lexicon",
      path: path,
    })
    
    console.log(res)
  }
	
  useEffect(() => {
    window.urbit = new Urbit("")
    window.urbit.ship = window.ship;
    window.urbit.onOpen = () => setStatus("con");
    window.urbit.onRetry = () => setStatus("try");
    window.urbit.onError = (err) => setStatus("err");

    // commented out connect() for production build, if using locally, call connect() here

     connect()
  }, [])

  const About = () => {
    return (
      <div style={{ marginTop: '1rem' }}>
        <span>%places is inspired by %rumors from ~paldev </span><br />
        <span>it uses its gossip.hoon library to pass along places from pals</span><br />
        <span>&nbsp;</span><br />
        <span style={{fontStyle: 'italic'}}>"Look for [redacted] among frens and among foes, above the earth and below it!"</span><br />
        <span>&nbsp;</span><br />
        <span style={{fontWeight: 'bold'}}>~bitful-pannul/urbit-explorers-club</span><br />
      </div>
    )
  }


  return (
    <>
      <div className="info-part">
        <div className='top-bar'>
          <span>&nbsp;％ｐｌａｃｅｓ</span>
          {isHovering && <About />}
          <span>
            <div> 
              ａｂｏｕｔ
            </div>
	  {/* <img />*/}
          </span>
        </div>
        <div>
          <span>
            <label>𝚕𝚊𝚝𝚒𝚝𝚞𝚍𝚎&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          </span>
        </div>
        <div>
          <span>
            <label>𝚕𝚘𝚗𝚐𝚒𝚝𝚞𝚍𝚎&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          </span>
        </div>
        <div>
          <label style={{ verticalAlign: 'top' }}>𝚍𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗&nbsp;&nbsp;</label>
        </div>
        <div className='buttonz'>
          <span>
          </span>
        </div>
      </div>

    </>
  );
}

export default App;

