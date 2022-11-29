import React, { FC, memo } from 'react';
import SourceBranchRemoveSvg from '../svg/source-branch-remove.svg';

export interface ISourceBranchRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SourceBranchRemoveIcon: FC<ISourceBranchRemoveIconProps> = memo(props => {
  return <SourceBranchRemoveSvg {...props} />;
});
