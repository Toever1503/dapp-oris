
import { useWeb3Modal } from '@web3modal/wagmi/react'


const taskList = [
    {
        index: 1,
        content: "Connect wallet",
        hasDone: false,
        buttonTitle: "Connect Now",
        onClickDoTask: connectWallet,
        btnLoading: false
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
        content: "Follow page",
        hasDone: false,
        buttonTitle: "Follow Now",
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
];
function connectWallet(item: any, setCurrentTask: Function) {
    const { open } = useWeb3Modal()
    return () => {
        open();
    };
}
function connectFb(item: any, setCurrentTask: Function) {
    return () => {

    };
}
function likeFbPage(item: any, setCurrentTask: Function) {
    return () => {

    };
}
function shareFbPost(item: any, setCurrentTask: Function) {
    return () => {

    };
}

export default taskList;