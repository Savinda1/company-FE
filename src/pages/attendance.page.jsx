import React from 'react'
import {  useGetAttendanceQuery } from '@/lib/api/api'
import { useGetInformationQuery } from '@/lib/api/api'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"



export default function attendancepage() {

const { data: attendances, isLoading, isError } =  useGetAttendanceQuery();
const { data: information } = useGetInformationQuery();
//console.log(information );

if (isLoading) {   } 


  return (
    <div>
        

      {information?.map((info) => (
        <div key={info._id || info.id} className="text-center m-24 p-6 bg-orange-500 rounded-lg shadow-md">
          <h1 className="text-lg font-bold mb-4">Name:{info.name}</h1>
          <p className="text-lg text-gray-700">Department:{info.department}</p>
            <p className="text-lg text-gray-700">Register Number:{info.RgNO}</p>
          </div>
        ))}

        
    <div className=" m-24 ">
      <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead>Work Start Time</TableHead>
          <TableHead>Work End Time</TableHead>
          <TableHead className="text-right">Total Work Hours</TableHead>
        </TableRow>
      </TableHeader>
     <TableBody>
  {attendances?.map((attendance) => (
    <TableRow key={attendance._id || attendance.id}>
      <TableCell className="font-medium">{attendance.date}</TableCell>
      <TableCell>{attendance.timeIn}</TableCell>
      <TableCell>{attendance.timeOut}</TableCell>
      <TableCell className="text-right">{attendance.totalHours}</TableCell>
    </TableRow>
  ))}
</TableBody>

    </Table>
    </div>
    </div>
  )
}
