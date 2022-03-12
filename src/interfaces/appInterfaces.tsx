export interface NavigationState {
    origin: null | string,
    destination: null | string,
    travelTimeInformation: null | string,
};

export interface Nav {
    navigate: (value: string) => void;
};

export interface selected {
    id:         string;
    title:      string;
    multiplier: number;
    image:      string;
};
