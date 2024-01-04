'use client'
import { Timeline, Button, Space, notification } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';
import WalletConnectBtn from '@/components/WalletConnectBtn';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Web3, { Contract } from 'web3';
import { useSearchParams } from 'next/navigation';
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
  const walletAddress = useAppSelector(state => state.wallet.address);
  const orisNftContract = useAppSelector(state => state.orisNft.contractInstance);
  const _dispatch = useAppDispatch();
  const _searchParams = useSearchParams();

  const [tasks, setTasks] = useState<ITaskCheck[]>([
    {
      index: 1,
      content: "Connect wallet",
      hasDone: false,
      buttonTitle: "Connect Now",
      onClickDoTask: connectWallet,
      btnLoading: false,
      btnTemplate: 1
    },
    {
      index: 2,
      content: "Connect facebook",
      hasDone: false,
      buttonTitle: "Connect Now",
      onClickDoTask: connectFb,
      btnLoading: false
    },
    {
      index: 3,
      content: "Like fb page",
      hasDone: false,
      buttonTitle: "Do Now",
      onClickDoTask: likeFbPage,
      btnLoading: false
    },
    {
      index: 4,
      content: "Share a post on feed",
      hasDone: false,
      buttonTitle: "Share Now",
      onClickDoTask: shareFbPost,
      btnLoading: false
    }
  ]);
  const [currentTask, setCurrentTask] = useState<number>(1);

  function connectWallet(item: any, setCurrentTask: Function) {
    return () => {
      setCurrentTask(3);
    };
  }
  function connectFb(item: any, setCurrentTask: Function) {
    return async () => {

      localStorage.setItem('hasConnectedFb', '1');
      setCurrentTask(3);

    };
  }
  function likeFbPage(item: any, setCurrentTask: Function) {
    return async () => {
      localStorage.setItem('hasLikedFbPage', '1');
      setCurrentTask(4);
    };
  }
  function shareFbPost(item: any, setCurrentTask: Function) {
    return async () => {
      localStorage.setItem('hasSharedFbPost', '1');
      setCurrentTask(5);

    };
  }

  const [hasConnectedWallet, setHasConnectedWallet] = useState<boolean>(false);

  const claimNft = async () => {
    console.log('claim nft');
    try {
      // @ts-ignore
      await orisNftContract.methods.claimOrisNft(_searchParams.get("id")).call();
      setCurrentTask(6);
      localStorage.removeItem('hasConnectedFb')
      localStorage.removeItem('hasLikedFbPage')
      localStorage.removeItem('hasSharedFbPost')
      notification.success({
        message: "Claimed successfully!"
      })
    }
    catch (err) {
      console.log("begin mint failed: ", err);
      notification.error({
        message: "Failed to claim!"
      })
    }
  }


  const [nftDetail, setNftDetail] = useState<string>("");
  const initialNftList = async () => {
    try {
      // @ts-ignore
      const nfOwnerAddress = await orisNftContract.methods.ownerOf(_searchParams.get("id")).call();
      if (nfOwnerAddress == '0x0000000000000000000000000000000000000000') throw 'not exist'
      if (nfOwnerAddress == 'walletAddress') notification.warning({
        message: "You has claimed this nft!"
      })
      else if (nfOwnerAddress != '0x04a4c59A13F4eDC0990f4E153841C4251021aed8') {
        notification.error({
          message: "This nft has claimed!"
        })
      }
      // @ts-ignore
      const result = await orisNftContract.methods.detailNft(_searchParams.get("id")).call();
      setNftDetail(result.name)
      console.log("nftList", result);

    } catch (err) {
      notification.error({
        message: "This nft isn't exist!"
      })
    }
  }

  useEffect(() => {
    // 0x04a4c59A13F4eDC0990f4E153841C4251021aed8
    // @ts-ignore
    if (walletAddress != '') {// @ts-ignore
      setHasConnectedWallet(true);
      setCurrentTask(2);
      if (localStorage.getItem('hasLikedFbPage'))
        setCurrentTask(3);
      if (localStorage.getItem('hasSharedFbPost'))
        setCurrentTask(5);
    }
    initialNftList();

  }, [walletAddress]);
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
          <p className='text-center'>Oris's {nftDetail}</p>
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


