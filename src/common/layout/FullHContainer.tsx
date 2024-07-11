import styled from "@emotion/styled"



/** 전화 페이지, full hight 컨텐츠 컨테이너
 * @param { 'string' } color 배경색
 */
export default function FullHContainer({
    children,
    color
}: {
    children: React.ReactNode
    color: string
}) {
    <ContentContainer>
        {children}
    </ContentContainer>
}


const ContentContainer = styled.div`
    margin-top: -(var(--header-h));
    width: 100%;
    height: 100%;
    background-color: ${({ color }) => color};
`