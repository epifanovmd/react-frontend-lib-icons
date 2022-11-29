import React, { FC, memo } from 'react';
import MenorahSvg from '../svg/menorah.svg';

export interface IMenorahIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MenorahIcon: FC<IMenorahIconProps> = memo(props => {
  return <MenorahSvg {...props} />;
});
