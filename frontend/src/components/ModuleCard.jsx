import React from 'react';
import LectureList from './LectureList';

function ModuleCard({ title, items = [], onItemSelect, icon }) {
    return (
        <div className="w-auto h-screen p-4">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <LectureList items={items} onItemSelect={onItemSelect} />
        </div>
    );
}

export default ModuleCard;
