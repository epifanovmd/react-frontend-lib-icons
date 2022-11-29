import React, { FC, memo } from 'react';
import SnapchatSvg from '../svg/snapchat.svg';

export interface ISnapchatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SnapchatIcon: FC<ISnapchatIconProps> = memo(props => {
  return <SnapchatSvg {...props} />;
});
