import React, { FC, memo } from 'react';
import ThumbUpOutlineSvg from '../svg/thumb-up-outline.svg';

export interface IThumbUpOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThumbUpOutlineIcon: FC<IThumbUpOutlineIconProps> = memo(props => {
  return <ThumbUpOutlineSvg {...props} />;
});
