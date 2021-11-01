import {ContainerProps} from './types';

export default (p: ContainerProps) => (process.env.NODE_ENV === 'production'
    ? undefined
    : [
        p.fluid ? 'container-fluid' : 'container',
    ]
        .filter(Boolean)
        .join(' '));
