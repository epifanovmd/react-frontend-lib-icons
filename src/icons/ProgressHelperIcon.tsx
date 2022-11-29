import React, { FC, memo } from 'react';
import ProgressHelperSvg from '../svg/progress-helper.svg';

export interface IProgressHelperIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ProgressHelperIcon: FC<IProgressHelperIconProps> = memo(props => {
  return <ProgressHelperSvg {...props} />;
});
