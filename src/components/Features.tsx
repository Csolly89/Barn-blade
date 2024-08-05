import { categories } from '@/data';
import Link from 'next/link';
import * as React from 'react';

function Features() {
    return (
        <div className='flex flex-row gap-10'>
        {categories.map((category) => (
            <Link 
                href={{
                    pathname: `/products/${category.name}`,
                }} 
                key={category.id}
            >
                <a>
                    <h1>{category.name}</h1>
                    <p>{category.desc}</p>
                </a>
            </Link>
        ))}
    </div>
    );
}

export default Features;