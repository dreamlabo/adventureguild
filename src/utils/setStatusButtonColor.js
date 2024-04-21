export const setStatusButtonColor = (status) => {
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

    return buttonStyle;
}