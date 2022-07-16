import styled from 'styled-components';
import React from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import Button from '../Components/Common/Button';

interface Props {
    theme: string
    name: string
    lockPercent: number;
}

const Container = styled.div`
    min-width: 400px;
    max-width: 400px;
    min-height: 300px;
    background-color: ${props => props.theme.body};
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    border-radius: ${props => props.theme.borderRounding};
    box-shadow: ${props => props.theme.boxShadow};
    font-weight: lighter;
    margin-top: 20px;
    margin-right: 20px;

    @media screen and (max-width: 730px) {
        min-width: 95%;
        margin-left: 2.5%;
        margin-right: 2.5%;
    }
`
const HeadingRow = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: flex-start;
    max-height: 25px;
`
const LockerName = styled.h3`
    color: ${props => props.theme.textPrimary};
    font-size: 17.5px;
    text-align: left;
    margin-left: 10px;
    margin-top: 12.5px;
    margin-bottom: 0px;
    min-width: 100%;
    font-weight: inherit;
`
const ChartContainer = styled.div`
    display: flex;
    width: 90%;
    height: 225px;
    margin-left: 5%;
`
const LoadLock = styled(Button)`
    margin-left: 15%;
`

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.value + '% ' + payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
        </g>
    );
};

export const LockerPanelMin: React.FC<Props> = props => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    let onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    const data = [
        {
            name: 'Locked',
            value: props.lockPercent,
            fill: '#2c2d75'
        },
        {
            name: 'Unlocked',
            value: 100 - props.lockPercent,
            fill: '#666666'
        }
    ]
    return (
        <Container>
            <HeadingRow>
                <LockerName>{props.name}</LockerName>
            </HeadingRow>
            <ChartContainer>
                <ResponsiveContainer height='100%' width='100%' >
                    <PieChart height={50} width={50}>
                        <Pie
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            onMouseEnter={onPieEnter}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </ChartContainer>
            <LoadLock text='Load full lock details!' primary width='70%' height='40px'/>
        </Container>
    )
}

export default LockerPanelMin