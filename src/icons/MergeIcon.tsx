import React, { FC, memo } from 'react';
import MergeSvg from '../svg/merge.svg';

export interface IMergeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MergeIcon: FC<IMergeIconProps> = memo(props => {
  return <MergeSvg {...props} />;
});
