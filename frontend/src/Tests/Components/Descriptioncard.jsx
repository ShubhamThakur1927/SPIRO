import React from 'react'

function Descriptioncard({ title, referenceLink }) {
    return (
      <div className="flex-1 border bg-white p-4 rounded-lg shadow-md">
        <h2 className="font-semibold">{title}</h2>
        <h2 className="font-semibold mt-2">REFERENCE</h2>
        <a
          href={referenceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline text-sm"
        >
          Reference Link
        </a>
      </div>
    );
  }

export default Descriptioncard
