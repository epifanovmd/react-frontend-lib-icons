import React, { FC, memo } from 'react';
import AlphaICircleOutlineSvg from '../svg/alpha-i-circle-outline.svg';

export interface IAlphaICircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaICircleOutlineIcon: FC<IAlphaICircleOutlineIconProps> = memo(props => {
  return <AlphaICircleOutlineSvg {...props} />;
});
