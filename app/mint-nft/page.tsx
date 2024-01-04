'use client'
import { Timeline, Button, Space } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';
import taskList from "./scripts/tasks";
interface ITaskCheck {
  index: number;
  content: string | ReactNode;
  hasDone: boolean;
  buttonTitle: string;
  onClickDoTask: Function;
  btnLoading: boolean;
}
export default async function Page() {
  const [tasks, setTasks] = useState<ITaskCheck[]>(taskList);
  const [currentTask, setCurrentTask] = useState<number>(1);

  useEffect(() => {
    // 0x04a4c59A13F4eDC0990f4E153841C4251021aed8
    
  }, []);
  return (
    <div className="w-full justify-between flex items-center !text-white">
      <div className='w-1/2'>
        <div className='w-[70%] h-fit mx-auto relative'>
          <Space className='items-center'>
            <Link href='/' className='text-white'>
              <ArrowLeftOutlined className='hover:scale-[1.05] duration-150 easy-in-out cursor-pointer' />
            </Link>
            <p className='text-white'>Oris's Quest</p>
          </Space>
          <img className='w-full h-full' src='https://tabi.lol/assets/iron-44d84a21.png' alt='orisu-nft' />
          <img className='absolute bottom-[70px] right-0 w-[100px] h-[100px]' src='https://tabi.lol/assets/feather-406bad7d.png' alt='orisu-nft' />
          <p className='text-center'>Oris's feather</p>
        </div>

        <div className='flex justify-center mt-[15px]'>
          <Button type='primary'>Claim Now</Button>
        </div>
      </div>

      <div className='w-1/2'>
        <Timeline
          items={tasks.map(item => ({
            dot: <>
              <div className='px-[10px] text-black'>
                {item.index}
              </div>
            </>,
            children: (
              <Space>
                <p className='text-white'>{item.content}</p>
                {
                  currentTask === item.index &&
                  <Button type='primary' onclick={item.onClickDoTask(item, setCurrentTask)} loading={item.btnLoading}>{item.buttonTitle}</Button>
                }
              </Space>
            ),
          }))}
        />

        <div className='text-white'>

          <p >
            All Participants (-1)
          </p>
          <div className='flex '>
            {
              [1, 2, 3, 4, 5].map(() => <img className='w-[35px] h-[35px] block rounded-full' src='https://tabi.lol/img/header/2.png' alt='participant' />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}


