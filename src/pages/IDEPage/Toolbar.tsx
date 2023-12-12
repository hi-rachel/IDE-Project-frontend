import {
  AiOutlinePicCenter,
  AiOutlineCopy,
  AiOutlineShareAlt,
  AiOutlineSound,
  AiOutlineAudio,
} from 'react-icons/ai';
import { ToolbarContainer } from './IDEPage.style';
import { IconContext } from "react-icons";

const Toolbar = () => {
  return (
    <ToolbarContainer>
      <IconContext.Provider
        value={{
          style: { width: '30px', height: '30px', margin: '0 0 15px 0' },
        }}
      >
        <AiOutlineCopy />
        <AiOutlinePicCenter />
        <AiOutlineShareAlt />
        <AiOutlineSound />
        <AiOutlineAudio />
      </IconContext.Provider>
    </ToolbarContainer>
  );
};

export default Toolbar;
