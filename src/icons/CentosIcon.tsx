import React, { FC, memo } from 'react';
import CentosSvg from '../svg/centos.svg';

export interface ICentosIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CentosIcon: FC<ICentosIconProps> = memo(props => {
  return <CentosSvg {...props} />;
});
