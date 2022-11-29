import React, { FC, memo } from 'react';
import ThumbsUpDownSvg from '../svg/thumbs-up-down.svg';

export interface IThumbsUpDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThumbsUpDownIcon: FC<IThumbsUpDownIconProps> = memo(props => {
  return <ThumbsUpDownSvg {...props} />;
});
