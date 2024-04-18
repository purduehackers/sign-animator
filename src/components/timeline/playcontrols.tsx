// import { FC } from 'react';
// import { DraggableWindowNoTitle, WindowNoTitle } from '../window/window';

// export const PlayControls: FC = () => {
//     let playing = false;

//     return (
//         <DraggableWindowNoTitle>
//             <button className="h-6 w-6 bg-neutral-600 ml-1">{'|<'}</button>
//             <button className="h-6 w-6 bg-neutral-600 ml-1">{'*<'}</button>
//             {playing ? (
//                 <>
//                     <button className="h-6 w-[3.25rem] bg-neutral-600 ml-1">
//                         {'| |'}
//                     </button>
//                 </>
//             ) : (
//                 <>
//                     <button className="h-6 w-6 bg-neutral-600 ml-1">
//                         {'<'}
//                     </button>
//                     <button className="h-6 w-6 bg-neutral-600 ml-1">
//                         {'>'}
//                     </button>
//                 </>
//             )}
//             <button className="h-6 w-6 bg-neutral-600 ml-1">{'>*'}</button>
//             <button className="h-6 w-6 bg-neutral-600 ml-1">{'>|'}</button>
//         </DraggableWindowNoTitle>
//     );
// };
