import React, { FC, memo } from 'react';
import CastConnectedSvg from '../svg/cast-connected.svg';

export interface ICastConnectedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CastConnectedIcon: FC<ICastConnectedIconProps> = memo(props => {
  return <CastConnectedSvg {...props} />;
});
