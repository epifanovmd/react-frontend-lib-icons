import React, { FC, memo } from 'react';
import ProgressPencilSvg from '../svg/progress-pencil.svg';

export interface IProgressPencilIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ProgressPencilIcon: FC<IProgressPencilIconProps> = memo(props => {
  return <ProgressPencilSvg {...props} />;
});
