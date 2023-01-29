import React,{useState,useEffect} from 'react'
import './Home.css'
import Fashion from './Fashion'
import Mobile from './Mobile'
import Electronics from './Electronics' 
import Product from './Product'
function Home() {
    const [data, setData]=useState([])
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
      fetch("/home").then(
        res=>res.json()
        ).then(
          data=>{
            setData(data)
            setIsLoading(false)
            // console.log(data)
          }
        )
    },[])
    var counter=0,pre_score=-1,flag=0;
  return (
    <div className='home'>
      <div className='top'></div>
      <div className='home-line1'>Trending Now...</div>
      <div className='home-content'>
        
        {isLoading ? <div>Loading</div> : data.map(dat => {
          // console.log(dat)
          if(dat.Trend_score>pre_score){
            pre_score = dat.Trend_score
            flag=1;
            console.log(counter)
          }
          var url=dat.IMAGE_URL
          // console.log(url)
          if(dat.IMAGE_URL=="null"){
            url=dat.product_image_link
          }
          return (
            <Product key={dat.id} desc={dat.product_title} rank={counter=counter+flag} image={url} flipkart_link={dat.Flipkart_url} brand={dat.Brand} sub_category={dat.Sub_Category} score={dat.Trend_score}/>
          )
          
        })}
      </div>
    </div>
  )
}

export default Home
