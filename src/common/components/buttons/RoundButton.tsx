import Button, { ButtonProps } from '@mui/joy/Button';
import { styled } from '@mui/joy/styles';
import { Link, LinkProps } from 'react-router-dom';

interface RoundButtonProps extends ButtonProps {
    to?: LinkProps['to'];
    children: React.ReactNode
}


/** 메뉴나 탭에 사용 되는 버튼 */
export default function RoundButton({
    children,
    ...props
}: RoundButtonProps) {
    const { to } = props;

    return (
        to
            ? <RoundButtonBase component={Link} to={to} {...props}>{children}</RoundButtonBase>
            : <RoundButtonBase {...props}>{children}</RoundButtonBase>
    )
}

interface RoundButtonBaseProps extends ButtonProps {
    to?: LinkProps['to'];
}


const RoundButtonBase = styled(Button)<RoundButtonBaseProps>(
    ({ theme }) => ({
        borderRadius: theme.radius.lg,
        fontWeight: theme.fontWeight.md,
    }),
);


