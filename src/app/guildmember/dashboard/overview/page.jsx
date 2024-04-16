'use client'
import Earnings from "../components/Earnings";
import CompletedCampaigns from "../components/CompletedCampaigns";
import CampaignsByRegion from "../components/CampaignsByRegion";
import ProfileViews from "../components/ProfileViews";
import CampaignInvoices from "../components/CampaignInvoices";



export default function Overview() {


  return (
    <div className='right-side-inner-wrapper'>
        <h1 className='page-title-text'>Overview</h1>
        <div className="right-side-inner-container container">
        
        
            {/* <div className="overview-top-grid">
              <div>
                  <Earnings/>
                  <CompletedCampaigns/>
                </div>
                <div >
                  <CampaignsByRegion/>
                </div>
                <ProfileViews/>
            </div> */}
            {/* <div className="invoices">
              <CampaignInvoices/>
            </div> */}
           
            
            {/* upper dashboard */}

            <div className="overview-top-grid ">
              <div>
                  <Earnings/>
                  <CompletedCampaigns/>
                </div>
                <div >
                  <CampaignsByRegion/>
                </div>
                <ProfileViews/>
            </div>
            {/* <div class="block">
                  <h1>Upper dashboard</h1>
                  <p>nonsense</p>
                  <p>nonsense</p>
                  <p>nonsense</p>
                  <p>nonsense</p>
                  <p>nonsense</p>
                  <p>nonsense</p>
            </div> */}

            {/* campaign block */}
                     {/* <div className="invoices"> */}
              <CampaignInvoices/>
            {/* </div> */}
            
            {/* <div class="block"> 
              <div class="inner-block">
                <h1>Lower block Campaigns</h1>
                <p>dropdown</p>
                <p>headers</p>
          
                <div class="inner-inner-scrollable">
                    <p>invoice inner first</p>
                    <p>nonsense inner</p>
                    <p>nonsense inner</p>
                    <p>nonsense inner</p>
                    <p>nonsense inner</p>
                    <p>nonsense inner</p>
                    <p>nonsense inner</p>
                    <p>nonsense inner</p>
                    <p>nonsense inner</p>
                    <p>nonsense inner</p>
                    <p>nonsense inner</p>
                    <p>invoice inner last</p>
                    </div>
                </div>
              </div>
            </div> */}
        
   

        
          {/* <div className="overview-top-grid"> */}
            {/* <div>
          <h1>one</h1>
            <p>nonsense</p>
            <p>nonsense</p>
            <p>nonsense</p> */}
            {/* <div>
                <Earnings/>
                <CompletedCampaigns/>
              </div>
              <div >
                <CampaignsByRegion/>
              </div>
              <ProfileViews/> */}
          {/* </div> */}
          {/* <div className="invoices">
              <CampaignInvoices/>
            </div> */}
        </div>
       </div>
  )
}
