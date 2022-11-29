import React, { FC, memo } from 'react';
import ConeOffSvg from '../svg/cone-off.svg';

export interface IConeOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ConeOffIcon: FC<IConeOffIconProps> = memo(props => {
  return <ConeOffSvg {...props} />;
});
