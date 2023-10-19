import {Container, Col} from 'bear-react-grid';
import styled from 'styled-components';
import WaveWrapper1 from '@/views/examples/DesignCode/layout/WaveWrapper';

interface IProps extends FCProps {

}

const Heroes = () => {
    return <>
        <div className="px-4 py-5 my-5 text-center gap-5">
            <img className="d-block mx-auto mb-4"
                src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"
            />
            <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>

            <Col lg={6} className="mx-auto">
                <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with
                    Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables
                    and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript
                    plugins.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                </div>
            </Col>
        </div>
    </>;
};

export default Heroes;





const HeroesRoot = styled.div`

`;
