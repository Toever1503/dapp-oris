'use client'
import { Timeline, Button, Space } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';
import taskList from "./scripts/tasks";
import WalletConnectBtn from '@/components/WalletConnectBtn';
interface ITaskCheck {
  index: number;
  content: string | ReactNode;
  hasDone: boolean;
  buttonTitle: string;
  onClickDoTask: Function;
  btnLoading: boolean;
  btnTemplate?: ReactNode
}

export default function Page() {
  const [tasks, setTasks] = useState<ITaskCheck[]>(taskList);
  const [currentTask, setCurrentTask] = useState<number>(1);

  const [hasConnectedWallet, setHasConnectedWallet] = useState<boolean>(false);

  const claimNft = () => {
    console.log('claim nft');

    setCurrentTask(6);
  }
  useEffect(() => {
    // 0x04a4c59A13F4eDC0990f4E153841C4251021aed8
    // @ts-ignore
    if (ethereum.address) {// @ts-ignore
      setHasConnectedWallet(true);
      setCurrentTask(2);
      if (localStorage.getItem('hasLikedFbPage'))
        setCurrentTask(3);
      if (localStorage.getItem('hasSharedFbPost'))
        setCurrentTask(5);
    }

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
          <img loading='lazy' className='w-full h-full' src='https://tabi.lol/assets/iron-44d84a21.png' alt='orisu-nft' />
          <img loading='lazy' className='absolute bottom-[70px] right-0 w-[100px] h-[100px]' src='https://tabi.lol/assets/feather-406bad7d.png' alt='orisu-nft' />
          <p className='text-center'>Oris's feather</p>
        </div>

        <div className='flex justify-center mt-[15px]'>
          {
            currentTask == 5 &&
            <Button type='primary' onClick={claimNft}>Claim Now</Button>
          }

        </div>
      </div>

      <div className='w-1/2'>
        <Timeline
          items={tasks.map((item: any, index: number) => ({
            key: index,
            dot: <>
              <div className='px-[10px] text-black'>
                {
                  currentTask > item.index ? 'OK' : item.index
                }
              </div>
            </>,
            children: (
              <Space>
                <p className='text-white'>{item.content}</p>
                {
                  currentTask === item.index &&
                  (
                    item.btnTemplate ? <>
                      <WalletConnectBtn />
                    </> :
                      <Button type='primary' onClick={item.onClickDoTask(item, setCurrentTask)} loading={item.btnLoading}>{item.buttonTitle}</Button>)
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
              [1, 2, 3, 4, 5].map((i) => <img key={i} className='w-[35px] h-[35px] block rounded-full' src='https://tabi.lol/img/header/2.png' alt='participant' />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}


