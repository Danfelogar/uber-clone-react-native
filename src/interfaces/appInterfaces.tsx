export interface NavigationState {
    origin: null | string,
    destination: null | string,
    travelTimeInformation: null | string,
};

export interface Nav {
    navigate: (value: string) => void;
};
