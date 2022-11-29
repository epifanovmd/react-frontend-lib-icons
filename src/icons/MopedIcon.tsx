import React, { FC, memo } from 'react';
import MopedSvg from '../svg/moped.svg';

export interface IMopedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MopedIcon: FC<IMopedIconProps> = memo(props => {
  return <MopedSvg {...props} />;
});
