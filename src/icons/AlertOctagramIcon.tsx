import React, { FC, memo } from 'react';
import AlertOctagramSvg from '../svg/alert-octagram.svg';

export interface IAlertOctagramIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlertOctagramIcon: FC<IAlertOctagramIconProps> = memo(props => {
  return <AlertOctagramSvg {...props} />;
});
