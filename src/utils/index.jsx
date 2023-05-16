import dayjs from 'dayjs'

export const dateFormat = date => dayjs(date).format('YYYY/MM/DD')
