import {data} from '@/public/data/transaction'
import { NextResponse } from 'next/server'


export function GET() {
    const report = data
    return NextResponse.json(report, {status: 200})
}