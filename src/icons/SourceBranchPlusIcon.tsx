import React, { FC, memo } from 'react';
import SourceBranchPlusSvg from '../svg/source-branch-plus.svg';

export interface ISourceBranchPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SourceBranchPlusIcon: FC<ISourceBranchPlusIconProps> = memo(props => {
  return <SourceBranchPlusSvg {...props} />;
});
