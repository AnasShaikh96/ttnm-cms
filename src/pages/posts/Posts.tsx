import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Table from "../../components/table/Table";

export default function Posts() {
  const navigate = useNavigate()


  const postHeader = [
    { name: 'Impression', field: 'impression' },
    { name: 'Clicks', field: 'clicks' },
    { name: 'CTR', field: 'ctr' },
    { name: 'Engagement Rate', field: 'engagement_rate' },
  ]

  const postData = [
    {
      id: 'oiasd-oihasdi-poaisjd',
      clicks: 9879,
      impression: 654,
      ctr: 1231,
      engagement_rate: 213
    }
  ]

  const HandleClick = () => {
    navigate('/new-post')
  }


  return (
    <section>
      <div className="flex justify-between mb-10">
        <h2 className="text-2xl font-semibold">Posts</h2>
        <Button title="New Article" onClick={HandleClick} />
      </div>

      <div>
        <Table tableHeaders={postHeader} tableData={postData} />
      </div>
    </section>
  )
}
