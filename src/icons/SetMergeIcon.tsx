import React, { FC, memo } from 'react';
import SetMergeSvg from '../svg/set-merge.svg';

export interface ISetMergeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SetMergeIcon: FC<ISetMergeIconProps> = memo(props => {
  return <SetMergeSvg {...props} />;
});
