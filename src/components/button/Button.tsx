import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
    return <button className='bg-blue-600 text-white p-2 rounded-lg text-[13px] font-[400]' onClick={onClick}>{children}</button>;
}
