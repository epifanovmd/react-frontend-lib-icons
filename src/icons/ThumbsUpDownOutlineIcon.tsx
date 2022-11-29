import React, { FC, memo } from 'react';
import ThumbsUpDownOutlineSvg from '../svg/thumbs-up-down-outline.svg';

export interface IThumbsUpDownOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThumbsUpDownOutlineIcon: FC<IThumbsUpDownOutlineIconProps> = memo(props => {
  return <ThumbsUpDownOutlineSvg {...props} />;
});
