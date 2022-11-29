import React, { FC, memo } from 'react';
import ThumbDownOutlineSvg from '../svg/thumb-down-outline.svg';

export interface IThumbDownOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThumbDownOutlineIcon: FC<IThumbDownOutlineIconProps> = memo(props => {
  return <ThumbDownOutlineSvg {...props} />;
});
