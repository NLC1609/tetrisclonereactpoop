import React from 'react';
import { TETROMINOS } from '../tetronimos'

const Cell = ({ type }) => (
    <StyledCell type={'L'} color={TETROMINOS['L'].color}>cell</StyledCell>
)

export default Cell;