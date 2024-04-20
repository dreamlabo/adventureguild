
import styles from '../contracts.module.css'
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi";
import { GoMail } from "react-icons/go";
import { GrMoney } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa6";
import { PiNotePencilDuotone } from "react-icons/pi";
import { MdOutlineNoteAdd } from "react-icons/md";
import { FaSortAmountUp } from "react-icons/fa";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { BiMessageAdd } from "react-icons/bi";

import { invoices } from '../../../../fakeData/invoices'

export default function Contract({params}) {
const {id} = params;
const invoice = invoices.find(p => p.id === id)
  return (
    <div className={styles.editInvoicePageWrapper}>
        <div className={styles.headerContainer}>
            <h1 className={styles.contractTitleText}>Edit Invoice</h1>
            <div className={styles.dateWrapper}>
                <div className={styles.dateContainer}>
                    <h2>Last Update</h2>
                    <p>May 2, 2024 at 5:15pm</p>
                </div>
                <div className={styles.dateContainer}>
                    <h2>Created</h2>
                    <p>May 2, 2024 at 5:15pm</p>
                </div>
            </div>
        </div>
        <div className={styles.pageGrid}>
            <div className={styles.topSection} >
                <div className={styles.infoSide}>
                    <h2>Invoice Id</h2>
                    <p>{invoice.id}</p>
                </div>
                <div className={styles.reasonContainer}>
                    <h2 className={styles.headerText}>Reason for Adventure</h2>
                    <p className={styles.reasonText}>
                        {invoice.reason}
                        </p>
                    <p className={styles.reasonSubText}>
                        {invoice.description}
                    </p>
                </div>
                <div className={styles.innerInfoGrid}>
                    <div className={styles.invoiceDetailsContainer}>
                        <div >
                            <label className={styles.detailsLabel} htmlFor="">Status</label>
                            <button className={styles.statusButton}>{invoice.status}<FaChevronDown style={{marginLeft: '10px'}} /></button>
                        </div>
                        <div className={styles.timelineContainer}>
                            <IoCalendarClearOutline className={styles.icon} size={20}  />
                            
                            <h3 className={styles.detailsLabel}>Timeline</h3>
                            <div className={styles.timelineDetailsWrapper}>
                                <div className={styles.timelineDetailsContainer}>
                                    <h4 className={styles.timelineLabel}>Start</h4>
                                    <time className={styles.timelineStat}>Apr 30, 2024</time>
                                </div>
                                <div className={styles.timelineDetailsContainer}>
                                    <h4 className={styles.timelineLabel}>End</h4>
                                    <time className={styles.timelineStat}>May 3, 2024</time>
                                </div>
                            </div>
                        </div>
                        <div className={styles.detailContainer}>
                            <FaLocationDot className={styles.icon} size={18}  />
                            <h4 className={styles.detailsLabel}>Location</h4>
                            <p className={styles.detailsStat}>{invoice.location}</p>
                        </div>
                        <div className={styles.detailContainer}>
                        <GrMoney className={styles.icon} size={18}  />
                            <h4 className={styles.detailsLabel}>Payment</h4>
                            <p className={styles.detailsStat}>{invoice.payment}</p>
                        </div>
                        <div className={styles.detailContainer}>
                            <HiOutlineUsers className={styles.icon} size={20}  />
                            <h4 className={styles.detailsLabel}>Hired By</h4>
                            <p className={styles.detailsStat}>{invoice.hiredBy}</p>
                        </div>
                        <div className={styles.detailContainer}>
                            <GoMail className={styles.icon} size={20}  />
                            <h4 className={styles.detailsLabel}>Email</h4>
                            <a href={`mailto:${invoice.hiredByEmail}`} className={styles.detailsStat}>{invoice.hiredByEmail}</a>
                        </div>
                    </div>
                 
                    <div className={styles.notesContainer}>
                        <div className={styles.notesHeader}>
                            <PiNotePencilDuotone className={styles.noteIcon}  size={25}/>
                            <button className={styles.newBtn}><span>New Note</span><MdOutlineNoteAdd size={20} /></button>
                        </div>
                        <div className={styles.sortIcon}>
                            <FaSortAmountUp className={styles.icon} size={20}/>
                        </div>
                        <div className={styles.notesSubContainer}>
                            <div className={styles.noteContainer}>
                                <div className={styles.noteHeader}>
                                    <p>Added by Kandor</p>
                                    <time>Jan 29, 2023 6:23am</time>
                                </div>
                                <p className={styles.noteText}>
                                    The client needs protection while traveling 
                                    through treacherous lands infested with 
                                    monsters, bandits, or other hostile forces.
                                </p>
                            </div>
                        </div>
                        <div className={styles.notesSubContainer}>
                            <div className={styles.noteContainer}>
                                <div className={styles.noteHeader}>
                                    <p>Added by Kandor</p>
                                    <time>Jan 25, 2023 5:25pm</time>
                                </div>
                                <p className={styles.noteText}>
                                    The client needs protection while traveling 
                                    through treacherous lands infested with 
                                    monsters, bandits, or other hostile forces.
                                </p>
                            </div>
                        </div>
                        <div className={styles.notesSubContainer}>
                            <div className={styles.noteContainer}>
                                <div className={styles.noteHeader}>
                                    <p>Added by Lira</p>
                                    <time>Jan 25, 2023 5:25pm</time>
                                </div>
                                <p className={styles.noteText}>
                                    The client needs protection while traveling 
                                    through treacherous lands infested with 
                                    monsters, bandits, or other hostile forces.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.messagesWrapper}>
                <div className={styles.messagesHeader}>
                    <BiMessageAdd  className={styles.messageIcon}  size={25}/>
                    <button className={styles.newBtn}>New Message</button>
                </div>
                <div className={styles.sortIcon}>
                    <FaSortAmountUp className={styles.icon} size={20}/>
                </div>
                <div className={styles.messageContainer}>
                    <div className={styles.messageIconContainer}>
                        <FaArrowRight className={styles.messageIcon} />
                    </div>
                    <div className={styles.message}>
                        <p className={styles.messageSender}>Lyra Shadowstep</p>
                        <time>Feb 12, 2024 at 5:15pm</time>
                        <h3>Message Subject</h3>
                        <p className={styles.messageText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim  veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat.
                        </p>
                    </div> 
                </div>
                <div className={styles.messageContainer}>
                    <div className={styles.messageIconContainer}>
                        <FaArrowLeft className={styles.messageIcon}/>
                    </div>
                    <div className={styles.message}>
                        <p className={styles.messageSender}>Kandor Ironheart</p>
                        <time>Feb 13, 2024 at 5:15pm</time>
                        <h3>Message Subject</h3>
                        <p className={styles.messageText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim  veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat.
                        </p>
                    </div> 
                </div>
                
            </div>
        </div>
        </div>

 
  )
}
