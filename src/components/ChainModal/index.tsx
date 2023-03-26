import React, { useContext, useState } from 'react';
import { Button, Modal } from 'antd';
import { Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {CHAINS} from "../../contants/chains"
import { ChainContext } from '../Context';


const ChainModal = ({isModalOpen,setIsModalOpen,isDep}:any) => {
  


  const onSearch = (value: string) => console.log(value);
  const { departureChain, setDepartureChain,destinationChain, setDestinationChain } = useContext(ChainContext);
 

 

 const selectChain = (d:Object)=>{
  if(isDep){
  setDepartureChain(d)

  }
else{

  setDestinationChain(d)
}
  handleCancel()
 }


  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>

      <Modal  open={isModalOpen}  onCancel={handleCancel} width={400} bodyStyle={{ height:450, }} style={{top:60,borderRadius: 20,  overflow: "hidden"}} footer={null}>
        <div className='text-center text-xl font-medium'>
            {isDep? "Select Departure Chain":"Select Destination Chain"}
        </div>
        <Input size="large" placeholder="Search" suffix={<SearchOutlined />} style={{borderRadius:100, marginTop:20}} />
        <div className='mt-6'>

        { CHAINS?.map((data,i)=>{
            return(
                <div onClick={()=>selectChain(data)} className='h-12 flex mt-2 cursor-pointer space-x-10 bg-white shadow border rounded-full hover:bg-gray-200'>
                <div className='' >
            <img className='h-8 mt-2 ml-5' src={data?.symbol} />
            </div>
        <div className='text-lg font-medium mt-2'>
        {data?.name}
        </div>

        </div>
            )
        })
        }

        </div>
      </Modal>
    </>
  );
};

export default ChainModal;