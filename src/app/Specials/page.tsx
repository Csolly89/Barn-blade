import Daily from '@/components/Daily';
import Weekly from '@/components/Weekly';
import * as React from 'react';


function Specials() {
    return (  
        <div className=''>
            Daily and Weekly specials here
            <Daily />
            <Weekly />
            
        </div>
    );
}

export default Specials;