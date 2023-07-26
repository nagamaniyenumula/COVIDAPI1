import React, { useState } from 'react'
import { useEffect } from 'react'

function Covid() {
        const [data,setData]= useState([])
const getCovidData = async () =>{
    try{
        const res = await fetch('https://data.covid19india.org/data.json')
       const actuvaldata  = await res.json();
       console.log(actuvaldata.statewise[0]);
       setData(actuvaldata.statewise[0]);
        
    }
    catch(err){
        console.log(err)
    }
   
}
 useEffect(() => {
    getCovidData();
}, [])

    
  return (
    <>
    <div className='conatainer'>
            <h1>Live</h1>
            <h2>COVID-19 CORONAVIRUS TRACKERS</h2>
            
            <section id="header" className='d-flex align-items-center'>
            <div className='container-fluid nav_bg'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                <div className='row'>
                <div className='col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' >
                            <div class="card text-white bg-primary mb-3 animation" >
                            {/* <div class="card-header">Header</div> */}
                            <div class="card-body">
                            <p className='card-name'><span>OUR</span>COUNTRY</p>
                            <h2 className='card-total card-small'>INDIA</h2>
                            
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' >
                            <div class="card text-white bg-secondary mb-3 animation" >
                            {/* <div class="card-header">Header</div> */}
                            <div class="card-body">
                            <p className='card-name'><span>TOTAL</span>RECOVERED</p>
                            <h2 className='card-total card-small'>{data.recovered}</h2>
                            
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' >
                            <div class="card text-white bg-success mb-3 animation" >
                            {/* <div class="card-header">Header</div> */}
                            <div class="card-body">
                            <p className='card-name'><span>TOTAL</span>CONFIRMED</p>
                            <h2 className='card-total card-small'>{data.confirmed}</h2>
                            
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' >
                            <div class="card text-white bg-danger mb-3 animation" >
                            {/* <div class="card-header">Header</div> */}
                            <div class="card-body">
                            <p className='card-name'><span>TOTAL</span>DEATHS</p>
                            <h2 className='card-total card-small'>{data.deaths}</h2>
                            
                            </div>
                        </div>
                    </div>


                    <div className='col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' >
                            <div class="card text-white bg-warning mb-3 animation" >
                            {/* <div class="card-header">Header</div> */}
                            <div class="card-body">
                            <p className='card-name'><span>TOTAL</span>ACTIVE</p>
                            <h2 className='card-total card-small'>{data.active}</h2>
                            
                            </div>
                        </div>
                    </div>

                
                
                    
                    <div className='col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' >
                            <div class="card text-white bg-dark mb-3 animation" >
                            {/* <div class="card-header">Header</div> */}
                            <div class="card-body">
                            <p className='card-name'><span>LAST</span>UPDATED</p>
                            <h2 className='card-total card-small'>{data.lastupdatedtime}</h2>
                            
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </section>
   

    
      </div>
            
    </>
  )
}

export default Covid