import { useState } from "react";
import TextEditor from "../../components/textEditor/TextEditor";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/axiosInstance";


export default function NewPost() {

  const navigate = useNavigate()
  const contentAPI = useAxios()

  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');

  const fetchContentAPI = async () => {

    await contentAPI.post('/blog/create', { title, content: value })
      .then(() => {
        navigate('/posts')
      })
      .catch((err) => console.log(err))

  }


  const fetchDraftContentAPI = async () => {
    await contentAPI.post('/blog/create', { title, content: value, status: 'Inactive' })
      .then(() => {
        navigate('/posts')
      })
      .catch((err) => console.log(err))
  }

  return (
    <section className="p-4">
      <div className="flex justify-between mb-10">
        <h2 className="text-3xl font-semibold">What's in your mind today?</h2>
      </div>

      <div className="mb-12 grid grid-cols-2 " >
        <div>
          <label className="text-xl font-normal" htmlFor="title">
            Blog Title
          </label>
          <input type="text" className="border block px-2 py-2 w-full rounded-lg focus:outline-gray-300" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="flex items-end justify-end">
          <Button title="Save as Draft" variant="secondary" classProps="me-3" onClick={fetchDraftContentAPI} />
          <Button title="Post" variant="primary" onClick={fetchContentAPI} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-4 ">
        <div>
          <TextEditor value={value} setValue={setValue} />
        </div>
        <div className="border border-gray-300">
          <div className="ql-editor prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: value }} />
        </div>
      </div>
    </section>
  )
}