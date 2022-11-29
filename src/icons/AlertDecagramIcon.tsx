import React, { FC, memo } from 'react';
import AlertDecagramSvg from '../svg/alert-decagram.svg';

export interface IAlertDecagramIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlertDecagramIcon: FC<IAlertDecagramIconProps> = memo(props => {
  return <AlertDecagramSvg {...props} />;
});
