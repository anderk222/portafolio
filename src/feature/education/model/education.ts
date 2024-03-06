export type Education = {

    id: number
    career: string
    istName: string
    startDate: Date
    endDate?: Date

}

export function educationDefault(): Education {

    return {
         istName: '', career: '', id: 0, startDate: new Date(),endDate: undefined,
    }
}
