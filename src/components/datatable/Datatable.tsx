import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import './datatable.scss';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 150 },
  {
    field: 'product',
    headerName: 'Product',
    width: 240,
    renderCell: (params: GridValueGetterParams) => {
      return (
        <div className='datatable__cell-img'>
          <img src={params.row.img} alt={params.row.product} />
          {params.row.product}
        </div>
      );
    },
  },
  { field: 'customer', headerName: 'Customer', width: 150 },
  {
    field: 'date',
    headerName: 'Date',
    // type: 'date',
    width: 150,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    // type: 'number',
    width: 150,
  },
  {
    field: 'method',
    headerName: 'Payment Method',
    width: 240,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
  },
];

const rows = [
  {
    id: 1143155,
    product: 'Acer Nitro 5',
    img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
    customer: 'John Smith',
    date: '1 March',
    amount: 785,
    method: 'Cash on Delivery',
    status: 'Approved',
  },
  {
    id: 2235235,
    product: 'Playstation 5',
    img: 'https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg',
    customer: 'Michael Doe',
    date: '1 March',
    amount: 900,
    method: 'Online Payment',
    status: 'Pending',
  },
  {
    id: 2342353,
    product: 'Redragon S101',
    img: 'https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg',
    customer: 'John Smith',
    date: '1 March',
    amount: 35,
    method: 'Cash on Delivery',
    status: 'Pending',
  },
  {
    id: 2357741,
    product: 'Razer Blade 15',
    img: 'https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg',
    customer: 'Jane Smith',
    date: '1 March',
    amount: 920,
    method: 'Online',
    status: 'Approved',
  },
  {
    id: 2342355,
    product: 'ASUS ROG Strix',
    img: 'https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg',
    customer: 'Harold Carol',
    date: '1 March',
    amount: 2000,
    method: 'Online',
    status: 'Pending',
  },
  {
    id: 1143155,
    product: 'Acer Nitro 5',
    img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
    customer: 'John Smith',
    date: '1 March',
    amount: 785,
    method: 'Cash on Delivery',
    status: 'Approved',
  },
  {
    id: 2235235,
    product: 'Playstation 5',
    img: 'https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg',
    customer: 'Michael Doe',
    date: '1 March',
    amount: 900,
    method: 'Online Payment',
    status: 'Pending',
  },
  {
    id: 2342353,
    product: 'Redragon S101',
    img: 'https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg',
    customer: 'John Smith',
    date: '1 March',
    amount: 35,
    method: 'Cash on Delivery',
    status: 'Pending',
  },
  {
    id: 2357741,
    product: 'Razer Blade 15',
    img: 'https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg',
    customer: 'Jane Smith',
    date: '1 March',
    amount: 920,
    method: 'Online',
    status: 'Approved',
  },
];

const Datatable = () => {
  return (
    <div className='datatable base-component'>
      <h2 className='datatable__title'>Latest Transactions</h2>
      <div className='datatable__container'>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Datatable;
