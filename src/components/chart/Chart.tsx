import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import './chart.scss';

const data = [
  {
    label: 'Jan',
    uv: 4000,
    pv: 2400,
  },
  {
    label: 'Feb',
    uv: 3000,
    pv: 1398,
  },
  {
    label: 'Mar',
    uv: 2000,
    pv: 9800,
  },
  {
    label: 'Apr',
    uv: 2780,
    pv: 3908,
  },
  {
    label: 'May',
    uv: 1890,
    pv: 4800,
  },
  {
    label: 'Jun',
    uv: 2390,
    pv: 3800,
  },
  {
    label: 'Jul',
    uv: 3490,
    pv: 4300,
  },
  {
    label: 'Aug',
    uv: 3490,
    pv: 4300,
  },
  {
    label: 'Sep',
    uv: 3490,
    pv: 4300,
  },
  {
    label: 'Oct',
    uv: 3490,
    pv: 4300,
  },
  {
    label: 'Nov',
    uv: 3490,
    pv: 4300,
  },
  {
    label: 'Dec',
    uv: 3490,
    pv: 4300,
  },
];

const Chart = () => {
  return (
    <div className='chart base-component'>
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#39da8a' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#39da8a' stopOpacity={0} />
            </linearGradient>
            <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#5a8dee' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#5a8dee' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='label' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' className='chart__grid' />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='uv'
            stroke='#39da8a'
            fillOpacity={1}
            fill='url(#colorUv)'
          />
          <Area
            type='monotone'
            dataKey='pv'
            stroke='#5a8dee'
            fillOpacity={1}
            fill='url(#colorPv)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
