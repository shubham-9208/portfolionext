'use client'
import { useState } from 'react';

export default function TooltipIcon({ icon: Icon, label }) {
    const [show, setShow] = useState(false);
     if (!Icon) return null;
    return (
        <div
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            style={{ position: 'relative' }}
            
        >
            <Icon />

            {show && (
                <div style={{
                    position: 'absolute',
                    bottom: '-50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#333',
                    color: '#fff',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    fontSize: '12px',
                    whiteSpace: 'nowrap',
                    zIndex: 10,
                    
                }}
                className=' absolute '
                >
                    {label}
                </div>
            )}
        </div>
    );
}
