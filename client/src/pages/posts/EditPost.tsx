import { useEffect, useState } from "react";
import TextEditor from "../../components/textEditor/TextEditor";
import Button from "../../components/Button";
import { useLocation } from "react-router-dom";
import useAPI from "../../hooks/useAPI";


export default function EditPost() {
  const [value, setValue] = useState('');

  const location = useLocation();
  const splitURL = location.pathname.split('/');

  console.log(splitURL[2])

  const getEditBlog = useAPI()


  // useEffect(() => {

  //   let getContent = window.localStorage.getItem('blogContent');
  //   let parseContent = getContent ? JSON.parse(getContent) : '';

  //   setValue(parseContent)
  // }, [])

  // useEffect(() => {
  //   if (value.length !== 0) {
  //     window.localStorage.setItem('blogContent', JSON.stringify(value))
  //   }
  // }, [value])

  const [data, setData] = useState([])

  useEffect(() => {

    const fetchEditData = async () => {

      await getEditBlog.getData(`/blog/findOne?id=${splitURL[2]}`)
    }
    fetchEditData()


  }, [])

  useEffect(() => {

    const getData = getEditBlog.data

    setData(getData)
  }, [getEditBlog.data])



  console.log('data', data)


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
          <input type="text" className="border block px-2 py-2 w-full rounded-lg focus:outline-gray-300" />
        </div>
        <div className="flex items-end justify-end">
          <Button title="Save as Draft" variant="secondary" classProps="me-3" />
          <Button title="Post" variant="primary" />
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