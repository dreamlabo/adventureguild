
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Abanasinia',
    uv: 590,
    total: 3,
    amt: 1400,
  },
  {
    name: 'Istars',
    uv: 868,
    total: 5,
    amt: 1506,
  },
  {
    name: 'Northern Ergoth',
    uv: 1397,
    total: 1,
    amt: 989,
  },
  {
    name: 'Qualinesti',
    uv: 1480,
    total: 7,
    amt: 1228,
  },
  {
    name: 'Solamnia',
    uv: 1520,
    total: 2,
    amt: 1100,
  },
  {
    name: 'Tarsis',
    uv: 1400,
    total: 4,
    amt: 1700,
  },
  {
    name: 'Thorbardin',
    uv: 1400,
    total: 4,
    amt: 1700,
  },
];

export default function CampaignsByRegionsGraph (){
    return (
        <ResponsiveContainer width="100%" height="80%">
            <ComposedChart
                layout="vertical"
                //   width={500}
                height={600}
                data={data}
                fontSize={14}
                fontFamily={'roboto'}
                margin={{
                    top: 10,
                    right: 0,
                    bottom: 0,
                    left: 6,
                }}
                >
                {/* <CartesianGrid stroke="#f5f5f5" /> */}
                <XAxis type="number" 
                    fontFamily={'Roboto, sans-serif'}/>
                <YAxis 
                    dataKey="name" 
                    fontFamily={'Roboto, sans-serif'}
                    tickMargin={5}
                    width={110}
                    type="category" 
                    // scale="band"
            />
                <Tooltip 
                    labelClassName='label'
                    cursor={{ fill: 'rgba(206, 206, 206, 0.2)' }}
                    wrapperStyle={{fontFamily: 'var(--font-roboto', color: 'red', fill: 'rgba(206, 206, 206, 0.2)'}}
                    labelStyle={{color: 'red'}}
                />
            {/* <Legend /> */}
            {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
                <Bar 
                    dataKey="total" 
                    barSize={12} 
                    fill="#3F7AD0" 
                />
            {/* <Line dataKey="uv" stroke="#ff7300" /> */}
            </ComposedChart>
        </ResponsiveContainer>
    );
  }