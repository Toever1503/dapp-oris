import { IProduct } from '@/types/nft/IProduct';
import { Card, Button, Space } from 'antd';

const { Meta } = Card;

export default function ProductItem({ productInfo }: { productInfo: IProduct }) {

    const onClickBuy = () => {

    };

    return <>
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Meta title={productInfo.title}
                description={<>
                    <span className='text-red-400 font-[700]'>
                        {productInfo.price} SHIO (~ ${productInfo.price * 0.5})
                    </span>
                    <Button className='mt-[10px] block' type="primary" onClick={onClickBuy}>
                        Buy now
                    </Button>
                </>} />
        </Card>
    </>
}