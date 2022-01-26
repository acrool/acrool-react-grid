import {IRowProps} from './types';

export default (p: IRowProps) => (process.env.NODE_ENV === 'production'
    ? undefined
    : [
        'row',
        p.noGutters ? 'no-gutter' : '',
    ]
        .filter(Boolean)
        .join(' '));
