import React, { FC, memo } from 'react';
import AlphaOSvg from '../svg/alpha-o.svg';

export interface IAlphaOIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaOIcon: FC<IAlphaOIconProps> = memo(props => {
  return <AlphaOSvg {...props} />;
});
