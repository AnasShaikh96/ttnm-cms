import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface ITextEditor {
  value: string,
  setValue: any
}


export default function TextEditor({ value, setValue }: ITextEditor) {


  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  return <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} formats={formats} />;

}
