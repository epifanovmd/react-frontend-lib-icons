import React, { FC, memo } from 'react';
import ProgressCheckSvg from '../svg/progress-check.svg';

export interface IProgressCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ProgressCheckIcon: FC<IProgressCheckIconProps> = memo(props => {
  return <ProgressCheckSvg {...props} />;
});
