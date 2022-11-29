import React, { FC, memo } from 'react';
import DotsVerticalSvg from '../svg/dots-vertical.svg';

export interface IDotsVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DotsVerticalIcon: FC<IDotsVerticalIconProps> = memo(props => {
  return <DotsVerticalSvg {...props} />;
});
