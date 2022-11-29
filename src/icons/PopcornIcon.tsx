import React, { FC, memo } from 'react';
import PopcornSvg from '../svg/popcorn.svg';

export interface IPopcornIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PopcornIcon: FC<IPopcornIconProps> = memo(props => {
  return <PopcornSvg {...props} />;
});
