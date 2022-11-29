import React, { FC, memo } from 'react';
import SourceBranchMinusSvg from '../svg/source-branch-minus.svg';

export interface ISourceBranchMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SourceBranchMinusIcon: FC<ISourceBranchMinusIconProps> = memo(props => {
  return <SourceBranchMinusSvg {...props} />;
});
