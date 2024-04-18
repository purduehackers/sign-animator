// 'use client';

// // TODO: Replace with a library that can do stuff like snapping/organizing and resizing
// Im working on it :)

// import { FC, PropsWithChildren, ReactNode } from 'react';
// import Draggable from 'react-draggable';

// export type WindowProps = {
//     title: string;
//     className?: string | undefined;
// };

// export const Window: FC<PropsWithChildren<WindowProps>> = ({
//     children,
//     title,
//     className,
// }) => {
//     return (
//         <div
//             className={`bg-neutral-800 p-0 rounded-lg border-2 border-neutral-600 ${
//                 className ?? ''
//             }`}
//         >
//             <p className="py-1 px-2 text-neutral-50 border-neutral-600 border-b-2">
//                 {title}
//             </p>
//             <div className="p-4">{children}</div>
//         </div>
//     );
// };

// export const DraggableWindow: FC<PropsWithChildren<WindowProps>> = ({
//     children,
//     title,
//     className,
// }) => {
//     return (
//         <Draggable>
//             <div className={className}>
//                 <Window title={title}>{children}</Window>
//             </div>
//         </Draggable>
//     );
// };

// export type NoTitleWindowProps = {
//     className?: string | undefined;
// };

// export const WindowNoTitle: FC<PropsWithChildren<NoTitleWindowProps>> = ({
//     children,
//     className,
// }) => {
//     return (
//         <div
//             className={`bg-neutral-800 p-0 rounded-lg border-2 border-neutral-600 ${
//                 className ?? ''
//             }`}
//         >
//             <div className="p-4">{children}</div>
//         </div>
//     );
// };

// export const DraggableWindowNoTitle: FC<
//     PropsWithChildren<NoTitleWindowProps>
// > = ({ children, className }) => {
//     return (
//         <Draggable>
//             <div className={className}>
//                 <WindowNoTitle>{children}</WindowNoTitle>
//             </div>
//         </Draggable>
//     );
// };
