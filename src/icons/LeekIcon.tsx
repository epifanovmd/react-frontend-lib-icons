import React, { FC, memo } from 'react';
import LeekSvg from '../svg/leek.svg';

export interface ILeekIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LeekIcon: FC<ILeekIconProps> = memo(props => {
  return <LeekSvg {...props} />;
});
