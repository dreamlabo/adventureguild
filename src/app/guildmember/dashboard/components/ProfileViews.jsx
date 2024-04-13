import React from 'react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'JAN',
    uv: 4000,
    pv: 3,
    amt: 2400,
  },
  {
    name: 'FEB',
    uv: 3000,
    pv: 35,
    amt: 2210,
  },
  {
    name: 'MAR',
    uv: 2000,
    pv: 32,
    amt: 2290,
  },
  {
    name: 'APR',
    uv: 2780,
    pv: 145,
    amt: 2000,
  },
  {
    name: 'MAY',
    uv: 2780,
    pv: 45,
    amt: 2000,
  },
  {
    name: 'JUN',
    uv: 2780,
    pv: 21,
    amt: 2000,
  },
  {
    name: 'JUL',
    uv: 2780,
    pv: 12,
    amt: 2000,
  },
  {
    name: 'AUG',
    uv: 2780,
    pv: 117,
    amt: 2000,
  },
  {
    name: 'SEP',
    uv: 2780,
    pv: 12,
    amt: 2000,
  },
  {
    name: 'OCT',
    uv: 2780,
    pv: 2,
    amt: 2000,
  },
  {
    name: 'NOV',
    uv: 2780,
    pv: 225,
    amt: 2000,
  },
  {
    name: 'DEC',
    uv: 2780,
    pv: 56,
    amt: 2000,
  },
];

export default function ProfileViews() {
 
    return (
        <div style={{height: 'calc(100% - 16px)'}} className='campaigns-by-region--wrapper'>
            <h2 className='overview-components-header'>Profile Views</h2>
            <div style={{height: '100%'}}>
                <ResponsiveContainer width="100%" height="82.5%">
                    <LineChart
                        // width={500}
                        // height={300}
                        data={data}
                        fontSize={12}
                    
                        margin={{
                        top: 15,
                        right: 11,
                        left: 0,
                        bottom: 5,
                        }}
                        >
                        <CartesianGrid  
                            stroke={'#75726B'} 
                            opacity={'0.5'} 
                        />
                        <XAxis dataKey="name"  
                            fontFamily={'Roboto, sans-serif'} />
                        <YAxis fontFamily={'Roboto'}
                            width={30}/>
                        <Tooltip 
                            cursor={{stroke: '#3F7AD0', strokeWidth: 1 }}  
                            fontFamily={'roboto'}
                        />
                        {/* <Legend /> */}
                        <Line 
                            type="monotone" 
                            dataKey="pv" 
                            stroke="#3F7AD0"  
                            activeDot={{ r: 4 }} 
                            dot={{ fill: '#3F7AD0', r: 4}}
                        />
                        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
      );
}