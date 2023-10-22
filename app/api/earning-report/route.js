import {data} from '@/public/data/earning-report'
import { NextResponse } from 'next/server'

export function GET(request){
    const report = data
    return NextResponse.json(report, {status: 200})
}