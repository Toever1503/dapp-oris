import WalletConnectBtn from "@/components/WalletConnectBtn";


const taskList = [
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
];
function connectWallet(item: any, setCurrentTask: Function) {
    return () => {
        setCurrentTask(3);
    };
}
function connectFb(item: any, setCurrentTask: Function) {
    return () => {
        localStorage.setItem('hasConnectedFb', '1');
        setCurrentTask(3);
    };
}
function likeFbPage(item: any, setCurrentTask: Function) {
    return () => {
        localStorage.setItem('hasLikedFbPage', '1');
        setCurrentTask(4);
    };
}
function shareFbPost(item: any, setCurrentTask: Function) {
    return () => {
        localStorage.setItem('hasSharedFbPost', '1');
        setCurrentTask(5);
    };
}

export default taskList;