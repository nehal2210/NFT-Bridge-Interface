import Image from "next/image";
import { Card, Carousel, Col, Row } from 'antd';
import Avatar from "boring-avatars";
import { ArrowDownOutlined, CaretDownOutlined } from "@ant-design/icons"
import { useState } from "react";
import ChainModal from "../ChainModal";
import { useContext } from "react";
import { ChainContext } from "../Context";
import Button from "../Button";
import { useRouter } from 'next/navigation';

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
export default function Gallery() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const { departureChain, setDepartureChain, destinationChain, setDestinationChain } = useContext(ChainContext);

    const [isDep,setIsDep] = useState(false);
    const router = useRouter();

    const showDepartureModal = () => {
        setIsDep(true)
        setIsModalOpen(true);
    };

    const showDestinationModal = () => {
        setIsDep(false)
        setIsModalOpen(true);
    };


    const gotoBridge = ()=>{

        if(departureChain?.name && destinationChain?.name){
            router.push('/bridge')
        }
    }


    return (




        <div className="flex justify-center space-x-10 mt-24 ">
            <ChainModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} isDep={isDep} />
            <Card style={{ width: 500, height: 500 }} bordered={false} cover={

                <Carousel autoplay  >
                    <div style={{ overflow: "hidden", height: "600px" }}>
                        <img src={"/nft1.jpeg"} alt="" style={{ height: "100%" }} />
                    </div>
                    <div style={{ overflow: "hidden", height: "600px" }}>

                        <img src={"/nft2.png"} alt="" style={{ height: "100%" }} />
                    </div>

                    <div style={{ overflow: "hidden", height: "600px" }}>
                        <img src={"/nft3.gif"} alt="" style={{ height: "100%" }} />
                    </div>
                    <div style={{ overflow: "hidden", height: "600px" }}>

                        <img src={"/nft4.jpeg"} alt="" style={{ height: "100%" }} />
                    </div>

                </Carousel>


            }>

            </Card>





            <Card style={{ width: 500, height: 500 }} bordered={false}>
                <div className="text-3xl font-bold py-5 text-center">Transfer NFTs
                    between blockchain
                </div>

                <div className="space-y-1 mt-10">
                    <div onClick={showDepartureModal} className="h-16 flex border-2 cursor-pointer   border-black rounded-tl-lg rounded-tr-lg bg-gray-100 hover:bg-gray-300 group">

                        <div className="my-3 mx-3">

                            {departureChain?.symbol ? <img className='h-10 ' src={departureChain?.symbol} />  : <Avatar

                                size={40}
                                name={Math.random().toString()}
                                variant="marble"
                                colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                            />}




                        </div>
                        <div className="text-lg my-4 mx-16">
                            {departureChain?.name ? departureChain?.name : "Select Departure Chain"}
                        </div>

                        <div className="group-hover:text-blue-800">

                            <CaretDownOutlined style={{ fontSize: 23, marginTop: 20, marginLeft: 10 }} />

                        </div>
                    </div>

                    <ArrowDownOutlined style={{ fontSize: 30, color: "blue", marginLeft: 210 }} />

                    <div onClick={showDestinationModal} className="h-16 flex border-2  cursor-pointer   border-black rounded-bl-lg rounded-br-lg bg-gray-100 hover:bg-gray-300 group">

                        <div className="my-3 mx-3">
{destinationChain?.symbol ? <img className='h-10 ' src={destinationChain?.symbol} />   :
                            <Avatar
                                size={40}
                                name={Math.random().toString()}
                                variant="marble"
                                colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                            />}
                        </div>

                        <div className="text-lg my-4 mx-16">

                            {destinationChain?.name ? destinationChain?.name : "Select Destination Chain"}
                        </div >

                        <div className="group-hover:text-blue-800">
                            <CaretDownOutlined style={{ fontSize: 23, marginTop: 20 }} />

                        </div>

                    </div>


                </div>
                
                <div className="mt-7 ml-32">

                <Button clickFunction={gotoBridge} text={"Continue bridging"} isEnabled={destinationChain?.name && departureChain?.name}/>
                </div>
                {/* <button className="h-14 w-60 ml-28 mt-12 text-xl bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
                    Continue bridging</button> */}



            </Card>


        </div>

    )
}