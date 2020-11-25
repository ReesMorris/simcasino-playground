import styled from 'styled-components';
import Icon from '../icon';
import Text from '../text';

const FileDropWrapper = styled.div``;

interface FileDropProps {
  isDragActive?: boolean;
  isDragAccept?: boolean;
  isDragReject?: boolean;
}
const FileDrop = styled.div<FileDropProps>`
  width: 100%;
  height: 20rem;
  background: ${props => props.theme.dropzone.background};
  border-radius: 0.4rem;
  transition: border 0.2s ease;
  border: 1px dashed
    ${props =>
      (props.isDragAccept && props.theme.dropzone.active_border) ||
      'transparent'};

  &:hover {
    cursor: copy;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const UploadText = styled(Text)`
  font-size: 2rem;
  opacity: 0.7;
`;

const SubText = styled(Text)`
  font-size: 1.3rem;
  opacity: 0.8;
`;

const HelpTextWrapper = styled.div`
  margin-top: 1.5rem;
`;

const HelpIcon = styled(Icon)`
  margin-right: 0.7rem;
  display: inline-block;
`;

const HelpText = styled(Text)`
  font-size: 1.3rem;
  line-height: 1.5rem;

  &:not(:last-child) {
    margin-bottom: 0.7rem;
  }
`;

const InfoTextWrapper = styled.div`
  margin-top: 2rem;
`;
const InfoText = styled(Text)`
  font-size: 1.2rem;
  line-height: 1.4rem;

  &:not(:last-child) {
    margin-bottom: 0.7rem;
  }
`;

export default {
  FileDropWrapper,
  FileDrop,
  TextWrapper,
  UploadText,
  SubText,
  HelpTextWrapper,
  HelpIcon,
  HelpText,
  InfoTextWrapper,
  InfoText
};
