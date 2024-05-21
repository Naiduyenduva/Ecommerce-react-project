import React from 'react'
import { speakerData } from '../data/speaker'
import Navbar from '../components/Navbar'

const SpeakerPage = () => {

  return (
    <>
    <div>
        <Navbar />
    </div>
    <div className='pageSection'>
        {
        speakerData.map((item)=>{
            return(
                <div>
                    <div className="pageImg">
                        <img src={item.image} alt=''/>
                    </div>
                    <div className="proModel">
                        {item.brand},{item.model}
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default SpeakerPage