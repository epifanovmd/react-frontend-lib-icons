import React, { FC, memo } from 'react';
import HeadSyncSvg from '../svg/head-sync.svg';

export interface IHeadSyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadSyncIcon: FC<IHeadSyncIconProps> = memo(props => {
  return <HeadSyncSvg {...props} />;
});
