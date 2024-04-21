
export const convertDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
        }
    );
}