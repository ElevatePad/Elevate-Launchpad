import React from 'react';
import Interface from '../metamask';
import { useWeb3 } from '@3rdweb/hooks';
import PresalePanel from '../Components/PresalePanel';
import * as Styled from './MainStyles';
import Nav from '../Components/Nav';

interface Props {
    theme: string;
}

const MockData = [
  {
    cap: 1000,
    swapRate: '1 ETH = 100 STG',
    projectName: 'ELEV',
    startDate: 'TBA',
    status: 'Pending',
    completedPercent: 0,
    paticipents: 0
  },
  {
    cap: 120,
    swapRate: '1 ETH = 1202 STG ',
    projectName: 'Stargate',
    startDate: 'TBA',
    status: 'Voting',
    completedPercent: 0,
    paticipents: 0
  },
  {
    cap: 800,
    swapRate: '1 ETH = 120000',
    projectName: 'STEALLA',
    startDate: '10/5/22 7PM UTC',
    status: 'Pending',
    completedPercent: 0,
    particpents: 0
  },
  {
    cap: 750,
    swapRate: '1 ETH = 25',
    projectName: 'OSMO',
    startDate: '1/2/2022',
    status: 'Completed',
    completedPercent: 100,
    particpents: 25
  },
  {
    cap: 2011,
    swapRate: '1 ETH = 5000',
    projectName: 'BAYC',
    startDate: '2/4/2022',
    status: 'Open',
    completedPercent: 80,
    particpents: 120
  },
  {
    cap: 850,
    swapRate: '1 ETH = 200',
    projectName: 'OS',
    startDate: '1/5/2022',
    status: 'Open',
    completedPercent: 20,
    particpents: 185
  }
]

const Main:React.FC<Props> = props => {

  const { address, connectWallet, provider } = useWeb3();
  const pendingPresales = MockData.filter(p => p.status == 'Pending');
  const votingPresales = MockData.filter(p => p.status == 'Voting');
  const openPresales = MockData.filter(p => p.status == 'Open');
  const completedPresales = MockData.filter(p => p.status == 'Completed');
  

  React.useEffect(() => {
      if (address == null) {
          connectWallet('injected');
          Interface.connectWallet(provider?.provider);
      }
   },   
  [])

  React.useEffect(() => {
      if(address != null) {
      }
  }, [address])

  const manualConnect = () => {
    if (address == null) {
      connectWallet('injected');
      Interface.connectWallet(provider?.provider);
    }
  }


    return (
      <Styled.Container theme={props.theme}>
          <Nav theme={props.theme}/>
          <Styled.Section>
            <Styled.SectionHeading>Want to see your project here?</Styled.SectionHeading>
            <Styled.SectionDescription>Complete our onboarding process to share your project within a safe launchpad environment</Styled.SectionDescription>
            <Styled.SignupButton secondary text='Onboard your project!' width='175px' height='35px'/>
          </Styled.Section>
          <Styled.Section>
            <Styled.SectionHeading>Open Projects</Styled.SectionHeading>
            <Styled.SectionDescription>Contribute to open Projects!</Styled.SectionDescription>
            {
              openPresales.map(p => {
                return (
                  <PresalePanel 
                    theme={props.theme} 
                    cap={p.cap} 
                    swapRate={p.swapRate} 
                    status={p.status} 
                    projectName={p.projectName} 
                    participents={p.particpents}
                    progress={p.completedPercent}
                  />
                )
              })
            }
          </Styled.Section>
          <Styled.Section>
            <Styled.SectionHeading>Projects Under Voting</Styled.SectionHeading>
            <Styled.SectionDescription>Vote if projects should launch using your ELEV tokens!</Styled.SectionDescription>
            {
              votingPresales.map(p => {
                return (
                  <PresalePanel 
                    theme={props.theme} 
                    cap={p.cap} 
                    swapRate={p.swapRate} 
                    status={p.status} 
                    projectName={p.projectName} 
                    participents={p.particpents}
                    progress={p.completedPercent}
                  />
                )
              })
            }
          </Styled.Section>
          <Styled.Section>
            <Styled.SectionHeading>Pending Projects</Styled.SectionHeading>
            <Styled.SectionDescription>Projects approved for launch but pending launch date!</Styled.SectionDescription>
            {
              pendingPresales.map(p => {
                return (
                  <PresalePanel 
                    theme={props.theme} 
                    cap={p.cap} 
                    swapRate={p.swapRate} 
                    status={p.status} 
                    projectName={p.projectName} 
                    progress={p.completedPercent}
                    participents={p.particpents}
                  />
                )
              })
            }
          </Styled.Section>
          <Styled.Section>
            <Styled.SectionHeading>Finished Projects</Styled.SectionHeading>
            <Styled.SectionDescription>Previous projects that have been completed or finalised.</Styled.SectionDescription>
            {
              completedPresales.map(p => {
                return (
                  <PresalePanel 
                    theme={props.theme} 
                    cap={p.cap} 
                    swapRate={p.swapRate} 
                    status={p.status} 
                    projectName={p.projectName} 
                    progress={p.completedPercent}
                    participents={p.particpents}
                  />
                )
              })
            }
          </Styled.Section>
        </Styled.Container>
    )
}

export default Main