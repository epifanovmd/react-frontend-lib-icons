import React, { FC, memo } from 'react';
import AlphaHSvg from '../svg/alpha-h.svg';

export interface IAlphaHIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaHIcon: FC<IAlphaHIconProps> = memo(props => {
  return <AlphaHSvg {...props} />;
});
