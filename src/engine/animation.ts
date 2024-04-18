export type f32 = number; // TODO: Implement encoding/decoding for binary representations
export type u8 = number; // TODO: Implement encoding/decoding for binary representations
export type u16 = number; // TODO: Implement encoding/decoding for binary representations

export type RawColor = {
    red: number;
    green: number;
    blue: number;
};

export type BezierPoint = {
    x: f32;
    y: f32;
};

export type Color = {
    next: u8;

    bezier_in: BezierPoint;
    bezier_out: BezierPoint;
};

export type Key = {
    time: f32;

    red: Color;
    green: Color;
    blue: Color;
};

export type Header = {
    duration: f32;

    number_top_keys: u16;
    number_middle_keys: u16;
    number_right_keys: u16;
    number_bottom_left_keys: u16;
    number_bottom_right_keys: u16;
};

export type Animation = {
    header: Header;

    top_keys: Key[];
    middle_keys: Key[];
    right_keys: Key[];
    bottom_left_keys: Key[];
    bottom_right_keys: Key[];
};

const AnimationToRaw = (animation: Animation): Buffer => {
    throw "AnimationToRaw Not Implemented";
}

const RawToAnimation = (buffer: Buffer): Animation => {
    throw "RawToAnimation Not Implemented";
}