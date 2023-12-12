import FileTree from './FileTree/FileTree';
import IDEHeader from './IDEHeader';
import { ContentContainer, IDEContainer } from './IDEPage.style';
import Toolbar from './Toolbar';

const IDEPage = () => {
  return (
    <IDEContainer>
      <IDEHeader />
      <ContentContainer>
        <Toolbar />
        <FileTree />
      </ContentContainer>

      {/* <Terminal/> */}
      {/* <CodeEditor/>    */}
    </IDEContainer>
  );
};

export default IDEPage;
