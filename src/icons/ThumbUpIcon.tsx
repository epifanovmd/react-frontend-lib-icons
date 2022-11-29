import React, { FC, memo } from 'react';
import ThumbUpSvg from '../svg/thumb-up.svg';

export interface IThumbUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThumbUpIcon: FC<IThumbUpIconProps> = memo(props => {
  return <ThumbUpSvg {...props} />;
});
