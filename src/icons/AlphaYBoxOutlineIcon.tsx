import React, { FC, memo } from 'react';
import AlphaYBoxOutlineSvg from '../svg/alpha-y-box-outline.svg';

export interface IAlphaYBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaYBoxOutlineIcon: FC<IAlphaYBoxOutlineIconProps> = memo(props => {
  return <AlphaYBoxOutlineSvg {...props} />;
});
