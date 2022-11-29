import React, { FC, memo } from 'react';
import SourceCommitEndLocalSvg from '../svg/source-commit-end-local.svg';

export interface ISourceCommitEndLocalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SourceCommitEndLocalIcon: FC<ISourceCommitEndLocalIconProps> = memo(props => {
  return <SourceCommitEndLocalSvg {...props} />;
});
