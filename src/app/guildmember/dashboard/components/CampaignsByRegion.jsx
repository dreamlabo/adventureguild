'use client'
import CampaignsByRegionsGraph from './CampaignsByRegionGraph'

export default function CampaignsByRegion() {
  return (
         <div style={{height: 'calc(100% - 16px)'}} className='campaigns-by-region--wrapper'>
            <h2 className='overview-components-header'>Campaigns by Region</h2>
            <div style={{height: '100%'}}>
                <CampaignsByRegionsGraph/>
            </div>
        </div>
    ) 
}




