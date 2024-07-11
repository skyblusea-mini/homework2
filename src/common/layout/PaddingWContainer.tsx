import styled from "@emotion/styled"

/**
 * 양옆 마진이 있는 컨텐츠 컨테이너
 * @param { 'string' } color 배경색
 */
export default function PaddingWContainer({
    children,
    color
}: {
    children: React.ReactNode
    color: string
}) {
    return (
        <ContentContainer color={color}>
            {children}
        </ContentContainer>
    )
}


const ContentContainer = styled.div`
    padding: 0 var(--padding-layout);
    width: 100%;
    height: 100%;
    background-color: ${({ color }) => color};
`
