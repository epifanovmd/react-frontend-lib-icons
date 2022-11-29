import React, { FC, memo } from 'react';
import GroupSvg from '../svg/group.svg';

export interface IGroupIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GroupIcon: FC<IGroupIconProps> = memo(props => {
  return <GroupSvg {...props} />;
});
