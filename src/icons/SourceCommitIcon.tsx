import React, { FC, memo } from 'react';
import SourceCommitSvg from '../svg/source-commit.svg';

export interface ISourceCommitIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SourceCommitIcon: FC<ISourceCommitIconProps> = memo(props => {
  return <SourceCommitSvg {...props} />;
});
