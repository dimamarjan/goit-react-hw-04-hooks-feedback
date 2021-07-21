import { ContentSection, SectionTitle } from './Section.style'

export function Section({title, children}) {
    return (
        <ContentSection>
            <SectionTitle>{title}</SectionTitle>
            {children}
        </ContentSection>
    );
}
