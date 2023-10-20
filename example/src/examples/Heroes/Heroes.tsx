import styled from 'styled-components';

interface IProps extends FCProps {

}

const Heroes = ({
    className,
}: IProps) => {
    return <HerosRoot className={className}>
    </HerosRoot>;
};

export default Heroes;





const HerosRoot = styled.div`

`;
