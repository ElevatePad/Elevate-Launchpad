import React from 'react';
import PresalePanel from '../PresalePanel';
import * as Styled from '../Styles/MainStyles';
import Nav from '../Nav';
import Footer from '../Footer';

interface Props {
  theme: string;
}

const MockData = [
  {
    cap: 1000,
    swapRate: '1 ETH = 100 ELEV',
    projectName: 'ELEV',
    startDate: 'TBA',
    status: 'Pending',
    completedPercent: 0,
    paticipents: 0
  },
  {
    cap: 120,
    swapRate: '1 ETH = 1202 IMP ',
    projectName: 'IMP',
    startDate: 'TBA',
    status: 'Voting',
    completedPercent: 0,
    paticipents: 0
  },
  {
    cap: 800,
    swapRate: '1 ETH = 120000 PWR',
    projectName: 'POWER',
    startDate: '10/5/22 7PM UTC',
    status: 'Pending',
    completedPercent: 0,
    particpents: 0
  },
  {
    cap: 750,
    swapRate: '1 ETH = 25 VOTE',
    projectName: 'VOTE',
    startDate: '1/2/2022',
    status: 'Completed',
    completedPercent: 100,
    particpents: 25
  },
  {
    cap: 2011,
    swapRate: '1 ETH = 5000 STAR',
    projectName: 'STAR',
    startDate: '2/4/2022',
    status: 'Open',
    completedPercent: 80,
    particpents: 120
  },
  {
    cap: 850,
    swapRate: '1 ETH = 200 INT',
    projectName: 'INT',
    startDate: '1/5/2022',
    status: 'Open',
    completedPercent: 20,
    particpents: 185
  },
  {
    cap: 2011,
    swapRate: '1 ETH = 5000 PGM',
    projectName: 'PROGRAM',
    startDate: '2/4/2022',
    status: 'Open',
    completedPercent: 80,
    particpents: 120
  },
  {
    cap: 2011,
    swapRate: '1 ETH = 5000 NXT',
    projectName: 'NEXT',
    startDate: '2/4/2022',
    status: 'Open',
    completedPercent: 80,
    particpents: 120
  },
]

const Main: React.FC<Props> = props => {

  const pendingPresales = MockData.filter(p => p.status == 'Pending');
  const votingPresales = MockData.filter(p => p.status == 'Voting');
  const openPresales = MockData.filter(p => p.status == 'Open');
  const completedPresales = MockData.filter(p => p.status == 'Completed');


  return (
    <Styled.Container theme={props.theme}>
      <Nav pageName='ElevatePAD' theme={props.theme} />
      <Styled.Section>
        <Styled.SectionRow>
          <Styled.SectionHeading>Want to see your project here?</Styled.SectionHeading>
        </Styled.SectionRow>
        <Styled.SectionRow>
          <Styled.SectionDescription>Complete our onboarding process to share your project within a safe launchpad environment</Styled.SectionDescription>
        </Styled.SectionRow>
        <Styled.SectionRow>
          <Styled.SignupButton secondary text='Onboard your project!' width='175px' height='35px' />
        </Styled.SectionRow>
      </Styled.Section>
      <Styled.Section>
        <Styled.SectionRow>
          <Styled.SectionHeading>Open Projects</Styled.SectionHeading>
        </Styled.SectionRow>
        <Styled.SectionRow>
          <Styled.SectionDescription>Contribute to open Projects!</Styled.SectionDescription>
        </Styled.SectionRow>
        <Styled.SectionRow>
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
        </Styled.SectionRow>
      </Styled.Section>
      <Styled.Section>
        <Styled.SectionRow>
          <Styled.SectionHeading>Projects Under Voting</Styled.SectionHeading>
        </Styled.SectionRow>
        <Styled.SectionRow>
          <Styled.SectionDescription>Vote if projects should launch using your ELEV tokens!</Styled.SectionDescription>
        </Styled.SectionRow>
        <Styled.SectionRow>
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
        </Styled.SectionRow>
      </Styled.Section>
      <Styled.Section>
        <Styled.SectionHeading>Pending Projects</Styled.SectionHeading>
        <Styled.SectionDescription>Projects approved for launch but pending launch date!</Styled.SectionDescription>
        <Styled.SectionRow>
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
        </Styled.SectionRow>
      </Styled.Section>
      <Styled.Section>
        <Styled.SectionRow>
          <Styled.SectionHeading>Finished Projects</Styled.SectionHeading>
        </Styled.SectionRow>
        <Styled.SectionRow>
          <Styled.SectionDescription>Previous projects that have been completed or finalised.</Styled.SectionDescription>
        </Styled.SectionRow>
        <Styled.SectionRow>

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
        </Styled.SectionRow>
      </Styled.Section>
      <Footer theme={props.theme}/>
    </Styled.Container>
  )
}

export default Main