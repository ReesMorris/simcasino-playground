import styled from 'styled-components';
import Icon from '../icon';
import Text from '../text';

const Notice = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-radius: 0.3rem;
  background: ${props => props.theme.site.background};
`;

const NoticeIcon = styled(Icon)`
  margin-right: 1.5rem;
  font-size: 1.3rem;
  display: block;
  color: ${props => props.theme.colors.secondary};
`;

const NoticeText = styled(Text)`
  font-size: 1.3rem;
  line-height: 1.7rem;
`;

export default { Notice, NoticeIcon, NoticeText };
