import Table from "../../components/table/Table"

export default function Drafts() {

  const postHeader = [
    { name: 'Impression', field: 'impression' },
    { name: 'Clicks', field: 'clicks' },
    { name: 'CTR', field: 'ctr' },
    { name: 'Engagement Rate', field: 'engagement_rate' },
  ]

  const postData = [
    {
      id: 'uasdoh-piasdpij-kasdpij',
      clicks: 9879,
      impression: 654,
      ctr: 1231,
      engagement_rate: 213
    }
  ]

  return (
    <section>
      <div className="flex justify-between mb-10">
        <h2 className="text-2xl font-semibold">Drafts</h2>
      </div>
      <div>
        <Table tableData={postData} tableHeaders={postHeader} />
      </div>
    </section>

  )
}
