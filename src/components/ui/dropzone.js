"use client"
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const Dropzone = () => {

  const onDrop = useCallback((acceptedFiles) => {debugger
    // Filter and handle only CSV files
    const csvFiles = acceptedFiles.filter((file) => file.type === 'text/csv');

    // Perform actions with the CSV files, such as uploading to a server
    csvFiles.forEach((file) => {
      console.log('Uploaded CSV file:', file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'text/csv', // Restrict to CSV files
  });

  return (


      <div {...getRootProps()} className={isDragActive ? 'dropzone-active' : 'dropzone'}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className='text-black'>Drop the CSV file here...</p>
        ) : (
          <p className='text-black'>Drag and drop a CSV file here, or click to select a file</p>
        )}
      </div>

  );
};


export default Dropzone;