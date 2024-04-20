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
            {/* campaign block */}
            <CampaignInvoices/>
        </div>
       </div>
  )
}
