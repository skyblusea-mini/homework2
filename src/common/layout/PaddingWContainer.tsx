import styled from "@emotion/styled"

/**
 * 양옆 마진이 있는 컨텐츠 컨테이너
 */
export default function PaddingWContainer({ children }: { children: React.ReactNode }) {
    return (
        <ContentContainer>
            {children}
        </ContentContainer>
    )
}


const ContentContainer = styled.div`
    padding: 0 var(--padding-layout);
    width: 100%;
    height: 100%;
`
