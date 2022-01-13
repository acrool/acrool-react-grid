import {RowProps} from './types';

export default (p: RowProps) => (process.env.NODE_ENV === 'production'
    ? undefined
    : [
        'row',
        p.noGutters ? 'no-gutter' : '',
    ]
        .filter(Boolean)
        .join(' '));
