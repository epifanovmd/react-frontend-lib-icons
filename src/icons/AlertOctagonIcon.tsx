import React, { FC, memo } from 'react';
import AlertOctagonSvg from '../svg/alert-octagon.svg';

export interface IAlertOctagonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlertOctagonIcon: FC<IAlertOctagonIconProps> = memo(props => {
  return <AlertOctagonSvg {...props} />;
});
