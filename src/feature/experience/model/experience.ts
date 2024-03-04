export interface Experience {
    id:        number;
    company:   string;
    position:  string;
    detail:    string;
    startDate: Date;
    endDate:   Date | null;
}

export function experienceDefault(): Experience{


    return {
        id: 0,
        company: "",
        position: "",
        detail: '',
        startDate: new Date(),
        endDate: null
    }

}