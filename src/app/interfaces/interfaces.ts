export interface MenuOption{
    icon: string;
    name: string;
    redirectTo: string;
}


export interface Instrument{
    instrument: string;
    description: string;
    item: string;
    // answers: Answer[];
}

export interface Answer{
    answer: string;
    points: number;
}