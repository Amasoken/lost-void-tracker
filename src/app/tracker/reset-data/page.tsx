'use client';

import Button from '@/components/common/Button';
import MainLayout from '@/components/common/MainLayout';
import Link from 'next/link';

export default function ResetPage() {
    const handleClearState = () => {
        if (confirm('Reset all data? This cannot be undone')) {
            localStorage.setItem('persist:root', '{}');

            alert('Data has been cleared');
            window.location.reload();
        }
    };

    return (
        <MainLayout>
            <div className='m-2'>
                <Button className='h-12 text-xl' onClick={handleClearState}>
                    Reset Data
                </Button>
            </div>

            <Link className='m-2' href='/'>
                <Button className='h-12 text-xl'>Main page</Button>
            </Link>

            <Link className='m-2' href='/tracker'>
                <Button className='h-12 text-xl'>Lost Void Tracker</Button>
            </Link>
        </MainLayout>
    );
}
