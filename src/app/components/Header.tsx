import React from 'react';
import { clsxm } from '../utils/tailwind';
import clsx from 'clsx';

const Header = () => {
    console.log('Commit 3');
    return (
        <div className="z-10 flex h-12 w-full items-center justify-center border-b border-b-header-1 bg-header-1 text-lg text-header-1 ">
            Header
        </div>
    );

    // return (
    //     <div
    //         className={clsx(
    //             'z-10 flex h-12 w-full items-center justify-center',
    //             'border-b border-b-header-1',
    //             'text-lg text-general-default',
    //             false ? 'bg-header-1' : 'bg-header-2',
    //             // 'bg-header-1'
    //         )}
    //     >
    //         Header
    //     </div>
    // );
};

export default Header;
