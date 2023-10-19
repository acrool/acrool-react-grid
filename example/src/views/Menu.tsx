import styled from 'styled-components';
import {useNavigate, Link} from 'react-router-dom';

interface IProps extends FCProps {

}

const Menu = ({
    className,
}: IProps) => {
    const navigate = useNavigate();

    const data = [
        {text: 'Design Code', path: '/designCode'},
        {text: 'Heroes', path: '/heroes'}
    ];

    return <MenuRoot className={className}>

        {data.map(row => {
            return <Link to={row.path}>
                {row.text}
            </Link>;
        })}

    </MenuRoot>;
};

export default Menu;





const MenuRoot = styled.div`
`;
