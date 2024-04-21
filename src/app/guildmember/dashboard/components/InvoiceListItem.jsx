import Link from 'next/link';
import { convertDate } from '@/utils/convertDate';

export default function InvoiceListItem({invoice}) {

  const applyClassNameToStatus = (status) => {
    let buttonStyle;
    switch(status.toLowerCase()) {
        case "pending":
            buttonStyle = "pendingStatus"
            break;
        case "approved":
            buttonStyle = "approvedStatus"
            break;
        case "in progress":
            buttonStyle = "inProgressStatus"
            break;
        case "completed":
            buttonStyle = "completedStatus"
            break;   
    }

    return `campaignStatusColumn campaignStatusButton ${buttonStyle}`
  }

  const formatDate = (dateStr) => {
      const date = new Date(dateStr);
      return date.toLocaleString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
          }
      );
  }

  return (
    <li>
      <Link href={`/guildmember/contracts/${invoice.id}`} className="campaignGrid indCampaignRow">
          <p className='invoiceIdColumn'>{invoice.id}</p>
          <p className={applyClassNameToStatus(invoice.status)}>{invoice.status}</p>
          <p className="invoiceReason">{invoice.reason}</p>
          <p>{invoice.location}</p>
          <p>{invoice.payment}gp</p>
          <p>{convertDate(invoice.startDate)}</p>
          <p>{convertDate(invoice.endDate)}</p>
          <p>{invoice.hiredBy}</p>
      </Link>
    </li>
  )
}
