import React, { FC, memo } from 'react';
import DoorbellSvg from '../svg/doorbell.svg';

export interface IDoorbellIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DoorbellIcon: FC<IDoorbellIconProps> = memo(props => {
  return <DoorbellSvg {...props} />;
});
