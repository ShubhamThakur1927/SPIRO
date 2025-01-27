import React from 'react';

function LectureList({ items, onItemSelect }) {
    return (
        <ul className="lectures-list mx-2 grid gap-2">
            {Array.isArray(items) && items.length > 0 ? (
                items.map((item) => (
                    <li
                        key={item.value} // Use unique `value` as the key
                        onClick={() => onItemSelect && onItemSelect(item.value)}
                        className='w-auto h-auto cursor-pointer bg-white rounded-xl p-4'
                    >
                        {item.label}
                    </li>
                ))
            ) : (
                <li className="text-gray-500">No lectures available</li>
            )}
        </ul>
    );
}

export default LectureList;
