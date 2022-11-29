import React, { FC, memo } from 'react';
import ProgressCloseSvg from '../svg/progress-close.svg';

export interface IProgressCloseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ProgressCloseIcon: FC<IProgressCloseIconProps> = memo(props => {
  return <ProgressCloseSvg {...props} />;
});
