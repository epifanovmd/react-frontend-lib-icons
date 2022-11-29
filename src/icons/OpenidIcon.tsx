import React, { FC, memo } from 'react';
import OpenidSvg from '../svg/openid.svg';

export interface IOpenidIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OpenidIcon: FC<IOpenidIconProps> = memo(props => {
  return <OpenidSvg {...props} />;
});
