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
    color: string
}) {
    return (
        <ContentContainer color={color}>
            {children}
        </ContentContainer>
    )
}


const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ color }) => color};
`