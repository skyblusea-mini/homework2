import Button, { ButtonOwnerState, ButtonProps } from '@mui/joy/Button';
import { styled, Theme, useThemeProps } from '@mui/joy/styles';
import { forwardRef } from 'react';


interface SquareButtonProps extends ButtonProps {
    theme: Theme;
    ownerState?: ButtonOwnerState & {
        size?: ButtonProps['size'];
    };
}

/** 메인 확인 버튼 */
const SquareButton = styled(Button)(({ theme, ownerState }: SquareButtonProps) => ({
    borderRadius: theme.radius.md,
    fontWeight: theme.fontWeight.xl,
    paddingBlock: '1rem',
    // ...(ownerState?.size === 'lg' && {
    // '--Icon-fontSize': '2rem',
    // '--Button-gap': '1rem',
    // minHeight: 'var(--Button-minHeight, 4rem)',
    // fontSize: theme.vars.fontSize.xl,
    // paddingBlock: '0.5rem',
    //     paddingInline: '2rem',
    // }),
}),
);

//TODO 추후 별도 size('xl')로 분리 시 사용할 수도 있음
// export const SquareButton = forwardRef<HTMLButtonElement, SquareButtonProps>(function SquareButton(inProps, ref
// ) {
//     const props = useThemeProps({ props: inProps, name: 'MuiButton' })
//     const { variant, size  } = props;
//     const ownerState = { ...props };

//     return (
//         <SquareButtonRoot ref={ref} ownerState={ownerState} {...other} >
//             {value}
//         </SquareButtonRoot>
//     )
// })


export default SquareButton;