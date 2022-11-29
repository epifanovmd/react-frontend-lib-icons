import React, { FC, memo } from 'react';
import SourceCommitStartNextLocalSvg from '../svg/source-commit-start-next-local.svg';

export interface ISourceCommitStartNextLocalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SourceCommitStartNextLocalIcon: FC<ISourceCommitStartNextLocalIconProps> = memo(props => {
  return <SourceCommitStartNextLocalSvg {...props} />;
});
