import React, { FC, memo } from 'react';
import ProgressWrenchSvg from '../svg/progress-wrench.svg';

export interface IProgressWrenchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ProgressWrenchIcon: FC<IProgressWrenchIconProps> = memo(props => {
  return <ProgressWrenchSvg {...props} />;
});
