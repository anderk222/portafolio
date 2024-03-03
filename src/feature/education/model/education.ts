export type Education = {

    id: number
    career: string
    istName: string
    startDate: Date
    endDate: Date

}

export function educationDefault(): Education {

    return {
        endDate: new Date(), istName: '', career: '', id: 0, startDate: new Date()
    }
}