import React, { FC, memo } from 'react';
import SourceCommitEndSvg from '../svg/source-commit-end.svg';

export interface ISourceCommitEndIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SourceCommitEndIcon: FC<ISourceCommitEndIconProps> = memo(props => {
  return <SourceCommitEndSvg {...props} />;
});
