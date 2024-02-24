import { Flex, Spin } from "antd";

export default function Loading() {
 
  return (

    <Flex style={{height:"100%",width:"100%"}} align="center" justify="center" >

      <Spin size="large" />
    </Flex>
   
  );
}
