import { useEffect, useState } from "react";
import TextEditor from "../../components/textEditor/TextEditor";
import Button from "../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


export default function EditPost() {
  const [value, setValue] = useState('');

  const navigate = useNavigate()

  const location = useLocation();
  const splitURL = location.pathname.split('/');

  const [title, setTitle] = useState('')

  const [data, setData] = useState<any>([])

  useEffect(() => {

    const fetchEditData = async () => {

      await axios.get(`http://localhost:3001/blog/findOne?id=${splitURL[2]}`).then((data) => setData(data.data.data))

    }
    fetchEditData()

  }, [])

  useEffect(() => {

    setValue(data[0]?.content ?? '')
    setTitle(data[0]?.title ?? '')
  }, [data])



  const UpdatePostAndNavigate = async () => {

    await axios.post(`http://localhost:3001/blog/update`, {
      id: splitURL[2],
      title,
      content: value
    }).then(() => navigate('/posts'))
  }


  return (
    <section>
      <div className="flex justify-between mb-10">
        <h2 className="text-3xl font-semibold">What's in your mind today?</h2>
      </div>

      <div className="mb-12 grid grid-cols-2 " >
        <div>
          <label className="text-xl font-normal" htmlFor="title">
            Blog Title
          </label>
          <input type="text" className="border block px-2 py-2 w-full rounded-lg focus:outline-gray-300" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="flex items-end justify-end">
          <Button title="Save as Draft" variant="secondary" classProps="me-3" />
          <Button title="Post" variant="primary" onClick={() => UpdatePostAndNavigate()} />
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