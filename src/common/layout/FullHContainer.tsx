import styled from "@emotion/styled"



/**
 * 아티스트 페이지, full width 컨텐츠 컨테이너
 * @param { 'string' } color 배경색
 */
export default function FullWContainer({
    children,
    color
}: {
    children: React.ReactNode
    color?: string
}) {
    return (
        <ContentContainer color={color}>
            {children}
        </ContentContainer>
    )
}


const ContentContainer = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: var(--max-w);
    height: 100%;
    min-height: 100vh;
    flex: 1;
    background-color: ${({ color }) => color};
`