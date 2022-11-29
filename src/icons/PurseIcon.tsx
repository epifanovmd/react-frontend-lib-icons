import React, { FC, memo } from 'react';
import PurseSvg from '../svg/purse.svg';

export interface IPurseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PurseIcon: FC<IPurseIconProps> = memo(props => {
  return <PurseSvg {...props} />;
});
