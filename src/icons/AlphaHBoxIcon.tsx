import React, { FC, memo } from 'react';
import AlphaHBoxSvg from '../svg/alpha-h-box.svg';

export interface IAlphaHBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaHBoxIcon: FC<IAlphaHBoxIconProps> = memo(props => {
  return <AlphaHBoxSvg {...props} />;
});
