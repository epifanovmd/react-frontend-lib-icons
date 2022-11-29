import React, { FC, memo } from 'react';
import CollageSvg from '../svg/collage.svg';

export interface ICollageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CollageIcon: FC<ICollageIconProps> = memo(props => {
  return <CollageSvg {...props} />;
});
