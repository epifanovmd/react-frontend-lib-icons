import React, { FC, memo } from 'react';
import SourceBranchRefreshSvg from '../svg/source-branch-refresh.svg';

export interface ISourceBranchRefreshIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SourceBranchRefreshIcon: FC<ISourceBranchRefreshIconProps> = memo(props => {
  return <SourceBranchRefreshSvg {...props} />;
});
