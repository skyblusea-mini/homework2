import Button from '@mui/joy/Button';
import { styled } from '@mui/joy/styles';



/** 메뉴나 탭에 사용 되는 버튼 */
const RoundButton = styled(Button)(
    ({ theme }) => ({
        borderRadius: theme.radius.lg,
        fontWeight: theme.fontWeight.md,
    }),
);


export default RoundButton;