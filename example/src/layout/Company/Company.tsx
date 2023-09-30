import styled from 'styled-components';

interface IProps extends FCProps {

}

const Company = ({
    className,
}: IProps) => {
    return <CompanyRoot className={className}>

    </CompanyRoot>;
};

export default Company;





const CompanyRoot = styled.div`

`;
