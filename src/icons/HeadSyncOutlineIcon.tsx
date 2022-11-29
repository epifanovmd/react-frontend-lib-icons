import React, { FC, memo } from 'react';
import HeadSyncOutlineSvg from '../svg/head-sync-outline.svg';

export interface IHeadSyncOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadSyncOutlineIcon: FC<IHeadSyncOutlineIconProps> = memo(props => {
  return <HeadSyncOutlineSvg {...props} />;
});
