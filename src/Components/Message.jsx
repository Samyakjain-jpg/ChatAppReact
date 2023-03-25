import React from 'react'
import { HStack,Avatar,Text } from '@chakra-ui/react'
const Message = ({text,uri,user = "other"}) => {
  return (
   <HStack alignSelf={user==="me"?"flex-end":"flex-start" } bg={"gray.100"} borderRadius={"base"} paddingY={"2"} padding={user==="me"?"4":"2"}> 
    <Text>{text}</Text>
    {
      user === "other" && <Avatar src={uri} />
    }
    {
      user === "me" && <Avatar src={uri} />
    }
   </HStack>
  )
}

export default Message
