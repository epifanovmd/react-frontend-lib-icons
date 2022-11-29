import React, { FC, memo } from 'react';
import SourceBranchSyncSvg from '../svg/source-branch-sync.svg';

export interface ISourceBranchSyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SourceBranchSyncIcon: FC<ISourceBranchSyncIconProps> = memo(props => {
  return <SourceBranchSyncSvg {...props} />;
});
