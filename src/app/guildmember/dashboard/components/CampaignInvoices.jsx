
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
export default function CampaignInvoices() {
  return (
    // block (last-child)
    <section className="campaignInvoicesWrapper block">
       
       {/* inner block */}
        <div className="upper-block block">
            {/* h2 */}
            <div className='ff'>
            <h2 className="overview-components-header">Campaigns</h2>
            {/* p */}
            {/* <div className="campaignDropdownContainer">
                <select className="campaignDropdown" name="" id="">
                    <option value="">All</option>
                    <option value="">Pending</option>
                    <option value="">Approved</option>
                    <option value="">In Progress</option>
                    <option value="">Completed</option>
                </select>
            </div> */}

            <div className='dropdown-wrapper'>
             
                    <label className="label-dropdown" htmlFor="">SORT BY</label>
                    <Box  sx={{ minWidth: 120, maxWidth: 500,  borderRadius: 1 }}>
                        <Select size="small" className="hh" fullWidth
                       
                            displayEmpty
                            // value={age}
                            // onChange={handleChange}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        color: '#ECE6DA',
                                        bgcolor: '#0B0912',
                                        '& .MuiMenuItem-root': {
                                            padding: 1,
                                            fontSize: '14px'
                                           
                                        },
                                        '& .MuiMenuItem-root:hover': {
                                            bgcolor: '#07060b',
                                            color: "#BB883A"
                                        },
                                        '& .MuiMenuItem-root:focus-visible': {
                                            bgcolor: '#07060b',
                                            color: "#BB883A"
                                        },
                                        '& .Mui-selected': {
                                            bgcolor: '#07060b',
                                           
                                        },
                                        '& .MuiSvgIcon-root': {
                                            color: '#BB883A',
                                           
                                        },
                                    },
                                },
                            }}
                            >
                               
                            <MenuItem value={10}>All</MenuItem>
                            <MenuItem value={20}>Pending</MenuItem>
                            <MenuItem value={30}>Approved</MenuItem>
                            <MenuItem value={50}>In Progress</MenuItem>
                            <MenuItem value={70}>Completed</MenuItem>
                        </Select>
                    </Box>
                    </div>
            </div>
       
  
            {/* inner scrollable */}
            <div className="invoices-inner">
                <div className="campaignGrid campaignGrid--headings">
                    <h3>Invoice Id</h3>
                    <h3 className="campaignStatusColumn">Status</h3>
                    <h3>Reason for Adventure</h3>
                    <h3>Location</h3>
                    <h3>Payment</h3>
                    <h3>Start</h3>
                    <h3>End</h3>
                    <h3>Hired By</h3>
                </div>
                <div className="campaigns inner-inner-scrollable">
                    <div className="campaignGrid indCampaignRow">
                        <p>123456789</p>
                        <button className="campaignStatusColumn campaignStatusButton pendingStatus">Pending</button>
                        <p>Reason for Adventure</p>
                        <p>Thorbardin</p>
                        <p>12gp</p>
                        <p>Feb 12, 2024</p>
                        <p>Feb 16, 2024</p>
                        <p>Lira Shadowstep</p>
                    </div>
                    <div className="campaignGrid indCampaignRow">
                        <p>123456789</p>
                        <button className="campaignStatusColumn campaignStatusButton approvedStatus">Approved</button>
                        <p>Reclaim the Dragonlance</p>
                        <p>Thorbardin</p>
                        <p>12gp</p>
                        <p>Feb 12, 2024</p>
                        <p>Feb 16, 2024</p>
                        <p>Lira Shadowstep</p>
                    </div>
                    <div className="campaignGrid indCampaignRow">
                        <p>123456789</p>
                        <button className="campaignStatusColumn campaignStatusButton inProgressStatus">In Progress</button>
                        <p>Reclaim the Dragonlance</p>
                        <p>Thorbardin</p>
                        <p>12gp</p>
                        <p>Feb 12, 2024</p>
                        <p>Feb 16, 2024</p>
                        <p>Lira Shadowstep</p>
                    </div>
                    <div className="campaignGrid indCampaignRow">
                        <p>123456789</p>
                        <button className="campaignStatusColumn campaignStatusButton inProgressStatus">In Progress</button>
                        <p>Reclaim the Dragonlance</p>
                        <p>Thorbardin</p>
                        <p>12gp</p>
                        <p>Feb 12, 2024</p>
                        <p>Feb 16, 2024</p>
                        <p>Lira Shadowstep</p>
                    </div>
                    <div className="campaignGrid indCampaignRow">
                        <p>123456789</p>
                        <button className="campaignStatusColumn campaignStatusButton inProgressStatus">In Progress</button>
                        <p>Reclaim the Dragonlance</p>
                        <p>Thorbardin</p>
                        <p>12gp</p>
                        <p>Feb 12, 2024</p>
                        <p>Feb 16, 2024</p>
                        <p>Lira Shadowstep</p>
                    </div>
                    <div className="campaignGrid indCampaignRow">
                        <p>123456789</p>
                        <button className="campaignStatusColumn campaignStatusButton inProgressStatus">In Progress</button>
                        <p>Reclaim the Dragonlance</p>
                        <p>Thorbardin</p>
                        <p>12gp</p>
                        <p>Feb 12, 2024</p>
                        <p>Feb 16, 2024</p>
                        <p>Lira Shadowstep</p>
                    </div>
                    <div className="campaignGrid indCampaignRow">
                        <p>123456789</p>
                        <button className="campaignStatusColumn campaignStatusButton inProgressStatus">In Progress</button>
                        <p>Reclaim the Dragonlance</p>
                        <p>Thorbardin</p>
                        <p>12gp</p>
                        <p>Feb 12, 2024</p>
                        <p>Feb 16, 2024</p>
                        <p>Lira Shadowstep</p>
                    </div>
                    <div className="campaignGrid indCampaignRow">
                        <p>123456789</p>
                        <button className="campaignStatusColumn campaignStatusButton pendingStatus">Pending</button>
                        <p>Reclaim the Dragonlance</p>
                        <p>Thorbardin</p>
                        <p>12gp</p>
                        <p>Feb 12, 2024</p>
                        <p>Feb 16, 2024</p>
                        <p>Lira Shadowstep</p>
                    </div>
                    <div className="campaignGrid indCampaignRow">
                        <p>123456789</p>
                        <button className="campaignStatusColumn campaignStatusButton pendingStatus">Pending</button>
                        <p>Reclaim the Dragonlance</p>
                        <p>Thorbardin</p>
                        <p>12gp</p>
                        <p>Feb 12, 2024</p>
                        <p>Feb 16, 2024</p>
                        <p>Lira Shadowstep</p>
                    </div>
                    <div className="campaignGrid indCampaignRow">
                        <p>123456789</p>
                        <button className="campaignStatusColumn campaignStatusButton pendingStatus">Pending</button>
                        <p>Reclaim the Dragonlance</p>
                        <p>Thorbardin</p>
                        <p>12gp</p>
                        <p>Feb 12, 2024</p>
                        <p>Feb 16, 2024</p>
                        <p>Lira Shadowstep</p>
                    </div>
                </div>  
            </div>
        </div>
    </section>
  )
}