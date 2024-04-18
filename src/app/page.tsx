// import { Preview } from '@/components/preview/preview';
// import { PlayControls } from '@/components/timeline/playcontrols';
// import { Timeline } from '@/components/timeline/timeline';
import { RawColor } from '@/engine/animation';
import Image from 'next/image';
import { Mosaic, MosaicWindow } from 'react-mosaic-component';

export type ViewId = 'a' | 'b' | 'c' | 'new';

const TITLE_MAP: Record<ViewId, string> = {
    a: 'Left Window',
    b: 'Top Right Window',
    c: 'Bottom Right Window',
    new: 'New Window',
};

export default function Home() {
    let topColor: RawColor = { red: 255, green: 0, blue: 0 };
    let middleColor: RawColor = { red: 255, green: 255, blue: 255 };
    let rightColor: RawColor = { red: 0, green: 255, blue: 255 };
    let bottomLeftColor: RawColor = { red: 255, green: 255, blue: 0 };
    let bottomRightColor: RawColor = { red: 255, green: 0, blue: 255 };

    return (
        <main className="bg-neutral-900 w-[100vw] h-[100vh]">
            {/* <PlayControls />

            <Timeline />

            <Preview
                top={topColor}
                middle={middleColor}
                right={rightColor}
                bottomLeft={bottomLeftColor}
                bottomRight={bottomRightColor}
            /> */}
            <Mosaic<ViewId>
                renderTile={(id, path) => (
                    <MosaicWindow<ViewId>
                        path={path}
                        createNode={() => 'new'}
                        title={TITLE_MAP[id]}
                    >
                        <h1>{TITLE_MAP[id]}</h1>
                    </MosaicWindow>
                )}
                initialValue={{
                    direction: 'row',
                    first: 'a',
                    second: {
                        direction: 'column',
                        first: 'b',
                        second: 'c',
                    },
                }}
            />
        </main>
    );
}
