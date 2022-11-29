import React, { FC, memo } from 'react';
import ExclamationThickSvg from '../svg/exclamation-thick.svg';

export interface IExclamationThickIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ExclamationThickIcon: FC<IExclamationThickIconProps> = memo(props => {
  return <ExclamationThickSvg {...props} />;
});
