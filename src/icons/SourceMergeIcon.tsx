import React, { FC, memo } from 'react';
import SourceMergeSvg from '../svg/source-merge.svg';

export interface ISourceMergeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SourceMergeIcon: FC<ISourceMergeIconProps> = memo(props => {
  return <SourceMergeSvg {...props} />;
});
