import {IContainerProps} from './types';

export default (p: IContainerProps) => (process.env.NODE_ENV === 'production'
    ? undefined
    : [
        p.fluid ? 'container-fluid' : 'container',
    ]
        .filter(Boolean)
        .join(' '));
