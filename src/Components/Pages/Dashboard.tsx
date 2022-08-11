import Nav from '../Nav';
import Footer from '../Footer';
import { FC } from 'react';
import * as Styled from '../Styles/DashboardStyles';
import { Style } from '@material-ui/icons';

interface Props {
    theme: string;
}

const Dashboard: FC<Props> = props => {

    return (
        <>
            <Styled.Container>
                <Nav pageName='Dashboard' theme={props.theme} />
                <Styled.HeaderContainer>
                    <Styled.HeaderTitle>Elevate Dashboard</Styled.HeaderTitle>
                    <Styled.HeaderDescription>View stats about Elevate!</Styled.HeaderDescription>
                </Styled.HeaderContainer>
                <Styled.Section>
                    <Styled.ItemContainer>
                        <Styled.ItemIcon src='./icons/total_supply.png' />
                        <Styled.ContentWrapper>
                            <Styled.ItemHeading>Total Supply</Styled.ItemHeading>
                            <Styled.ItemContent>5,000,000,000</Styled.ItemContent>
                        </Styled.ContentWrapper>
                    </Styled.ItemContainer>
                    <Styled.ItemContainer>
                        <Styled.ItemIcon src='./icons/circulating.png' />
                        <Styled.ContentWrapper>
                            <Styled.ItemHeading>Circulating Supply</Styled.ItemHeading>
                            <Styled.ItemContent>3,500,000,000</Styled.ItemContent>
                        </Styled.ContentWrapper>
                    </Styled.ItemContainer>
                    <Styled.ItemContainer>
                        <Styled.ItemIcon src='./icons/marketcap.png' />
                        <Styled.ContentWrapper>
                            <Styled.ItemHeading>Market Cap</Styled.ItemHeading>
                            <Styled.ItemContent>$0.00</Styled.ItemContent>
                        </Styled.ContentWrapper>
                    </Styled.ItemContainer>
                    <Styled.ItemContainer>
                        <Styled.ItemIcon src='./icons/donation.png' />
                        <Styled.ContentWrapper>
                            <Styled.ItemHeading>Total Donations</Styled.ItemHeading>
                            <Styled.ItemContent>$0.00</Styled.ItemContent>
                        </Styled.ContentWrapper>
                    </Styled.ItemContainer>
                    <Styled.ItemContainer>
                        <Styled.ItemIcon src='./icons/price.png' />
                        <Styled.ContentWrapper>
                            <Styled.ItemHeading>Price</Styled.ItemHeading>
                            <Styled.ItemContent>$0.00</Styled.ItemContent>
                        </Styled.ContentWrapper>
                    </Styled.ItemContainer>
                    <Styled.ItemContainer>
                        <Styled.ItemIcon src='./icons/burn.png' />
                        <Styled.ContentWrapper>
                            <Styled.ItemHeading>Tokens Burned</Styled.ItemHeading>
                            <Styled.ItemContent>0 ($0.00)</Styled.ItemContent>
                        </Styled.ContentWrapper>
                    </Styled.ItemContainer>
                </Styled.Section>
                <Styled.SectionDivider />
                <Styled.HeaderContainer>
                    <Styled.HeaderTitle>Your Elevate Stats</Styled.HeaderTitle>
                    <Styled.HeaderDescription>Connect your wallet above or type your address in the search bar below to load your wallet stats!</Styled.HeaderDescription>
                    <Styled.InputContainer>
                        <Styled.Input placeholder='Input your wallet address to load your stats!' />
                    </Styled.InputContainer>
                </Styled.HeaderContainer>
                <Styled.Section>
                    <Styled.ItemContainer>
                        <Styled.ItemIcon src='./icons/holdings.png' />
                        <Styled.ContentWrapper>
                            <Styled.ItemHeading>ELEV Holdings</Styled.ItemHeading>
                            <Styled.ItemContent>0 ($0.00)</Styled.ItemContent>
                        </Styled.ContentWrapper>
                    </Styled.ItemContainer>
                    <Styled.ItemContainer>
                        <Styled.ItemIcon src='./icons/tier.png' />
                        <Styled.ContentWrapper>
                            <Styled.ItemHeading>ElevatePAD Tier</Styled.ItemHeading>
                            <Styled.ItemContent>1</Styled.ItemContent>
                        </Styled.ContentWrapper>
                    </Styled.ItemContainer>
                </Styled.Section>
                <Styled.SectionDivider />
                <Styled.HeaderContainer>
                    <Styled.HeaderTitle>Impact Partners</Styled.HeaderTitle>
                    <Styled.HeaderDescription>View our impact partners!</Styled.HeaderDescription>
                </Styled.HeaderContainer>
                <Styled.Section>
                    <Styled.ImpactContainer>
                        <Styled.ImpactHeaderContainer>
                            <Styled.ImpactHeading>Coral Restoration Foundation</Styled.ImpactHeading>
                            <Styled.ActiveImpact>Permanent</Styled.ActiveImpact>
                        </Styled.ImpactHeaderContainer>
                        <Styled.ImpactContentHeading>Total Donated:</Styled.ImpactContentHeading>
                        <Styled.ImpactContentValue>$0</Styled.ImpactContentValue>
                    </Styled.ImpactContainer>
                    <Styled.ImpactContainer>
                        <Styled.ImpactHeaderContainer>
                            <Styled.ImpactHeading>Coming Soon!</Styled.ImpactHeading>
                            <Styled.ActiveImpact>Monthly</Styled.ActiveImpact>
                        </Styled.ImpactHeaderContainer>
                        <Styled.ImpactContentHeading>Total Donated:</Styled.ImpactContentHeading>
                        <Styled.ImpactContentValue>$0</Styled.ImpactContentValue>
                    </Styled.ImpactContainer>
                </Styled.Section>
            </Styled.Container>
            <Footer theme={props.theme} />
        </>
    )
}

export default Dashboard