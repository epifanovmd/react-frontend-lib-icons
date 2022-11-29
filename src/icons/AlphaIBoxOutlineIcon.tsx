import React, { FC, memo } from 'react';
import AlphaIBoxOutlineSvg from '../svg/alpha-i-box-outline.svg';

export interface IAlphaIBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaIBoxOutlineIcon: FC<IAlphaIBoxOutlineIconProps> = memo(props => {
  return <AlphaIBoxOutlineSvg {...props} />;
});
