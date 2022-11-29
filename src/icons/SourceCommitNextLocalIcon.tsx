import React, { FC, memo } from 'react';
import SourceCommitNextLocalSvg from '../svg/source-commit-next-local.svg';

export interface ISourceCommitNextLocalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SourceCommitNextLocalIcon: FC<ISourceCommitNextLocalIconProps> = memo(props => {
  return <SourceCommitNextLocalSvg {...props} />;
});
