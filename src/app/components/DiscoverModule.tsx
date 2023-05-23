import React from 'react';
import { clsxm } from '../utils/tailwind';

interface DiscoverProps {
    style?: string;
    background?: Array<object>;
    backgroundLoading?: string;
    backgroundOverlay?: string;
    buttons: Array<object>;
    categoriesTag: string;
    categoryButtons: Array<object>;
    heading: string;
    headingStyle: string;
    headingType?: string;
    id?: string;
    tag: string;
    text: string;
    textColor: string;
    wrapperLink: string;
}

const Discover = ({
    style,
    background,
    backgroundLoading = 'eager',
    backgroundOverlay,
    buttons = [],
    categoriesTag,
    categoryButtons = [],
    heading,
    headingStyle = 'md',
    headingType,
    id,
    tag,
    text,
    textColor = 'white',
    wrapperLink,
}: DiscoverProps) => {
    const tagFontKeys = {
        sm: ['Secondary/16_100_-2', null, null, 'Secondary/20_100_-2', null, 'Secondary/28_100_-3'],
        md: ['Secondary/20_100_-2', null, null, 'Secondary/32_100_-3', null, 'Secondary/40_100_-3'],
    };

    const headingFontKeys = {
        sm: ['Secondary/32_100_-3', null, null, 'Secondary/40_100_-3', null, 'Secondary/56_100_-3'],
        md: ['Primary/40_-2', null, null, 'Primary/64_-3', null, 'Primary/96_-4'],
    };

    return (
        <div
            className={clsxm(
                '-z-0 -mt-[72px] mb-6 block h-screen w-full items-center justify-center',
                style
            )}
        >
            <div className={clsxm('relative h-full w-full p-10', 'bg-module-discover')} />

            <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-module-discover">
                <p className=" mb-6">Senectus fermentum ligula</p>
                <h2 className=" mb-4 text-7xl ">Tailwind Mockup</h2>
                <p className=" mb-8 text-lg ">{text}</p>
                <button className="cursor-pointer border p-3 hover:bg-header-1">
                    Conubia ligula
                </button>
            </div>
        </div>
    );
};

export default Discover;
