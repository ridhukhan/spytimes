import React from 'react'
import home1 from "../../assets/home1.jpeg"
import ExoClickBanner from '../../components/ads/ExoclicBanner'
const Home = () => {
  return (
    <div style={{marginTop:"20%"}}>
        <h1 style={{backgroundColor:"#999"}}>Vance has sharply criticizes Denmark <br /> and Europe over their role and management regarding <br /> Greenland.</h1>

        <img src={home1} alt="home1" />
      <ExoClickBanner/>
       <h2>
        US Vice-President JD Vance has described Greenland as “critical” to the defence of both the United States and the wider world, citing concerns over potential missile threats from Russia or China. He argued that Europe and Denmark have failed to adequately secure the strategically vital region.

Speaking to Fox News, Vance said Denmark and its European partners had significantly under-invested in Greenland’s defence infrastructure and had also ignored President Donald Trump’s arguments regarding the island’s importance.

The White House confirmed on Wednesday that US officials are actively discussing a possible offer to purchase Greenland, a semi-autonomous territory of Denmark. This came just a day after senior figures suggested that military action to annex the island could not be ruled out.

</h2>

<h2>
Denmark, a fellow NATO member, has warned that such a move would effectively bring an end to the alliance. Both Denmark and Greenland have repeatedly stated that the island is not for sale.

Although Greenland is the world’s most sparsely populated territory, its position between North America and the Arctic makes it strategically crucial for early missile-warning systems and for monitoring naval activity in the region.

The United States already maintains a permanent military presence at the Pituffik base in north-western Greenland, where more than 100 US personnel are stationed. The base has been operated by the US since World War Two, and existing agreements with Denmark allow Washington to deploy additional troops if it chooses.
       </h2>
    </div>
  )
}

export default Home