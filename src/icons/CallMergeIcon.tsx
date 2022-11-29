import React, { FC, memo } from 'react';
import CallMergeSvg from '../svg/call-merge.svg';

export interface ICallMergeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CallMergeIcon: FC<ICallMergeIconProps> = memo(props => {
  return <CallMergeSvg {...props} />;
});
