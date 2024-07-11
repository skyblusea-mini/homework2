import Card, { CardProps } from '@mui/joy/Card';

interface CommonBoxProps extends CardProps {
    children: React.ReactNode;
}

/** common grey box */
export default function CommonBox({ children, ...props }: CommonBoxProps) {
    const { variant, ...others } = props;

    return <Card variant='solid' color="neutral"
        sx={(theme) => ({
            borderRadius: theme.radius.md,
        })}
        {...others}>{children}</Card>;
}