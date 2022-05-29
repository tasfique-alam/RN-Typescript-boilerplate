import { format } from 'date-fns'


export const dateFormat = (date: any) => {
    return format(new Date(date), 'do MMM yyyy')
}
export const dateFormatChat = (date: any) => {
    return format(new Date(date), 'PPPP')
}
export const dateFormatHour = (date: any) => {
    return format(new Date(date), 'h')
}

export const getAge = (dateString: any) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}