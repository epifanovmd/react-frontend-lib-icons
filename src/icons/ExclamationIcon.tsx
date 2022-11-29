import React, { FC, memo } from 'react';
import ExclamationSvg from '../svg/exclamation.svg';

export interface IExclamationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ExclamationIcon: FC<IExclamationIconProps> = memo(props => {
  return <ExclamationSvg {...props} />;
});
