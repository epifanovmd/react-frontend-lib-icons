import React, { FC, memo } from 'react';
import SourceBranchSvg from '../svg/source-branch.svg';

export interface ISourceBranchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SourceBranchIcon: FC<ISourceBranchIconProps> = memo(props => {
  return <SourceBranchSvg {...props} />;
});
