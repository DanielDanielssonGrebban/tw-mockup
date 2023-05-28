import React from 'react';
import { clsxm } from '../utils/tailwind';
import type { ClassValue } from 'clsx';

interface ModuleProps {
    style?: ClassValue;
}

const Module = ({ style }: ModuleProps) => {
    return (
        <div className={clsxm('block w-full items-center justify-center ', style)}>
            <div
                className={clsxm(
                    'flex h-full w-full gap-3 px-8 py-8',
                    'overflow-x-scroll bg-header-search',
                    'tablet.lg:[&>*:nth-child(odd)]:bg-module-card-2'
                )}
            >
                <div className="aspect-[2/3] h-full w-full min-w-[190px] rounded-2xl bg-module-card-1 text-module-card-1 tablet.sm:bg-module-card-1 tablet.sm:text-module-card-2 ">
                    <h2 className="p-4 text-lg tablet.sm:text-2xl">Lorem ipsum dolor sit</h2>
                    <p className="p-4">
                        Lorem ipsum dolor sit amet, mauris etiam pellentesque aliquam nostra
                    </p>
                </div>
                <div className="aspect-[2/3] h-full w-full min-w-[190px] rounded-2xl bg-module-card-1 text-module-card-1 tablet.sm:bg-module-card-1 tablet.sm:text-module-card-2">
                    <h2 className="p-4 text-lg tablet.sm:text-2xl">Lorem ipsum dolor sit</h2>
                    <p className="p-4">
                        Lorem ipsum dolor sit amet, mauris etiam pellentesque aliquam nostra
                    </p>
                </div>
                <div className="aspect-[2/3] h-full w-full min-w-[190px] rounded-2xl bg-module-card-1 text-module-card-1 tablet.sm:bg-module-card-1 tablet.sm:text-module-card-2">
                    <h2 className="p-4 text-lg tablet.sm:text-2xl">Lorem ipsum dolor sit</h2>
                    <p className="p-4">
                        Lorem ipsum dolor sit amet, mauris etiam pellentesque aliquam nostra
                    </p>
                </div>
                <div className="aspect-[2/3] h-full w-full min-w-[190px] rounded-2xl bg-module-card-1 text-module-card-1 tablet.sm:bg-module-card-1 tablet.sm:text-module-card-2">
                    <h2 className="p-4 text-lg tablet.sm:text-2xl">Lorem ipsum dolor sit</h2>
                    <p className="p-4">
                        Lorem ipsum dolor sit amet, mauris etiam pellentesque aliquam nostra
                    </p>
                </div>
                <div
                    className={clsxm(
                        'aspect-[2/3] h-full w-full min-w-[190px] rounded-2xl',
                        'bg-module-card-1 text-module-card-1',
                        'tablet.sm:bg-module-card-1 tablet.sm:text-module-card-2'
                    )}
                >
                    <h2 className="p-4 text-lg tablet.sm:text-2xl">Lorem ipsum dolor sit</h2>
                    <p className="p-4">
                        Lorem ipsum dolor sit amet, mauris etiam pellentesque aliquam nostra
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Module;
