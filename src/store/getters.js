import { format, isToday, isYesterday } from "date-fns"

function getOperationsWithDatesProp (date) {
    if (isToday(date)) {
        return "Сегодня"
    }
    if (isYesterday(date)) {
        return "Вчера"
    }
    return format(date, "dd.MM.yy")
}

export default {
    makeFetch: ({ API_URL, page }) => async bearerToken => {
        let url = API_URL + (page ? page + 1 : 1)
        let options = { headers: { authorization: `Bearer ${bearerToken}` } }
        let response = await fetch(url, options)
        return await response.json()
    },

    operationsWithDates: ({ operations }) => {
        return operations.reduce((acc, next) => {
            let date = new Date(next.created_at)
            let prop = getOperationsWithDatesProp(date)
            if (!(prop in acc)) {
                acc[prop] = []
            }
            acc[prop].push(next)
            return acc
        }, {})
    },
}
