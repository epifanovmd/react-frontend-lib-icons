import React, { FC, memo } from 'react';
import CastOffSvg from '../svg/cast-off.svg';

export interface ICastOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CastOffIcon: FC<ICastOffIconProps> = memo(props => {
  return <CastOffSvg {...props} />;
});
