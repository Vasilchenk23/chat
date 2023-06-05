
import React, { useState } from 'react';
import styled from 'styled-components';



const MainDisplay = styled.div`
display: flex;
  
`
const MainLeftBlock = styled.div`
width: 420px;
height: 883px;
border: 3px solid black;
`
const Input = styled.input`
width: 330px;
height: 40px;
border: 2px solid black;
border-radius: 5px;
margin: 5px 0px 0px 10px;
font-size: 28px;
padding: 0px 0px 0px 10px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
::placeholder{
  color: black;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

`
const ButtonSearch = styled.button`
margin: 9px 0px 0px 10px;
width: 30px;
height: 30px;
display: flex;
margin: -38px 0px 0px 365px;
border: 2px solid black;
border-radius: 5px;
cursor: pointer;
`
const ButtonBlock = styled.div`
  width: 600px;
  height: 400px;
  border-radius: 60px;
  border: 3px solid black;
  background-color: white;
  position: absolute;
  top: 16%;
  left: 20%;
`;


const Chats = styled.div`
`
const Chat1 = styled.div`
margin: 30px 0px 0px 0px;
height: 70px;
width: 420px;
border-top: 1px solid black;
font-size: 10px;
display: flex;
background-color: ${({ selected }) => (selected ? 'grey' : 'inherit')};
`
const User = styled.div`
margin: 20px 0px 0px 0px;
font-size: 20px;
cursor: pointer;
`
const Indicator = styled.div`
width: 20px;
height: 20px;
border-radius: 10px;
background-color: green;
margin: 25px 0px 0px 190px;
`

const FotoUser = styled.div`
background-color: black;
height: 50px;
width: 50px;
border-radius: 30px;
margin: 10px;
`

const Chat2 = styled.div`
margin: 0px 0px 0px 0px;
height: 70px;
width: 420px;
border-top: 1px solid black;
display: flex;
background-color: ${({ selected }) => (selected ? 'grey' : 'inherit')};
`
const Chat3 = styled.div`
margin: 0px 0px 0px 0px;
height: 70px;
width: 420px;
border-top: 1px solid black;
display: flex;
background-color: ${({ selected }) => (selected ? 'grey' : 'inherit')};
`
const Chat4 = styled.div`
margin: 0px 0px 0px 0px;
height: 70px;
width: 420px;
border-top: 1px solid black;
display: flex;
background-color: ${({ selected }) => (selected ? 'grey' : 'inherit')};
`
const GroupChat = styled.div`
margin: 0px 0px 0px 0px;
height: 70px;
width: 420px;
border-top: 1px solid black;
border-bottom: 1px solid black;
display: flex;
cursor: pointer;
background-color: ${({ selected }) => (selected ? 'grey' : 'inherit')};
`
const GroupChatName = styled.div`
margin: 20px 0px 0px 150px;
font-size: 25px;
color: black;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
const FooterMadeByOstolex = styled.div`
margin: 395px 0px 0px 0px;
height: 60px;
width: 420px;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(180, 184, 181);
`
const MainRightBlock = styled.div`
width: 1168px;
height: 883px;
border: 3px solid black;
display: ${props => (props.isVisible ? 'block' : 'none')};
background-color: white;
`
const InputChat = styled.input`
height: 50px;
width: 1000px;
font-size: 30px;
color: black;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
border: none;
::placeholder{
  color: black;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
:active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
}
`
const HeaderChat = styled.div`
width: 1168px;
height: 70px;
border: 1px solid black;
display: flex;
align-items: center;
`
const H1User = styled.h1`
font-size: 20px;
margin-left: 20px;
cursor: pointer;
`
const Call = styled.div`
height: 20px;
width: 20px;
background-color: black;
margin: 0px 0px 0px 900px;
cursor: pointer;
`
const Extension = styled.div`
height: 20px;
width: 20px;
background-color: black;
margin: 0px 0px 0px 20px;
cursor: pointer;
`
const SendBlock = styled.div`
display: flex;
background-color: white;
margin: 752px 0px 0px;
border-top: 3px solid black;
`
const Inpu = styled.input`
  display: none;
`
const Label = styled.label`
padding: 20px 10px;
width: 100px;
background: #333;
color: #FFF;
text-transform: uppercase;
display: block;
font-family: Arial, Helvetica, sans-serif;
text-align: center;
:hover{
  color: #333;
  background: #FFF;
}
`
const VoiceMessage = styled.div`
width: 80px;
margin: 0px 20px;
background: #333;
color: #FFF;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
text-transform: uppercase;
font-family: Arial, Helvetica, sans-serif;
:hover{
  color: #333;
  background: #FFF;
}
`
const Emoji = styled.div`
width: 80px;
margin: 0px 20px;
background: #333;
color: #FFF;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
text-transform: uppercase;
font-family: Arial, Helvetica, sans-serif;
:hover{
  color: #333;
  background: #FFF;
}
`
const Setting = styled.div`
width: 80px;
margin: 0px 20px;
background: #333;
color: #FFF;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
text-transform: uppercase;
font-family: Arial, Helvetica, sans-serif;
:hover{
  color: #333;
  background: #FFF;
}
`
const SendMessage = styled.div`
width: 80px;
margin: 0px 20px;
background: #333;
color: #FFF;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
text-transform: uppercase;
font-family: Arial, Helvetica, sans-serif;
:hover{
  color: #333;
  background: #FFF;
}
`

const MessageUser = styled.div`
width: 200px;
height: 100px;
`
const MessageUser2Two = styled.div`

`
const BlackBlock = styled.div`
  width: 200px;
  height: 80px;
  position: absolute;
  top: 750px;
  left: 1375px;
  transform: translate(-50%, -50%);
  color: white;
  background-color: black;
  font-size: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: ${props => (props.isVisible ? 'flex' : 'none')}; /* Use "flex" instead of "block" */
`;
const InfoLorem = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
  position: absolute;
  top: -100px;
  left: 200px;
  border-radius: 20px 20px 20px 0px;
  color: white;
  padding: 5px 0px 0px 4px;
  display: ${props => (props.isVisible ? 'flex' : 'none')}; /* Use "flex" instead of "block" */
`
const InfoLorem1 = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
  position: absolute;
  top: -100px;
  left: 200px;
  border-radius: 20px 20px 20px 0px;
  color: white;
  padding: 5px 0px 0px 4px;
  display: ${props => (props.isVisible ? 'flex' : 'none')}; /* Use "flex" instead of "block" */
`

const EmojiBlock = styled.div`
width: 280px;
height: 320px;
position: absolute;
top: 510px;
left: 1250px;
background-color: black;
display: ${props => (props.isVisible ? 'flex' : 'none')}; /* Use "flex" instead of "block" */
`
const Option = styled.div`
  width: 205px;
  height: 100px;
  margin: 173px 0px 0px -130px;
  background-color: white;
  border-left: 1px solid grey;
  border-bottom: 1px solid grey;
  display: ${props => (props.isVisible ? 'block' : 'none')};
  font-size: 20px;
`;

const OptionBlokUser = styled.div`
  width: 600px;
  height: 400px;
  border-radius: 60px;
  border: 3px solid black;
  background-color: white;
  position: absolute;
  top: 16%;
  left: 40%;
  
`

const Aperance = styled.div`
  width: 600px;
  height: 400px;
  border-radius: 60px;
  border: 3px solid black;
  background-color: white;
  position: absolute;
  top: 16%;
  left: 40%;
`

function App() {
  const [isButtonClicked, setButtonClicked] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isMainRightBlockVisible, setMainRightBlockVisible] = useState(false);
  const [isSettingClicked, setSettingClicked] = useState(false);
  const [isInfoClicked, setInfoClicked] = useState(false);
  const [isInfoClicked1, setInfoClicked1] = useState(false);
  const [isEmojiClicked, setEmojiClicked] = useState(false);
  const [isExtensionClicked, setExtensionClicked] = useState(false);
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);
  const [isAperanceVisible, setAperanceVisible] = useState(false);



  const handleUserClick = (user) => {
    setSelectedUser(user);
    setMainRightBlockVisible(true);
  };

  const handleButtonClick = () => {
    setButtonClicked((prevState) => !prevState);
  };

  const handleBlockUserClick = () => {
    setConfirmationVisible((prevState) => !prevState);
  };

  const handleAperanseClick = () => {
    setAperanceVisible((prevState) => !prevState);
  };
  
  

  return (
    <>
      <MainDisplay>
        <MainLeftBlock>
         <div className='Search_block'>
            <Input type="text" placeholder='Search' name="name" />
            <ButtonSearch onClick={handleButtonClick}></ButtonSearch>
            {isButtonClicked && <ButtonBlock />}
         </div>
         <Chats>
        <Chat1 selected={selectedUser === 'kastet99.near'}>
          <FotoUser></FotoUser>
          <User onClick={() => handleUserClick('kastet99.near')}>kastet99.near</User>
          <Indicator></Indicator>
        </Chat1>
        <Chat2 selected={selectedUser === 'let45fc.near'}>
          <FotoUser></FotoUser>
          <User onClick={() => handleUserClick('let45fc.near')}>let45fc.near</User>
        </Chat2>
        <Chat3 selected={selectedUser === 'max23black.near'}>
          <FotoUser></FotoUser>
          <User onClick={() => handleUserClick('max23black.near')}>max23black.near</User>
        </Chat3>
        <Chat4 selected={selectedUser === 'denchik.near'}>
          <FotoUser></FotoUser>
          <User onClick={() => handleUserClick('denchik.near')}>denchik.near</User>
        </Chat4>
        <GroupChat selected={selectedUser === 'Group chat'}>
          <GroupChatName onClick={() => handleUserClick('Group chat')}>Group chat</GroupChatName>
        </GroupChat>
      </Chats>
            <FooterMadeByOstolex>made by OSTOLEX</FooterMadeByOstolex>
        </MainLeftBlock>
        <MainRightBlock isVisible={isMainRightBlockVisible}>
          <HeaderChat>
            <H1User>{selectedUser}</H1User>
             <Call></Call>
             <Extension onClick={() => setExtensionClicked(!isExtensionClicked)}></Extension>
             <Option isVisible={isExtensionClicked}>
              <ul>
                <li  onClick={handleBlockUserClick}>Block user</li>
                <li>Notifications</li>
                <li onClick={handleAperanseClick}>Aperance</li>
              </ul>
             </Option>
             {isConfirmationVisible && (
              <OptionBlokUser>
                <p style={{ padding: '40px 80px 0px 20px', alignItems: 'center', margin: '100px 0px 0px 80px' }}>Are you sure that you want to (un)block <b>{selectedUser}</b>? This user won't (will) be able to text you from this account.</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '150px 0px'}}>
                <button style={{ margin: '0px 0px 0px 150px', width: '100px', height: '35px'}}>Yes</button>
                <button style={{ margin: '0px 130px 0px 0px', width: '100px', height: '35px'}}>No</button>
                </div>
              </OptionBlokUser>
             )}
             {isAperanceVisible && (
              <Aperance>
                <div style={{ display: 'flex', justifyContent: 'space-around', margin: '100px 0px'}}>
                  <div style={{width: '50px', height: '50px', border: '2px solid black', borderRadius: '10px'}}></div>
                    <div style={{width: '50px', height: '50px', border: '2px solid black', borderRadius: '10px'}}></div>
                    <div style={{width: '50px', height: '50px', border: '2px solid black', borderRadius: '10px'}}></div>
                  <div style={{width: '50px', height: '50px', border: '2px solid black', borderRadius: '10px'}}></div>
                </div>
                <button style={{margin: '50px 0px 0px 230px', width: '130px', height: '35px' }}>Save</button>
              </Aperance>
             )}
          </HeaderChat>
          <BlackBlock isVisible={isSettingClicked}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div style={{ marginRight: '10px' }}>efficency</div>
    <input className='checkbox' type="checkbox" style={{ marginRight: '10px'}} />
    <div>privacy</div>
    <button onClick={() => setInfoClicked(!isInfoClicked)} style={{width: '5px', height: '16px', borderRadius: '20px', fontSize: '10px' }}>
    i
      <InfoLorem isVisible={isInfoClicked}>
        Lorem ipsum blah
      </InfoLorem>
    </button>
  </div>
  <div style={{ display: 'flex', alignItems: 'center', margin: '0px 0px 0px 40px' }}>
    <div style={{ marginRight: '10px' }}>salt</div>
    <input className='checkbox' type="checkbox" style={{ marginRight: '10px'}} />
    <div>no salt</div>
    <button onClick={() => setInfoClicked1(!isInfoClicked1)} style={{width: '5px', height: '16px', borderRadius: '20px' }}>
      i
      <InfoLorem1 isVisible={isInfoClicked1}>
        Lorem ipsum
      </InfoLorem1>
    </button>
  </div>
</BlackBlock>
      <SendBlock >
        <form action=''>
          <div>
            <Label for="arquivo">Send File</Label>
            <Inpu type="file" name="arquivo" id="arquivo"/>
          </div>
        </form>
        <InputChat type="text" placeholder='Write a message...' name="name"/>
        <VoiceMessage>Voice</VoiceMessage>
        <Emoji onClick={() => setEmojiClicked(!isEmojiClicked)}>
          Emoji
          <EmojiBlock isVisible={isEmojiClicked}></EmojiBlock>
        </Emoji>
        <Setting onClick={() => setSettingClicked(!isSettingClicked)}>Setting</Setting>
        <SendMessage>Send</SendMessage>
      </SendBlock>   
        </MainRightBlock>
      </MainDisplay>
    </>
  );
}

export default App;
