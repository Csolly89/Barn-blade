import { categories } from '@/data';
import Link from 'next/link';
import * as React from 'react';


function Products() {
    return (
        <div className='flex flex-row gap-10'>
            {categories.map((category)=> (
                <Link  href={`/Products/${category.name}`}key={category.id}>
                    <h1>{category.name}</h1>
                    <p>{category.desc}</p>
                </Link>

            ))}

        </div>
    );
}

export default Products;