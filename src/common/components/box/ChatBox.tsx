import Box from '@mui/joy/Box';
import { styled } from '@mui/joy/styles';


interface MessageProps {
    direction: 'left' | 'right';
    status: 'pending' | 'success' | 'error';
}

/** 말풍선
 @param { 'left' | 'right' } direction 말풍선 방향
 @param { 'pending' | 'success' | 'error' } status 말풍선 상태
 */
const ChatBox = styled(Box)<MessageProps>(({ theme, direction, status }) => ({
    borderRadius: theme.radius.md,
    fontWeight: theme.fontWeight.md,
    paddingBlock: 'var(--Button-paddingBlock, 0.375rem)',
    paddingInline: '1rem',
    backgroundColor: '#fff',
    color: theme.palette.neutral.solidColor,
    ...(direction === 'left' && {
        borderBottomLeftRadius: 0,
    }),
    ...(direction === 'right' && {
        borderBottomRightRadius: 0,
    }),
    ...(status === 'success' && {
        backgroundColor: theme.palette.primary.solidBg,
        color: theme.palette.primary.solidColor,
    }),
    ...(status === 'error' && {
        backgroundColor: theme.palette.danger.solidBg,
        color: theme.palette.danger.solidColor,
    }),
}));


export default ChatBox;