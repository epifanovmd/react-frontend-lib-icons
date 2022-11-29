import React, { FC, memo } from 'react';
import SourceBranchCheckSvg from '../svg/source-branch-check.svg';

export interface ISourceBranchCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SourceBranchCheckIcon: FC<ISourceBranchCheckIconProps> = memo(props => {
  return <SourceBranchCheckSvg {...props} />;
});
