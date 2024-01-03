"use client"

import { fetchCounterData, increment, decrement } from "@/store/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import Link from "next/link"
import { Button } from 'antd';


export default function Page() {
  const count = useAppSelector(state => state.counter.value);
  const data = useAppSelector(state => state.counter.data);

  const dispatch = useAppDispatch();
  return (
    <>
      <Link href="/" >Go home</Link>
      Counter page <br />

      default val: {count} <br />
      default data: {data} <br />

      <Button onClick={() => dispatch(increment())}>Up</Button>  <br />
      <Button onClick={() => dispatch(decrement())}>Down</Button> <br />
      <Button onClick={() => dispatch(fetchCounterData())}>Get Data</Button> <br />

    </>
  )
}

