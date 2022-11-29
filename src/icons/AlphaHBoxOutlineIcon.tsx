import React, { FC, memo } from 'react';
import AlphaHBoxOutlineSvg from '../svg/alpha-h-box-outline.svg';

export interface IAlphaHBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaHBoxOutlineIcon: FC<IAlphaHBoxOutlineIconProps> = memo(props => {
  return <AlphaHBoxOutlineSvg {...props} />;
});
