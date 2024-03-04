export type Education = {

    id: number
    career: string
    istName: string
    startDate: Date
    endDate: Date | null

}

export function educationDefault(): Education {

    return {
         istName: '', career: '', id: 0, startDate: new Date(),endDate: null,
    }
}
