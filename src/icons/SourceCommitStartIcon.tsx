import React, { FC, memo } from 'react';
import SourceCommitStartSvg from '../svg/source-commit-start.svg';

export interface ISourceCommitStartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SourceCommitStartIcon: FC<ISourceCommitStartIconProps> = memo(props => {
  return <SourceCommitStartSvg {...props} />;
});
