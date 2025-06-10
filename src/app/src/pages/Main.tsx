import { useDemoData } from '@mui/x-data-grid-generator';
import DataGrid from '../components/general/DataGrid';

const visibleFields = [
  'commodity',
  'quantity',
  'filledQuantity',
  'status',
  'isFilled',
  'unitPrice',
  'unitPriceCurrency',
  'subTotal',
  'feeRate',
  'feeAmount',
  'incoTerm',
]

function Main() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    editable: false,
    visibleFields,
  })

  return (
    <section>
      <DataGrid columns={data.columns} rows={data.rows} />
    </section>
  )
}

export default Main
