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
    color?: string;
}) {
    return (
        <ContentContainer color={color}>
            {children}
        </ContentContainer>
    )
}


const ContentContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: var(--max-w);
    height: 100%;
    min-height: 100vh;
    flex: 1;
    padding: 0 var(--padding-layout);
    padding-top: var(--header-h);
    background-color: ${({ color }) => color};
`


