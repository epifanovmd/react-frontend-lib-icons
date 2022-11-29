import React, { FC, memo } from 'react';
import AlphaYBoxSvg from '../svg/alpha-y-box.svg';

export interface IAlphaYBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaYBoxIcon: FC<IAlphaYBoxIconProps> = memo(props => {
  return <AlphaYBoxSvg {...props} />;
});
