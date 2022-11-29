import React, { FC, memo } from 'react';
import CctvOffSvg from '../svg/cctv-off.svg';

export interface ICctvOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CctvOffIcon: FC<ICctvOffIconProps> = memo(props => {
  return <CctvOffSvg {...props} />;
});
