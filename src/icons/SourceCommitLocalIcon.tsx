import React, { FC, memo } from 'react';
import SourceCommitLocalSvg from '../svg/source-commit-local.svg';

export interface ISourceCommitLocalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SourceCommitLocalIcon: FC<ISourceCommitLocalIconProps> = memo(props => {
  return <SourceCommitLocalSvg {...props} />;
});
