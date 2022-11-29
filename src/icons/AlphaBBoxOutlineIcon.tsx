import React, { FC, memo } from 'react';
import AlphaBBoxOutlineSvg from '../svg/alpha-b-box-outline.svg';

export interface IAlphaBBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaBBoxOutlineIcon: FC<IAlphaBBoxOutlineIconProps> = memo(props => {
  return <AlphaBBoxOutlineSvg {...props} />;
});
