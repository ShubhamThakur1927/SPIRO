import React, { useState } from 'react'
import { useTeacherStore } from '../Stores/teacherStores';

function Testubg() {
  const [file, setFile] = useState();
  const {Upload, error} = useTeacherStore();
  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file)
    console.log(file);
    await Upload(formData);
  }

  const handleChange = event => {
    const file = event.target.files[0];
    setFile(file);
  }
  return (
    <>
    <div className='text-display font-semibold text-center'>Testubg</div>

    <form onSubmit={submit} >
      <input type="file" accept='image/*' name="image" onChange={handleChange} />
      <button type='submit' className='bg-primary py-4 px-10 rounded-full'>Submit</button>
    </form>
    {error && <div>{error}</div>}
    </>
  )
}

export default Testubg