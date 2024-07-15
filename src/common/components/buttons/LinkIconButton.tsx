import IconButton, { IconButtonProps } from '@mui/joy/IconButton';
import { styled } from '@mui/joy/styles';
import { LinkProps, Link } from 'react-router-dom';




export default function LinkIconButton({
    children,
    ...props
}: IconButtonBaseProps) {
    const { to } = props;
    return (
        to
            ? <IconButtonBase component={Link} to={to} {...props}>{children}</IconButtonBase>
            : <IconButtonBase {...props}>{children}</IconButtonBase>
    )
}


interface IconButtonBaseProps extends IconButtonProps {
    to?: LinkProps['to'];
}

const IconButtonBase = styled(IconButton)<IconButtonBaseProps>(
    ({ theme }) => ({
    }),
);


