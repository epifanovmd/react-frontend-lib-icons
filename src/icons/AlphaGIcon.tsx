import React, { FC, memo } from 'react';
import AlphaGSvg from '../svg/alpha-g.svg';

export interface IAlphaGIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaGIcon: FC<IAlphaGIconProps> = memo(props => {
  return <AlphaGSvg {...props} />;
});
