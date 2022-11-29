import React, { FC, memo } from 'react';
import CrowdSvg from '../svg/crowd.svg';

export interface ICrowdIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CrowdIcon: FC<ICrowdIconProps> = memo(props => {
  return <CrowdSvg {...props} />;
});
