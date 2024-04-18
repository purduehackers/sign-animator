// 'use client';

// import { FC } from 'react';
// import { DraggableWindow } from '../window/window';
// import { RawColor } from '@/engine/animation';

// export type PreviewProps = {
//     top: RawColor;
//     middle: RawColor;
//     right: RawColor;
//     bottomLeft: RawColor;
//     bottomRight: RawColor;
// };

// export const Preview: FC<PreviewProps> = ({
//     top,
//     middle,
//     right,
//     bottomLeft,
//     bottomRight,
// }) => {
//     return (
//         <DraggableWindow title="Sign Preview">
//             <div className="grid grid-cols-3 grid-rows-3 w-32 h-32">
//                 <div className="bg-transparent m-1" />
//                 <div
//                     style={{ backgroundColor: RawColorToCSSColor(top) }}
//                     className="m-1"
//                 />
//                 <div className="bg-transparent m-1" />

//                 <div className="bg-transparent m-1" />
//                 <div
//                     style={{ backgroundColor: RawColorToCSSColor(middle) }}
//                     className="m-1"
//                 />
//                 <div
//                     style={{ backgroundColor: RawColorToCSSColor(right) }}
//                     className="m-1"
//                 />

//                 <div
//                     style={{ backgroundColor: RawColorToCSSColor(bottomLeft) }}
//                     className="m-1"
//                 />
//                 <div className="bg-transparent m-1" />
//                 <div
//                     style={{ backgroundColor: RawColorToCSSColor(bottomRight) }}
//                     className="m-1"
//                 />
//             </div>
//         </DraggableWindow>
//     );
// };

// const RawColorToCSSColor = (color: RawColor): string => {
//     return `rgba(${color.red}, ${color.green}, ${color.blue}, 255)`;
// };
