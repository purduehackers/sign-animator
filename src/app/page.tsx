// import { Preview } from '@/components/preview/preview';
// import { PlayControls } from '@/components/timeline/playcontrols';
// import { Timeline } from '@/components/timeline/timeline';
import { MosaicComponent } from '@/components/mosaic';
import { RawColor } from '@/engine/animation';

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
            <MosaicComponent />
        </main>
    );
}
