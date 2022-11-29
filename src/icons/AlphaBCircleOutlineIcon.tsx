import React, { FC, memo } from 'react';
import AlphaBCircleOutlineSvg from '../svg/alpha-b-circle-outline.svg';

export interface IAlphaBCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaBCircleOutlineIcon: FC<IAlphaBCircleOutlineIconProps> = memo(props => {
  return <AlphaBCircleOutlineSvg {...props} />;
});
