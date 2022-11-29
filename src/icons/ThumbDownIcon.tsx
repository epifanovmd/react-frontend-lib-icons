import React, { FC, memo } from 'react';
import ThumbDownSvg from '../svg/thumb-down.svg';

export interface IThumbDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThumbDownIcon: FC<IThumbDownIconProps> = memo(props => {
  return <ThumbDownSvg {...props} />;
});
