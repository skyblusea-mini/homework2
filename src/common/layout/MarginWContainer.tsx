import styled from "@emotion/styled"

/**
 * 양옆 마진이 있는 컨텐츠 컨테이너
 */
export default function MarginWContainer({ children }: { children: React.ReactNode }) {
    return (
        <ContentContainer>
            {children}
        </ContentContainer>
    )
}


const ContentContainer = styled.div`
    margin: 0 var(--margin-layout);
    width: 100%;
    height: 100%;
`
