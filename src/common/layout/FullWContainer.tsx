import styled from "@emotion/styled"



/**
 * 아티스트 페이지, full width 컨텐츠 컨테이너
 */
export default function FullWContainer({ children }: { children: React.ReactNode }) {
    return (
        <ContentContainer>
            {children}
        </ContentContainer>
    )
}


const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
`